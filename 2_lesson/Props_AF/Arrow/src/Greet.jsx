//Instead of the traditional function declaration for the component,
//here we are using an Arrow Function instead. The first example is the classic Arrow function style,
//The second example is using object de-structuring (Javascript functionality), in which we can avoid using props as a prefix for every property:

// 1rst Example (Classic Arrow function):

// const Greet = (props) => {
//   return (
//     <p>Hola {props.name}! Your hair color is: {props.hairColor}.</p>
//   )
// }

// 2nd Example (whith object de-structuring):

const Greet = ({ name, hairColor }) => {
  return (
    <p>Hola {name}! jajajaj! Your hair color is: {hairColor}.</p>
  )
}

export default Greet

