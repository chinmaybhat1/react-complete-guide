import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state ={
    name: "Batman"
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangeHandler} name={this.state.name}/>
        <UserOutput name={this.state.name}/>
        <UserOutput name="Batman"/>
      </div>
    );
  }
}

export default App;
