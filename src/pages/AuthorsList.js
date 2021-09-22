import React, { useEffect } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/Authors'
})

const AuthorsList = () => {
  useEffect(() => {
    api.get('/').then(res => {
      console.log(res)
    })
  }, [])

  return <h1>Authors List</h1>
}

export default AuthorsList
