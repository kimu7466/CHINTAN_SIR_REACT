import { useState } from "react";

function App() {
  const [bools, setBools] = useState([false, false, false]);
  const [foods, setFoods] = useState(["ghee", "chana", "chicken"]);

  const addFood = (e) => {
    if (e.target.value != "") {
      if (e.key === "Enter") {
        let data = e.target.value;
        let current = [...foods, data];
        setFoods(current);
        e.target.value = "";
        let newBools = [...bools, false];
        setBools(newBools);
      }
    }
  };

  const buyItem = (idx) => {
    let list = document.querySelectorAll(".cls");

    bools.forEach((ele, index) => {
      if (index === idx) {
        if (bools[index] === true) {
          bools[index] = false;
        } else {
          bools[index] = true;
        }
      }
    });

    for (let i = 0; i < bools.length; i++) {
      if (bools[i] === true) {
        list[i].classList.add("active");
      } else {
        list[i].classList.remove("active");
      }
    }
  };

  return (
    <>
      <div className="main">
        <h1>Healthy Foods</h1>
        <input type="text" placeholder="Enter Food Item" onKeyUp={addFood} />
        <ul>
          {foods.map((ele, idx) => (
            <li className="cls" key={idx}>
              {ele}
              <button onClick={() => buyItem(idx)}>Buy</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="message">
        <p>Above is the list of Healthify Food.</p>
      </div>
    </>
  );
}

export default App;
