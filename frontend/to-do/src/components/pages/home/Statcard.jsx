import React from 'react'

const Statcard = ({ title, count }) => {
  return (
    <>
    <div className="bg-white shadow-md rounded-xl  py-3 w-28 h-22 text-center hover:shadow-lg transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-lg font-bold text-blue-600 ">{count}</p>
    </div>
    </>
  )
}

export default Statcard
