import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CHECK_TOKEN,
  LOGOUT,
} from "../actions/actionTypes"

const initialState = {
  loadingGet: false,
  error: null,
  token: null,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_TOKEN:
      return {
        ...state,
        token: action.token,
      }

    case LOGOUT:
      return {
        ...state,
        token: null,
      }
    case LOGIN_START:
      return {
        ...state,
        loadingGet: true,
        error: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loadingGet: false,
      }

    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        loadingGet: false,
      }

    default:
      return state
  }
}
