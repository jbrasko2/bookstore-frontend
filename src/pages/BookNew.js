import React from 'react'
import BookForm from '../components/BookForm'
import axios from 'axios'

const BookNew = () => {
  console.log('at BookNew')

  const submitNew = async ({ title, authorName, year }) => {
    try {
      const response = await axios.post(`http://localhost:3000/books`, {
        title,
        authorName,
        year,
      })
      console.log('Returned Data:', response)
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
