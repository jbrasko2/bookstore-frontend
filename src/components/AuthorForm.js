import React, { useState } from 'react'

const AuthorForm = ({ handleSubmit, author }) => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const date = new Date()

  const onSubmit = event => {
    event.preventDefault()
    handleSubmit({ name, dob })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          autoComplete='off'
          placeholder={author ? author.name : null}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor='dob'>Date of Birth: </label>
        <input
          type='text'
          id='dob'
          name='dob'
          autoComplete='off'
          placeholder={`e.g. ${date.toISOString().split('T')[0]}`}
          value={dob}
          onChange={e => setDob(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

export default AuthorForm
