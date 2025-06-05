import { useState } from "react"
import BirthdayCards from "./BirthdayCards"
import './Input.css';

const Input = ()=>{

    const [name, setName] = useState("")
    const [showCard, setShowcard] = useState(false)


    return <div>
        <div>
            <h2>Enter your name</h2>
            <input type="text" placeholder="Enter your name" onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <br /><br />
            <div>
                <button style={{
                    backgroundColor: "#fffff",
                    borderRadius: "25px",
                    

                }} onClick={()=>{
                    if(name.trim()===""){
                    alert("please give a name")
                    }else{
                        setShowcard(true)
                    }
                }}>Done</button>
            </div>
        </div>
        <div>
                {showCard && <BirthdayCards name={name}/>}
            </div>
    </div>
}

export default Input