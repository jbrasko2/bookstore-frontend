import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h1>Welcome to The Bookstore</h1>
      <Link to='/books'><button>Books List</button></Link>
      <Link to='/authors'><button>Authors List</button></Link>
    </div>
  )
}

export default Home
