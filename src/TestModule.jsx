import React from 'react'
import style from "./maincompo.module.css"
import { Link, Outlet } from 'react-router-dom';


function TestModule() {
  return (
    <>
    <div className={style.rightcompo}>
        
        <div className='flex'>

        <Link to="/TestModule">
        <div className='w-28 pl-5 rounded-md bg-white mt-6 ml-4 border border-sky-950 text-sky-950 hover:bg-blue-950 hover:text-white'>All Tests</div>
        </Link>

        <Link to="createTest">
        <div className='w-32 pl-5 rounded-md bg-white mt-6 ml-4 border border-sky-950 text-sky-950 hover:bg-blue-950 hover:text-white'>Create Test</div>  
        </Link>

        <Link to="testResults">
        <div className='w-32 pl-5 rounded-md bg-white mt-6 ml-4 border border-sky-950 text-sky-950 hover:bg-blue-950 hover:text-white'>Test Results</div>
        </Link>

        </div>
        <Outlet></Outlet>

        
        </div>
    </>
  )
}

export default TestModule;