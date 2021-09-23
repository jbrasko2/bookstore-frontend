import React, { useState } from 'react'

const SearchBar = ({ search }) => {
  const [query, setQuery] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    search(query)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <input type='submit' value='Search' />
    </form>
  )
}

export default SearchBar
