import React from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { nanoid } from "nanoid";

const Form = () => {
  const title = React.useRef(null);
  const body = React.useRef(null);
  const dispatch = useDispatch();

  const addTodoList = (event) => {
    event.preventDefault();
    if (title.current.value === "" || body.current.value === "") return;
    dispatch(
      createTodo({
        id: nanoid(),
        title: title.current.value,
        body: body.current.value,
        isDone: false,
      }),
      (title.current.value = ""),
      (body.current.value = "")
    );
  };

  return (
    <FormContainer>
      <InputGroup>
        <label>제목</label>
        <Input type="text" ref={title} />
        <label>내용</label>
        <Input type="text" ref={body} />
        <Btn onClick={addTodoList}>추가하기</Btn>
      </InputGroup>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  border: 1px solid #7cfc00;
  border-radius: 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background: #7b68ee;
  padding: 30px;
  margin: 0 auto;
  gap: 20px;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Input = styled.input`
  padding: 0 12px;
  border: 1px solid #b0e0e6;
  border-radius: 10px;
  width: 240px;
  height: 40px;
`;
const Btn = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #ffdead;
  color: #0d0080;
  cursor: pointer;
`;
