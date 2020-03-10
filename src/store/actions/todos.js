export const addNewTodo = todo => ({
  type: "ADD_NEW_TODO",
  todo,
})

export const searchTodo = title => ({
  type: "SEARCH_TODO",
  title,
})

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id,
})

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id,
})

export const changeBtn = id => ({
  type: "CHANGE_BTN",
  id,
})

export const updateTodo = (id, title) => ({
  type: "UPDATE_TODO",
  id,
  title,
})
