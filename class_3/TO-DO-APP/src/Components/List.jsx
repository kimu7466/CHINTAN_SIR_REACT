function List({ todos , deleteTodos}) {
  return (
    <>
      <h1>To-DO-List</h1>
      <ul>
        {todos.map((ele, idx) => (
            <li key={idx}>
              <div className="fit">
                {idx + 1}. {ele}
              </div>
              <div className="buttonDiv">
                <button id="edit">Edit</button>
                <button id="remove" onClick={()=>deleteTodos(idx)}>Remove</button>
              </div>
            </li>
            
        ))}
      </ul>
    </>
  );
}

export default List;
