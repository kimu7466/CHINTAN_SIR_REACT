import { useState } from "react";

function Count() {
  let [x, setX] = useState(0);

  const increment = () => {
    setX(x + 1);  // Updates the state
    console.log(x); // Logs the current state
  };

  return (
    <>
      <p>{x}</p>
      <button onClick={increment}>Increment</button>  {/* Button to trigger the increment */}
    </>
  );
}

export default Count;
