import React, { Component } from 'react';
import AddBook from '../components/AddBook';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/add';


/*
export default class HomePage extends React.Component {
  render() {
    return (
      <AddBook />
    );
  }
}
*/

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
