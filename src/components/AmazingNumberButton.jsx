import React from 'react'
import '../css/button.css';

export default function AmazingNumberButton(props) {

  const chiffres = [0,1,2,3,4,5,6,7,8,9,];

  var handleClick = (e) => {
    props.handleClickParent(e);
  }
  return (
        <div className='numberButton'>
          {chiffres.map((nbre)=>(

            <button className={props.class} key={nbre} value={nbre} onClick={(e)=>{handleClick(e)}}>{nbre}</button>
          ))}
        </div>
  )
}
