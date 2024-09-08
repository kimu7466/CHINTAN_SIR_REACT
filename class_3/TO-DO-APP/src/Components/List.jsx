function List({ todos, deleteTodos, editTodos }) {
  return (
    <>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((ele, idx) => (
          <li key={idx}>
            <div className="fit">
              {idx + 1}. {ele}
            </div>
            <div className="buttonDiv">
              <button id="edit" onClick={() => editTodos(idx)}>
                Edit
              </button>
              <button id="remove" onClick={() => deleteTodos(idx)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
