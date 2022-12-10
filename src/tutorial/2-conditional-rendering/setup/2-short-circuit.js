import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
const [text,setText] = useState("")
const [isError,setIsError] = useState(false)
// const firstValue = text || "hello World"
// const secondValue = text && "Hello World"
// console.log(secondValue)

  return (
  <>
  <h1>{text || "Akın"}</h1>
  <button className="btn" onClick={() => setIsError((s)=> !s)}>Toggle Error</button>
  {isError && <h1>Error...</h1>}
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
