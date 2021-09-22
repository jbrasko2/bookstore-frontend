import React from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'

const AuthorNew = ({ history }) => {

  const submitNew = async ({ name, dob }) => {
    try {
      const response = await axios.post(`http://localhost:3000/authors`, {
        name,
        dob,
      })
      console.log('Returned Data:', response)
      history.goBack()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Create New Author</h1>
      <AuthorForm handleSubmit={submitNew} />
    </>
  )
}

export default AuthorNew
