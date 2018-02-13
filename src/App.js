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

componentDidMount(){
  BooksAPI.getAll().then((allBooks) => {
    this.setState({ allBooks })
    console.log(allBooks)
 })
}

  render() {
    return (
    <BookList/>
    )
  }
}

export default BooksApp
