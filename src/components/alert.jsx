import React from 'react';

import { clickAlert } from '../actions'

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
