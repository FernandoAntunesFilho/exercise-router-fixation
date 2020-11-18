import React, { Component } from 'react';
import Home from './Home';
import About from './About'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
        <a href='/users'>Users</a>
      </BrowserRouter>
    );
  }
}

export default App;