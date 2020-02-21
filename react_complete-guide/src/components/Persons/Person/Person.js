import React from 'react';
//import styled from 'styled-components';
import classes from './Person.css';


//here no need of importing component as we rae not using any class which extends component


const Person = (props) => {

  return (
    <div className= "classes.Person">
      <p onClick= {props.click} >I'am {props.name} and I am {props.age} years old!</p> 
      <p>{props.children}</p>
      <input type='text' onChange= {props.changed} value= {props.name}></input>
      </div>
      
  )
}

//this jsx //meed to compile into React.createElement so need to import React

export default Person;
