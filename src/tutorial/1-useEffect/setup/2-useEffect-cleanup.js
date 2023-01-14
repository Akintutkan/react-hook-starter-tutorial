import React, { useState, useEffect } from 'react'

// temizleme işlevi
// ikinci argüman
const UseEffectCleanup = () => {
  const [size,setSize]= useState(window.innerWidth)
  const checkSize = () =>{
    setSize(window.innerWidth) //check size'da window.innerWidth çalıltırsn
  }
  useEffect(() =>{
    console.log("useeffect")
    window.addEventListener("resize", checkSize) //window her resize olduğunda checksize'ı çalıştır ve her değişiklikte effect hooku çalışır
  // return () => {
  //   console.log("cleanup")
  //   window.removeEventListener("resize",checkSize) // iki callback arasında temizleme işlemi yapıldı
  // }
  },[])
   console.log("render")
  return (
  <>
  <h1>window</h1>
  <h2>{size} px</h2>
  </>
)
}

export default UseEffectCleanup
