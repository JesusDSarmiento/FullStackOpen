
const Header = (props) => {
  
 return <h1>{props.title}</h1>
}

const Part = (props) =>{

  return <p> {props.title} {props.nejercicios}</p>
}
const Content = (props) => {
  return (
  <div>

    <Part title = {props.partes[0].name} nejercicios = {props.partes[0].exercises}></Part>
    <Part title = {props.partes[1].name} nejercicios = {props.partes[1].exercises}></Part>
    <Part title = {props.partes[2].name} nejercicios = {props.partes[2].exercises}></Part>


  </div>
  )

  
}


const Total = (props) => {


  return <p>Number of exercises {props.ejercicios[0] + props.ejercicios[0] + props.ejercicios[0]}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts =  [{name:'Fundamentals of React', exercises: 10 },{name:'Using props to pass data', exercises: 7},{name:'State of a component', exercises: 14}]
  const exercises = [10,7,14]
  //const sum = exercises[0]+exercises[1]+exercises[2]

  return (
    <div>
      <Header title = {course}></Header>

      <Content partes ={parts}></Content>  
      
      <Total ejercicios={exercises}></Total>
     
      
    </div>
  )
}

export default App
