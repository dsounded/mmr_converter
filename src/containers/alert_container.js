import React from 'react';
import { connect } from 'react-redux'

import { changePoints, changeRank } from '../actions';
import Alert from '../components/alert';

const mapStateToProps = state => {
  return {
    value: state.value,
    checked: state.checked
  }
}

const ChangeAlert = connect(mapStateToProps)(Alert);

export default ChangeAlert;
