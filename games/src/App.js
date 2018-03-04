//@ts-check
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import LudoView from './components/Ludo/Ludo';
import PongView from './components/Pong/Pong';
import MainView from './Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.ludo} component={LudoView} />
          <Route path={ROUTES.pong} component={PongView} />
          <Route path={ROUTES.home} component={MainView} />
          <Redirect to={ROUTES.home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
