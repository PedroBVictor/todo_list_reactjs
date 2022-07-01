import styled from "styled-components";


export const Form = styled.form`
  border-radius: 6px;
  input{
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    width: 320px;
    background: transparent;
    color: #fff;
    &::placeholder{
      color: #e2e2e2;
    }
  }
  button{
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize; 
  }
`

export const FormComp = ({ todo, setTodo, list, setList }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!todo.trim()){ return console.log(`Tarefa com titulo invalido`) };
    
    const generateID = Math.random() * 100
    const newItem = {
      id: generateID, 
      title: todo,
    }
    console.log(newItem);
    setList([...list, newItem]);
    console.log(list);
    setTodo("");
    
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
        maxLength={25}
      />
      <button type="submit">Adicionar</button>
    </Form>
  )
}