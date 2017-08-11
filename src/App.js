import React from 'react'
import Search from './Search'
import Home from './Home'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({ books })
    })
  }

  handleOnChange = (choice) => {
    console.log(choice)
    localStorage.setItem( 'shelf', choice);
    this.setState({ shelf: choice })
  }


  render() {
    return (
      <div>
        <Route exact path="/" render={() =>
          <Home books={this.state.books}/>
        } />
        <Route path="/search"  render={() =>(
        <Search
         books={this.state.books } />)}
        />
      </div>
    )
  }
}
export default BooksApp