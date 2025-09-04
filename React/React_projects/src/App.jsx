
import { useCallback, useState } from 'react'
import './App.css'

function App() {
const [length , setLength] = useState(8);
const [number ,setNumber] = useState(false);
const [charcter , setCharcter] = useState(false);
const [password , setPassword] = useState('');


const passwordGenrater = useCallback(()=>{
  let pass = '' ;
  let strined = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' ;
  if (number) strined += "0123456789"
  if (charcter) strined += "@#$%^&*{}!~"
    
for (let i = 1; i <= array.length; i++) {
  const char = Math.floor(Math.random() * strined + 1)
  pass.strined.charAt(char)
  
}
  setPassword(pass)
} , [length , number , charcter , setPassword])

  return (
    <>
   <h1>Password Generatore</h1>
      <div>
        <br />
        <div style={{backgroundColor: "white" ,color: "black" ,margin:"20px", borderRadius: "6px" , height: "40px" , 
          textAlign: "center" ,fontSize: "25px"}}>
          <input type="text"  
          value={password}
          placeholder='Password Generatore'
          readOnly/>
          <button style={{height: "2.5rem" ,backgroundColor :"blue",width:"5.3rem", fontSize:"17px" ,
             textAlign: "center"}}>copy</button>
        
          <br />
         

      </div>
        <br />
        <div>
          <div>

            <input type="range" 
            min={6} 
            max={100}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>length : {length}</label>

          </div>
        <div></div>
        </div>
      </div>
    </>
  )
}

export default App
