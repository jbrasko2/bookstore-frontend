import React, { useEffect, useState } from 'react'
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
          return <li key={book._id}>{book.title}</li>
        })}
      </ul>
    </>
  )
}

export default BooksList
