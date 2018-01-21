import {
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_FULFILLED,
  FETCH_WEATHER_REJECTED,
} from '../constants/actionTypes'

const initialState = {
  data: {},
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return {
        ...state,
        data: {},
        isFetching: true,
      }
    case FETCH_WEATHER_FULFILLED:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    case FETCH_WEATHER_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    default:
      return state
  }
}
