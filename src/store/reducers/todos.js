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
  FILTER_TODO_SUCCESS,
  FILTER_TODO_FAILED,
  FILTER_TODO_START,
  SEARCH_TODO_START,
  SEARCH_TODO_SUCCESS,
  SEARCH_TODO_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/actionTypes"

const initTodos = []

const initialState = {
  origin: initTodos,
  filtered: initTodos,
  loadingGet: false,
  loadingPost: false,
  error: null,
  currentPage: 1,
  limit: 3,
  todosLength: 0,
  token: "",
  filter: {
    title: null,
    // _page: 1,
    // _limit: 3,
    done: null,
  },
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
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

    case FILTER_TODO_START:
      return {
        ...state,
        loadingGet: true,
        error: null,
      }
    case FILTER_TODO_SUCCESS:
      return {
        ...state,
        origin: action.list,
        done: action.done,
        loadingGet: false,
      }
    case FILTER_TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loadingGet: false,
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
        todosLength: action.length,
        loadingGet: false,
      }
    case "CHANGE_GET_TODO_PARAMS":
      console.log("action.payload", action.payload)
      return {
        ...state,
        filter: action.payload,
        loadingGet: false,
      }

    case FETCH_TODOLIST_FAILED:
      return {
        ...state,
        error: action.error,
        loadingGet: false,
      }

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
        origin: state.origin.map(todo => {
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
        origin: state.origin.map(todo => {
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

    case SEARCH_TODO_START:
      return {
        ...state,
        loadingGet: true,
        error: null,
      }

    case SEARCH_TODO_SUCCESS:
      return {
        ...state,
        origin: action.todos,
        todosLength: action.length,
        search: action.search,
        loadingGet: false,
      }

    case SEARCH_TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loadingGet: false,
      }

    default:
      return state
  }
}
