import React, { useState } from "react";
import "./style.css";
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [state, setState] = useState({
    newtask: "",
    editflag: false,
    editIndex: null,
  });

  const handleUpdate = () => {
    var temp = tasks;
    temp[state.editIndex] = state.newtask;
    setTasks([...temp]);
    setState({ ...state, newtask: "", editflag: false, editIndex: null });
  };
  const addtask = () => {
    setTasks([...tasks, state.newtask]);
    setState({ ...state, newtask: "" });
  };

  const handledelete = (index) => {
    var temp = tasks;
    temp.splice(index, 1);
    setTasks([...temp]);
  };
  const handleEdit = (index) => {
    var x = tasks[index];
    setState({ ...state, newtask: x, editflag: true, editIndex: index });
  };

  return (
    <div>
      <div className="todoForm">
        <input
          type="text"
          onChange={(e) => {
            setState({
              ...state,
              newtask: e.target.value,
            });
          }}
          value={state.newtask}
        />
        {!state.editflag && <button onClick={addtask}>Add</button>}
        {state.editflag && <button onClick={handleUpdate}>Update</button>}
      </div>
      <h2>Todo List</h2>
      {tasks.map((t, i) => {
        return (
          <ul className="todoList">
            <li key={i}>
              {t}
              <button
                onClick={() => {
                  handleEdit(i);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handledelete(i);
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
export default Todo;
