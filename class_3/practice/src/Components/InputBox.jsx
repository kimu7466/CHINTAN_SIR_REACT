function Input({ keyHandeler }) {
  return (
    <>
      <label htmlFor="name">Enter name :</label>
      <input type="text" placeholder="eg. Imroz Khan" onKeyUp={keyHandeler} />
    </>
  );
}

export default Input;
