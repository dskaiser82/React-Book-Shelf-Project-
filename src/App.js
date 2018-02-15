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
  previousState.allBooks[0].shelf = 'Fucking Kaiserrr and Doobies';
  console.log(previousState);
});

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
