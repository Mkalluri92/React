import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        //combines both componentDidMount and DidUpdate
        //you can make http request here    
        // const timer = setTimeout(() => {
        //    alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return (() => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleanup');
        })
    }, [])

    useEffect(() => {
        console.log('[cockpit.js] 2nd useeffect');
    })

    let assignedClasses = [];
    let btnclass = '';

    if (props.showPersons){
        btnclass = classes.Red;
    }
    

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    } 

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); //classes = [red, bold]
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className= {assignedClasses.join(' ')}>This is working</p>
            <button 
                className= {btnclass} 
                onClick= {props.clicked}
                ref = {toggleBtnRef}>
                Toggle persons
            </button>
                {<button onClick= {authContext.login}>login</button>}
        </div>
)}

export default React.memo(cockpit);
    