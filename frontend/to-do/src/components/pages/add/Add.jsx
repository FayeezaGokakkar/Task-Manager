import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FiArrowLeft } from "react-icons/fi";

const Add = () => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Pending",
    category:"",
    dueDate: "",
    priority: "Medium",
  });

  const navigate = useNavigate();


  const HandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5050/api/tasks', form);
      navigate('/view');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      


      <div className="container mt-5">
          <Link
          to="/"
          className="d-inline-block mb-3 text-dark fs-4"
        >
          <FiArrowLeft />
        </Link>

        <div className="card shadow p-4">
          <h3 className="mb-4 text-center">Add Task</h3>

          <form onSubmit={handleSubmit} className="space-y-4" >

            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                className="form-control"
                onChange={HandleChange}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={form.description}
                className="form-control"
                rows="3"
                onChange={HandleChange}
                required
              />
            </div>

            {/* Status */}
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                name="status"
                value={form.status}
                className="form-select"
                onChange={HandleChange}

              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
            {/* Category */}
             <div>
                        <label className="block text-sm mb-1">Category</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={HandleChange}
                            className="w-full border rounded-lg p-2"
                        >
                            <option>Home</option>
                            <option>Personal</option>
                            <option>Official</option>
                            <option>Fitness</option>
                        </select>
                    </div>

            {/* Due Date */}
            <div className="mb-3">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={form.dueDate}
                className="form-control"
                onChange={HandleChange}

              />
            </div>

            {/* Priority */}
            <div className="mb-3">
              <label className="form-label">Priority</label>
              <select
                name="priority"
                value={form.priority}
                className="form-select"
                onChange={HandleChange}

              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Add Task
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Add
