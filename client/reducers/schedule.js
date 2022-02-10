import { SET_SCHEDULE } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHEDULE:
      return action.schedule
    default:
      return state
  }
}

export default reducer
