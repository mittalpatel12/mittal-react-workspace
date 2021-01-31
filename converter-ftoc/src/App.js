import React, { Component } from 'react';
import './App.css';
import Inputvalues from './Components/Inputvalues';
import Result from './Components/Result';
import Radiobutton from './Components/Radiobutton';

class App extends Component {
  state = {
    text1: '',
    result: "",
    radioValue: ""
    
  };
  handleClick = props=> {
    const {text1} = this.state
    console.log((9/5 * this.state.text1)+32);
    this.setState({result: ((9/5 * this.state.result) + 32)});
    //this.setState({count: this.state.count + 1});
    
    //Handle fName and lName here
    
  };
  onTextChange = (e) => {
    this.setState({text1: e.target.value});
    }
    onRadiobuttonChange = (e) => {
      this.setState({radioValue: e.target.value});
      this.converter();
    }
    converter = () => {
      if(this.state.radioValue === "FTOC")
        {
          console.log("celcius");
          this.setState({result: ((9/5 * this.state.result) + 32)});
        }
        if(this.state.radioValue === "CTOF")
        {
          console.log("fehrenhit");
        this.setState({result: ((5/9)*(this.state.result-32))});
      }
    }
    

  

    
 
  render() {
    return (
      <div className="App">
        <h1>Temprature converter</h1>
        Celcius value:<Inputvalues onTextChange={this.onTextChange} onClick={this.handleClick}></Inputvalues>
        <Radiobutton onChangeValue={this.onRadiobuttonChange}/>
        <Result result={this.state.result}/>
       
      </div>
    );
  }
}

export default App;
