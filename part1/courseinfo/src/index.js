import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const App = () => { 
  
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  const suma = exercises1+exercises2+exercises3
  return (
    <div>
      <Header course='Half Stack application development'/> 
      <Content part1='Fundamentals of React'/>  
      <Content exercises1='10'/>
      <Content part2='Using props to pass data'/>
      <Content exercises2='7'/>
      <Content part3='State of a component'/>
      <Content exercises3='14'/>
      <Total suma={suma}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
