import { useState } from "react";
import FoodList from "./components/FoodList";
import AddFood from "./components/AddFood";
import Title from "./components/Title";
import Message from "./components/Message";

function App() {
  const [bools, setBools] = useState([]);
  const [foods, setFoods] = useState([]);

  const addFood = (e) => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        let data = e.target.value;
        setFoods([...foods, data]);
        e.target.value = "";
        setBools([...bools, false]);
      }
    }
  };

  const buyItem = (idx) => {
    let newBools = bools.map((bought, index) =>
      index === idx ? !bought : bought
    );
    setBools(newBools);
  };

  return (
    <>
      <div className="main">
        <Title/>
        <AddFood addFood={addFood} />
        <FoodList foods={foods} bools={bools} buyItem={buyItem} />
      </div>
      <Message/>
    </>
  );
}

export default App;
