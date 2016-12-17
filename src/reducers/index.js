import {TOGGLE_NICE} from '../actions'

const initialState = {
  nice: true
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NICE:
      return {...state, nice: !state.nice}
    default:
      return state
  }
}

export default appReducer
