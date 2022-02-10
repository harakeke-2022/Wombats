import { getSchedule, addPerformer } from '../apis/index'

export const SET_SCHEDULE = 'SET_SCHEDULE'

export function setSchedule (schedule) {
  return {
    type: SET_SCHEDULE,
    schedule
  }
}

export function fetchSchedule () {
  return dispatch => {
    return getSchedule()
      .then(schedule => {
        dispatch(setSchedule(schedule))
        return null
      })
  }
}

export function postPerformer (newPerformer) {
  return addPerformer(newPerformer)
    .then(() => {
      // get a fresh list from the server
      return getSchedule()
    })
    .then(updatedList => {
    // then update to the global state
      return null
    })
}
