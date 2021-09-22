import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BooksList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const result = await axios('http://localhost:3000/books')
      setBooks(result.data)
    }
    getBooks()
  }, [])

  return (
    <>
      <h1>Books List</h1>
      <ul>
        {books.map(book => {
          return (
            <li key={book._id}>
              <Link to={`/books/${book._id}`}>
                {book.author.name} - {book.title} ({book.year})
              </Link>
              <Link to={`/books/${book._id}/edit`}>Edit</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BooksList
