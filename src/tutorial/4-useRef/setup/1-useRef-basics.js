import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null) //varsayılan atadık
  const divContainer = useRef(null) 
  const handleSubmit=(e) =>{
    e.preventDefault()
    console.log(refContainer.current.value); // target yerine current
    console.log(refContainer.current);
  }
 useEffect(() => {
  console.log(refContainer.current.value)
  refContainer.current.focus() //inputa focuslaması için sayfa açıldığında inputta başlasın
  //use ref render'ı tetiklemediği için , dependency array eklemeye gerek yok
 })
  return( 
  <>
  <form className='form' onSubmit={handleSubmit}>
    <div>
      <input type="text" ref={refContainer}/> {/* ref vererek useRef hookunu burada kullanmış olduk */}
    </div>
    <button type="submit">Submit</button>
  </form>
  <div ref={divContainer}>Hello World</div>
  </>
)
}

export default UseRefBasics;
