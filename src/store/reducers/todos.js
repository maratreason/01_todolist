import update from "immutability-helper"
import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  FETCH_TODOLIST_START,
  FETCH_TODOLIST_SUCCESS,
  FETCH_TODOLIST_FAILED,
  REMOVE_TODO_START,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILED,
  TOGGLE_TODO_START,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILED,
  UPDATE_TODO_START,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
} from "../actions/actionTypes"

const initTodos = []

const initialState = {
  origin: initTodos,
  filtered: initTodos,
  loadingGet: false,
  loadingPost: false,
  error: null,
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      return {
        ...state,
        loadingPost: true,
        error: null,
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        origin: update(state.origin, { $push: [action.todo] }),
        filtered: update(state.filtered, { $push: [action.todo] }),
        loadingPost: false,
      }

    case ADD_TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loadingPost: false,
      }

    case REMOVE_TODO_START:
      return {
        ...state,
        loadingPost: true,
        error: null,
      }
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        filtered: state.filtered.filter(todo => todo.id !== action.id),
        origin: state.origin.filter(todo => todo.id !== action.id),
        loadingPost: false,
      }

    case REMOVE_TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loadingPost: false,
      }

    case TOGGLE_TODO_START:
      return {
        ...state,
        loadingPost: true,
        error: null,
      }
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        filtered: state.origin.map(todo => {
          if (todo.id === action.id) {
            todo.done = action.todo.done
          }
          return todo
        }),
        loadingPost: false,
      }

    case TOGGLE_TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loadingPost: false,
      }

    case UPDATE_TODO_START:
      return {
        ...state,
        loadingPost: true,
        error: null,
      }
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        filtered: state.origin.map(todo => {
          if (todo.id === action.id) {
            todo.title = action.title
          }
          return todo
        }),

        loadingPost: false,
      }

    case UPDATE_TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loadingPost: false,
      }

    case FETCH_TODOLIST_START:
      return {
        ...state,
        loadingGet: true,
        error: null,
      }
    case FETCH_TODOLIST_SUCCESS:
      return {
        ...state,
        origin: action.list,
        filtered: action.list,
        loadingGet: false,
      }

    case FETCH_TODOLIST_FAILED:
      return {
        ...state,
        error: action.error,
        loadingGet: false,
      }

    case "ADD_NEW_TODO":
      return {
        ...state,
        origin: update(state.origin, { $push: [action.todo] }),
        filtered: update(state.filtered, { $push: [action.todo] }),
      }
    case "SEARCH_TODO":
      return {
        ...state,
        filtered: state.origin.filter(todo =>
          todo.title.toLowerCase().includes(action.title.toLowerCase()),
        ),
      }
    case "TOGGLE_TODO":
      return {
        ...state,
        filtered: state.origin.map(todo => {
          if (todo.id === action.id) {
            todo.done = !todo.done
          }
          return todo
        }),
      }
    case "REMOVE_TODO":
      return {
        ...state,
        filtered: state.filtered.filter(todo => todo.id !== action.id),
        origin: state.origin.filter(todo => todo.id !== action.id),
        // filtered: update(state.filtered, {
        //   $splice: [[action.id, 1]],
        // }),
      }
    case "CHANGE_BTN":
      return {
        ...state,
        filtered:
          action.id !== "all"
            ? state.origin.filter(todo =>
                action.id === "completed" ? todo.done : !todo.done,
              )
            : state.origin,
      }
    case "UPDATE_TODO":
      return {
        ...state,
        filtered: state.origin.map(todo => {
          if (todo.id === action.id) {
            todo.title = action.title
          }
          return todo
        }),
      }

    default:
      return state
  }
}
