function ToDoCard({ toDos, onToggle, onDelete, hideCompleted, onToggleHide }) {
  
    const visibleTodos = hideCompleted
    ? toDos.filter(todo => !todo.isDone)
    : toDos;

  return (
    <div className="card mt-3">
      
      <div className="card-header d-flex align-items-center">
        <h2 className="me-auto">Your Todos</h2>  
        {toDos.length > 0 && (
          <button
            className="btn btn-sm btn-warning ms-2"
            type="button"
            onClick={onToggleHide}
          >
            {hideCompleted ? 'View All' : 'Hide Completed'}
          </button>
        )}
      </div>

      <div className="card-body">
        {visibleTodos.length === 0 ? (
          <p>No todos to display.</p>
        ) : (
          <ul className="list-group">
            {visibleTodos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex align-items-center"
              >
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => onToggle(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.isDone ? 'line-through' : 'none',
                    flexGrow: 1,
                  }}
                >
                  {todo.text}
                </span>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(todo.id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ToDoCard;