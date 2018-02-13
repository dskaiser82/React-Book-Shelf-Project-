import React from 'react';
import BookList from './BookList.js';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  

  render() {
    return (
    <BookList/>
    )
  }
}

export default BooksApp
