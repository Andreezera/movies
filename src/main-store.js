import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createHashHistory } from "history"
import { registerCmds, buildStores } from "react-redux-tea"

import Home from "./pages/home/"
import Movie from "./pages/movie/"

const history = createHashHistory()

const init = {}

const { cmds, reducers } = buildStores(
    { router: connectRouter(history) },
    [
        Home.store
    ,   Movie.store
    ]
)

const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    init,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
)
cmds.forEach((_, storeIndex) => sagaMiddleware.run(Array.isArray(_) ? registerCmds(_, storeIndex) : _))

export default { store, history }
