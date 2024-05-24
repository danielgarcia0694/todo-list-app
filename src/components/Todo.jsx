import React from 'react';

const Todo = ({ task, deleteTask }) => {
  return (
    <li>
      {task.name}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Todo;
