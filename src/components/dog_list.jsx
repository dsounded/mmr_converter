import React from 'react';
import { removeDog, editDog } from '../actions/dog_actions';
import DogEditBox from '../components/dog_edit_box'

export default class DogList extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({type: 'FETCH_DOGS'});
  }

  render = () => {
    const { dispatch, shouldShow } = this.props;
    if (!shouldShow)
      return null;
    return (
      <ul>
        {
          this.props.records.map(record =>
            <li key={record.text}>
              {record.isInput ? <DogEditBox dispatch={dispatch} initialValue={record.text} value={record.newText}/> : record.text}
              <a href='#' className="dog-link" onClick={e => dispatch(removeDog(record.text))}>Delete</a>
              {!record.isInput && <a href='#' className="dog-link" onClick={e => dispatch(editDog(record.text))}>Edit</a>}
            </li>
          )
        }
      </ul>
    )
  }
}
