import AgeCheck from './AgeCheck'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Age check</h1>
      //We use {} for number props and '' for strings
      <AgeCheck name='John' age={15} />
      <AgeCheck name='Otto' age={30} />
      <AgeCheck name='Peter' age={22} />
      <AgeCheck name='' age={20} />
      
    </>
  )
}

export default App
