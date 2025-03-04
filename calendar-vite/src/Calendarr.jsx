import React, { useState } from 'react'
import Calendar from "react-calendar";

const Calendarr = ()=> {

    const [date,setDate] = useState(new Date())
    const [evenDate,setEvenDate] = useState(false)
    const [count,setCount] = useState(0)
    const tiledisabled = ({date})=>{
      if (evenDate) {
        return date.getDate() % 2 === 1
        }
        return true
    }

    const handleAdd=()=>{
        setCount(prev => prev+1)
        setCount(prev => prev+1)
        setCount(prev => prev+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }
  return (
    <div>
        <h1>Calendar {count}</h1>
        <Calendar onChange={setDate} value={date} tileDisabled={tiledisabled} />

        <div>
          <button onClick={(e)=>setEvenDate(true)}>Disable</button>
          <button onClick={(e)=>setEvenDate(false)}>Selected</button>
          <button onClick={handleAdd}>Add</button>
        </div>
  
    </div>
  )
}

export default Calendarr
