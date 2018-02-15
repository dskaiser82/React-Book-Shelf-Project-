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

getValue = () => {
  this.setState((previousState) => {
  previousState.allBooks[5].shelf = 'currentlyReading';
  // console.log(previousState);

});
let book1 = this.state.allBooks[5]
  BooksAPI.update(book1, "currentlyReading")

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
