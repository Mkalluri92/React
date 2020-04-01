import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/aux';
import withClass from '../../../hoc/withClass';
import { ThemeConsumer } from 'styled-components';


class Person extends Component {
  constructor(props) {
    super(props);
    this.elementValRef = React.createRef();
    //React.createRef() creates reference to the elements
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.elementValRef.current.focus();
  }

  render(){
    console.log('[person.js] rendering');
      return (
        <Aux>
          <p onClick= {this.props.click} >
            I'am {this.props.name} and I am {this.props.age} years old!
          </p>
          <p key={"i2"}>{this.props.children}</p>
          <input key={"i3"}
            //ref = {(inputEl) => this.inputElement = inputEl}
            ref = {this.elementValRef}
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
