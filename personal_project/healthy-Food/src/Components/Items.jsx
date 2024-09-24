import style from './Items.module.css'


const Items = ({itemname,flag,BuyButtonHandler})=>{

    return  <li className={`list-group-item mt-3 ${flag?"active":""}`}>{itemname} <button className={`btn btn-primary ${style.bbtn}`} onClick={()=>BuyButtonHandler(itemname)}>{flag?"Remove":"Buy"}</button></li>
    
}

export default Items