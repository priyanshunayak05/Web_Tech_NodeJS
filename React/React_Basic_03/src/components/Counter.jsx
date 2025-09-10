import { useState } from "react"

function Counter(){
    let [count,setCount]=useState(0)
    function handleInc(){
        setCount(count+1)
    }
    function handleDec(){
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={handleDec}>Dec</button>
            <h1>Count: {count}</h1>
            <button onClick={handleInc}>Inc</button>
        </div>
    )
}
export default Counter;