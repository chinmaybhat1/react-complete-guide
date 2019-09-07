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
    ],
    showPersons: false
  }

  switchStateHandler = (name) => {
    this.setState({
      persons: [
        {name:name, age:26},
        {name:"Chithra Bhat", age:30},
        {name:"Laxmi P Bhat", age:55},
        {name:"U Parameshwara Bhat", age:64}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name:"Chinmay Bhat", age:26},
        {name:event.target.value, age:30},
        {name:"Laxmi P Bhat", age:55},
        {name:"U Parameshwara Bhat", age:64}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
        persons = (
          <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchStateHandler.bind(this, "Chinmay")}
          >Hobbies: Badminton, Football, Carrom
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          <Person 
            name={this.state.persons[3].name} 
            age={this.state.persons[3].age}/>
          </div>
        );
    }
    return (
      <div className="App">
        <h1>Let's get ReactV</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons} 
      </div>
    );
  }
}

export default App;
