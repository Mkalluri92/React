import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        //combines both componentDidMount and DidUpdate
        //you can make http request here    
        const timer = setTimeout(() => {
           alert('Saved data to cloud');
        }, 1000);
        return (() => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup');
        })
    }, [])

    let assignedClasses = [];
    let btnclass = '';

    if (props.showPersons){
        btnclass = classes.Red;
    }
    

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    } 

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = [red, bold]
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className= {assignedClasses.join(' ')}>This is working</p>
            <button 
                className= {btnclass} 
                onClick= {props.clicked}>
                Toggle persons
            </button> 
        </div>
)}

export default cockpit;
    