import { useState } from "react";

function Count() {
  let [x, setX] = useState(0);

  const increment = () => {
    setX(x + 1);  
    console.log(x); 
  };

  return (
    <>
      <p>{x}</p>
      <button align="center" className="btn btn-primary" onClick={increment}>Increment</button> 
    </>
  );
}

export default Count;
