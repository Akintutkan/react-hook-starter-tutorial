import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [name, setName] = useState('') //! her state ayrı ayrı yazmaktansa tek bir state
  // const [email, setEmail] = useState('')
  // const [age,setAge] = useState("")
  const [person, setPerson]=  useState({name:"",email:"",age:""})
  const [people, setPeople] = useState([])
const handleChange = (e) =>{
  const name= e.target.name
  const value= e.target.value // olayı dinliyoruz ve değerlere erişiyoruz on chance her çağrıldığında hedefin adını kontrol ediyoruz
  // input tag'ın içerisindeki name ve value property'leri
   setPerson({...person,[name]: value,}) //! köşeli parantez olmasaydı sadece input girişindeki tek name erişilirdi diğerlerine erişmezdi 
   //köşeli parantez ile handle change içerisindeki name'e erişildi yani buradaki name inputun içerisindeki name'de verilen ne ise 
   //ona erişmemizi sağlar
   
}
const handleSubmit = (e) =>{
  e.preventDefault()
  if(person.name && person.email && person.age){ //eğer bu 3 değer varsa formu gönder
const newPerson = {...person,id: new Date().getTime().toString()} // eski değerleri tuttuk
setPeople([...people,newPerson]) //people'ı tut ve new person ekle
setPerson({name:"",email:"",age:""}) // submit edildikten sonra hepsini boşalt
  }
}
  return (
    <>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age :</label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>Kişi ekle</button>
        </form>
        {people.map((person) => {
          const { id, name, email,age } = person
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>

            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
