import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Let's get ReactV</h1>
        <Person name='Chinmay' age='27'>Hobbies: Badminton, Football, Carrom</Person>
        <Person name='Chithra' age='30'/>
        <Person name='Laxmi' age='55'/>
        <Person name='Parameshwara' age='64'/>
      </div>
    );
  }
}

export default App;
