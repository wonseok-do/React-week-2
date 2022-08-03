import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";

const TodoList = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};
export default TodoList;
