import React, { useState, useEffect } from 'react'
// varsayılan olarak her yeniden oluşturma işleminden sonra çalışır
// temizleme işlevi
// ikinci parametre
// hooklar koşullu olarak çağrılamazlar
const UseEffectBasics = () => {
  const [value,setValue] = useState(0) // useState renderlar arası değeri korur ve rerender'a tetikler
  
  useEffect(() =>{ // koşulun içine koyamayız koşulu hookun içine yapabiliriz
    // useEffect içine tıklandığında bir fonksiyon eklenebilir birden çok useEffect çalıştırılabilir
    //her useeffectin farklı farklı işlevleri olabilir
    console.log("useeffect çağırın")
if( value >= 1){
    document.title =`Yeni mesajlar(${value})`
  }
},[value]) // dependency array'in içindeki değere göre useEffecti çalıştır. butona verdiğimiz value değerine göre
//butona her tıklandığında useEffecti çalıştır.

  console.log("bileşen işlendi")
  return (
    <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=> setValue(value + 1)}>Tıkla!</button>
    </>
  )
}

export default UseEffectBasics
