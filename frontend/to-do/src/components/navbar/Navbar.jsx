import React from 'react'
// import search from '../../assets/search.png'
// import bell from '../../assets/notification.png'
// import woman from '../../assets/woman.png'
import { FaSearch } from "react-icons/fa";


// import search from '../../assets/search.png'

import logo from '../../assets/search.png'
import bell from '../../assets/notification.png'
import woman from '../../assets/woman.png'



const Navbar = () => {
  return (
    <div className='h-16 bg-white flex justify-between ml-24 sticky top-0 shadow-sm items-center '>
        <div className='ml-10 mt-4 w-14'><p className='font-semibold '>TO-DO</p></div>
        <div className=' w-96 h-12 mr-40 mt-2.5 flex justify-between items-center '>
            <img src={logo}alt="" className='w-6 h-6' />
            <img src={bell}alt="" className='w-6 h-6' />
          <div className='flex gap-3 '>
              <img src={woman}alt="" className='w-6 h-6' />
            <p>xyz</p>
          </div>
            
            {/* <FaSearch  /> */}

        </div>
        
      
    </div>
  )
}

export default Navbar
