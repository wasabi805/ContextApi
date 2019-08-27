import React, {useState} from 'react';
import uuid from 'uuid/v1';
import {ThemeContext} from "../contexts/ThemeContext";

const buttonStyle={
    textDecoration : 'none',
    padding : '2rem 3rem',
    background : 'grey',
    color: 'white',
    borderRadius : '5px',
    border: '1px solid black'
};
const BodyStyle={
    minHeight : "50vh",
    textAlign: 'center'
};
const partsStyle={
    minHeight: '30vh'
};


let partLoc = 0;

const Body =()=>{
    const contextType = ThemeContext;

    const [ parts , setParts ] = useState(
        [
            {id: uuid() ,name: "headers",},
            {id: uuid(), name : 'clutch',},
            {id: uuid(), name : 'cam shaft', },
            {id: uuid(), name : 'Air intake',}
            ]
    );


    const partWarehouse = ['sway bar', 'tires' , 'turbo' , 'pistons'];

    const getPart=()=>{
        if(partLoc === 4){
            partLoc = 0
        }

        let result   = partWarehouse[partLoc];
        partLoc = partLoc+1;
        return result
    };

    //CALL SET STATE IN A FUNCTION!
    const addPart=(e)=>{
        e.preventDefault();

        setParts(
            [...parts , {id: uuid(), name : getPart() } ]
        )

    };

    return(
        <section id={'section'} style={BodyStyle}>
            {/*Display State*/}
            <h1>Available parts</h1>
            <ul style={partsStyle}>
                {parts.map((part)=>{
                  return  <li key={part.id}  id={part.id} >
                      {part.name}
                  </li>
                })}
            </ul>

            <a href=""  style={buttonStyle}  onClick={addPart}>
                Add Part
            </a>


        </section>
    )
};

export default Body
