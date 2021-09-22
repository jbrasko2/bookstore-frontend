import React, { useState } from 'react'

const BookForm = ({ handleSubmit, book }) => {
  const [title, setTitle] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [year, setYear] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    handleSubmit({ title, authorName, year })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          id='title'
          name='title'
          placeholder={book ? book.title : null}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor='authorName'>Author: </label>
        <input
          type='text'
          id='authorName'
          name='authorName'
          placeholder={book ? book.author.name : null}
          value={authorName}
          onChange={e => setAuthorName(e.target.value)}
        />
        <label htmlFor='year'>Year: </label>
        <input
          type='text'
          id='year'
          name='year'
          placeholder={book ? book.year : null}
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

export default BookForm
