import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component{
  state = {
    shelfName: ['currentlyReading', 'wantToRead', 'read']
  }
  render(){
    return (
      <div>
      {this.state.shelfName.map(shelf => (
        <div key={shelf} className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.filter(book => (book.shelf === shelf)).map(book => (
              <li key={book.id}>
                          {console.log(book.shelf)}
                <Book book={book} />
              </li>
              ))}
            </ol>
          </div>
        </div>
        ))}
      </div>
    )
	}
}

export default Shelf