import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import User from './User';
import Posts from './Posts';
import SignUp from './SignUp'
import NoMatch from './404'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <Header></Header>
              <Switch>

                <Route exact path="/" component={SignUp}/>
                <Route path="/user" component={User}/>
                <Route path="/posts" component={Posts}/>
                <Route component={NoMatch}/>

              </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;
