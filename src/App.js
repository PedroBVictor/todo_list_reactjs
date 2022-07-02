import { useEffect, useState } from "react";
import { FormComp } from "./components/form";
import { HeaderComp } from "./components/header";
import { ListComp } from "./components/ListItem";

// Force save todo localStorage
const getLocalTodos = () => {
  const updateTodos = localStorage.getItem('todos');

  if (updateTodos) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
}

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getLocalTodos());

  const handleDelete = (id) => {
    const listTemp = [...todoList];
    listTemp.splice(id, 1);
    setTodoList(listTemp);
  }

  // Saved todos in LS
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);


  return (
    <>
      <div className="todo-app">
        <HeaderComp
          list={todoList}
        />
        <FormComp
          todo={todo}
          setTodo={setTodo}
          list={todoList}
          setList={setTodoList}
        />
        <ListComp
          list={todoList}
          handleDelete={handleDelete}
        // handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
