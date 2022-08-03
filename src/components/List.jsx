import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const List = () => {
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);
  const isDoneType = [false, true];

  return (
    <ListContainer>
      {isDoneType.map((e) => {
        let todoBox = (
          <TodoContainer key={e + ""}>
            {e ? <h2>Done..👍</h2> : <h2>Working..🔥</h2>}
            <TodoCards>
              {todos.map((todo) => {
                if (todo.isDone === e) {
                  console.log(todo);
                  return <Todo todo={todo} key={todo.id}></Todo>;
                }
                return null;
              })}
            </TodoCards>
          </TodoContainer>
        );
        return todoBox;
      })}
      {/* <h2>Working..🔥</h2>
      <TodoContainer>
        {todos.map((todo) => {
          if (!todo.isDone) {
            console.log(todo);
            return <Todo todo={todo} key={todo.id}></Todo>;
          }
        })}
      </TodoContainer>
      <h2>Done..🔥</h2>
      <TodoContainer>
        {todos.map((todo) => {
          if (todo.isDone) {
            console.log(todo);
            return <Todo todo={todo} key={todo.id}></Todo>;
          }
        })}
      </TodoContainer> */}
    </ListContainer>
  );
};
export default List;

const ListContainer = styled.div`
  padding: 0 24px;
`;
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
`;
const TodoCards = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
