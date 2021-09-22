import React from 'react'
import BookForm from '../components/BookForm'
import axios from 'axios'

const BookNew = ({ history }) => {
  console.log('at BookNew')

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
    </>
  )
}

export default BookNew
