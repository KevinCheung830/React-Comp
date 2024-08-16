import { useState } from "react"

 function Counter(){ 
    const [count,setCount]=useState(0)
     //count: Holds the current count value.
    //setCount: Function to update the count state.
   //useState(0): Initializes the count state variable to 0.
    function adjustCount(amount: number) {
    setCount(currentCount => {
        return currentCount+amount
    })
    
   }
    return(
    <>
        <button onClick = { () => adjustCount(-1) } >Dislike</button>
        <span>{count}</span> 
        <button onClick = { () => adjustCount(1) } >Like</button>
        
    </>
    
   )
}
export default Counter;