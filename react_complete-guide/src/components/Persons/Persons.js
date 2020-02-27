import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component  {
    
    /*
    static getDerivedStateFromProps (props, state) {
        console.log('[persons.js] getDerviedStateFromProps');
        return state;
    }
    */

    componentDidMount() {
        console.log('Persons.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[persons.js] shouldComponentUpdate');
        if (nextProps.person !== this.props.person){
            return true
        }
        return false
    }

   
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[persons.js] getSnapshotBefpreUpdate');
        return { message: 'snapshot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[persons.js] componentWillUnmount');
    }
    render() {
        console.log('[persons.js] rendering....');
        return (this.props.persons.map((eachPerson, index) => { return (
                <Person click={() => this.props.clicked(index)} 
                name={eachPerson.name} 
                age={eachPerson.age}
                key={eachPerson.id}
                changed=
                    {(event) => this.props.changed(event, eachPerson.id)}/>
                )}
        ))
    } 
}

export default Persons;
