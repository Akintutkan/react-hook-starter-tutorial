import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users,setUsers] = useState ([]) //userlar için başalngıçta boş bir array ayarrlandı
  const getUsers = async() =>{ // fetch çağrısı yapıldı.
    const response = await fetch(url) // response değişkenine fetch url çekildi
    const users = await response.json() // users'a da çekilen fetch ögeleri aktarıldı
    setUsers(users)
   // console.log(users)
  }
  useEffect(() =>{
    getUsers()
  },[]) //Eğer dependency array eklenmezse buradaki kodda sonsuz döngü oluşur setuser getuser fonksiyonunda çalışır  o çalıştığı için tekrar set edilir get çalışır
  //dependency eklendiğinde bileşen oluşturulduktan sonra useeffect çalışır.
  return (
  <>
  <h3>Github Users</h3>
  <ul className='users'>{users.map((user) => { //users nesnesini mapladık 
const {id,login,avatar_url,html_url} =user // bu nesneyi destructuring yaptık
 return <li key={id}> 
 {/* her zaman key ister key'e de id verilir */}
  <img src={avatar_url} alt={login} />
  <div>
    <h4>{login}</h4>
    <a href={html_url}>Profile</a>
  </div>
</li>
  })}
  </ul>
  </>
)}

export default UseEffectFetchData
