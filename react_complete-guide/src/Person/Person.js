import React from 'react';

//here no need of importing component as we rae not using any class which extends component


const person = (props) => {
  return (
    <div>
      <p onClick= {props.click} >I'am {props.name} and I am {props.age} years old!</p> 
      <p>{props.children}</p>
    </div>
      
  )
}

//this jsx //meed to compile into React.createElement so need to import React

export default person;
