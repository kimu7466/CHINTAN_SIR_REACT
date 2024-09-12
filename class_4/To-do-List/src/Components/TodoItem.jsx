import Items from "./Items"


const TodoItem = ({todolist,RemoveHandler})=>{
    return  <>
        {todolist.map((element, idx)=><Items key={element.name} todoname={element.name} tododate={element.date} RemoveHandler={RemoveHandler}></Items>)}
    </>
    
    
 
}

export default TodoItem