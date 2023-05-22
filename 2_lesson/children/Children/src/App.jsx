import { useState } from 'react'
import './App.css'
import Paragraph from './Paragraph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Paragraph color='text-yellow'>Estos son</Paragraph>
      <Paragraph color='text-blue'>los colores</Paragraph>
      <Paragraph color='text-red'>de mi bandera!</Paragraph>
      <br></br>
      <Paragraph color='text-yellow'> <h1>Ve</h1></Paragraph>
      <Paragraph color='text-blue'> <h1>ne</h1></Paragraph>
      <Paragraph color='text-red'> <h1>zuela!</h1></Paragraph>
    </>
  )
}

export default App
