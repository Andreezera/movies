import React from "react"
import './styles.scss'

export default ({title = "Menu"}) => {

    return (
        <header className="header-container">
            <p className="menu-title">{title}</p>
        </header>
    )
}