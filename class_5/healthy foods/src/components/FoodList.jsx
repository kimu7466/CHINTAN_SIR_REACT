import FoodItem from "./FoodItem";

function FoodList({ foods, bools, buyItem }) {
  return (
    <ul>
      {foods.map((food, idx) => (
        <FoodItem
          key={idx}
          food={food}
          isBought={bools[idx]}
          buyItem={() => buyItem(idx)}
        />
      ))}
    </ul>
  );
}

export default FoodList;
