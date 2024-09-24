// function Item(key, stname, stemail, stmobile) {
//   return (
//     <div key={key} className="container mt-5">
//       <div className="row">
//         <div className="col-3">
//           <span>{stname}</span>
//         </div>
//         <div className="col-3">
//           <span>{stemail}</span>
//         </div>
//         <div className="col-3">
//           <span>{stmobile}</span>
//         </div>
//         <div className="col-3">
//           <button className="btn btn-danger">Remove</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Item;








function Item({ stname, stemail, stmobile }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <span>{stname}</span>
        </div>
        <div className="col-3">
          <span>{stemail}</span>
        </div>
        <div className="col-3">
          <span>{stmobile}</span>
        </div>
        <div className="col-3">
          <button className="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
