import { call, put } from "redux-saga/effects"
import { createMsgs, connect } from "react-redux-tea"
import View from "./view"
import Movies from "../../services/movies"

const namespace = "home"

const Msg = createMsgs(namespace, ["set", "submit", "load"])

const init = {
    searchText: "",
    moviesList: [],
    genreList: []
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

function* cmdLoad() {
    let genreList = []

    const resGenre = yield call(Movies.getGenre)    
    if (resGenre && !resGenre.error)
        genreList = resGenre.genres

    const resMovies = yield call(Movies.getMovies)    
    if (resMovies && !resMovies.error) {
        resMovies.results.map(movie => {
            
            return movie.genre_list = movie.genre_ids.map(genreId => {
                return genreList.find(genre => genre.id === genreId).name
            })
        })

        yield put(Msg.set({ moviesList: resMovies.results }))
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
