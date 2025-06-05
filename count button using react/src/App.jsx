import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0); // [1, 2]

  return (
    // <div>
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //      </div>
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){
   
  function onClickHnadler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHnadler}>
    Counter {props.count}
  </button>
}
export default App
