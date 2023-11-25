import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage =()=> {
  return (
    <div className=' absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 space-x-10 w-64 ml-10 mt-5  m grid grid-cols-2'>
      <button className='border text-blue-500 rounded-md'>

      <Link to='/signup'>
        <span >Signup</span>
      </Link>
      </button>

      <button className='border text-white rounded-md bg-blue-500'>
      <Link to='/login'>
        <span >Login</span>
      </Link>
      </button>
    </div>

  )
}
export default LandingPage