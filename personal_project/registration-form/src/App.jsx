import { useState } from 'react'
import Title from './Components/title'
import Input from './Components/Input'
import List from './Components/list'

function App() {
  const [students, setstudents] = useState([])

  const addStudent = (name_, email_, mobile_)=>{
    if (name_ || email_ || mobile_){
      setstudents([...students, {name:name_, email:email_, mobile:mobile_}])
    }
  }

  const removeStudents= (idx)=>{
    let new_students = [...students]    
    new_students.splice(idx, 1)
    setstudents(new_students)
  }
  return (
    <div className='container mt-5'>
    <Title></Title>
    <Input addStudent={addStudent} ></Input>
    <List students={students} removeStudents={removeStudents}></List>
    </div>
  )
}

export default App
