import { getSchedule, addPerformer } from '../apis/index'

export const SET_SCHEDULE = 'SET_SCHEDULE'
export const ADD_NEW = 'ADD_NEW'

export function setSchedule (schedule) {
  return {
    type: SET_SCHEDULE,
    schedule
  }
}

export function fetchSchedule () {
  return (dispatch) => {
    return getSchedule()
      .then(schedule => {
        console.log(schedule)
        dispatch(setSchedule(schedule))
        return null
      })
  }
}

export function postPerformer (newPerformer) {
  return (dispatch) => {
    return addPerformer(newPerformer)
      .then(() => {
      // get a fresh list from the server
        return getSchedule()
      })
      .then(updateList => {
        // then update to the global state
        dispatch(setSchedule(updateList))
        return null
      })

      .catch(err => console.error(err))
  }
}
