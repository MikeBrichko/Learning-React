import React from 'react';
import Card from "@material-ui/core/Card"
import './Person.css'

const person = (props) => {
return (
    <Card className="card">
        <h1 onClick={props.click}>My name is {props.name} and I am {props.age} years old</h1>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </Card>
    )
}

export default person;