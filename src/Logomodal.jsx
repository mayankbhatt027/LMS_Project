import React from 'react'
import Portal from './Portal';

function Logomodal({show}) {
  return (
    <div>
        <Portal show={show}>
            <h2>Hello Mayank, Welcome to LMS portal of Brillica Services</h2>
        </Portal>
    </div>
  )
}

export default Logomodal