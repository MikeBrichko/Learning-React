import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "jnasod", name: "Jeff", age: "42" },
      { id: "flds", name: "Lacile", age: "73" },
      { id: "cmsiodj", name: "Todd", age: "13" }
    ],
    changePersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  changePersonsHandler = () => {
    const doesShow = this.state.changePersons;
    this.setState({
      changePersons: !doesShow
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  render() {
    let persons = null;

    if (this.state.changePersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
            ></Person>
            )
          })}
          </div>
      )
    }

    return (
      <div className="App">
        <h1>I am a react header hehehe</h1>
        <button onClick={this.changePersonsHandler}>Press this button</button>
        {persons}
      </div>
    )
  };
}

export default App;
