import React from 'react';

export default function Lato(props){
  return (
    <div className="text" font="Lato" style={{'color':'#' + props.color, 'fontSize' : props.size + 'px', 'fontWeight' : props.weight}}>{props.text}</div>
  )
}
