import React from 'react';
import Search from './Search';
import Home from './Home';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      shelf: { currentlyReading : [],
              wantToRead : [],
              read: []}
    };
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({ books });
      for(let i in books){
        if(books[i].shelf === "currentlyReading"){
            this.state.shelf.currentlyReading.push(books[i].id);
        }else if( books[i].shelf === "wantToRead"){
            this.state.shelf.wantToRead.push(books[i].id);
        }else if( books[i].shelf === "read"){
            this.state.shelf.read.push(books[i].id);
        }
      }
    });
  }

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      this.setState({ shelf: books});
      BooksAPI.getAll().then((book) =>{
        this.setState({ books:book });
     });
    });
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
         shelves={this.state.shelf}
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