import React from 'react'

const validation = (props) => {
    let authenticate = null;
    if(props.length < 5)
        authenticate = <p>Text too short</p>;
    else
        authenticate = <p>Text long enough</p>;

    return(
        <div>
            <p>{props.length}</p>
            {authenticate}
        </div>
    )
}

export default validation;