 import { useState } from "react"

 function Counter(){

  let [counter , setCounter] = useState(0)

    const  addNumber = () => {
         if(counter < 20){
     counter = counter + 1
         }
      setCounter(counter)
       }

    const removeNumber = () => {
     if(counter > 0 ){
      setCounter(counter => counter > 0 ? counter - 1 : counter)
      counter = counter - 1
      setCounter(counter)
 }
    }


    return(
        <>
        <center>
         <h1>This is my counter </h1>
         <h3>Count Number : {counter}</h3>
         <br />
         <button onClick={addNumber}>Add value </button>
         <br />
         <button onClick={removeNumber}>remove value</button>
        </center>

        </>
    )
 }
 export default Counter