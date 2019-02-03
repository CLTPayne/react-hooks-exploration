import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <header className="hooks">
          <h1>Count with hooks</h1>
        </header>
        <div className="counter">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
