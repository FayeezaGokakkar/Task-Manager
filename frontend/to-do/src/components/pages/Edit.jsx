import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Edit = () => {
    const {id} =useParams();
    const navigate =useNavigate();

    const [form ,setForm] =useState({
        title: "",
        description: "",
        status: "Pending",
        category:"",
        dueDate: "",
        priority: "Medium",
    });

    useEffect(() => {
        fetchTask();
    }, []);


    const fetchTask = async () => {
        try {
            const res = await axios.get('http://localhost:5050/api/tasks/' + id);
            setForm(res.data.task);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5050/api/tasks/${id}`,form)
            navigate('/view');
        } catch (error) {
            console.log(error);
            
        }
    }

return (
    <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

            {/* 🔥 Form Card */}
            <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6">

                <h2 className="text-xl font-semibold mb-6 text-center">
                    Edit Task
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Title */}
                    <div>
                        <label className="block text-sm mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm mb-1">Description</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm mb-1">Status</label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        >
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    {/* category */}
                    <div>
                        <label className="block text-sm mb-1">Category</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        >
                            <option>Home</option>
                            <option>Personal</option>
                            <option>Official</option>
                            <option>Fitness</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block text-sm mb-1">Due Date</label>
                        <input
                            type="date"
                            name="dueDate"
                            value={form.dueDate}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="block text-sm mb-1">Priority</label>
                        <select
                            name="priority"
                            value={form.priority}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-4 transition"
                    >
                        Update Task
                    </button>

                </form>
            </div>
        </div>


    </>
)
}

export default Edit
