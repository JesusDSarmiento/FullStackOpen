
const Header = (props) => {
  
 return <h1>{props.title}</h1>
}
/*
const Part = (props) =>{

  return <p> {props.title} {props.nejercicios}</p>
}*/
const Content = (props) => {
  return (
  <div>
  <p> {props.title} {props.ejercicios}</p>
    {/* <Part title = {props.title[0]} nejercicios = {props.ejercicios[0]}></Part>
    <Part title = {props.title[1]} nejercicios = {props.ejercicios[1]}></Part>
    <Part title = {props.title[2]} nejercicios = {props.ejercicios[2]}></Part> */}
  </div>
  )

  
}


const Total = (props) => {


  return <p>Number of exercises {props.ejercicios[0] + props.ejercicios[0] + props.ejercicios[0]}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 =  {name:'Fundamentals of React', exercises: 10 }
  const part2 = {name:'Using props to pass data', exercises: 7}
  const part3 = {name:'State of a component', exercises: 14}
  const exercises = [10,7,14]
  //const sum = exercises[0]+exercises[1]+exercises[2]

  return (
    <div>
      <Header title = {course}></Header>

      <Content title ={part1.name} ejercicios={part1.exercises}></Content>
      <Content title ={part2.name} ejercicios={part2.exercises}></Content>
      <Content title ={part3.name} ejercicios={part3.exercises}></Content>
  
      
      <Total ejercicios={exercises}></Total>
     
      
    </div>
  )
}

export default App
