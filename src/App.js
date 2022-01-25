import React, { useState } from "react";
import "./App.css";
import Form from './components/form'
import TodoList from "./components/ToDoList";

function App(props) {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>My To Do</h1>
      </header>
      <Form todo={todos} steTodos={setTodos} setInputText={setInputText} />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  )
}


export default App;
