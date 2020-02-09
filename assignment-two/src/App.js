import React, { Component } from 'react';
import './App.css';
import Validation from './Validation'
import Char from './Char'

class App extends Component {
  state = {
    word: "",
    wordList: "".split(""),
    wordLength: ""
  }

  inputHandler = (event) => {
    const length = event.target.value.length;
    const list = event.target.value.split("");
    this.setState({
      word: event.target.value,
      wordList: list,
      wordLength: length
    })
  }

  deleteCharacterHandler = (index) =>{
    console.log("Delete was clicked " + index);
    const newList = [...this.state.word];
    newList.splice(index, 1);
    const newWord = [...newList].join("");
    this.setState({
      word: newWord,
      wordLength: newWord.length,
      wordList: newList
    })
  }

  render (){
    return (
      <div className="App">
        <input type="test" onChange={this.inputHandler} value={this.state.word}></input>
        <Validation length={this.state.wordLength} ></Validation>
        {this.state.wordList.map((c,index) => {
          return (
            <Char 
              letter={c}
              key={index}
              click={() => this.deleteCharacterHandler(index)}></Char>
          )
        })}
    </div>
    )
  }
}

export default App;
