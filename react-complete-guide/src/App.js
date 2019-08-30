import React from 'react';
import './App.css';
import {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {'username': 'Mike'},
      {'username': 'Brichko'},
      {'username': 'Alexandrovich'}
    ]
  }

  changeState = (event) => {
    this.setState({
      usernames: [
        {'username': event.target.value},
        {'username': 'Alexandrovich'},
        {'username': 'Brichko'}
      ]
    });
  }

  render () { 
    return (
    <div>
      <UserInput changed={this.changeState} state={this.state}></UserInput>
      <UserOutput username={this.state.usernames[0].username}></UserOutput>
      <UserOutput username={this.state.usernames[1].username}></UserOutput>
      <UserOutput username={this.state.usernames[2].username}></UserOutput>
    </div>
    )
  };
}

export default App;
