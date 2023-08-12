import React from 'react';

const List = ({ people, removePeople }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>              
            </div>
            <p><button onClick={()=>removePeople(id)}>Delete</button></p>
          </article>
        );
      })}
    </>
  );
};

export default List;
