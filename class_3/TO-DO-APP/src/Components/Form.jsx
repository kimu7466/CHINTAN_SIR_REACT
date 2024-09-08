function Form({ task, setTask, addTodos, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(task); 
  };

  return (
    <>
      <h1>{isEditing ? "Edit Task" : "Enter Task"}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
      </form>
    </>
  );
}

export default Form;
