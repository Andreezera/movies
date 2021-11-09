import React from "react"
import './styles.scss'

export default ({ average, fontSize="25px", style }) => {
    return (
        <div className="circle-average" style={style}>
            <div className="vote-average" style={{fontSize}}>
                <p>{`${average*10}%`}</p>
            </div>
        </div>
    )
}