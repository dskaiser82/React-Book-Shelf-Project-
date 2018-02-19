import React from 'react';
import BookList from './BookList.js';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
  allBooks: [],
  targetShelf: {},  //prob dont need this
  targetId: {},   //prob dont need this
  searchBooks:[],
  searchTerm: "design"
}

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState({ allBooks })
      console.log(allBooks)
   })
   //So These Search Dont Have book.shelf.  But I may cheat anf use Book.rating and put the string there
   BooksAPI.search(this.state.searchTerm).then((searchBooks) => {
     this.setState({ searchBooks })
     console.log(this.state)
   })
  }

  //We run this Onchange of Select
  updateTarget = (targetShelf,targetId) => {
    //Update the Book
    this.setState((previousState) => {
    const bookie = previousState.allBooks.filter(book => book.id === targetId);
    bookie[0].shelf = targetShelf;
    });

//For mergeing All SearcheB's into AllB's
    // const arr1 = this.state.allBooks
    // const arr2 = this.state.searchBooks
    // const merger = arr1.concat(arr2)
    // merger[7].shelf = targetShelf
    //
    // this.setState((previousState) => {
    // const totals = previousState.allBooks = merger;
    //
    // });
    // console.log(merger)


    //Send Updated Book to API
    const bookSend = this.state.allBooks.filter(book => book.id === targetId);
    const bookZero = bookSend[0]
    BooksAPI.update(bookZero.id, targetShelf)


  }

  render() {
    return (
    <div>
    <Route exact path="/" render={() => (
      <BookList
        allBooks={this.state.allBooks}
        updateTarget={this.updateTarget}
      />
      )}/>


    </div>
    )
  }
}

export default BooksApp
