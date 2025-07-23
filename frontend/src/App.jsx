import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    async function getData() {
    try {
      const respose = await fetch('http://localhost:8080/todos')
      const data = await respose.json()

      console.log(data)
      setTodos(data)
    }catch (error) {
      console.log(error)
    }

  }
    getData()
    
  }, [])
  console.log(todos)

  return (
    <>
    <h1>Hello (from frontend)</h1>

    </>
  )
}

export default App


