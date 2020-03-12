import axios from "../../utils/axios"
import { toast } from "react-toastify"
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
} from "./actionTypes"

const options = {
  type: toast.TYPE.SUCCESS,
  hideProgressBar: true,
  position: toast.POSITION.TOP_CENTER,
  pauseOnHover: true,
}

export const fetchTodoList = () => dispatch => {
  dispatch(fetchTodoListStart())
  axios
    .get("/todos")
    .then(response => {
      dispatch(fetchTodoListSuccess(response.data))
    })
    .catch(err => {
      toast.error(err.message)
      dispatch(fetchTodoListFailed(err))
    })
}

export const fetchTodoListSuccess = list => ({
  type: FETCH_TODOLIST_SUCCESS,
  list,
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

export const addNewTodo = todo => ({
  type: "ADD_NEW_TODO",
  todo,
})

export const searchTodo = title => ({
  type: "SEARCH_TODO",
  title,
})

export const toggleCurrentTodo = id => ({
  type: "TOGGLE_TODO",
  id,
})

export const removeCurrentTodo = id => ({
  type: "REMOVE_TODO",
  id,
})

export const changeBtn = id => ({
  type: "CHANGE_BTN",
  id,
})

export const updateCurrentTodo = (id, title) => ({
  type: "UPDATE_TODO",
  id,
  title,
})
