import React, { Component } from 'react';
// import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/users'>Users</a>
      </BrowserRouter>
    );
  }
}

export default App;