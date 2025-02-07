
const Header = (props) => {
  
 return <h1>{props.title}</h1>
}


const Content = (props) => {
  return (
  <div>
  <p> {props.title} {props.ejercicios}</p>
  </div>
  )

  
}


const Total = (props) => {


  return <p>Number of exercises {props.ejercicios[0] + props.ejercicios[0] + props.ejercicios[0]}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const titulo = ['Fundamentals of React','Using props to pass data','State of a component']
  const exercises = [10,7,14]
  //const sum = exercises[0]+exercises[1]+exercises[2]

  return (
    <div>
      <Header title = {course}></Header>

      <Content title ={titulo[0]} ejercicios={exercises[0]}></Content>
      <Content title ={titulo[1]} ejercicios={exercises[1]}></Content>
      <Content title ={titulo[2]} ejercicios={exercises[2]}></Content>
      
      <Total ejercicios={exercises}></Total>
     
      
    </div>
  )
}

export default App
