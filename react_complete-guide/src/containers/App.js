import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/aux';
import AuthContext from '../context/auth-context';



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
    cockpitShow: true,
    changeCounter: 0,
    authenticated: false
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

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    })
   const person =  {...this.state.person[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {person: persons,
              changeCounter: prevState.changeCounter + 1};
    })
      
    
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
        <Aux>
          <button onClick = {() => {
            const show = this.state.cockpitShow
            this.setState({cockpitShow: !show})
          }}>cockpit button</button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}>
            {this.state.cockpitShow ? 
            <Cockpit
              title = {this.props.appTitle}
              showPersons = {this.state.showPersons}
              personsLenght = {this.state.person.length}
              clicked= {this.togglePersonsHandler}>
            </Cockpit> : null }
            {persons}
          </AuthContext.Provider>
        </Aux>
      )
  };
}

export default withClass(App, classes.App);
