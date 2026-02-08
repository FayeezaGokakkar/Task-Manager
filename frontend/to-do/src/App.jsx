import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Add from './components/pages/add/Add.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home.jsx'
import ViewAll from './components/pages/View/ViewAll.jsx'
import Edit from './components/pages/Edit.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import CalendarView from './components/pages/calendar/CalendarView.jsx'
import CalendarPage from './components/pages/calendar/CalendarPage.jsx'


const App = () => {
  return (
    <BrowserRouter>

      {/* Top navbar */}
      <Navbar />

      {/* Sidebar + content layout */}
      <div className="flex min-h-screen">

        {/* Left sidebar */}
        <Sidebar />

        {/* Right content */}
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/view' element={<ViewAll />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/calendar' element={<CalendarPage/>}></Route>
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  )
}
export default App;



