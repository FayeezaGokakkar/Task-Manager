import React from 'react'
import CalendarView from './CalendarView'

const CalendarPage = () => {
  return (
    <>
        <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-semibold mb-6">
        Calendar
      </h1>

      <CalendarView size="large" />

    </div>
</>
  )
}

export default CalendarPage
