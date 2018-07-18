export const changePoints = (points) => {
  return {
    type: 'CHANGE_POINTS',
    points
  }
}

export const changeRank = (rank) => {
  return {
    type: 'CHANGE_RANK',
    rank
  }
}

export const clickAlert = (checked) => {
  return {
    type: 'CHANGE_ALERT',
    checked
  }
}

export const removeDog = (id) => {
  return {
    type: 'DOG_REMOVED',
    id
  }
}

export const editDog = (id) => {
  return {
    type: 'DOG_EDIT',
    id
  }
}

export const saveDog = (oldName, newName) => {
  return {
    type: 'DOG_UPDATE',
    oldName,
    newName
  }
}

export const changeDog = (oldName, currentName) => {
  return {
    type: 'DOG_CHANGE',
    oldName,
    currentName
  }
}
