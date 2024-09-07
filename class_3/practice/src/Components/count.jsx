function Count({ count, update }) {
  return (
    <>
      <button onClick={update}>click</button>
      <h3>
        The Count is <span style={{ color: "red" }}>{count}</span>
      </h3>
    </>
  );
}

export default Count;
