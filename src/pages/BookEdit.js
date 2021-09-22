import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookForm from '../components/BookForm'
import axios from 'axios'

const BookEdit = ({ history }) => {
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
      <>
        <h1>Edit {book.title}</h1>
        <BookForm handleSubmit={submitEdit} book={book} />
      </>
    )
  }

  const renderLoad = () => {
    return <p>..loading</p>
  }

  const submitEdit = async ({ title, authorName, year }) => {
    try {
      const response = await axios.patch(`http://localhost:3000/books/${id}`, {
        title,
        authorName,
        year,
      })
      console.log('Returned Data:', response)
      history.goBack()
    } catch (err) {
      console.log(err)
    }
  }

  return book ? renderPage() : renderLoad()
}

export default BookEdit
