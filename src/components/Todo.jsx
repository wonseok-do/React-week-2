import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
const Todo = (props) => {
  const dispatch = useDispatch();
  const onRemove = () => {
    console.log(deleteTodo(props.todo.id));
    dispatch(deleteTodo(props.todo.id));
  };
  const onToggle = () => {
    console.log(toggleTodo(props.todo.id));
    dispatch(toggleTodo(props.todo.id));
  };
  return (
    <TodoCard>
      <Link to={`/detail/${props.todo.id}`}>상세보기</Link>
      <h2>{props.todo.title}</h2>
      <p>{props.todo.body}</p>
      <BtnGroup>
        <DelBtn onClick={onRemove}>삭제하기</DelBtn>
        <EditBtn onClick={onToggle}>
          {props.todo.isDone ? "취소" : "완료"}
        </EditBtn>
      </BtnGroup>
    </TodoCard>
  );
};

export default Todo;

const TodoCard = styled.div`
  border: 3px solid purple;
  border-radius: 10px;
  padding: 20px;
  width: 270px;
`;
const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
const DelBtn = styled.button`
  height: 50px;
  width: 50%;
  cursor: pointer;
  background: #ffffff;
  border: 2px solid red;
  border-radius: 5px;
`;
const EditBtn = styled.button`
  height: 50px;
  width: 50%;
  cursor: pointer;
  background: #fff;
  border: 2px solid green;
  border-radius: 5px;
`;
