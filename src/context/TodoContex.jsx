import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

export const TodoContext = createContext(null);

const initialState = {
  todos: [],
  inputValue: "",
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("state")) || initialState
  );

  useEffect(
    () => localStorage.setItem("state", JSON.stringify(state)),
    [state]
  );

  const value = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
