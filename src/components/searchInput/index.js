import React from "react"
import './styles.scss'

export default ({ id, placeholder, value, onChange, type="text", style}) => {

    return (
        <div className="input-container" style={style}>
            <input 
                placeholder={placeholder}
                type={type}
                id={id} 
                value={value} 
                onChange={e => onChange(e)} />
        </div>
    )
}