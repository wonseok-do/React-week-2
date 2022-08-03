import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Box>
      <div>My Todo List</div>
      <div>React</div>
    </Box>
  );
};

export default Header;

const Box = styled.div`
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
`;
