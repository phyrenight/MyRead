import React, { Component } from 'react';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
  	  shelf: this.props.book.shelf
    }
  }

  handleOnChange = (choice) => {
    choice.preventDefault();
    this.props.book.shelf = choice.target.value;
    if(this.props.updateBook){
      this.props.updateBook(this.props.book, this.props.book.shelf)
    }
  }


  render(){
    return(
      <div style={{width: 126, height: 188, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}>
        <div className="book">
          <div className="book-top">
            <div className="book-shelf-changer">
              <select value={this.state.shelf}
               onChange={this.handleOnChange}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>  
        </div>
      </div>)
	}
}

export default Book