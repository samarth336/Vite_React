import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  function change(val){
    setColor(val.target.id)
  }

  return (
    <>
    <div className='main' style={{backgroundColor:color}}>
      <div className='options'>
        <ul style={{borderBottom:color=="yellow" || color=="white" ?'2px solid black':'2px solid white'}}>
          <li style={{backgroundColor:'black', color:'white',border:color=="black" ? '2px solid white':'none'}} id={"black"} onClick={change} >Black</li>
          <li style={{backgroundColor:'white', color:'black',border:color=="white" ? '2px solid black':'none'}} id={"white"} onClick={change}>White</li>
          <li style={{backgroundColor:'red', color:'white', border:color=="red" ? '2px solid white':'none'}} id="red" onClick={change}>Red</li>
          <li style={{backgroundColor:'green', color:'white',border:color=="green" ? '2px solid white':'none'}} id="green" onClick={change}>Green</li>
          <li style={{backgroundColor:'yellow', color:'black',border:color=="yellow" ? '2px solid black':'none'}} id="yellow" onClick={change}>Yellow</li>
          <li style={{backgroundColor:'blue', color:'white',border:color=="blue" ? '2px solid white':'none'}} id="blue" onClick={change}>Blue</li>
        </ul>
        <h1 style={{color:color=="black" || color=="blue" || color=="red" ? 'white':'black'}}>Samarth Patil</h1>
      </div>
    </div>
    </>
  )
}

export default App
