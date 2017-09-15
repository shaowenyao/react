import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const websiteName = "ShaowenYao";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2> {websiteName} </h2>
      </div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <a href="#" id="about">About</a>
      </div>
      );
  }
}

export default App;
