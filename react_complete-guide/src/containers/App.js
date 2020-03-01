import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';



class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    //in previous js we need to intialise the state here in constructor
    //as result of modern js we need do as below outsode the construtor
  }
  state = {
    person: [
      {id: 'as', name: 'mouni', age: 27},
      {id: 'asd', name: 'rajee', age: 31},
      {id: 'asdf', name: 'rajmo', age: 1}
    ],
    otherState: 'other one',
    showPersons: false,
    cockpitShow: true
  };




  static  getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDeviedStateFromProps', props);
    return state;
  }


 /*
  componentWillMount() {
    console.log('[App.js] component will mount');
  }
  */
  

  componentDidMount() {
    console.log('[App.js] component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = personIndex => {
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

     console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}
            persons={this.state.person}/>;
    }

    return (
        <WithClass classes={classes.App}>
          <button onClick = {() => {
            const show = this.state.cockpitShow
            this.setState({cockpitShow: !show})
          }}>cockpit button</button>
          {this.state.cockpitShow ? 
          <Cockpit
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLenght = {this.state.person.length}
            clicked= {this.togglePersonsHandler}>
          </Cockpit> : null }
          {persons}
        </WithClass>
      )
  };
}

export default App;
