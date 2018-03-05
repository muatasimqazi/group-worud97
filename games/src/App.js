//@ts-check
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepPurple500, amberA400 } from 'material-ui/styles/colors';
import LudoView from './components/Ludo/Ludo';
import GuessingGameView from './components/Guessing/GuessingGame';
import MainView from './Main'
import AppBarTop from './AppBarTop';
import { Container } from 'react-grid-system';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    accent1Color: '#ffa726',
    secondaryTextColor: '#000',
    alternateTextColor: '#FFF',
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBarTop />
          <Container>
            <Router>
              <Switch>
                <Route exact path={ROUTES.ludo} component={LudoView} />
                <Route path={ROUTES.guessing} component={GuessingGameView} />
                <Route path={ROUTES.home} component={MainView} />
                <Redirect to={ROUTES.home} />
              </Switch>
            </Router>
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
