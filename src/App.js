import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {id:1, name:"Chinmay", age:27},
      {id:2, name:"Chithra", age:30},
      {id:3, name:"Laxmi", age:55},
      {id:4, name:"Parameshwara", age:64}
    ],
    showPersons: false
  }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => 
  {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
        persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return <Person 
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
              })
            }
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
