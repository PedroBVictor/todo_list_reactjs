import { useState } from "react";
import { FormComp } from "./components/form";
import { HeaderComp } from "./components/header";

function App() {
  const [ todo, setTodo ] = useState("");
  const [ todoList, setTodoList ] = useState([]);



  return (
    <>
      <HeaderComp />
      <FormComp
        todo={todo}
        setTodo={setTodo}
        list={todoList}
        setList={setTodoList}
      />
    </>
  );
}

export default App;
