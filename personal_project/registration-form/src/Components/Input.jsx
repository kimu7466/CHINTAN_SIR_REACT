import { useState } from "react";

function Input({addStudent}) {
  let [name , setname]= useState("")
  let [email , setemail]= useState("")
  let [mobile , setmobile]= useState("")

  const onNameChange = (e)=>{
    setname(e.target.value)
  }
  const onEmailChange = (e)=>{
    setemail(e.target.value)
  }
  const onMobileChange = (e)=>{
    setmobile(e.target.value)
  }

  const addHandeler = ()=>{
    addStudent(name,email, mobile);
    setname("")
    setemail("")
    setmobile("")
  }
  
    return <div className="container">
    <div className="row">
    <div className="col-3">
    <input type="text" placeholder="Enter Your Name" className="form-control" onChange={onNameChange} value={name}/>
    </div>
    <div className="col-3">
    <input type="text"  placeholder="Enter Your Email" className="form-control" onChange={onEmailChange} value={email}/>
    </div>
    <div className="col-3">
    <input type="text"  placeholder="Enter Your mobile" className="form-control" onChange={onMobileChange} value={mobile}/>
    </div>
    <div className="col-3" align='center'>
    <button className="btn btn-success" onClick={()=>{addHandeler()}}>Add</button>
    </div>
    </div>
    <hr />
  </div>;
}

export default Input;
