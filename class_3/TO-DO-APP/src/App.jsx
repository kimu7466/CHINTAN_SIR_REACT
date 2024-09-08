import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [todos, setTodos] = useState(["task 1", "task 2"]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addTodos = (task_) => {
    if (task_.trim() !== "") {
      if (isEditing) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = task_;
        setTodos(updatedTodos);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setTodos([...todos, task_]);
      }
      setTask("");
    }
  };

  const deleteTodos = (idx) => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  const editTodos = (idx) => {
    setTask(todos[idx]);
    setIsEditing(true);
    setEditIndex(idx);
  };

  return (
    <div className="inner">
      <Form
        task={task}
        setTask={setTask}
        addTodos={addTodos}
        isEditing={isEditing}
      />

      <hr />

      <List todos={todos} deleteTodos={deleteTodos} editTodos={editTodos} />
    </div>
  );
}

export default App;
