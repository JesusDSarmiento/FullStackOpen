
const Header = (props) => {
  
 return <h1>{props.title}</h1>
}

const Part = (props) =>{

  return <p> {props.title} {props.nejercicios}</p>
}
const Content = (props) => {
  return (
  <div>
    <Part title = {props.title[0]} nejercicios = {props.ejercicios[0]}></Part>
    <Part title = {props.title[1]} nejercicios = {props.ejercicios[1]}></Part>
    <Part title = {props.title[2]} nejercicios = {props.ejercicios[2]}></Part>
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

      <Content title ={titulo} ejercicios={exercises}></Content>
  
      
      <Total ejercicios={exercises}></Total>
     
      
    </div>
  )
}

export default App
