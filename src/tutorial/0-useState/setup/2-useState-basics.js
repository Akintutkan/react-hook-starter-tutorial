import React, {Fragment, useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState("Hello World"))
  // const değer = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(değer,handler)
  const[text,setText]  = useState("Rastgele başlık") // useState Hooku 2 parametre alır biri durum diğeri de durumu değiştiren fonksiyon
  // bu durum bir string bir sayı bir array olabilir yukarıdaki 5-6 satırlar gibi yazmaktansa 8 deki gibi yazabiliriz.
  // Hooku 2. satırda yani fonksiyonundışında ya da bir koşul ifadesinin içerisinde çağıramayız
  const handleClick = () => {
   if(text === "Rastgele başlık") {
    setText("selam Millet") //text rastgele başlıksa Selam millet yap
  }else{
    setText("Rastgele başlık") // değilse Rastgele başlık olarak değiştir
  } 
}
  return (
  <Fragment> 
    <h1>{text}</h1>
    <button className= "btn" onClick={handleClick}>
      Başlığı Değiştir
    </button>
    </Fragment>);
};

export default UseStateBasics;
