import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import Shows from './Components/Shows';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedInUser: ''
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">

          <Link to="/">
            <h1>
              TV Watchlist App
          </h1>
          </Link>

          <Link to="/users">Users</Link>

          <Link to="/shows">Shows</Link>

          <Link to="/about">About</Link>
        </nav>

        <div className="body">
          <Switch>

            <Route path="/shows" >
              <Shows />
            </Route>

            <Route path="/users" >
              <Users />
            </Route>

            <Route path="/about" >
              <About />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
