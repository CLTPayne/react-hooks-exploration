import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch';

class App extends Component {
  render() {
    return (
      <div>
        <header className="hooks">
          <h1>Stopwatch with hooks</h1>
        </header>
        <div className="stopwatch">
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
