import { connect } from 'react-redux'

import Alert from '../components/alert';

const mapStateToProps = state => {
  return {
    value: state.dogs.value,
    checked: state.dogs.checked
  }
}

const ChangeAlert = connect(mapStateToProps)(Alert);

export default ChangeAlert;
