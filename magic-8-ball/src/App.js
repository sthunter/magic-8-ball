import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eightball from './magic-8-ball';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        <Eightball/>
        </div>
      </div>
    );
  }
}

export default App;
