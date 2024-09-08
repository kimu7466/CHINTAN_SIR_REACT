function Form({ task, setTask, addTodos, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(task); // Call addTodos or editTodos based on the state
  };

  return (
    <>
      <h1>{isEditing ? "Edit Task" : "Enter Task"}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update task state on input change
        />
        <br />
        <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
      </form>
    </>
  );
}

export default Form;
