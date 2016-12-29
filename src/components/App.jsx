import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router'

import Header from './Header';
import LeftDrawer from './LeftDrawer';
import BottomNav from './BottomNav';
import store from '../store';
import { listenToAuth } from '../actions/auth';

const propTypes = {
  children: PropTypes.object.isRequired,
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {open: false};
  }

  componentDidMount() {
    store.dispatch(listenToAuth());
  }

  handleMenuTap = () => this.setState({open: !this.state.open});

  handleNavigate = (path) => {
    this.setState({open: false});
    browserHistory.push(path);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header onLeftIconButtonTouchTap={this.handleMenuTap}  />
          <LeftDrawer open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            handleNavigate={this.handleNavigate}
          />
          {this.props.children}
          <BottomNav
            handleNavigate={this.handleNavigate}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = propTypes;
export default App;
