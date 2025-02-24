import { useState } from 'react'

const Header = (props) => {
  
 return <h3>{props.title.name}</h3>
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

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  return (
    <div>
    <h1>Ejercicios Part 1</h1>
    <h2>Ejercicios 1.1. - 1.5.</h2>

      <Header title = {course}></Header>

      <Content partes ={course}></Content>  
      
      <Total ejercicios={course}></Total>

    <h2>Ejercicios 1.6. - 1.14.</h2>
     
    <div>
      <h2>Give FeedBack</h2>

      <button onClick={()=>setGood(good + 1)}>good</button>
      <button onClick={()=>setNeutral(neutral + 1)}>neutral</button>
      <button onClick={()=>setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>


    </div>
      
    </div>
  )
}

export default App
