import React from 'react';
// import Button from '../src/components/Button/Button';
// import MainComponent from '../src/components/Button/Button';
import './App.css';
import { thisExpression } from '@babel/types';

const reset = {
   //game=what keep track off, ''=how we keeping track of
  game: 'Choose Game Mode',
      randomNumber: null,
      currentGuess: '',
      guessNumber: 0
}

class App extends React.Component {
  constructor() {
    super();
    //able to access state through binding context
    this.standardGame = this.standardGame.bind(this);
    this.expertGame = this.expertGame.bind(this);
    this.display = this.display.bind(this);
    this.onUserInput = this.onUserInput.bind(this);
    this.onGuessSubmit = this.onGuessSubmit.bind(this);
    this.resetButton = this.resetButton.bind(this);
    //keep track of game
    this.state = {
     standardHighScore: null,
     expertHighScore: null,
     userMessage: "",
      ...reset
    };
  }

  standardGame() {
    console.log('standardGame',this.state.game);
    //copy of current state and replace it
    const num = Math.floor(Math.random() * Math.floor(11))+1;
    this.setState({
      game: 'standard',
      randomNumber: num,
    });
  };

  expertGame() {
    //copy of current state and replace it
    const num = Math.floor(Math.random() * Math.floor(101))+1;
    this.setState({
      game: 'expert',
      randomNumber: num,
    });
  };

  onUserInput(event) {
    //value user typing in
    console.log('onUserInput',event.target.value);
    let inputValue = event.target.value;
    this.setState({
      currentGuess: inputValue
    })
  }

  onGuessSubmit() {
    const targetGuess = this.state.randomNumber;
    const guessNumber = this.state.guessNumber;
    let newNum;
    newNum = guessNumber+1
    console.log('targetGuess', targetGuess);
    const currentGuess = parseInt(this.state.currentGuess, 10);
    this.setState({
      guessNumber: newNum
    });
    console.log('new number of guesses', newNum);
    //high,low logic
    if (currentGuess === targetGuess){
      this.setState({
        userMessage : "You are correct!"
      });
      if ((guessNumber < this.state.standardHighScore || this.state.standardHighScore === null) && this.state.game === "standard"){
        console.log('Congradulations! You have a new high score!')
        this.setState({
          standardHighScore : newNum
        });
      };
      if ((guessNumber < this.state.expertHighScore || this.state.expertHighScore === null) && this.state.game === "expert"){
        console.log('Congradulations! You have a new high score!')
        this.setState({
          expertHighScore : newNum
        });
      };
    } else if (currentGuess < targetGuess){
      this.setState({
        userMessage : "You are too low!"
      });
    } else if (currentGuess > targetGuess){
      this.setState({
        userMessage : "You are too high!"
      });
    }
  }

    resetButton() {
      this.setState({
        ...reset
      })
    }

  display() {
    const currentGameMode = this.state.game;
    console.log(currentGameMode);
    if (currentGameMode === 'Choose Game Mode') {
      return (
        <div>
           <h2>Start Game</h2>
            <button className="standardBtn" onClick={this.standardGame}>STANDARD</button>
            <button className="expertBtn" onClick={this.expertGame}>EXPERT</button>
        </div>
      )
    } else if (currentGameMode === 'standard') {
     // standard display
      return (
        <div>
          <h2>Standard Game</h2>
          <p>Guess a number 1-10</p>
          <label>Insert your guess</label>
          <input value={this.state.currentGuess} type="number" name="number" onChange={(event) => {this.onUserInput(event)}}/>
          <p>Number of Guesses: {this.state.guessNumber}</p>
          <p>{this.state.userMessage}</p>
          <button onClick={this.onGuessSubmit}>Submit</button>
          <button onClick={this.resetButton}>Reset</button>
        </div>
      )
    } else if (currentGameMode === 'expert'){
      //expert display
      return (
        <div>
          <h2>Expert Game</h2>
          <p>Guess a number 1-100</p>
          <label>Insert your guess</label>
          <input value={this.state.currentGuess} type="number" name="number" onChange={(event) => {this.onUserInput(event)}}/>
          <p>Number of Guesses: {this.state.guessNumber}</p>
          <p>{this.state.userMessage}</p>
          <button onClick={this.onGuessSubmit}>Submit</button>
          <button onClick={this.resetButton}>Reset</button>
        </div>
      )
    }

  }

  render() {
    return (
      <div className="App">
        <this.display />
      </div>
    );
  }
}

export default App;
