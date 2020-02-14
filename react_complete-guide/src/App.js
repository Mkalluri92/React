import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  person: [
    {name: 'mouni', age: 27},
    {name: 'rajee', age: 31},
    {name: 'rajmo', age: 1}
  ]
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React</h1>
        <h1>This is working</h1>
        <button>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Video Games</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React' ) )
  } 
  
}

export default App;
