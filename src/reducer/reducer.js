export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "HANDLE_INPUTS":
      console.log(payload);
      return { ...state, inputValue: payload };

    case "ADD_TODOS":
      return { ...state, todos: [...state.todos, payload], inputValue: "" };

    case "DELETE_TODO":
      const filteredArr = [...state.todos].filter(
        (todo) => todo.id !== payload
      );
      return { ...state, todos: filteredArr };

    case "COMPLETED_TODO":
      const updatedTodo = [...state.todos].map((todo) => {
        if (todo.id === payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos: updatedTodo };

    case "EDITED-TODO":
      console.log(payload);
      const editedTodo = [...state.todos].map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, text: payload.text };
        }
        return todo;
      });
      return { ...state, todos: editedTodo, inputValue: "" };

    default:
      return state;
  }
};
