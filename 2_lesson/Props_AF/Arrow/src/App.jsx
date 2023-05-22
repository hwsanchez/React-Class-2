import { useState } from 'react'
import './App.css'
import Greet from './Greet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Greet name='Nerra' hairColor='brown' />
     <Greet name='Amie' hairColor='black' />
     <Greet name='Pippi' hairColor='brown' />
     <Greet name='Toti' hairColor='black' />
     <Greet name='Bolditis' hairColor='black' />
     <Greet name='Maya' hairColor='white, grey and brownish' />
    </>
  )
}

export default App
