import "./App.css";
import Count from "./Components/count";
import Input from "./Components/InputBox";
import List from "./Components/List";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  let [names, setName] = useState(["imroz","vishal", "aadil","neha","megha"]);

  const keyHandeler = (e) => {
    if (e.key == "Enter") {
      let data = e.target.value;
      let current = [...names, data];
      setName(current);
      e.target.value = "" 
    }
  };
  const removeHandeler = (idx) => {
    let newNames = names.filter((ele,index)=>index!=idx)
    setName(newNames);
  };

  return (
    <>
      <h1>Hello world</h1>

      <Count count={count}  update={updateCount}></Count>
      <Input names={names} keyHandeler={keyHandeler}></Input>
      <List names={names} removeHandeler={removeHandeler}></List>
    </>
  );
}

export default App;
