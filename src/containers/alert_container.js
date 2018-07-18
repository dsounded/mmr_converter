import { connect } from 'react-redux'

import Alert from '../components/alert';

const mapStateToProps = state => {
  return {
    value: state.value,
    checked: state.checked
  }
}

const ChangeAlert = connect(mapStateToProps)(Alert);

export default ChangeAlert;
