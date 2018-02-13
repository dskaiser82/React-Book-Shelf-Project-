import React from 'react';
import BookList from './BookList.js';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  allBooks: [],
  haveRead: [],
  willRead: []
}


  render() {
    return (
    <BookList/>
    )
  }
}

export default BooksApp
