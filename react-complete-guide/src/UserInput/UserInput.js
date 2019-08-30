import React from 'react';

const UserInput = (props) => {
    return (
    <div>
        <input onChange={props.changed} value={props.state.usernames[0].username}/>
    </div>
    )
};

export default UserInput;