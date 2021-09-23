import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookForm from '../components/BookForm'
import axios from 'axios'
import styled from 'styled-components'

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

  const renderPage = () => {
    return (
      <Wrapper>
        <h1>Edit <i>{book.title}</i></h1>
        <BookForm handleSubmit={submitEdit} book={book} />
        <br />
        <button onClick={history.goBack}>Back</button>
      </Wrapper>
    )
  }

  const renderLoad = () => {
    return <p>..loading</p>
  }

  return book ? renderPage() : renderLoad()
}

const Wrapper = styled.div`
  text-align: center;
`

export default BookEdit
