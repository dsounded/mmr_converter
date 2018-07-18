import React from 'react';

import { clickAlert } from '../actions/dog_actions'

const Alert = ({ dispatch, checked, value }) => {
  return (
    <div>
      { checked &&
        alert(value)
      }
      <input type="checkbox" value={checked} onChange={e => dispatch(clickAlert(e.target.checked))} />
    </div>
  )
}

export default Alert;
