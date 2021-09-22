import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import BooksList from './pages/BooksList'
import AuthorsList from './pages/AuthorsList'
import AuthorPage from './pages/AuthorPage'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/books' component={BooksList} />
          <Route exact path='/authors' component={AuthorsList} />
          <Route exact path='/authors/:id' component={AuthorPage} />
        </Switch>
      </>
    )
  }
}

export default App
