import React from 'react';

export default function Monteserat(props){
  return (
    <div className="text" font="Monteserat" style={{'color':'#' + props.color, 'fontSize' : props.size + 'px', 'fontWeight' : props.weight}}>{props.text}</div>
  )
}
