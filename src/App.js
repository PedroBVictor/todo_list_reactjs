import { useState } from "react";
import { FormComp } from "./components/form";
import { HeaderComp } from "./components/header";
import { ListComp } from "./components/ListItem";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleDelete = (id) => {
    const listTemp = [...todoList];
    listTemp.splice(id, 1);
    setTodoList(listTemp);
  }

  // const handleEdit = (id, newValue) => {
  //   if(!newValue.trim()) {
  //     return console.log("Valor invalido")
  //   }
  //   setTodoList((e) => e.map((item) => item.id === id ? newValue : item));
  // }

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
