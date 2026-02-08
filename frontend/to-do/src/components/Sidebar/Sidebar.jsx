import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [active, setActive] = useState("home");

    return (
        <div className="w-24 h-screen bg-slate-50 shadow-md flex flex-col sticky top-0 font-semibold text-lg -mt-16">

            <Link to="/" className="text-decoration-none">
                <div
                    onClick={() => setActive("home")}
                    className={`h-44 flex items-center justify-center cursor-pointer 
                    ${active === "home"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"}`}
                >
                    Home
                </div>
            </Link>

            <Link to="/view" className="text-decoration-none">
                <div
                    onClick={() => setActive("tasks")}
                    className={`h-44 flex items-center justify-center cursor-pointer
          ${active === "tasks"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"}`}
                >
                    Tasks
                </div>
            </Link>

            <Link to="/add" className="text-decoration-none">
                <div
                    onClick={() => setActive("add")}
                    className={`h-44 flex items-center justify-center cursor-pointer
          ${active === "add"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"}`}
                >
                    Add
                </div>
            </Link>
             <Link to="/calendar" className="text-decoration-none">
                <div
                    onClick={() => setActive("cal")}
                    className={`h-44 flex items-center justify-center cursor-pointer 
          ${active === "cal"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"}`}
                >
                    Calendar
                </div>
            </Link>

        </div>
    );
};

export default Sidebar;
