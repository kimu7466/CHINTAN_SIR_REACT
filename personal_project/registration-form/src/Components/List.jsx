import Item from './Item';

function List({ students , removeStudents}) {
  return (
    <>
      {students.map((ele, idx) => (
        <Item
          key={idx}
          stname={ele.name}
          stmobile={ele.mobile}
          stemail={ele.email}
          removeStudents={removeStudents}
        />
      ))}
    </>
  );
}

export default List;
