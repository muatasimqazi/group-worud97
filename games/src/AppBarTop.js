import React from 'react';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer';
import { Link } from 'react-router-dom';

class AppBarTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleDrawerOverlay = (open) => this.setState({ open: open });
  handleClick() {
    if (this.props.history) {
      this.props.history.push('/')
    }
  }
  render() {
    return (

      <div className="navbar">
        <AppBar
          title={<Link to="/">Play Games</Link>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => this.handleToggle()}
        />
        <LeftDrawer open={this.state.open} handleToggle={() => this.handleToggle()} handleDrawerOverlay={() => this.handleDrawerOverlay()} />
      </div>
    );

  }
}


export default AppBarTop;