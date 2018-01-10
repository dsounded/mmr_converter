import React from 'react';
import { connect } from 'react-redux'

import DogLis from '../components/dog_list';

const stateToProps = state => ({
  records: state.records,
  shouldShow: state.checked
});

const DogListContainer = connect(stateToProps)(DogLis);

export default DogListContainer;
