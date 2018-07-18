import { connect } from 'react-redux'

import DogLis from '../components/dog_list';

const stateToProps = state => ({
  records: state.dogs.records,
  shouldShow: state.dogs.checked
});

const DogListContainer = connect(stateToProps)(DogLis);

export default DogListContainer;
