function Form({ task, setTask, addTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(task);  
  };

  return (
    <>
      <h1>Enter Task</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={task} 
          onChange={(e) => setTask(e.target.value)} // Update task state on input change
        />
        <br />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default Form;

