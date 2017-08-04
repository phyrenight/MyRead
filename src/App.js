import React from 'react'
import Search from './Search'
import Home from './Home'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({ books })
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={ Home } />
        <Route path="/search"  render={() =>(
        <Search
         books={this.state.books } />)}/>
      </div>
    )
  }
}
export default BooksApp