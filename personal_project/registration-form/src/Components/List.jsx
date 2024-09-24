import Item from './Item';

function List({ students }) {
  return (
    <>
      {students.map((ele, idx) => (
        <Item
          key={idx}
          stname={ele.name}
          stmobile={ele.mobile}
          stemail={ele.email}
        />
      ))}
    </>
  );
}

export default List;
