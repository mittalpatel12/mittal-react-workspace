import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    username: "chintan"
  }

inputChangedHandler = (event) => {
  this.setState({username: event.target.value});
}
  render() {
    return (
      <div className="App">
        <h1>this is App Component</h1>

        <input 
        type="text"
        onChange={this.inputChangedHandler}
        value={this.state.username}>
        </input>

    <p>{this.state.username.length}</p>
    <Validation textlength={this.state.username.length}></Validation>
      </div>
    );
  }
}

export default App;
