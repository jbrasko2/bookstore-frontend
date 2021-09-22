import React, { useState } from 'react'

const BookForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [year, setYear] = useState(null)

  return (
    <>
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={setTitle}
        />
        <label htmlFor='authorName'>Author: </label>
        <input
          type='text'
          id='authorName'
          name='authorName'
          value={authorName}
          onChange={setAuthorName}
        />
        <label htmlFor='year'>Year: </label>
        <input
          type='text'
          id='year'
          name='year'
          value={year}
          onChange={setYear}
        />
      </form>
    </>
  )
}

export default BookForm
