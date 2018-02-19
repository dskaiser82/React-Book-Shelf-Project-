import React from 'react';
import BookList from './BookList.js';
import SearchBook from './SearchBook.js'
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
  allBooks: [],
  targetShelf: {},  //prob dont need this
  targetId: {},   //prob dont need this
  searchBooks:[],
  query: ""
}

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState({ allBooks })
   })
  }

  componentWillUpdate(){
    if (this.state.query)
    BooksAPI.search(this.state.query).then((searchBooks) => {
      this.setState({ searchBooks })
    })
  }

  //We run this Onchange of Select
  grabTarget = (targetShelf,targetId) => {
    //Update the Book
    this.setState((previousState) => {
    const bookie = previousState.allBooks.filter(book => book.id === targetId);
    bookie[0].shelf = targetShelf;
    });

    //Send Updated Book to API
    const bookSend = this.state.allBooks.filter(book => book.id === targetId);
    const bookZero = bookSend[0]
    BooksAPI.update(bookZero.id, targetShelf)
  }

//** Search View **//
  //Grab Values from options
  grabSearch = (targetShelf,targetId) => {
    //Update the Book
    this.setState((previousState) => {
    //Find which Book this is, then give it the shelf string
    const bookie = previousState.searchBooks.filter(book => book.id === targetId);
    bookie[0].shelf = targetShelf;

    //Last Push this book to allBooks array, then send up to the Back end API
    previousState.allBooks.push(bookie[0])
    BooksAPI.update(bookie[0].id, targetShelf)
    });
    console.log(this.state)
  }

  //Change query.state based on user search
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    return (
    <div>
    <Route exact path="/" render={() => (
      <BookList
        allBooks={this.state.allBooks}
        grabTarget={this.grabTarget}
      />
      )}/>
      <Route path="/search" render={({ history }) => (
          <SearchBook
            searchBooks={this.state.searchBooks}
            query={this.state.query}
            grabSearch={this.grabSearch}
            updateQuery={this.updateQuery}
            //DK << THE HISTORY STUFF SO IT CAN SEND YOU BACK TO HOME PAGE ON AN ACTION SEE MY NOTES
            // onCreateContact={(contact) => {
            //   this.CreateContact(contact)
            //   history.push('/')
            // }}
          />
        )}/>
    </div>
    )
  }
}

export default BooksApp
