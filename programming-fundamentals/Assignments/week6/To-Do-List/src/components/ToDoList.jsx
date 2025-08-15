import React, { useState } from 'react';
import AddToDo from './AddToDo';
import ToDoCard from './ToDoCard';

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(false);

  const handleAddNewTask = (task) => {
    setToDos([...toDos, task]);
  };

  const handleToggle = (id) => {
    setToDos(
      toDos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setToDos(toDos.filter(todo => todo.id !== id));
  };

  const handleToggleHide = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <div>
      <AddToDo onAddNewTask={handleAddNewTask} />
      <ToDoCard
        toDos={toDos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        hideCompleted={hideCompleted}
        onToggleHide={handleToggleHide}
      />
    </div>
  );
}

export default ToDoList;