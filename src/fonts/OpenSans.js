import React from 'react';

export default function OpenSans(props){
  return (
    <div className="text" font="Open Sans" style={{'color':'#' + props.color, 'fontSize' : props.size + 'px', 'fontWeight' : props.weight}}>{props.text}</div>
  )
}
