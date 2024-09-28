import React from 'react'
import './New.css'
import { Link } from 'react-router-dom'

function Panel_two() {
  return (
    <>
        <div className='h-16 w-100vw bg-white flex flex-wrap' id='belowpanel'>
        <Link to="Module">
                    <div className='  mt-8 w-16 pt-2 pb-2 ml-2 pl-2 rounded-md hover:bg-blue-900 hover:text-white hover:shadow-md hover:shadow-gray-800' ><i class="fa-solid fa-network-wired"></i> </div>
                    </Link>
                    <Link to="Batch">
                    <div className='  mt-8 w-16 pt-2 pb-2 ml-2 pl-2 rounded-md hover:bg-blue-900   hover:text-white hover:shadow-md hover:shadow-gray-800'><i class="fa-regular fa-calendar"></i> </div>
                    </Link>
                    <Link to="TestModule">
                    <div className='  mt-8 w-16 pt-2 pb-2 ml-2 pl-2 rounded-md hover:bg-blue-900   hover:text-white hover:shadow-md hover:shadow-gray-800'  ><i class="fa-regular fa-address-card"></i> </div>
                    </Link>
                    <Link to="Resources">
                    <div className='  mt-8 w-16 pt-2 pb-2 ml-2 pl-2  rounded-md hover:bg-blue-900   hover:text-white hover:shadow-md hover:shadow-gray-800'><i class="fa-regular fa-copy"></i> </div>
                    </Link>
        </div>
    </>
  )
}

export default Panel_two