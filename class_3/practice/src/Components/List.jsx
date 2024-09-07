function List({ names, removeHandeler }) {
  return (
    <>
      <ul>
        {names.map((ele, idx) => ( <>
          <li key={idx} style={{display:"flex", width:"500px", justifyContent:"space-between"}}><h3>{idx+1}</h3> <h3>{ele}</h3> <button onClick={()=>{removeHandeler(idx)}}>Remove</button>
          </li> <br /> </>
          ))}
      </ul>
    </>
  );
}

export default List;
