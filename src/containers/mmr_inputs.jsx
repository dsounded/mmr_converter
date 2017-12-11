import React from 'react';
import { connect } from 'react-redux'

import { changePoints, changeRank } from '../actions';

let MMRInputs = ({ dispatch, showPlus, points, rank }) => {
  return (
    <div>
      MMR
      <input type="text" value={points} onChange={e => dispatch(changePoints(e.target.value))}/> {showPlus ? '+' : ''}
      <br />
      Rank
      <select onChange={e => dispatch(changeRank(e.target.value))} value={rank}>
        <option value=""></option>
        <option value="Herald">Herald</option>
        <option value="Guardian">Guardian</option>
        <option value="Crusader">Guardian</option>
        <option value="Archon">Archon</option>
        <option value="Legend">Legend</option>
        <option value="Ancient">Ancient</option>
        <option value="Divine">Divine</option>
      </select>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    showPlus: !state.inputting,
    points: state.points,
    rank: state.rank
  }
}

const ChangeMMRInputs = connect(mapStateToProps)(MMRInputs);

export default ChangeMMRInputs;
