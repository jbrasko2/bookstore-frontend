import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/books'><button>Books List</button></Link>
      <Link to='/authors'><button>Authors List</button></Link>
    </div>
  )
}

export default Home
