import { useMemo, useState } from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  
  return (
    <>
    <InputNumber />
    </>
  )

  function InputNumber(){

    return <div>
        <div>
            <h1>Login</h1>
        </div>
        <input type="number" placeholder="Enter number" onChange={(e)=>{
            setNumber(parseInt(e.target.value))
        }}/>
        <button onClick={genrate}>Send OTP</button>
    </div>
  }

  
}

export default App
