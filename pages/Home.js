import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/books'>Books</Link>
      <Link to='/authors'>Authors</Link>
    </div>
  )
}

export default Home
