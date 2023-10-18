import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav> 
    </>
  )
}

export default App
