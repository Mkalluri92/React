import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
//import styled from 'styled-components';


/*
const StyleButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
}
`;
*/

class App extends Component {
  state = {
    person: [
      {id: 'as', name: 'mouni', age: 27},
      {id: 'asd', name: 'rajee', age: 31},
      {id: 'asdf', name: 'rajmo', age: 1}
    ],
    otherState: 'other one',
    showPersons: false
  };
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = personIndex => {
    //debugger
    //const persons = this.state.person.slice();
    const persons = [...this.state.person]
    persons.splice(personIndex, 1);
    this.setState({person: persons})
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    });

    const person =  {...this.state.person[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person: persons})
  }

  render() {

    /*
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    */

    let btnClass = '';

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((eachPerson, index) => {
            return <ErrorBoundary key={eachPerson.id}>
              <Person
                click={() => this.deletePersonHandler(index)} 
                name={eachPerson.name} 
                age={eachPerson.age}
                changed={(event) => this.nameChangeHandler(event, eachPerson.id)}/>
              </ErrorBoundary>
          })}
        </div>
      );

      /*
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'balck'
      }
      */

      btnClass = classes.Red;

    }

    let assignedClasses = [];

    if (this.state.person.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    } 

    if (this.state.person.length <= 1) {
      assignedClasses.push(classes.bold); //classes = [red, bold]
    }

    return (
     
        <div className={classes.App}>
          <h1>Hi, I'm a React</h1>
          <p className= {assignedClasses.join(' ')}>This is working</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>
              Toggle persons
          </button>
          {persons}
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