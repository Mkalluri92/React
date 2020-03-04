import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/aux';
import withClass from '../../../hoc/withClass';


class Person extends Component {
  render(){
    console.log('[person.js] rendering');
      return (
        <Aux>
          <p onClick= {this.props.click} >
            I'am {this.props.name} and I am {this.props.age} years old!
          </p>
          <p key={"i2"}>{this.props.children}</p>
          <input key={"i3"}
            type='text' 
            onChange= {this.props.changed} 
            value= {this.props.name}>
          </input>
        </Aux>
      )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person) ;
