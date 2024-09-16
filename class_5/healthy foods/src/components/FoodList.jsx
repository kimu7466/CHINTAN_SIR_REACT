import FoodItem from "./FoodItem";

function FoodList({ foods, bools, buyItem }) {
  return (
    <>
      {foods && foods.length > 0 ? (
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
      ) : (
        <h2>Add food here</h2>
      )}
    </>
  );
}

export default FoodList;
