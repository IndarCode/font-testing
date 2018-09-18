import React from 'react';

export default function Abril(props){
  return (
    <div className="text" font="Abril Fatface" style={{'color':'#' + props.color, 'fontSize' : props.size + 'px', 'fontWeight' : props.weight}}>{props.text}</div>
  )
}
