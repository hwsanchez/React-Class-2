// import { useState } from 'react'
import './App.css'
import Button from './Button'
import EditInfo from './EditInfo'
import Greet from './Greet'
import React from './React'
import ReadTheDocs from './ReadTheDocs'
import Vite from './Vite'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Vite />
        <React />
      </div>
      <Greet/>
      <div className="card">
          <Button />
          <EditInfo />
      </div>
      <ReadTheDocs />
    </>
  )
}

export default App
