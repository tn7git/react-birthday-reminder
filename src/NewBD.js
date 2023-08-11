import { useState } from 'react';
import React from 'react';
import data from './data';





function NewBD(props){
    const [inputs, setInputs] = useState({});
    //const [peoples, setPeoples] = useState(data);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}));
    }

    const handleChangeBD = () =>{
        const newRow = {id : data.length +1, name : inputs.name, age: inputs.year};
        data.push(newRow);

        // peoples.id = peoples.length ;
        // peoples.age = inputs.year;
        console.log (data);
    }

    return (
        <>
            <input id='name' name='name' value={inputs.value} onChange={handleChange} placeholder='Name'> 

            </input>
            <input id='year' type='number' name='year' onChange={handleChange} min={1800} max={2023} placeholder='Born year' > 

            </input>
            <button onClick={handleChangeBD}>Add</button>
        </>
        
    );
}

export default NewBD;