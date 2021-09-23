import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  const deleteAuthor = async id => {
    try {
      await axios.delete(`http://localhost:3000/Authors/${id}`)
      setAuthors(authors.filter(author => author._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Authors List</h1>
      <ul>
        {authors.map(author => {
          return (
            <li key={author._id}>
              <Link to={'/authors/' + author._id}>
                {author.name} ({author.books.length}{' '}
                {author.books.length > 1 ? 'books' : 'book'})
              </Link>
              <Link to={`/authors/${author._id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteAuthor(author._id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AuthorsList
