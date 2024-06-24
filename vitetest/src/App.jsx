import { useState } from 'react'


import './App.css'

function App() {
  const [name, setName] = useState("")

  const changeName = () => {
    setName("Wilson")
  }

  return (
    <>
      <div className='App'>
        <h1>Hola {name}</h1>
        <button onClick={() =>changeName()}>Change Name</button>
      </div>

    </>
  )
}

export default App
