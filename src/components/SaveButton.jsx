import React from 'react'
import '../css/button.css'
export default function SaveButton(props) {
  return (
    <div className='Save'>
        <button className={props.class} value={props.value} onClick={props.buttonClickSave}>{props.save}</button>
    </div>
  )
}
