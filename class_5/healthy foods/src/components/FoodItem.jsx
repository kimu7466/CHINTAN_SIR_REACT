function FoodItem({ food, isBought, buyItem }) {
    return (
      <li className={`cls ${isBought ? "active" : ""}`}>
        {food}
        <button onClick={buyItem}>{isBought ? "remove" : "buy"}</button>
      </li>
    );
  }
  
  export default FoodItem;
  