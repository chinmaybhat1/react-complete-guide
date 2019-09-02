import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {name:"Chinmay", age:27},
      {name:"Chithra", age:30},
      {name:"Laxmi", age:55},
      {name:"Parameshwara", age:64}
    ]
  }

  switchNameHandler = () => {
    console.log("Switch name handler called");
  }

  render() {
    return (
      <div className="App">
        <h1>Let's get ReactV</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies: Badminton, Football, Carrom</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
