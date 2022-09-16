import React from 'react'
import '../css/button.css'
export default function MagnificientEqualButton(props) {
  return (
    <div>
      <button className={props.class} value={props.value} onClick={props.buttonClick}>{props.equal}</button>
    </div>
  )
}
