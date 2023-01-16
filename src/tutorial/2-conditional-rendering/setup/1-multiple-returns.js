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
if(res.status >= 200 && res.status <= 299){
  return res.json()
}else{
  setIsLoading(false)
  setIsError(true)
  throw new Error(res.statusText)
}
    })
    .then((user)=> {
      const {login} = user
      setUser(login)
      setIsLoading(false)
    })
    .catch((err)=> console.log(err))
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
