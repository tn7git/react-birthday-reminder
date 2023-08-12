import React, { useState } from 'react'
import data from './data'
import List from './List'
import NewBD from './NewBD'

function App() {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    const newPeople = people.filter((aPeople) => aPeople.id !== id);
    setPeople(newPeople);
  }
  const addPeople = (inputs) => {
    // const newPeople = {
    //   ...people,
    //     inputs
    //     // { id: people.length + 1, name: inputs.name, age: inputs.year, image: '' }
    // }

    setPeople(current => [...current, { id: people.length+1, name: inputs.name, age: 2023-inputs.year, image:'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg' }]);
    console.log(people, inputs);
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} removePeople={removePeople} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
      <section className='container' style={{ marginLeft : 50}}>
        <h3> New birthday</h3>
        <NewBD people={people} addPeople={addPeople}/>
        {/* <button>Add</button> */}
      </section>
    </main>
  )
}

export default App
