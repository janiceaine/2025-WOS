import { useState } from 'react';

function AddToDo({ onAddNewTask }) {
  const [newTask, setNewTask] = useState('');
  const [taskError, setTaskError] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleBlur = () => {
    if (newTask.trim().length === 0) {
      setTaskError('Todo Task cannot be empty.');
    } else if (newTask.trim().length < 3) {
      setTaskError('Todo Task must be at least 3 characters.');
    } else {
      setTaskError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim().length === 0) {
      setTaskError('Todo Task cannot be empty.');
      return;
    }
    if (taskError) return;

    const theTask = {
      id: crypto.randomUUID(),
      text: newTask,
      isDone: false
    };

    onAddNewTask(theTask);
    setNewTask('');
    setTaskError('');
  };

  return (
    <div className="card container mt-3">
      <nav className="navbar">
        <div className="w-100 p-2">
          <form
            className="d-flex align-items-start"
            role="search"
            onSubmit={handleSubmit}
          >
            <div className="flex-grow-1 me-4" style={{ width: "80%" }}>
              <input
                className="form-control"
                type="search"
                value={newTask}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Todo Task"
                aria-label="Search"
                style={{ width: "100%" }}
              />
              {taskError && (
                <span className="form-text text-warning" style={{ marginTop: "0.25rem" }}>
                  {taskError}
                </span>
              )}
            </div>
            <button
              className="btn btn-primary btn-sm"
              style={{ width: "20%", height: "36px" }}
              type="submit"
            >
              Add Todo
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default AddToDo;