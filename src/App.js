
import React, {useState} from 'react'
import InputConvert from './components/InputConvert'
import OutPutConvert from './components/OutPutConvert';
import RomanConvert  from './components/RomanConvert';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  


  handleInput(e) {
    this.setState({
      output: RomanConvert(e.target.value)
    });
  }
  render() {


console.log(RomanConvert)
    return (
      <>
      
      <div className="mx auto m-32 text-center">
        <h1 className="text-2xl font-extrabold">Convertir des chiffres romain application</h1>
      </div>
       
      <div className="mx auto m-32 text-center">
      <InputConvert onChange={this.handleInput}/>
      <OutPutConvert value={this.state.output}/>
        </div> 

      </>
    );
  }
}

export default  App;