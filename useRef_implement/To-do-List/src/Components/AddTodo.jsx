import { useState, useRef } from "react";

const AddTodo = ({ onAddButtonClick }) => {
  let nameRef = useRef("");
  let dateRef = useRef("");


  const onButtonClick = (e) => {
    e.preventDefault();
    onAddButtonClick(nameRef.current.value, dateRef.current.value);
    
  nameRef.current.value = "";
  dateRef.current.value = "";
  };

  return (
    <div className="container">
      <form onSubmit={onButtonClick}>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter Your Task"
              className="form-control"
              ref={nameRef}
            />
          </div>
          <div className="col-4">
            <input type="Date" className="form-control" ref={dateRef} />
          </div>
          <div className="col-4">
            <button className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
