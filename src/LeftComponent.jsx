import React from 'react'
import style from "./leftcompo.module.css"
import { Link } from 'react-router-dom'

function LeftComponent() 
{
  return (
    <div className={style.coll}>
      <Link to="Module">
      <div><i class="fa-solid fa-bars"></i> Module</div>
      </Link>
      <Link to="/">
      <div><i class="fa-regular fa-calendar"></i> Batch</div>
      </Link>
      <Link to="TestModule">
      <div><i class="fa-regular fa-address-card"></i> Test Module</div>
      </Link>
      <Link to="Resources">
      <div><i class="fa-regular fa-copy"></i> Resources</div>
      </Link>
      
    </div>
  )
}

export default LeftComponent
