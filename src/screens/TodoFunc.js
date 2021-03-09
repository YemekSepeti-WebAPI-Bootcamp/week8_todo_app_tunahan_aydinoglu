import React, { useState } from "react";

const TodoFunc = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  let addTodo = (todo) => {
    let todosTemp = [];
    todosTemp = [...todos];
    todosTemp.push(todo);
    setTodos(todosTemp);
  };
  let removeTodo = (index) => {
    let todosTemp = [];
    todosTemp = [...todos];
    todosTemp.splice(index, 1);
    setTodos(todosTemp);
  };
  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>Ekle</button>
      <ul>
        {todos.map((item, index) => (
          <li id={index}>
            {item} <button onClick={() => removeTodo(index)}>Sil</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoFunc;