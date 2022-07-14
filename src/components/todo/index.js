import React, { useState } from "react";
import "./style.css";

function Index() {
  const [value, setValue] = useState("");
  const [items, setItem] = useState([]);
  const [editValue, setEditValue] = useState(null);

  const addItem = (e) => {
    e.preventDefault();

    setItem([
      ...items,
      {
        id: items.length,
        value: value,
      },
    ]);
    setValue("");
  };

  const editFunction = (index) => {
    console.log(index);
  };

  const deleteInput = (index) => {
    setItem((items) => items.filter((_, i) => i !== index));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form className="todoForm">
        <input
          type="text"
          placeholder="Enter your task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addItem}>Add Task</button>
      </form>
      <h2>Todo List</h2>
      {items.map((item, index) => (
        <div className="todoList">
          <input
            type="text"
            key={item.id}
            // onChange={(e) => setValue(e.target.value)}
            onChange={handleChange}
            value={item.value}
          />
          <button onClick={() => editFunction(item)}>Edit</button>
          <button onClick={() => deleteInput(index)}>Del</button>
        </div>
      ))}
    </div>
  );
}

export default Index;
