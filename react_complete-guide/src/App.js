import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'mouni', age: 27},
      {name: 'rajee', age: 31},
      {name: 'rajmo', age: 1}
    ],
    otherState: 'other one',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    //this.state.person[0].name = 'mounika kalluri';
    //dont mutate state directly
    this.setState({
      person: [
        {name: newName, age: 28},
        {name: 'rajee', age: 31},
        {name: 'rajmo', age: 1}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {name: 'mouni', age: 27},
        {name: event.target.value, age: 31},
        {name: 'rajmo', age: 1}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
      <h1>Hi, I'm a React</h1>
      <h1>This is working</h1>
      <button 
        style= {style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
      { this.state.showPersons ?
        <div>
          <Person
            name={this.state.person[0].name} 
            age={this.state.person[0].age}/>
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(null,'rg')}
            changed={this.nameChangeHandler}>My Hobbies: Video Games</Person>
          <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age}/>
        </div> : null
      }
      
    </div>
    )
  };
}


/*

const app = (props) => {

  const [ this.state, setthis.state] = useState({
    person: [
      {name: 'mouni', age: 27},
      {name: 'rajee', age: 31},
      {name: 'rajmo', age: 1}
    ]
  });
  
  const [ otherState, othersState] = useState('other state');
  console.log(this.state, otherState);

  //console.log(setthis.state);

  const switchNameHandler = () => {
    //console.log('was clicked');
    //this.state.person[0].name = 'mounika kalluri';
    //dont mutate state directly
    setthis.state({
      person: [
        {name: 'mounika kalluri', age: 28},
        {name: 'rajee', age: 31},
        {name: 'rajmo', age: 1}
      ],
      tryNew: 'ok'
    })
  
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React</h1>
      <h1>This is working</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Video Games</Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React' ) )
} 

*/
export default App;
