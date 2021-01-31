import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    {/*return (
       <div className="App">
       <h1>hi, I am react Application</h1>
      </div> 
    );*/}
      return React.createElement('div',null,'h1','Hi Iam React Application');
    
  }
}

export default App;
