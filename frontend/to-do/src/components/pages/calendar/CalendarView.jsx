import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({size="small"}) => {
    const[date,setDate]=useState(new Date());
    
    const sizeStyles =
    size === "large"
      ? "w-full max-w-xl p-6 text-2xl"
      :  "w-72 p-3"; 

  return (
    <>
     <div className={` bg-purple-100 p-28 rounded shadow w-fit ${sizeStyles}`}>
      <Calendar onChange={setDate} value={date} />
      <p className="mt-3 text-sm text-gray-600">
        Selected: {date.toDateString()}
      </p>
    </div>
    </>
  )
}

export default CalendarView
