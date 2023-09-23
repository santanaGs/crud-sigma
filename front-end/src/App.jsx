import { useEffect, useState } from 'react'

import axios from 'axios'
import { Main } from './components/Main'

function App() {

  // const headers = {
  //   'headers': {
  //     'Content-Type': 'application/json'
  //   }
  // }
  // const [teste, setTeste] = useState({})

  // const [data, setData] = useState({
  //   firstName: "Aluno cadastrado no front",
  //   lastName: "Santana",
  //   email: "gabriel.santana@uscsonline.com.br",
  //   age: 20,
  //   class: "3BN",
  //   registration: 123456
  // })

  // useEffect(() => {
  //   axios.post('http://localhost:3000/createUser', data, headers).then((res) => { console.log('conectado') }).catch((err) => { console.log(err) })
  // }, [])

  // useEffect(() => {
  //   axios.get('http://localhost:3000/students').then((res) => {
  //     console.log('aaaaaa', teste)
  //     setTeste(res.data);
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // },[])


  return (
    <>
      <Main/>
    </>
  )
}

export default App
