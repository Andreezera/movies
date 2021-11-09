import React from "react"
import Header from './header'
import './styles.scss'

export default ({ currentRoute, children }) => (<div>
    <Header title="Movies"/>
    <div className="body-container">
        {children}
    </div>
</div>)
