import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    // Obtener las tareas desde localStorage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Guardar las tareas en localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask.trim() }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add new task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <Todo key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
