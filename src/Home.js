import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import Shelf from './BookShelf';

class Home extends Component{
  render() {
    return(
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
          <Shelf books={this.props.books}
            updateBook={ this.props.updateBook } />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home