import React from 'react'


function UpcomingBatch({batches}) {
  return (
    <>
        <div className='flex flex-wrap'>
        {batches.map((batch,i)=>{
                  return(
                    <div key={i} className='bg-white w-56 h-56 rounded-lg ml-4 mt-16 border-t-4 border-sky-950 shadow-md shadow-gray-800'>
                      <p className='text-sky-950 decoration-solid pl-2'>{batch.head}</p>
                      <p className='pl-2 mt-8'><i class="fa-brands fa-google-scholar"></i> {batch.course}</p>
                      <p className='pl-2'><i class="fa-solid fa-user"></i> {batch.name}</p>
                      <p className='pl-2'> <i class="fa-solid fa-calendar-days"></i> {batch.date}</p>
                      <p className='pl-2  border-b-2 border-black border-dashed'><i class="fa-solid fa-clock"></i>{batch.time}</p>

                      <button className='w-28 pl-2 rounded-md  mt-6 ml-2 bg-blue-950 text-white'>View Details</button>
                    </div>
                  )
                })}
                

        </div>
        
    </>
  )
}

export default UpcomingBatch