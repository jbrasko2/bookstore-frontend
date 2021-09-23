import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bookshelf from '../bookshelf.png'

const Home = () => {
  return (
    <div>
      <Header>Welcome to The Bookstore</Header>
      <Bookshelf src={bookshelf} alt='bookshelf' />
      <ButtonWrapper>
        <Link to='/books'>
          <Button>Books List</Button>
        </Link>
        <Link to='/authors'>
          <Button>Authors List</Button>
        </Link>
      </ButtonWrapper>
    </div>
  )
}

const Header = styled.h1`
  text-align: center;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const Button = styled.button`
  margin: 12px;
`

const Bookshelf = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
`

export default Home
