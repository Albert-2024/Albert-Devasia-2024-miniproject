import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
    <h1>404!</h1>
    <p>Page not found</p>
        <Link to='/' className='btn'>Go back to home</Link>
    </section>
  )
}

export default Error