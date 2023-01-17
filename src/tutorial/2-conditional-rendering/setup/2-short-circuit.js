import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
const [text,setText] = useState("")
const [isError,setIsError] = useState(false)
// const firstValue = text || "hello World" text false olursa first valueden
// const secondValue = text && "Hello World" text true ise 2. değerden çıkar
// console.log(secondValue)

  return (
  <>
  <h1>{text || "Akın"}</h1> {/* text değeri falsy olduğu için değer akın olarak döner */}
  <button className="btn" onClick={() => setIsError((s)=> !s)}>Toggle Error</button>
  {/* true ise false false ise true'ya çevir yaptık setisError'ün içini eğer içine !isError koyulursada olur ama callback içerisine konulması mantıklı*/}
  {isError && <h1>Error...</h1>} {/* if else kullanamazsın ternary kullanavbilirisin hata varsa Error ver*/ }
  {isError ?<p>Hata var...</p>
  :(
    <div>
<h2>Hata yok</h2>
    </div>
  )}
  {/* {text && <h1>Hello world</h1>}
  {!text && <h1>Hello world</h1>} */}
  {/* <h1>{firstValue}</h1>
  <h1>value:{secondValue}</h1> */}
  </>
)};

export default ShortCircuit;
