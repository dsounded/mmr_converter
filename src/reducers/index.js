import { mmrMap } from '../components/mmr_observer'

let defaultState = {
  points: null,
  rank: '',
  inputting: true,
  checked: false,
  title: 'HeyHey Alert',
  value: 'POWPOW'
}

const appState = (state = defaultState, action) => {
  let points;
  let rank;

  switch (action.type) {
    case 'CHANGE_POINTS':
      points = action.points;
      const titleKey = Object.keys(mmrMap).filter((mmrPoint, _) => parseInt(action.points) >= mmrPoint).pop();
      rank = points == '' ? '' : mmrMap[titleKey];
      return {
          points: points,
          rank: rank,
          inputting: true
        }
    case 'CHANGE_RANK':
      rank = action.rank;
      const values = Object.values(mmrMap);
      const pointsIndex = values.indexOf(rank);
      points = Object.keys(mmrMap)[pointsIndex];
      points = rank == '' ? '' : points;

      return {
          points: points,
          rank: rank,
          inputting: false
        }
    case 'CHANGE_ALERT':
      const checked = action.checked;
      return {
          ...state,
          checked: checked
        }
    default:
      return state
  }
}

export default appState;
