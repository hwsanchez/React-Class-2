
import './App.css'

function App() {
  
  const hijos = [
    { name: 'Amie', gender: 'f', id: 1 },
    { name: 'Evan', gender: 'm', id: 2 },
    { name: 'Nicole', gender: 'f', id: 3 },
    { name: 'Gail', gender: 'f', id: 4 },
  ];

  const childrenList = hijos.map(hijo =>
    <li key={hijo.id}
      style={{ color: hijo.gender == 'f' ? 'pink' : 'blue' }}>
      {hijo.name}
    </li>
  );
  //Notice that the double curly bracets are not a special React notation, but a regular object 
  //inside the style={} JSX curly braces

  return (
    <>
      <ul>{childrenList}</ul>
      
    </>
  );
}

export default App;
