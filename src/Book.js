import React, { Component } from 'react';

class Book extends Component {
  state ={

  }
  render(){
    return(
      <div style={{width: 126, height: 188, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}>
        <div className="book">
          <div className="book-top">
            <div className="book-shelf-changer">
              <select>
                <option value={this.props.book.shelf} disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read"selected>Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>  
        </div>
      </div>)
	}
}

export default Book