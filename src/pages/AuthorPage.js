import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AuthorPage = ({ history }) => {
  const [author, setAuthor] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getAuthor = async () => {
      const result = await axios(`http://localhost:3000/authors/${id}`)
      setAuthor(result.data)
    }
    getAuthor()
  }, [id])

  const renderPage = () => {
    return (
      <>
        <h1>{author.name}</h1>
        <h4>Date of Birth: {author.dob.split('T')[0]}</h4>
        <ul>
          {author.books.map(book => {
            return (
              <li key={book._id}>
                <Link to={'/books/' + book._id}>
                  {book.title} ({book.year})
                </Link>
              </li>
            )
          })}
        </ul>
        <button onClick={history.goBack}>Back</button>
        <Link to={`/authors/${id}/edit`}><button>Edit</button></Link>
      </>
    )
  }

  const renderLoad = () => {
    return <p>..loading</p>
  }

  return author ? renderPage() : renderLoad()
}

export default AuthorPage
