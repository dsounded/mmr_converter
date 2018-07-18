let defaultState = {
  checked: false,
  title: 'HeyHey Alert',
  value: 'POWPOW',
  records: []
}

const DogReducer = (state = defaultState, action) => {
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

export default DogReducer;
