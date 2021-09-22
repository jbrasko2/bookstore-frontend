import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const BookPage = () => {
  const [book, setBook] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getBook = async () => {
      const result = await axios(`http://localhost:3000/books/${id}`)
      setBook(result.data)
    }
    getBook()
  }, [id])

  const renderPage = () => {
    return (
      <div>
        <h1>{book.title}</h1>
        <h3>Author: {book.author.name}</h3>
        <h3>Published: {book.year}</h3>
      </div>
    )
  }

  const renderLoad = () => {
    return <p>..loading</p>
  }

  return book ? renderPage() : renderLoad()
}

export default BookPage