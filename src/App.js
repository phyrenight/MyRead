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
      books: []
    }
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({ books })
    })
  }

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      console.log(books)
      BooksAPI.getAll().then((books) =>{
        console.log(this.state.books[1]);
        this.setState({ books })
        console.log(this.state);
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