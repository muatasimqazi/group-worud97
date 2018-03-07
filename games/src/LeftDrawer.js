import React from 'react';
import Drawer from 'material-ui/Drawer';
import { Menu, MenuItem } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Divider } from 'material-ui'
import { Link } from 'react-router-dom';
import { ROUTES } from './constants';
export default class LeftDrawer extends React.Component {



  render() {
    return (
      <div>
        <Drawer open={this.props.open} docked={false}
          onRequestChange={(open) => this.props.handleDrawerOverlay(open)}>
          <Menu>
            <MenuItem containerElement={<Link to={ROUTES.ludo} />} onClick={this.props.handleToggle}>Ludo</MenuItem>
            <Divider />
            <MenuItem containerElement={<Link to={ROUTES.guessing} />} onClick={this.props.handleToggle}>Guessing Game</MenuItem>
            <Divider />
            <MenuItem containerElement={<a href="/group-worud97/games/tetris" />} onClick={this.props.handleToggle}>Tetris</MenuItem>
            <Divider />
            <MenuItem containerElement={<a href="/group-worud97/games/gameoflife" />} onClick={this.props.handleToggle}>Game of Life</MenuItem>
          </Menu>
        </Drawer>
      </div>
    );
  }
}