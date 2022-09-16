import React from 'react'
import '../css/BeautifulScreen.css';
// import ButtonPanel from './ButtonPanel';
export default function BeautifulScreen(props) {
  return (
    <div className="">
      <input type="text" className="screen" value={props.numberValue} onChange={props.changeNumbers}/>
    </div>
  )
}

