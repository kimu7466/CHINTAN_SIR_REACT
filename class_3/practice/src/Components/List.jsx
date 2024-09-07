function List({ names }) {
  return (
    <>
      <ul>
        {names.map((ele) => {
          <li key={ele}>ele</li>;
        })}
      </ul>
    </>
  );
}

export default List;
