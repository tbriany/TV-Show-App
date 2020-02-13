import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import Shows from './Components/Shows';
import UserProfile from './Components/UserProfile'
import ShowProfile from './Components/ShowProfile'
import AddShow from './Components/NewShowForm'
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedInUserID: 5
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div className="nav-wrapper">
            <Link className="left hide-on-med-and-down" to="/"> TV Watchlist App</Link>

            <ul className="right hide-on-med-and-down">
              <li><Link to="/users">Users</Link></li>

              <li><Link to="/shows">Shows</Link></li>

              <li><Link to="/addShow">Add Show</Link></li>

              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>

        <div className="body">
          <Switch>

            <Route path="/shows/:id/user/:userId"
              render={(props) => <ShowProfile {...props} loggedInUserID={this.state.loggedInUserID} />}
            >
            </Route>

            <Route path="/users/:id" component={UserProfile} />

            <Route exact path="/users" component={Users} />

            <Route path="/shows" component={Shows} />

            <Route path="/addShow"
              render={(props) => <AddShow {...props} loggedInUserID={this.state.loggedInUserID} />}
            >
            </Route>

            <Route path="/about" component={About} />

            <Route exact path="/" component={Home} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
