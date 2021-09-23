import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'

const AuthorEdit = ({ history }) => {
  const [author, setAuthor] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getAuthor = async () => {
      const result = await axios(`http://localhost:3000/authors/${id}`)
      setAuthor(result.data)
    }
    getAuthor()
  }, [id])

  const submitEdit = async ({ name, dob }) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/Authors/${id}`,
        {
          name,
          dob,
        }
      )
      console.log('Returned Data:', response)
      history.goBack()
    } catch (err) {
      console.log(err)
    }
  }

  const renderPage = () => {
    return (
      <>
        <h1>Edit {author.name}</h1>
        <AuthorForm handleSubmit={submitEdit} author={author} />
      </>
    )
  }

  const renderLoad = () => {
    return <p>..loading</p>
  }

  return author ? renderPage() : renderLoad()
}

export default AuthorEdit
