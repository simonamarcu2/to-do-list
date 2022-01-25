import React { useState } from "react";
import "./App.css";
import Form from './components/form'
import TodoList from "./components/ToDoList";
import { useState } from "react";

function App(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <header>
        <h1>To do</h1>
        <Form setInputText={setInputText = { setInputText }} />
        <TodoList />
      </header>
    </div>
  )
}


export default App;
