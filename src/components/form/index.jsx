import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/AllContext";


export const Form = styled.form`
  text-align: center;
  padding:0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
  
  width: 300px;

  background: #006eff;

  border-radius: 6px;
  input{
    outline: none;
    border: none;
    padding: 5px;
    width: 80%;
    border-radius: 4px;
  }
  button{
    width: 60%;
    border-radius: 4px;
    border: none;
    background: #01459e;
    color: #f2f2f2;
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
    transition: all .4s;
    &:hover{
      background: #083168;
      transition: all .4s;
    }
  }
`

export const FormComp = () => {
  // const { todo, setTodo, todoList, setTodoList } = useContext(TodoContext);
  const [ todo, setTodo ] = useState("");
  const [ todoList, setTodoList ] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const generateID = Math.random() * 100

    const newTodo = {
      id: generateID,
      title: todo
    }
    setTodoList([...todoList, newTodo]);
    console.log(todoList);
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Todo"
      />
      <button type="submit">Adicionar</button>
    </Form>
  )
}