import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eightball from './magic-8-ball';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Enter your question for the Magic 8 Ball</h2>
        </div>
        <div className="App-intro">
          
        <Eightball/>
        </div>
      </div>
    );
  }
}

export default App;
