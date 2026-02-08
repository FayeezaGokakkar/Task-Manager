import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FiEdit2, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom'

const ViewAll = () => {

  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-400",
    Low: "bg-green-500",
  };

  const statusColors = {
    Pending: "text-orange-500",
    "In Progress": "text-blue-500",
    Completed: "text-green-600",
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/tasks')
      console.log(res.data.tasks);
      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error.message);
    }
  }

  const HandleDelete = (id) => {
    axios.delete(`http://localhost:5050/api/tasks/${id}`)
      .then(res => {
        console.log(res.data)
        window.location.reload();
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <Link
          to="/"
          className="d-inline-block mb-3 text-dark fs-4"
        >
          <FiArrowLeft />
        </Link>

        {/* Header */}
        <h1 className="text-2xl font-semibold mb-8">All Tasks</h1>

        {/* 🔥 ONLY this part matters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {tasks.map((task) => (
            <div
              key={task._id}
              className="relative bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >

              {/* Top right icons */}
              <div className="absolute top-3 right-3 flex gap-3 text-gray-500">
                <Link to={`/edit/${task._id}`}> <button className="hover:text-blue-600">
                  <FiEdit2 size={18} />
                </button>
                </Link>


                <button className="hover:text-red-500" onClick={() => HandleDelete(task._id)}>
                  <FiTrash2 size={18} />
                </button>
              </div>

              {/* Title + Category */}
              <div className="pr-10">
                <h3 className="text-lg font-semibold">
                  {task.title}
                </h3>

                <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-medium">
                  {task.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-1">
                {task.description}
              </p>

              {/* Date + Priority */}
              <div className="flex justify-between mt-4 text-sm">
                <span>{task.dueDate}</span>

                <span
                  className={`text-white px-2 py-1 rounded text-xs ${priorityColors[task.priority]}`}
                >
                  {task.priority}
                </span>
              </div>

              {/* Status */}
              <div className="mt-3">
                <span className={statusColors[task.status]}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default ViewAll
