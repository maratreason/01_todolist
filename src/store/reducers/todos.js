import update from "immutability-helper"

const initTodos = [
  { id: 1, title: "Learn React", done: false },
  { id: 2, title: "Learn Vue", done: true },
  { id: 3, title: "Learn Polymer", done: false },
]

const initialState = {
  origin: initTodos,
  filtered: initTodos,
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return {
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
