import React, { Component } from 'react';
import Book from './Book';


class Shelf extends Component{
  state = {
    shelfName: [{id: 'currentlyReading',
                 title: 'Current Reading'
                 }, 
                 {id: 'wantToRead',
                 title: 'Want to read'
                 },
                 {id: 'read',
                 title: 'read'}]
  }
  render(){
    return (
      <div>
      {this.state.shelfName.map(shelf => (
        <div key={shelf.id} className="bookshelf">
          <h2 className="bookshelf-title">{shelf.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.filter(book => (book.shelf === shelf.id)).map(book => (
              <li key={book.id}>
                          {console.log(book.shelf)}
                <Book book={book}
                  updateBook={ this.props.updateBook }/>
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