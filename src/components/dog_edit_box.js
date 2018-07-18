import React from 'react';
import { saveDog, changeDog } from '../actions/dog_actions'

const DogList = ({dispatch, value, initialValue}) => {
  return (
    <span>
      <input type="text" value={value} onChange={e => dispatch(changeDog(initialValue, e.target.value))} />
      <a href='#' onClick={e =>{dispatch(saveDog(initialValue, value))}}>Save</a>
    </span>
  )
}

export default DogList
