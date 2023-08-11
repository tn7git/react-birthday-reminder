import { useState } from 'react';
import React from 'react';
import data from './data';


const listBD = data.map(list => 
    <option value={list.age} key={list.id} >
        {list.name}
    </option>
);


function NewBD({people, setPeople}){
    const [inputs, setInputs] = useState({});
    const [selectedName, setSelectedName] = useState('name1');
    //const [peoples, setPeoples] = useState(data);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}));
    }

    const handleChangeBD = () =>{
        // const newRow = {id : data.length +1, name : inputs.name, age: inputs.year};
        // data.push(newRow);

        // peoples.id = peoples.length ;
        // peoples.age = inputs.year;
        console.log (people);


        setPeople({id : people.length +1, name : people.name, age: people.year});
    }

    const handleChangeSelect = (e) => {
        setSelectedName(e.target.value);
        // console.log(selectedName);
    }
    return (
        <>
            

            <input id='name' name='name' value={inputs.value} onChange={handleChange} placeholder='Name'> 

            </input>
            <input id='year' type='number' name='year' onChange={handleChange} min={1800} max={2023} placeholder='Born year' > 

            </input>
            <button onClick={handleChangeBD}>Add</button>

            <div style={{padding : 50}}>

            </div>

            <select onChange={handleChangeSelect}>{ listBD }</select>
            <h4> Born year:  {2023 -  selectedName }</h4>
            {/* <ul>{ listBD }</ul> */}
        </>
        
    );
}

export default NewBD;