import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('white')

  const changeColor = (color)=>{
    setBgColor(color);
  }
  return (
    <>
    <div className="app-container" style={{backgroundColor: bgColor}}>
      <DiffrentColours changeColor={changeColor}/>
    </div>
    </>
  )
}

function DiffrentColours({changeColor}){
  return (
    <div className="button-container">
      <button className="color-button orange" onClick={()=>{changeColor("orange")}}>orange</button>
      <button className="color-button red" onClick={()=>{changeColor("red")}}>red</button>
      <button className="color-button blue" onClick={()=>{changeColor("blue")}}>blue</button>
      <button className="color-button green" onClick={()=>{changeColor("green")}}>green</button>
      <button className="color-button brown" onClick={()=>{changeColor("brown")}}>brown</button>
      <button className="color-button gray" onClick={()=>{changeColor("gray")}}>gray</button>
    </div>
  )
}
export default App
