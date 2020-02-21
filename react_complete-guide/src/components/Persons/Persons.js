import React from 'react';
import Person from './Person/Person';


const Persons = (props) => props.persons.map((eachPerson, index) => {
        return <Person
            click={() => props.clicked(index)} 
            name={eachPerson.name} 
            age={eachPerson.age}
            key={eachPerson.id}
            changed={(event) => props.changed(event, eachPerson.id)}/>
        });


export default Persons;