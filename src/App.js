import "./App.css";
import React from "react";
import TodoList from "./pages/TodoList";
import Detail from "./pages/Detail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
