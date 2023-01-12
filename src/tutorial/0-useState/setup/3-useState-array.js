import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data) // import {useState} yazmadan Reacttan useState çağır yazdık
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id) // id'eşit olmayanları kaldır ! yerine = koysaydık bastığımızı tutardı
    //remove yerine handle ederdi
  setPeople(newPeople)  // sonra bunu set people ile çağır bu remove item fonksiyonunun aşağıda çağırdık
  }
  return (
  <>
  {people.map((person) => {
    const {id,name} = person // distructing useStateden aktarılan people maplendi ve people arrayi distructing yapıldı. 
    return( 
    <div key={id}  className="item">
      <h4> {name} </h4>
       <button onClick = {() => removeItem(id)}> Kaldır</button> {/*id'den yakalaması için burada içeri id çağırıldı */}
    </div>
    )
  })}
  <button className="btn" onClick={() => setPeople([])}>Temizle</button>
  </>
)
};

export default UseStateArray;
