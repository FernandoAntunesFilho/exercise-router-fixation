import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path='/' component={Home} />
        <a href='/about'>About</a>
        <a href='/users'>Users</a>
      </BrowserRouter>
    );
  }
}

export default App;