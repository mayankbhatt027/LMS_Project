import React from 'react'


function AllTests() {
  return (
    <div className="mx-0">
      <div className='flex mx-0'>
           <div className='bg-white w-96 h-96 rounded-lg ml-4 mt-16 shadow-lg'>
             <div className=' w-48 mt-4 scale-150 m-auto pl-4 text-zinc-600 '>Frontend Development</div>
             <div className='text-sky-950 mt-10 pl-4'>HTML, CSS <i class="fa-solid fa-angle-down text-black "></i></div>
             <div className='text-sky-950 mt-8 pl-4'>Javascript, React.JS <i class="fa-solid fa-angle-down text-black"></i></div>
           </div>
           <div className='bg-white w-96 h-96 rounded-lg ml-4 mt-16 shadow-lg'>
             <div className=' w-48 mt-4  m-auto pl-12 scale-150 text-zinc-600 '>MERN STACK</div>
             <div className='text-sky-950 mt-10 pl-4'>Javascript <i class="fa-solid fa-angle-down text-black"></i></div>
           </div>
        </div>
    </div>
  )
}

export default AllTests
