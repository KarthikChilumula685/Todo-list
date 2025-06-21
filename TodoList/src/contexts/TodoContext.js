import { createContext, useContext } from "react";

// Create the context
export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

// ✅ Export the Provider correctly
export const TodoProvider = TodoContext.Provider;

// ✅ Custom Hook
export const useTodo = () => {
  return useContext(TodoContext);
};
