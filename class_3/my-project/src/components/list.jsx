const List = ({list}) => {
    // console.log(list);
    
  return (
    <>
      <ul>
        {list.map((ele, idx) => (
          <>
            <li key={idx}>
              {ele}
            </li>
            <br />
          </>
        ))}
      </ul>
    </>
  );
};

export default List;
