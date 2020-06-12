export const setTextFilter = (text = '') => ({
    type: 'CHANGE_TEXT',
    text
})

export const sortByDifficulty = (sortBy) => ({
    type: 'SORT_BY_DIFFICULTY',
    sortBy
})

export const sortByDate = (sortBy) => ({
    type: 'SORT_BY_DATE',
    sortBy
})

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
