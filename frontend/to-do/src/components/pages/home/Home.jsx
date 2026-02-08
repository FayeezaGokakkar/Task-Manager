import React, { useEffect, useState } from 'react'
import home from '../../../assets/home.png'
import work from '../../../assets/computer-worker.png'
import user from '../../../assets/user.png'
import sports from '../../../assets/running.png'
import congo from '../../../assets/celebration.png'
import { Link, NavLink } from 'react-router-dom'
import Statcard from './Statcard'
import { FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios'


// import Calendar
import CalendarView from '../calendar/CalendarView'

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:5050/api/tasks');
            setTasks(res.data.tasks);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>


            <div className='flex'>
                <div className='w-full bg-gray-100 max-h-auto px-12'>
                    <p className='text-2xl mt-4'>Categories</p>
                    {/* categories */}
                    <div className='w-auto h-auto flex gap-56 mt-12 font-sans'>

                        <div className='flex gap-3 items-center'>
                            <img src={home} alt="" className='w-6 h-6' />
                            {/* <div className='w-auto h-9 py-1 bg-white rounded-xl px-3'onClick={()}><p>Home Task</p></div> */}
                            <div onClick={() => setSelectedCategory("Home")}
                                className='flex gap-3 w-auto h-9 py-1 bg-white rounded-xl px-3 items-center cursor-pointer hover:scale-105 transition'
                            >Home Tasks</div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={work} alt="" className='w-6 h-6' />
                            <div onClick={() => setSelectedCategory("Official")}
                                className='flex gap-3 w-auto h-9 py-1 bg-white rounded-xl px-3 items-center cursor-pointer hover:scale-105 transition'
                            >Official Tasks</div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={user} alt="" className='w-6 h-6' />
                            <div onClick={() => setSelectedCategory("Personal")}
                                className='flex gap-3 w-auto h-9 py-1 bg-white rounded-xl px-3 items-center cursor-pointer hover:scale-105 transition'
                            >Personal Tasks</div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={sports} alt="" className='w-6 h-6' />
                            <div onClick={() => setSelectedCategory("Fitness")}
                                className='flex gap-3 w-auto h-9 py-1 bg-white rounded-xl px-3 items-center cursor-pointer hover:scale-105 transition'
                            >Fitness Tasks</div>
                        </div>
                    </div>

                    {/* Category Popup */}

                    {selectedCategory && (
                        <div className="mt-8 bg-white shadow-lg rounded-xl p-4 w-[450px] ">

                            {/* header */}
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-semibold text-lg">
                                    {selectedCategory} Tasks
                                </h3>

                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="text-red-500 text-sm"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* task list */}
                            <div className="flex flex-col gap-3 max-h-44 overflow-y-auto pr-2">

                                {tasks
                                    .filter(task => task.category === selectedCategory)
                                    .map(task => (
                                        <div
                                            key={task._id}
                                            className="bg-gray-50 border px-3 py-2 rounded-md flex justify-between"
                                        >
                                            <span className="text-sm font-medium">
                                                {task.title}
                                            </span>

                                            <span className="text-xs text-gray-500">
                                                {task.dueDate}
                                            </span>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    )}






                    <div className='bg-red-300 w-full h-32 mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex' >
                        {/* hurray */}
                        <div className='py-7 ml-16'>
                            <img src={congo} alt="" className='w-36 h-24' />
                        </div>

                        {/* congo */}
                        <div className='ml-24 mt-8 font-sans font-semibold text-xl text-white'>
                            <p>Congratulations!</p>
                            <p>You have completed all your tasks!</p>
                        </div>

                        {/* view tasks */}

                        <Link to='/view ' className='text-decoration-none'><div className='border-2 w-32 h-12 ml-96  text-center py-2 mt-8  text-white font-sans '>
                            <p>View All Tasks</p>
                        </div>
                        </Link>
                    </div>

                    <div className='flex justify-between'>
                        <div className="flex gap-6 mt-6">
                            <Statcard title="Total Tasks" count={tasks.length} />
                            <Statcard title="Pending" count={tasks.filter(t => t.status === "Pending").length} />
                            <Statcard title="Completed" count={tasks.filter(t => t.status === "Completed").length} />
                        </div>
                        <div className='flex gap-7 items-center mr-12'>
                            <Link to='/add' className='text-decoration-none'><div className='w-10 h-10 bg-blue-500 rounded-full text-center  text-white text-3xl'>+</div></Link>
                            <div className='bg-blue-500 w-32 text-center py-2 text-white rounded-md'>Manage Tasks</div>

                        </div>
                    </div>

                    {/* texts */}

                    <div className='flex gap-96 mt-12 font-semibold '>
                        <p className='ml-8 text-lg '>Calendar</p>
                        <p className='text-lg ml-16'>High Priority Tasks</p>

                    </div>

                    <div className="flex gap-36 mt-4">
                        <CalendarView size='small' />

                        <div className='bg-white w-[700px] h-72 rounded-xl shadow-lg p-4 flex flex-col'>

                            <div className="flex flex-col gap-3 overflow-y-auto pr-2">

                                {tasks
                                    .filter(task => task.priority === "High")
                                    .map(task => (
                                        <div
                                            key={task._id}
                                            className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-3 shadow-sm hover:shadow-md transition"
                                        >


                                            {/* left side */}
                                            <div className="flex items-center gap-3">

                                                <FiAlertTriangle className="text-red-500 text-lg" />

                                                <span className="text-base font-medium truncate">
                                                    {task.title}
                                                </span>

                                            </div>

                                            {/* right side */}
                                            <span className="text-sm font-semibold text-gray-500">
                                                {task.dueDate}
                                            </span>

                                        </div>
                                    ))}

                            </div>
                        </div>

                    </div>
                </div>

            </div>





        </>
    )
}

export default Home
