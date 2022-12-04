import React, { useState } from 'react';

const UseStateObject = () => {
  const [name,setName] = useState("murat")
  const [age,setAge] = useState(36)
  const [message,setMessage] = useState("rastgele mesaj")
  const changeMessage =() =>{
    //setPerson({...person, message : "hello world" })
  setMessage("hello World")
  
  }
  return (<>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className="btn" onClick={changeMessage}>
    mesajı değiştir
  </button>
  </>
  )
};

export default UseStateObject;
