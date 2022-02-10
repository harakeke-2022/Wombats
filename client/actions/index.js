import { getSchedule } from '../apis/Schedule'

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
