import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [ personsState, setPersonsState] = useState({
    person: [
      {name: 'mouni', age: 27},
      {name: 'rajee', age: 31},
      {name: 'rajmo', age: 1}
    ]
  });
  
  const [ otherState, othersState] = useState('other state');
  console.log(personsState, otherState);

  //console.log(setPersonsState);

  const switchNameHandler = () => {
    //console.log('was clicked');
    //this.state.person[0].name = 'mounika kalluri';
    //dont mutate state directly
    setPersonsState({
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
      <Person name={personsState.person[0].name} age={personsState.person[0].age}/>
      <Person name={personsState.person[1].name} age={personsState.person[1].age}>My Hobbies: Video Games</Person>
      <Person name={personsState.person[2].name} age={personsState.person[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React' ) )
} 

export default app;
