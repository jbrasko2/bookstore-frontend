import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AuthorsList = () => {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const getAuthors = async () => {
      const result = await axios('http://localhost:3000/authors')
      setAuthors(result.data)
    }
    getAuthors()
  }, [])

  return (
    <>
      <h1>Authors List</h1>
      <ul>
        {authors.map(author => {
          return <li key={author._id}>{author.name}</li>
        })}
      </ul>
    </>
  )
}

export default AuthorsList
