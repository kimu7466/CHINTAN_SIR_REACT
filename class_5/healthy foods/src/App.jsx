import { useState } from "react";
import FoodList from "./components/FoodList";
import AddFood from "./components/AddFood";

function App() {
  const [bools, setBools] = useState([false, false, false]);
  const [foods, setFoods] = useState(["burger", "pizza", "paneer"]);

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
    <div className="main">
      <h1>Healthy Foods</h1>
      <AddFood addFood={addFood} />
      <FoodList foods={foods} bools={bools} buyItem={buyItem} />
      <div className="message">
        <p>Above is the list of Healthify Food.</p>
      </div>
    </div>
  );
}

export default App;
