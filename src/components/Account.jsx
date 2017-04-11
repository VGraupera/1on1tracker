import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/header';

class Account extends Component {
  componentDidMount() {
    this.props.setText('My Account');
  }

  render() {
    return (
      <div className="container account">
        <h1>{this.props.displayName}</h1>
        <p>{this.props.email}</p>
        <img src={this.props.photoURL} />
      </div>
    );
  }
}

Account.propTypes = {
  setText: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    displayName: state.auth.displayName,
    email: state.auth.email,
    photoURL: state.auth.photoURL,
  };
};

export default connect(mapStateToProps, { setText: headerActions.setText })(Account);
