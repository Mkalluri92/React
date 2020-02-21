import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



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


    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <Persons 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}
            persons={this.state.person}/>
      );
    }

    

    return (
        <div className={classes.App}>
          <Cockpit
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.person}
            clicked= {this.togglePersonsHandler}>
          </Cockpit>
          {persons}
        </div>
     
      
    )
  };
}

export default App;
