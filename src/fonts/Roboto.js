import React from 'react';

export default function Roboto(props){
  return (
    <div className="text" font="Roboto" style={{'color':'#' + props.color, 'fontSize' : props.size + 'px', 'fontWeight' : props.weight}}>{props.text}</div>
  )
}
