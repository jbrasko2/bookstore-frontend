import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/books' component={BooksList} />
          <Route exact path='/authors' component={AuthorsList} />
        </Switch>
      </>
    )
  }
}

export default App
