import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })



  return (

    <>
      <h1>chai aur react </h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((jokes, index) => {
          return <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        })
      }



    </>
  )
}


export default App
