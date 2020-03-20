import { toast } from "react-toastify"
import axios from "../../utils/axios"
import { store } from "../../index"

import {
  FETCH_TODOLIST_SUCCESS,
  FETCH_TODOLIST_FAILED,
  FETCH_TODOLIST_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  ADD_TODO_START,
  REMOVE_TODO_START,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILED,
  TOGGLE_TODO_START,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILED,
  UPDATE_TODO_START,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  FILTER_TODO_START,
  FILTER_TODO_FAILED,
  FILTER_TODO_SUCCESS,
  SEARCH_TODO_START,
  SEARCH_TODO_SUCCESS,
  SEARCH_TODO_FAILED,
  CHANGE_GET_TODO_PARAMS,
} from "./actionTypes"

const options = {
  type: toast.TYPE.SUCCESS,
  hideProgressBar: true,
  position: toast.POSITION.TOP_CENTER,
  pauseOnHover: true,
}

// Filter Todo
export const filterTodo = done => dispatch => {
  dispatch(filterTodoStart())

  axios
    .get("/todos", {
      params: {
        done,
      },
    })
    .then(response => {
      dispatch(filterTodoSuccess(response.data, done))
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(filterTodoFailed(err))
    })
}

export const filterTodoStart = () => ({
  type: FILTER_TODO_START,
})

export const filterTodoSuccess = (list, done) => ({
  type: FILTER_TODO_SUCCESS,
  list,
  done,
})

export const filterTodoFailed = error => ({
  type: FILTER_TODO_FAILED,
  error,
})

export const fetchTodoList = payload => dispatch => {
  dispatch(fetchTodoListStart())

  const [key] = [Object.keys(payload)]
  const state = store.getState()

  const updatedParams = {
    ...state.todos.filter,
    [key]: payload[key],
  }

  dispatch(changeGetTodoParams(updatedParams))

  axios
    .get("/todos", {
      params: updatedParams,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(response => {
      dispatch(fetchTodoListSuccess(response))
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(fetchTodoListFailed(err))
    })
}

export const changeGetTodoParams = payload => ({
  type: CHANGE_GET_TODO_PARAMS,
  payload,
})

export const fetchTodoListSuccess = list => ({
  type: FETCH_TODOLIST_SUCCESS,
  list: list.data,
  length: list.headers["x-total-count"],
})

export const fetchTodoListFailed = error => ({
  type: FETCH_TODOLIST_FAILED,
  error,
})

export const fetchTodoListStart = () => ({
  type: FETCH_TODOLIST_START,
})

/**
 * Add Todo
 */
export const addTodo = todo => dispatch => {
  dispatch(addTodotStart())
  axios
    .post("/todos", todo)
    .then(response => {
      dispatch(addTodoSuccess(response.data))
      toast.success("New Item was added successfully!", options)
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(addTodoFailed(err))
    })
}

export const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  todo,
})

export const addTodoFailed = error => ({
  type: ADD_TODO_FAILED,
  error,
})

export const addTodotStart = () => ({
  type: ADD_TODO_START,
})

/**
 * Remove Todo
 */
export const removeTodo = id => dispatch => {
  dispatch(removeTodoStart())
  axios
    .delete(`/todos/${id}`)
    .then(() => {
      dispatch(removeTodoSuccess(id))
      toast.success("The todo has been removed successfully!")
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(removeTodoFailed(err))
    })
}

export const removeTodoStart = () => ({
  type: REMOVE_TODO_START,
})

export const removeTodoSuccess = id => ({
  type: REMOVE_TODO_SUCCESS,
  id,
})

export const removeTodoFailed = error => ({
  type: REMOVE_TODO_FAILED,
  error,
})

/**
 * Toggle Todo
 */
export const toggleTodo = (id, done) => dispatch => {
  dispatch(toggleTodoStart())
  axios
    .patch(
      `/todos/${id}`,
      { done: !done },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    .then(response => {
      dispatch(toggleTodoSuccess(response.data.id, response.data))
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(toggleTodoFailed(err))
    })
}

export const toggleTodoStart = () => ({
  type: TOGGLE_TODO_START,
})

export const toggleTodoSuccess = (id, todo) => ({
  type: TOGGLE_TODO_SUCCESS,
  id,
  todo,
})

export const toggleTodoFailed = error => ({
  type: TOGGLE_TODO_FAILED,
  error,
})

/**
 * Update Todo
 */
export const updateTodo = (id, title) => dispatch => {
  dispatch(updateTodoStart())
  axios
    .patch(
      `/todos/${id}`,
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    .then(response => {
      dispatch(updateTodoSuccess(response.data.id, title))
      toast.success("The todo has been updated successfully!")
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(updateTodoFailed(err))
    })
}

export const updateTodoStart = () => ({
  type: UPDATE_TODO_START,
})

export const updateTodoSuccess = (id, title) => ({
  type: UPDATE_TODO_SUCCESS,
  id,
  title,
})

export const updateTodoFailed = error => ({
  type: UPDATE_TODO_FAILED,
  error,
})

/**
 * Search Todo
 */
export const searchTodo = title => dispatch => {
  dispatch(searchTodoStart())
  axios
    .get(`/todos?_start=0&_end=3&q=${title}`)
    .then(response => {
      dispatch(searchTodoSuccess(response.data))
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(searchTodoFailed(err))
    })
}

export const searchTodoStart = () => ({
  type: SEARCH_TODO_START,
})

export const searchTodoSuccess = (todos, length) => ({
  type: SEARCH_TODO_SUCCESS,
  todos,
  length,
})

export const searchTodoFailed = error => ({
  type: SEARCH_TODO_FAILED,
  error,
})
