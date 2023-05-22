import { useState } from 'react'
import './App.css'
import GreetButton from './GreetButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <GreetButton name="Rikiti" age="12" />
      <GreetButton name="Rikifli" age="9" />
      <GreetButton name="Kothann" age="19" />
      <GreetButton name="Pippppi" age="14" />
    </>
  )
}

export default App
