import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import styled from 'styled-components'

const AuthorsList = () => {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const getAuthors = async () => {
      const result = await axios('http://localhost:3000/authors')
      setAuthors(result.data)
    }
    getAuthors()
  }, [])

  const deleteAuthor = async id => {
    try {
      await axios.delete(`http://localhost:3000/Authors/${id}`)
      setAuthors(authors.filter(author => author._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const searchAuthors = query => {
    fetch('http://localhost:3000/authors')
      .then(res => res.json())
      .then(data =>
        data.filter(
          author =>
            author.name.toUpperCase().includes(query.toUpperCase()) ||
            author.dob.includes(query)
        )
      )
      .then(authorData => setAuthors(authorData))
      .catch(err => console.log(err))
  }

  return (
    <Wrapper>
      <h1>Authors List</h1>
      <SearchBar handleSubmit={searchAuthors} />
      <ListWrapper>
        <ul>
          {authors.map(author => {
            return (
              <ListItem key={author._id}>
                <div>
                  <Link to={'/authors/' + author._id}>
                    {author.name} ({author.books.length}{' '}
                    {author.books.length === 1 ? 'book' : 'books'}) - Born{' '}
                    {author.dob.split('T')[0]}{' '}
                  </Link>
                </div>
                <div>
                  <Link to={`/authors/${author._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => deleteAuthor(author._id)}>
                    Delete
                  </button>
                </div>
              </ListItem>
            )
          })}
        </ul>
      </ListWrapper>
      <Link to={'/authors/new'}>
        <button>Create New Author</button>
      </Link>
      <br />
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/books'>
        <button>Books List</button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
`

const ListWrapper = styled.div`
  margin: 0 auto;
  width: 600px;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default AuthorsList
