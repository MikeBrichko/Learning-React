import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Jeff", age: "42"},
      {name: "Lacile", age: "73"},
      {name: "Todd", age: "13"}
    ]
  };

  clickHandler = (name) => {
    console.log("was clicked");
    this.setState({
      persons: [
        {name: name, age: "42"},
        {name: "Lacile", age: "73"},
        {name: "Todd", age: "13"}
      ],
      troll: "I am a troll!"
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: "42"},
        {name: "Lacile", age: "73"},
        {name: "Todd", age: "13"}
      ],
      troll: "I am a troll!"
    });
  }

  render () {
    return (
      <div className="App">
      <h1>I am a react header hehehe</h1>
      <button onClick={this.clickHandler.bind(this, "Maxwell")}>Press this button</button>
      <Person
        changed={this.nameChangedHandler}
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={() => this.clickHandler("Martin")}>{this.state.troll}</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
    )
  };
}

export default App;
