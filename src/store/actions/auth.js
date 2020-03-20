import { toast } from "react-toastify"
import axios from "../../utils/axios"

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  CHECK_TOKEN,
} from "./actionTypes"

const options = {
  type: toast.TYPE.SUCCESS,
  hideProgressBar: true,
  position: toast.POSITION.TOP_CENTER,
  pauseOnHover: true,
}

export const logout = () => {
  window.localStorage.removeItem("token")
  return {
    type: LOGOUT,
  }
}

export const checkToken = () => {
  const token = window.localStorage.getItem("token")
  return {
    type: CHECK_TOKEN,
    token,
  }
}

// Auth Login
export const login = (email, password) => dispatch => {
  dispatch(loginStart())

  axios
    .post(
      "/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    )
    .then(response => {
      window.localStorage.setItem("token", response.data.accessToken)
      dispatch(loginSuccess(response.data.accessToken))
      toast.success("Authorization successful", options)
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(loginFailed(err))
    })
}

export const loginStart = () => ({
  type: LOGIN_START,
})

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
})

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error,
})
