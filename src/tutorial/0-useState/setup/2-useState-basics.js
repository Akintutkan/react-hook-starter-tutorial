import React, {Fragment, useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState("Hello World"))
  // const değer = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(değer,handler)
  const[text,setText]  = useState("Rastgele başlık")
  const handleClick = () => {
   if(text === "Rastgele başlık") {
    setText("selam Millet")
  }else{
    setText("Rastgele başlık")
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
