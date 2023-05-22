function AgeCheck({name, age}) {
  
  return (

    <>
    
      <button>Hello {name || 'Flash Gordon'}! You are {age} years old.
        {age < 18 ? ' Dude, You are not allowed to drink alcohol.'
        :' What would you like to drink?'}</button>
      <br />
      
    </>


  )

}

export default AgeCheck