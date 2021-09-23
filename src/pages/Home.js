import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      <Header>Welcome to The Bookstore</Header>
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

export default Home
