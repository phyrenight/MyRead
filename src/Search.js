import React, { Component } from 'react'
import Home from './Home';
import { Link } from 'react-router-dom'
import './App.css'

class Search extends Component{
  render(){
    console.log(this.props.books)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
              {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
              */}
            <input type="text" placeholder="Search by title or author"/>
                
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.props.books.map((book) => (
            <li key={book.id} >
              <div style={{width: 126, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>  
                </div>
              </div>
            </li>
            ))}

          </ol>
        </div>
      </div>
    )
  }
}

export default Search