import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [ todo, setTodo ] = useState("");
  const [ todoList, setTodoList ] = useState([]);

  return (
    <TodoContext.Provider value={{}}>
      {children}
    </TodoContext.Provider>
  )
}