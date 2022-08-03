import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { todos } = useSelector((state) => state.todos);
  return (
    <DetailContainer>
      <DetailBox>
        <div>ID : {params.id}</div>
        {todos.map((todo) => {
          if (todo.id === params.id) {
            return (
              <div key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>
              </div>
            );
          }
          return null;
        })}
        <Btn
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </Btn>
      </DetailBox>
    </DetailContainer>
  );
};
export default Detail;

const DetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailBox = styled.div`
  width: 500px;
  height: 500px;
  border: 3px solid #b0e0e6;
  border-radius: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.button`
  width: 100px;
  height: 30px;
  background: #3e9dad;
  color: #86ec8f;
  border: 1px solid #3e9dad;
  border-radius: 10px;
  cursor: pointer;
`;
