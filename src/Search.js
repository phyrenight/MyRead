import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from "./Book";
import * as BooksAPI from './BooksAPI'

class Search extends Component{
  state = {
    search: '',
    results: []
  }

  updateSearch = (search="") => {
    this.setState({ search: search.trim() })
      BooksAPI.search(search, 50).then(searchResult => {
        if(!searchResult){
         this.setState({results: []})
        } else{
          this.checkShelf(searchResult)
          this.setState({results: searchResult})
        }
        return searchResult
        }).catch(() =>{
          this.setState({results: []})
        })
}

  checkShelf = (searchResults) => {
    console.log(this.props.shelves)
    console.log(searchResults)
    for(let i in searchResults){
      if((this.props.shelves.currentlyReading.indexOf(searchResults[i].id)) > -1){
        searchResults[i].shelf = "currentlyReading";
      }else if((this.props.shelves.wantToRead.indexOf(searchResults[i].id)) > -1){
        searchResults[i].shelf = "wantToRead";
      }else if((this.props.shelves.read.indexOf(searchResults[i].id)) > -1){
        searchResults[i].shelf = "read";
      }else{
        searchResults[i].shelf = "none";
      }
    }
  }

  clearSearch = () => {
    this.setState({ search: ''})
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
               placeholder="Search by title or author"
               value={this.state.search}
               onChange={(event) => this.updateSearch(event.target.value)}/>
                
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.results.map((book) => (
            <li key={book.id} >
              <Book book={ book }
              updateBook={this.props.updateBook} />
            </li>
            ))}

          </ol>
        </div>
      </div>
    )
  }
}

export default Search