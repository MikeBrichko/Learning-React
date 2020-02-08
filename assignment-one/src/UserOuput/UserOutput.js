import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="output" onClick={props.click}>
            <p>The username is as below</p>
            <p>{props.username}</p>
        </div>
    );
}

export default userOutput;