import React, { useEffect, useState } from 'react'
import "./a.css"
const App = () => {
  const [name,setName]=useState("pranav")
  useEffect(()=>{
    if (name==="Swaroop"){
    setName("Pranav")
  }
  else{
    setName("CRT")
  }

  },[setName])
  const [condition,setCondition]=useState(true)
  const click=()=>{
    setCondition(!condition)
  }
  
  return (
    <div>
      <h1>CSEC</h1>
      <h1>{name}</h1>
      {condition?<h1 className='p'>Present</h1>:<h1 className='a'>Absent</h1>}
      <button onClick={click}>Click</button>
    </div>
  )
}

export default App
