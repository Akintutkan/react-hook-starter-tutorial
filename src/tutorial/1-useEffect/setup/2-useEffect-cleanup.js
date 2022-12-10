import React, { useState, useEffect } from 'react'

// temizleme işlevi
// ikinci argüman
const UseEffectCleanup = () => {
  const [size,setSize]= useState(window.innerWidth)
  const checkSize = () =>{
    setSize(window.innerwith)
  }
  useEffect(() =>{
    window.addEventListener("resize", checkSize)
  })
  console.log(size)
  return (
  <>
  <h1>window</h1>
  <h2>{size} px</h2>
    </>
)
}

export default UseEffectCleanup
