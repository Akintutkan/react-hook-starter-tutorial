import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext()
//iki bileşen -provider,consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const kaldırılmışKişi = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{kaldırılmışKişi, people}}>
      <h3>Context Api /useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}
const List = ({ people}) => {
  const anaVeri = useContext(PersonContext)
  console.log(anaVeri)
  return (
    <>
      {anaVeri.people.map((person) => {
        return (
          <SinglePerson
            key={person.id} {...person}/>
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name,}) => {
const {kaldırılmışKişi} = useContext(PersonContext)
  //console.log(data)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => kaldırılmışKişi(id)}>kaldır</button>
    </div>
  )
}

export default ContextAPI
