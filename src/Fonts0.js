import React from 'react';
import './index.css';

import Roboto from './fonts/Roboto';
import OpenSans from './fonts/OpenSans';
import Raleway from './fonts/Raleway';
import Monteserat from './fonts/Monteserat';
import Lato from './fonts/Lato';
import Abril from './fonts/Abril';

export default class Fonts extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var selectedFontList = this.props.fontsName.map((font, i) =>
    <li>{font}</li>
  );
    return(
      <React.Fragment>
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Lato:100,300,400,700,900|Montserrat:100,200,300,400,500,600,700,800,900|Open+Sans:300,400,600,700,800|Raleway:100,200,300,400,500,600,700,800,900|Roboto:100,300,400,500,700,900" rel="stylesheet" />
      <Roboto text={this.props.text} color={this.props.color} size={this.props.size} weight={this.props.weight} />
      <OpenSans text={this.props.text} color={this.props.color} size={this.props.size} weight={this.props.weight} />
      <Raleway text={this.props.text} color={this.props.color} size={this.props.size} weight={this.props.weight} />
      <Monteserat text={this.props.text} color={this.props.color} size={this.props.size} weight={this.props.weight} />
      <Lato text={this.props.text} color={this.props.color} size={this.props.size} weight={this.props.weight} />
      <Abril text={this.props.text} color={this.props.color} size={this.props.size} weight={this.props.weight} />

      <ul>
        {selectedFontList}
      </ul>
      </React.Fragment>
    );
  }
}
