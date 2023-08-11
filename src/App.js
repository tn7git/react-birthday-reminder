import React, { useState } from 'react'
import data from './data'
import List from './List'
import NewBD from './NewBD'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
      <section className='container' style={{ marginLeft : 50}}>
        <h3> New birthday</h3>
        <NewBD people={people} setPeople={setPeople}/>
        {/* <button>Add</button> */}
      </section>
    </main>
  )
}

export default App
