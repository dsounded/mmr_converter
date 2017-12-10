import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

<div id="root"></div>

const mmrMap = { 0: 'Herald', 840: 'Guardian', 1680: 'Crusader', 2520: 'Archon', 3360: 'Legend', 4200: 'Ancient',
                5040: 'Divine' }

const Labels = {
  TopLable(props) {
    return (
      <h1>
        {props.title}
      </h1>
    )
  }
};

class MMRObserver extends React.Component {
  constructor(props) {
    super(props);
    this.handlePoints = this.handlePoints.bind(this)
    this.handleRank = this.handleRank.bind(this)
    this.state = {
      points: null,
      selectValue: '',
      inputting: true
    };
  }

  handlePoints(value) {
    this.setState({ points: value, inputting: true });
  }

  handleRank(value) {
    this.setState({ selectValue: value, inputting: false });
  }

  render() {
    let points = this.state.points;
    let title = this.state.selectValue;
    let showPlus = !this.state.inputting;

    if (this.state.inputting) {
      points = this.state.points;
      const titleKey = Object.keys(mmrMap).filter((mmrPoint, _) => parseInt(this.state.points) >= mmrPoint).pop();

      title = this.state.points == '' ? '' : mmrMap[titleKey];
    } else {
      title = this.state.selectValue;
      const values = Object.values(mmrMap);
      const pointsIndex = values.indexOf(title);
      points = Object.keys(mmrMap)[pointsIndex];
      points = title == '' ? '' : points;
    }

    return (
      <div>
        <Labels.TopLable title ='MMR/Rank converter' />
        <Label showPlus={showPlus} handleParentInput={this.handlePoints} handleParentSelection={this.handleRank} rankValue={title} pointsValue={points}/>
      </div>
    )
  }
}

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleInput(e) {
    this.props.handleParentInput(e.target.value)
  }

  handleSelection(e) {
    this.props.handleParentSelection(e.target.value)
  }

  render() {
    return (
      <div>
        MMR
        <input type="text" value={this.props.pointsValue} onChange={this.handleInput}/> {this.props.showPlus ? '+' : ''}
        <br />
        Rank
        <select value={this.props.rankValue} onChange={this.handleSelection}>
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
}

ReactDOM.render(
  <MMRObserver />,
  document.getElementById('root')
)