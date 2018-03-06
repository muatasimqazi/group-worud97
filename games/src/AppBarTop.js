import React from 'react';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer';

class AppBarTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleDrawerOverlay = (open) => this.setState({ open: open });

  render() {
    return (

      <div>
        <AppBar
          title="Play Games"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => this.handleToggle()}
        />
        <LeftDrawer open={this.state.open} handleToggle={() => this.handleToggle()} handleDrawerOverlay={() => this.handleDrawerOverlay()}/>
      </div>
    );

  }
}


export default AppBarTop;