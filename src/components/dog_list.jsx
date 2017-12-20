import React from 'react';


export default class DogList extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({type: 'FETCH_DOGS'});
  }

  render = () => {
    const { shouldShow } = this.props;
    if (!shouldShow)
      return null;
    return (
      <ul>
        {
          this.props.records.map(record => <li key={record}>{record}</li>)
        }
      </ul>
    )
  }
}
