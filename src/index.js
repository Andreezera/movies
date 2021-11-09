import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

import MainStore from "./main-store"
import App from "./App"
import './style.scss'

const root = () => (
    <Provider store={MainStore.store}>
        <ConnectedRouter history={MainStore.history}>
            <App />
        </ConnectedRouter>
    </Provider>)

ReactDOM.render(root(), document.getElementById("root"))
