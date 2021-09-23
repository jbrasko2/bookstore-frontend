import React from 'react'
import { Link } from 'react-router-dom'
import BookForm from '../components/BookForm'
import axios from 'axios'

const BookNew = ({ history }) => {
  const submitNew = async ({ title, authorName, year }) => {
    try {
      const response = await axios.post(`http://localhost:3000/books`, {
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

  return (
    <>
      <h1>Create New Book</h1>
      <BookForm handleSubmit={submitNew} />
      <br />
      <button onClick={history.goBack}>Back</button>
    </>
  )
}

export default BookNew
