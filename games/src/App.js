//@ts-check
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500, amberA400 } from 'material-ui/styles/colors';
import LudoView from './components/Ludo/Ludo';
import GuessingGameView from './components/Guessing/GuessingGame';
import MainView from './Main'
import AppBarTop from './AppBarTop';
import { Container } from 'react-grid-system';
import TetrisView from './components/Tetris/TetrisView';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
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
                <Route path={ROUTES.tetris} component={TetrisView} />
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
