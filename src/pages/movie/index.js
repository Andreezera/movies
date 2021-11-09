import { call, put } from "redux-saga/effects"
import { createMsgs, connect } from "react-redux-tea"
import View from "./view"
import Movies from "../../services/movies"

const namespace = "movie"

const Msg = createMsgs(namespace, ["set", "submit", "load"])

const init = {
    id: null,
    movie: {}
}

const update = (model = init, msg) => {
    const { type, ...data } = msg
    switch (type) {
        case Msg.set.key:
            return { ...model, ...data }
        default:
            return model
    }
}

function* cmdLoad({idMovie}) {
    const resMovie = yield call(Movies.getMovieById, idMovie)    

    if (resMovie && !resMovie.error) {
        const resVideo = yield call(Movies.getMovieVideosById, idMovie)    
    
        if (resVideo && !resVideo.error && resVideo.results && resVideo.results.length > 0) 
            yield resMovie.videoKey = resVideo.results[0].key

        yield put(Msg.set({ movie: resMovie }))
    }
}

function* cmdSubmit() {

}

const cmd = [
    [Msg.submit, cmdSubmit],
    [Msg.load, cmdLoad]
]

const view = connect(namespace, Msg)(View)

const store = { namespace, update, cmd }

export default { store, view, Msg }
