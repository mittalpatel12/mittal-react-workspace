import React, { Component } from 'react';
import Keypad from './Components/Keypad';

class App extends Component {

  render() {

    return(
      <div>
        <Keypad clickHandler={this.resultCalculator}/>
      </div>
    );
  }
}

export default App;