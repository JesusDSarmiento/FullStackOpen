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

const TotalEjercicios = (props) => {


  return <div> <br /> <p>Number of exercises: {props.ejercicios.parts[0].exercises + props.ejercicios.parts[1].exercises + props.ejercicios.parts[2].exercises}</p></div>
}

const App = () => {

  const course = {
    name:'Half Stack application development',
    parts:  [{name:'Fundamentals of React', exercises: 10 },{name:'Using props to pass data', exercises: 7},{name:'State of a component', exercises: 14}]
  }

    const [comments, setComments] = useState({
      good: 0,
      bad: 0,
      neutral:0,
    });
 
    const [total, setTotal] = useState([])


    const clicsGood = () =>{
      const newComments = {
        ...comments,
        good: comments.good + 1,
      }
      setComments(newComments);
      setTotal((prevTotal)=>[...prevTotal, 'G']);
    };
    const clicsBad = () =>{
      const newComments = {
        ...comments,
        bad: comments.bad + 1,
      }
      setComments(newComments);
      setTotal((prevTotal)=>[...prevTotal, 'B']);
    }
    const clicsNeutral = () =>{
      const newComments = {
        ...comments,
        neutral: comments.neutral + 1,
      }
      setComments(newComments);
      setTotal((prevTotal)=>[...prevTotal, 'N']);
    }

    const resultG = total.filter((word) => word === 'G');
    const resultB = total.filter((word) => word ==='B');
    const promedio = ((resultG.length*1)+(resultB.length*(-1)))/total.length;
    const positivo = (resultG.length/total.length)*100;

  

  return (
    <div>
    <h1>Ejercicios Part 1</h1>
    <h2>Ejercicios 1.1. - 1.5.</h2>

      <Header title = {course}></Header>

      <Content partes ={course}></Content>  
      
      <TotalEjercicios ejercicios={course}></TotalEjercicios>

      <br />
    <h2>Ejercicios 1.6. - 1.14.</h2>
    
    <div>
      <h2>Give FeedBack</h2>

      <button onClick={clicsGood}>good</button>
      <button onClick={clicsNeutral}>neutral</button>
      <button onClick={clicsBad}>Bad</button>
      <br />

      <h2>Statistics</h2>

      <p>Good: {comments.good} </p>
      <p>Neutral: {comments.neutral} </p>
      <p>Bad: {comments.bad} </p>
      <p>Total: {total.length}</p>
      <p>Promedio: {promedio}</p>
      <p>Positivo: {positivo} %</p>



    </div>
      
    </div>
  )
}

export default App
