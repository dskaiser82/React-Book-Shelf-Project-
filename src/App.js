import React from 'react';
import BookList from './BookList.js';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  allBooks: []
}

componentDidMount(){
  BooksAPI.getAll().then((allBooks) => {
    this.setState({ allBooks })
    console.log(allBooks)
 })
}

  render() {
    return (
    <div>
      <BookList
        allBooks = {this.state.allBooks}
      />
      <p>Hi There </p>
    </div>
    )
  }
}

export default BooksApp
