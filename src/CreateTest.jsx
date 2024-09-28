import React from 'react'

function CreateTest()
{
  return (
    <>
      <div className='w-2/5 ml-4  k mt-8'>
          <div className='w-full  flex place-content-between'>
            <div>Test Name</div>
            <input className='border border-gray-400 rounded-md' placeholder='Test Name'/>
          </div>
          <div className='w-full  mt-4  flex place-content-between'>
            <div>Test Duration(Minutes)</div>
            <input  className='border border-gray-400 rounded-md' placeholder='Test Duration(Minutes)'/>
          </div>
          <div className='w-full   mt-4  flex place-content-between'>
            <div>Select Course</div>
            <select className='w-44 mr-1 border border-gray-400 rounded-md'>
              <option>Select Course</option>
            </select>
          </div>
      </div>
    </>
    
  )
}

export default CreateTest