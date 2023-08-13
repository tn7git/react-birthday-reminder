import { useState } from 'react';
import React from 'react';
// import data from './data';





function NewBD({ people, addPeople }) {    

    const [inputs, setInputs] = useState({});
    const [selectedName, setSelectedName] = useState( 'name1' );
    //const [peoples, setPeoples] = useState(data);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }


    const handleChangeSelect = (e) => {
        setSelectedName(e.target.value);
        // console.log(selectedName);
    }

    const listBD = people.map(list =>        
        <option value={list.age} key={list.id} >
            {list.name}
        </option>        
    );
    
    // const firstBD = people[0].age;
    // setSelectedName( people[0].age );   
    // console.log(people[0].age);
    
    
    return (
        <>
            

            <input id='name' name='name' value={inputs.value} onChange={handleChange} placeholder='Name'> 

            </input>
            <input id='year' type='number' name='year' onChange={handleChange} min={1800} max={2023} placeholder='Born year' > 

            </input>
            <button onClick={() => {addPeople(inputs)}}>Add</button>

            <div style={{padding : 50}}>

            </div>

            <select onChange={handleChangeSelect}>{ listBD }</select>
            <p className='born-year'> Born year:  {2023 -  selectedName }</p>
            {/* <ul>{ listBD }</ul> */}
        </>
        
    );
}

export default NewBD;