import { useState } from 'react'
import Title from './Components/title'
import Input from './Components/Input'
import List from './Components/list'

function App() {
  const [students, setstudents] = useState([])

  const addStudent = (name_, email_, mobile_)=>{
    setstudents([...students, {name:name_, email:email_, mobile:mobile_}])
    console.log(students);
  }

  return (
    <div className='container mt-5'>
    <Title></Title>
    <Input addStudent={addStudent}></Input>
    <List students={students}></List>
    </div>
  )
}

export default App
