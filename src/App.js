import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <header className="hooks">
          <h1>Form with hooks and memo</h1>
        </header>
        <div className="form">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
