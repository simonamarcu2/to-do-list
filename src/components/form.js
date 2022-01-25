import React from "react";



const Form = ({ inputText, setInputText, todos, setTodos, setStatus, filteredTodos }) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        filteredTodos={filteredTodos}
      />
      <button
        onClick={submitTodoHandler}
        className="todo-button"
        type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Done</option>
          <option value="uncompleted">Do</option>
        </select>
      </div>
    </form >
  );
};

export default Form
