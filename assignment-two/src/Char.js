import React from 'react'
import './char.css'

const char = (props) => {
    return (
        <div 
            className="box"
            onClick={props.click}>
           {props.letter}
        </div>
    )
}

export default char;