import React, { useState } from "react"
import './app.css'

function App() {

  const [count, setCount] = useState(0)
  const [para, setPara] = useState("  ")

  return (
  <div>
    <Heading/>
    <Input setPara={setPara} setCount={setCount} count={count}/>
    <ParaDisplay para={para}/>
  </div>
  )
}

function Input({setPara, setCount, count}){
  return <div> 
    <input type="number" placeholder="Enter the number of words" onChange={(e)=>{
      setCount(parseInt(e.target.value))
    }}/>
    <button onClick={() => {
          setPara(generatePara(count));  
        }}>Generate</button>
</div>
}

function generatePara(count){
  // Function to generate a random word
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
   return result.trim();;
}



function Heading(){
  return <div>
  <h1>Para Genrator</h1>
  </div>
}

function ParaDisplay({para}) {
  return (
    <div>
      <p>{para}</p> 
    </div>
  );
}
export default App
