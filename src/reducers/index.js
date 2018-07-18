import { mmrMap } from '../components/mmr_observer'

let defaultState = {
  points: null,
  rank: '',
  inputting: true,
  checked: false,
  title: 'HeyHey Alert',
  value: 'POWPOW',
  records: []
}

const appState = (state = defaultState, action) => {
  let points;
  let rank;

  switch (action.type) {
    case 'DOGS_FETCHED':
      const recordObjects = action.records.map(record => ({ text: record, isInput: false }))

      return {
        ...state,
        records: recordObjects
      }
    case 'DOG_REMOVED':
      const filteredRecords = state.records.filter(record => record.text != action.id)
      return {
        ...state,
        records: filteredRecords
      }
    case 'DOG_EDIT':
      const recordsWithEditBox = state.records.map(record =>
        record.text == action.id ? ({ isInput: true, text: record.text, newText: record.text }) : record)
      return {
          ...state,
          records: recordsWithEditBox
        }
    case 'DOG_CHANGE':
      const recordsWithEditBoxChanged = state.records.map(record =>
        record.text == action.oldName ? ({ isInput: true, text: record.text, newText: action.currentName }) : record)
      return {
          ...state,
          records: recordsWithEditBoxChanged
        }
    case 'DOG_UPDATE':
      const updatedRecords = state.records.map(record =>
        record.text == action.oldName ? ({ isInput: false, text: action.newName, newText: action.newName }) : record)
      return {
          ...state,
          records: updatedRecords
        }
    case 'CHANGE_POINTS':
      points = action.points;
      const titleKey = Object.keys(mmrMap).filter((mmrPoint, _) => parseInt(action.points) >= mmrPoint).pop();
      rank = points === '' ? '' : mmrMap[titleKey];
      return {
          ...state,
          points: points,
          rank: rank,
          inputting: true
        }
    case 'CHANGE_RANK':
      rank = action.rank;
      const values = Object.values(mmrMap);
      const pointsIndex = values.indexOf(rank);
      points = Object.keys(mmrMap)[pointsIndex];
      points = rank === '' ? '' : points;

      return {
          ...state,
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
