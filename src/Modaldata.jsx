import React from 'react';
import Portal from './Portal';

function Modaldata({show}) {
  return (
    <Portal show={show}>
      <div className='m-4'>
      <p className='mt-6'>Module Name</p>
      <div className='w-80  bg-sky-100 rounded-md '>Core Python</div>
      <p className='mt-6'>Days</p>
      <div className='w-80  bg-sky-100 rounded-md '>45</div>
      <p className='mt-6'>Fees</p>
      <div className='w-80  bg-sky-100 rounded-md '>11800</div>
      <p className='mt-6'>Topic</p>
      <div className='w-80  bg-sky-100 rounded-md '>Intro</div>
      </div>
    </Portal>
  );
}

export default Modaldata;

