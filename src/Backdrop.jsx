import React from 'react'

function Backdrop({show}) {
  return (
    <div onClick={show} className='w-full h-full bg-black opacity-15 fixed top-0 left-0 '></div>

  
  )
}

export default Backdrop