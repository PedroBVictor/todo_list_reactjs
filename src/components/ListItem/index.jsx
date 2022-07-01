import React from "react";
import styled from "styled-components";

import { MdDeleteOutline } from "react-icons/md"

const ItemStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 20px;

  position: relative;

  .todo-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    color: #fff;
    background: linear-gradient(90deg,
      rgba(255, 118, 20, 1) 0%,
      rgba(255, 84, 17, 1) 100%
    );

    padding: 16px;
    border-radius: 5px;
    width: 90%;

    button{
      text-decoration: none;
      margin-left: 20px;
      border:none;
      padding: 0.3rem;
      border-radius: 3px;
      background: #2f9de6;
      color: #f2f2f2;
      font-weight: 600;
      cursor: pointer;
      &:hover{
        transition: all .4s;
        opacity: .8;
      }
    }
    
  }
  .todo-row:nth-child(4n + 1) {
      background: linear-gradient(90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }
  .todo-row:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    rgba(255, 12, 241, 1) 0%,
    rgba(250, 0, 135, 1) 100%
  );
}
.todo-row:nth-child(4n + 3) {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
}
.icons {
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
}

.todo-title{
  font-size: 22px;
}
`

export const ListComp = ({ list, handleDelete }) => {

  return (
    <ItemStyle>
      {
        list.map((item, index) => {
          return (
            <div
              key={index}
              className="todo-row"
            >
              <p
                className="todo-title"
              >{item.title}</p>
              <button 
                onClick={() => handleDelete(index)}
                className="icons"
              >
                <MdDeleteOutline/>
              </button>
            </div>
          )
        })
      }
    </ItemStyle>
  )
}