import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import BooksList from './pages/BooksList'
import AuthorsList from './pages/AuthorsList'
import AuthorPage from './pages/AuthorPage'
import BookPage from './pages/BookPage'
import BookNew from './pages/BookNew'
import BookEdit from './pages/BookEdit'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/books' component={BooksList} />
          <Route exact path='/authors' component={AuthorsList} />
          <Route exact path='/authors/:id' component={AuthorPage} />
          <Route exact path='/books/new' component={BookNew} />
          <Route exact path='/books/:id' component={BookPage} />
          <Route exact path='/books/:id/edit' component={BookEdit} />
        </Switch>
      </>
    )
  }
}

export default App
