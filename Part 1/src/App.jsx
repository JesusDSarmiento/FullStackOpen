
const Header = (props) => {
  
 return <h1>{props.title.name}</h1>
}

const Part = (props) =>{
  return <p> {props.title} {props.nejercicios}</p>
}
const Content = (props) => {
  return (
  <div>

    <Part title = {props.partes.parts[0].name} nejercicios = {props.partes.parts[0].exercises}></Part>
    <Part title = {props.partes.parts[1].name} nejercicios = {props.partes.parts[1].exercises}></Part>
    <Part title = {props.partes.parts[2].name} nejercicios = {props.partes.parts[2].exercises}></Part>

  </div>
  )

  
}


const Total = (props) => {


  return <div> <br /> <p>Number of exercises: {props.ejercicios.parts[0].exercises + props.ejercicios.parts[1].exercises + props.ejercicios.parts[2].exercises}</p></div>
}

const App = () => {

  const course = {
    name:'Half Stack application development',
    parts:  [{name:'Fundamentals of React', exercises: 10 },{name:'Using props to pass data', exercises: 7},{name:'State of a component', exercises: 14}]
  }
  //const sum = exercises[0]+exercises[1]+exercises[2]

  return (
    <div>
      <Header title = {course}></Header>

      <Content partes ={course}></Content>  
      
      <Total ejercicios={course}></Total>
     
      
    </div>
  )
}

export default App
