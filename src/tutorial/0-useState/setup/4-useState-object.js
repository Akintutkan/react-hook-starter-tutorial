import React, { useState } from 'react';

const UseStateObject = () => {
  const [name,setName] = useState("murat")
  const [age,setAge] = useState(36)
  const [message,setMessage] = useState("rastgele mesaj")
  //const [person,setPerson] = useState({name:"akın",age:28,message:" selamlar"}) tek bir objeyi bir state kullanarak saklayabiliriz
  const changeMessage =() =>{
    //setPerson({...person, message : "hello world" }) ve eğer personda sadece message değiştirilecekse bu kullanılır diğer özellikler değişmeyecekse
    //spread operatörü kullanılmalı
  setMessage("hello World")
  
  }
  return (<>
   <h3>{name}</h3> {/*person objesini çağırmak için person.name person.age person.message kullanmalı */}
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className="btn" onClick={changeMessage}>
    mesajı değiştir
  </button>
  </>
  )
};

export default UseStateObject;
