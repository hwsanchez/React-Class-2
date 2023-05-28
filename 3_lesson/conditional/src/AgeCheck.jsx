function AgeCheck({name, age}) {
  
  return (

    <>
    //The value 'Flash Gordon'will be used if name is undefined or empty
      <button>Hello {name || 'Flash Gordon'}! You are {age} years old.
        {age < 18 ? ' Dude, You are not allowed to drink alcohol.'
        :' What would you like to drink?'}</button>
      <br />
      
    </>


  )

}

export default AgeCheck