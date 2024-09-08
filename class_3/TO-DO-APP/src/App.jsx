import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  let [todos, setTodos] = useState(["task 1", "task 2"]);
  let [task, setTask] = useState("");

  const addTodos = (task_) => {
    if (task_.trim() !== "") {
      setTodos([...todos, task_]);
      setTask("");
    }
  };

  const deleteTodos = (idx) => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  return (
    <div className="inner">
      <Form task={task} setTask={setTask} addTodos={addTodos} />
      <hr />
      <List todos={todos} deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;

