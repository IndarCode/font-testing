import React from 'react';
import './index.css';

export default class Fonts extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var selectedFontList = this.props.fontsName.map((font, i) =>
    <li className={["text", font.replace(/ +/g, "")].join(" ")} font={font} style={{'color':'#' + this.props.color, 'fontSize' : this.props.size + 'px', 'fontWeight' : this.props.weight}}>{this.props.text}</li>
  );

  var fontTitle = this.props.fontsName.map((font, i) =>
    font.replace(/ +/g, "+") + ':100,200,300,400,500,600,700,800,900|'
  );
    return(
      <React.Fragment>
        <link href={`https://fonts.googleapis.com/css?family=${fontTitle}`} rel="stylesheet" />
      <ul>
        {selectedFontList}
      </ul>
      </React.Fragment>
    );
  }
}
