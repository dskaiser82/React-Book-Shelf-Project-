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

getValue = (value) => {
  console.log("Hi Denny" + value)
}
  render() {
    return (
    <div>
      <BookList
        allBooks={this.state.allBooks}
        getValue={this.getValue}
      />
    </div>
    )
  }
}

export default BooksApp
