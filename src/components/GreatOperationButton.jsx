import React from 'react'
import '../css/button.css';
export default function GreatOperationButton(props) {
  const chiffres = ['+','-','*','/','.'];

  var handleClick = (e) => {
    props.handleClickParent(e);
  }
  return (
    <div className="operationButton">
       {chiffres.map((opr)=> (
         <button className={props.class} value={opr} onClick={(e)=>{handleClick(e)}}>{opr}</button>

       ))}
    </div>
  )
}
