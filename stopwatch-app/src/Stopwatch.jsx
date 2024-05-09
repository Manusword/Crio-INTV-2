import React, { useRef, useState } from 'react'

function Stopwatch() {
  const[time,setTime]= useState(0)
  const[status,setStatus]= useState(true);
  const timeInterval = useRef(null)
  
  const handleStart = ()=>{
    if(status){
      timeInterval.current = setInterval(()=>{
        setTime(pre=>pre+1)
      },1000);
      setStatus(false)
    }
    else{
      clearInterval(timeInterval.current);
      setStatus(true);
    }
  }

  const handleReset = ()=>{
    setTime(0)
    setStatus(true)
    clearInterval(timeInterval.current);
  }

  return (
    <div style={{
      "display":"flex",
      "alignItems":"center",
      "justifyContent":"center",
      "flexDirection":"column"
    }}>
        <h2>Stopwatch</h2>
        <p>Time: {time}</p>
        <div>
          <button onClick={handleStart}>{status?"Start":"Stop"}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch;