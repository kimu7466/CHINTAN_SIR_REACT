import "./App.css";
import Count from "./Components/count";
import Input from "./Components/InputBox";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  let [names, setName] = useState([]);

  const keyHandeler = (e) => {
    if (e.key == "Enter") {
      let data = e.target.value;
      let current = [...names, data];
      setName(current);
    }
  };

  return (
    <>
      <h1>Hello world</h1>

      <Count count={count}  update={updateCount}></Count>
      <Input names={names} keyHandeler={keyHandeler}></Input>
    </>
  );
}

export default App;
