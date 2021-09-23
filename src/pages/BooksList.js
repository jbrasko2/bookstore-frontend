import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const BooksList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const result = await axios('http://localhost:3000/books')
      setBooks(result.data)
    }
    getBooks()
  }, [])

  const deleteBook = async id => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`)
      setBooks(books.filter(book => book._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const searchBooks = query => {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data =>
        data.filter(
          book =>
            book.title.toUpperCase().includes(query.toUpperCase()) ||
            book.year.toString() === query ||
            book.author.name.toUpperCase().includes(query.toUpperCase())
        )
      )
      .then(bookData => setBooks(bookData))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Books List</h1>
      <SearchBar handleSubmit={searchBooks} />
      <ul>
        {books.map(book => {
          return (
            <li key={book._id}>
              <Link to={`/books/${book._id}`}>
                {book.author.name} - {book.title} ({book.year})
              </Link>
              <Link to={`/books/${book._id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteBook(book._id)}>Delete</button>
            </li>
          )
        })}
      </ul>
      <Link to={'/books/new'}>Create New Book</Link>
      <br />
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/authors'>
        <button>Authors List</button>
      </Link>
    </>
  )
}

export default BooksList
