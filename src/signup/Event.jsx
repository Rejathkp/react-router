import React from 'react'
import { Button } from 'react-bootstrap'


function Event() {
    const clcking = ()=>{
        console.log("hello world")
        alert("hi guys")
    }
    const hovr = ()=>{
        alert("Hovering")
    }
    
  return (
    <div>
        <Button onClick={clcking}>Click me</Button>
        <h3 onDoubleClick={clcking}>How do you do</h3>
        <input type='text'onChange={clcking}/>
        <h4 onMouseOver={hovr}>Mouseovering</h4>
       
    </div>
  )
}

export default Event