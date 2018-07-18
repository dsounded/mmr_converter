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
