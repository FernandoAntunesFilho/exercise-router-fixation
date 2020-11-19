import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/users/:id' render={ (props) => <Users {...props} greetingMessage='Good Morning' /> } />
      </BrowserRouter>
    );
  }
}

export default App;