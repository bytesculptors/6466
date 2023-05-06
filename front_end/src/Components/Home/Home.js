import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
    </div>
  )
}

export default Home
