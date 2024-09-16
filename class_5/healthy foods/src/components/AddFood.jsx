function AddFood({ addFood }) {
    return (
      <input type="text" placeholder="Enter Food Item" onKeyUp={addFood} />
    );
  }
  
  export default AddFood;
  