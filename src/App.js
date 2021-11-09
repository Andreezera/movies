import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import routes from './routes'

export default () => {
  return (
    <HashRouter>
      <ToastContainer hideProgressBar />
      <Switch>
        {routes.map((route, idx) => {
          return route.component ?
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => <route.component {...props} />
              } /> : <Redirect to="/" />
        })}
      </Switch>
    </HashRouter>
  )
}