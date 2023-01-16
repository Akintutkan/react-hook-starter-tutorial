import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [user,setUser] = useState("default user")
// belirlediğimiz durumları state'ler olarak tuttuk
  useEffect(() =>{ // fetch çağrısı yaparken koşul ifadelerini effect hook'unun içinde oluşturduk
    fetch(url)
    .then((res) => {
if(res.status >= 200 && res.status <= 299){ // fetchteki hatalar genelde status hataları olduğu için //*2. ayarlama 
  return res.json() //eğer bu status araşığındaysa json çeksin değilse
}else{
  setIsLoading(false) //loading false olsun //!eğer url hatalı olursa error yazar
  setIsError(true) //error ise true olsun error göndersin 
  throw new Error(res.statusText)
}
    })
    .then((user)=> { // dataya erişim için 2. then'i kullandık //*1 ayarlama 
      const {login} = user //user nesnesinden login'i aldık login değeri nesnede quincy larson 
      setUser(login) //  burada user'ı setuser ile quincy larson  geldi.
      setIsLoading(false) // loading o zaman false olsun loading değeri gelmesin.
    })
    .catch((err)=> console.log(err)) // catch ile hatayı yakalayıp console yazdırdık.
  },[])
 if(isLoading){ //yukarıdaki state durumlarına göre return koşullarını ekledik is Loading true ise Loading dönsün
  return (
  <div>
    <h1>Loading...</h1>
    </div>
 )
}
 if(isError){ //isError true ise Error dönsün
  return (
  <div>
    <h1>Error...</h1>
    </div>
 )
}
  // return "hello world"
  return <div>
    <h1>{user}</h1>
  </div>;
};

export default MultipleReturns;
