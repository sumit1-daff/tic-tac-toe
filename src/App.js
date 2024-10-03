
import React, { Component } from 'react';

import './App.css';
import Board from './TicTacToeGame/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1 className='heading'>WELCOME TO TIC TAC TOE</h1>
       <Board/>
      </div>
    );
  }
}

export default App;
