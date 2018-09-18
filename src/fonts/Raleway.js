import React from 'react';

export default function Raleway(props){
  return (
    <div className="text" font="Raleway" style={{'color':'#' + props.color, 'fontSize' : props.size + 'px', 'fontWeight' : props.weight}}>{props.text}</div>
  )
}
