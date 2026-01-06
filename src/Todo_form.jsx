import React, { useState } from "react";
import Todos from "./Todos";

const Todo_form = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
  };
  const handleDelete = (id) => {
    const updated = tasks.filter((_, index) => index !== id);
    setTasks(updated);
  };
  return (
    <div className="container-todo-form">
      <div>
        <input
          type="text"
          placeholder="Add your task here..."
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        <button className="btn" onClick={() => handleSubmit()}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <h3 style={{ color: "red" }}>No task added</h3>
      ) : (
        tasks.map((items, index) => (
          <Todos
            key={index}
            tasks={items}
            index={index}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Todo_form;
