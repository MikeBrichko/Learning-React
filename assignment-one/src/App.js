import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOuput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "Mike"
  }

  clickHandler = (event) =>{
    console.log("ClickHandler was clicked");
    this.setState({
      username: "Bart"
    });
  }

  changeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render () {
    return (
    <div className="App" style={{border: "1px solid black"}}>
      <UserOutput 
        username={this.state.username} 
        click={this.clickHandler}></UserOutput>
      <UserInput 
        change={this.changeHandler} 
        username={this.state.username}></UserInput>
    </div>
    )
  };
}

export default App;