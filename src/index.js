import React from 'react';
import ReactDOM from 'react-dom';
import Fonts from './Fonts';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: "Hello World, How you doing?",
      size : 25,
      weight : 300,
      color : '252525',
      showFonts:false,
      fontsName : [],
      selectedFont: false
    }
    this.textChange = this.textChange.bind(this);
    this.sizeChange = this.sizeChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.weightChange = this.weightChange.bind(this);

    this.showFonts = this.showFonts.bind(this);
    this.addClass = this.addClass.bind(this);

  }

  textChange(e){
    var val = e.target.value;
    this.setState({
      text : val
    });
  }
  weightChange(e){
    var val = e.target.value;
    this.setState({
      weight : val
    });
  }
sizeChange(e){
    var val = e.target.value;
    this.setState({
      size : val
    });
  }
colorChange(e){
    var val = e.target.value;
    this.setState({
      color : val
    });
  }

  showFonts(e){
    this.setState({
      showFonts : !this.state.showFonts
    });
    }

addClass(e){
  e.target.classList.toggle('selected');
  var text = e.target.innerHTML;
  this.state.fontsName.push(text);
  this.setState({
    selectedFont : !this.state.selectedFont,
    fontsName: this.state.fontsName,
  });
  console.log( this.state.fontsName );
}

  render(){
    var selectedFontList = this.state.fontsName.map((font, i) =>
    <li>{font}</li>
  );

      var fontsList = ["Open Sans",
"Lora",
"Frank Ruhl Libre",
"Playfair Display",
"Archivo",
"Spectral",
"Fjalla One",
"Roboto",
"Raleway",
"Montserrat",
"Rubik",
"Source Sans Pro",
"Cardo",
"Cormorant",
"Work Sans",
"Nunito",
"Lato",
"Abril FatFace",
"Old Standard TT",
"Poppins"];

var list = fontsList.map((font, i) =>
<li onClick={this.addClass} className="">{font}</li>
);

    return(
      <React.Fragment>
      <section className="header">
      <a href="http://indar.xyz" className="logo"><img src={process.env.PUBLIC_URL + '/images/indar-white.png'} alt="" /></a>
        <h1>Font Testing</h1>
        <div className="text-box">
        <label>Type your text here</label>
        <input type="text" value={this.state.text} onChange={this.textChange} />
        </div>
        <ul className="form">
          <li> <i>Size (px)</i><input type="text" value={this.state.size} placeholder="Font size" onChange={this.sizeChange} /></li>
          <li> <i>color (hex)</i><input type="text" value={this.state.color} placeholder="Color" onChange={this.colorChange} /></li>
          <li> <i>weight (%)</i><input type="text" value={this.state.weight} placeholder="Font Weight" onChange={this.weightChange} /></li>
        </ul>
        <div className={['fonts', this.state.showFonts ? 'show': ''].join(' ')}>
        <span className={ this.state.showFonts ? 'show': ''} onClick={this.showFonts}>{this.state.showFonts ? '' : 'ADD FONTS'} <i>+</i> </span>
        <h2>Font Families:</h2>
        <ul>
          {list}
        </ul>

        </div>
        <ul className="fonts-list-selected">
          {selectedFontList}
        </ul>
      </section>
      <section className="fonts-holder">
        <Fonts text={this.state.text} color={this.state.color} size={this.state.size} weight={this.state.weight} fontsName={this.state.fontsName} />
      </section>
      </React.Fragment>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
