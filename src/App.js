import React from 'react'
import Search from './Search'
import Home from './Home'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      shelf: []
    }
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({ books })
    })
  }

  update = (book, shelf) => {
    console.log(shelf)
    BooksAPI.update(book, shelf).then(books => {
   //  console.log(books[shelf])
      this.setState({ shelf: books})
     // console.log(this.state.shelf)
      BooksAPI.getAll().then((book) =>{
        this.setState({ books:book })
     })
    })
  }


  render() {
    return (
      <div>
        <Route exact path="/" render={() =>
          <Home
           books={this.state.books}
           updateBook={ this.update }
           />
        } />
        <Route path="/search"  render={() =>(
        <Search
         books={this.state.books }
         updateBook={(book, shelf) =>{
           this.update(book, shelf)
        }}
          />)}
        />
      </div>
    )
  }
}
export default BooksApp