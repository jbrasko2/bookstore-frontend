import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookForm from '../components/BookForm'
import axios from 'axios'

const BookEdit = () => {
  const [book, setBook] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getBook = async () => {
      const result = await axios(`http://localhost:3000/books/${id}`)
      setBook(result.data)
    }
    getBook()
  }, [id])

  return <BookForm handleSubmit={submitEdit} />
}

const submitEdit = () => {}

export default BookEdit
