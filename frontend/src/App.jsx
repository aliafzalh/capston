import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  useEffect(() => {
    try {
      async function getData() {
      const respose = await fetch('http://localhost:8080')
      const data = await respose.json()
      console.log(data)
    }
    } catch (error) {
      console.log(error)
    }

    
  })

  return (
    <>
    Hello (from frontend)

    </>
  )
}

export default App
