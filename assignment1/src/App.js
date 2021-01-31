import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
state = {
  userName: 'Jaladhi'
}

nameChangeHandler = (event) => {
  this.setState({userName: event.target.value})
}
  render() {
    return (
      <div className="App">
        <h1>hello this is my assignment 1</h1>
        <UserInput changed={this.nameChangeHandler} currentName={this.state.userName}></UserInput>
        <UserOutput userName={this.state.userName} ></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
