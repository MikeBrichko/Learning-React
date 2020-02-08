import React from 'react'

const userInput = (props) => {
    return (
        <input onChange={props.change} value={props.username}></input>
    );
}

export default userInput;