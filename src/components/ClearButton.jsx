import React from 'react'

export default function (props) {
  return (
    <div>
        <button className={props.class} value={props.value} onClick={props.ClearButton}>{props.clear}</button>
    </div>
  )
}
