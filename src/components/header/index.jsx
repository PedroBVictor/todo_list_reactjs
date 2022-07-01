import styled from "styled-components";

export const Header = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.3rem;

  background: #008cff;
  color: #fefe;

  text-align: center;
  margin-bottom: 1rem;
`

export const HeaderComp = ({ list }) => {
  return (
    <Header>
      <h1>TODO APP</h1>
      <p>Todo Actives {list.length}</p>
    </Header>
  )
}