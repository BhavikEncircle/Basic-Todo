import React from "react";

const Todos = ({ tasks, handleDelete, index }) => {
  return (
    <div className="todos">
      <h2>{tasks}</h2>
      <button className="btn_delete" onClick={() => handleDelete(index)}>
        delete
      </button>
    </div>
  );
};

export default Todos;
