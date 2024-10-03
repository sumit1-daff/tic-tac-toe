
import React, { Component } from 'react';

import './App.css';
import Board from './TicTacToeGame/Board'

class App extends Component {
  render() {
    const player1 = prompt("Enter name of first player (X) : ");
    const player2 = prompt("Enter name of second player (O): ");
    return (
      <div className="App">
       <h1 className='heading'>WELCOME TO TIC TAC TOE</h1>
       <Board player1={player1} player2={player2}/>
      </div>
    );
  }
}

export default App;
