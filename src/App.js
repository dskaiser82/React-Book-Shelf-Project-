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
  previousState.allBooks[2].shelf = 'wantToRead';
  // console.log(previousState);
});
let book1 = this.state.allBooks[2]
  BooksAPI.update(book1, "wantToRead")
}

onChanger = (num) => {
  const sel = document.getElementById(num);
  const val = sel.value
  const serial = sel.getAttribute("data-serial")
   console.log(serial+val)
}



  render() {
    return (
    <div>
      <BookList
        allBooks={this.state.allBooks}
        getValue={this.getValue}
        onChanger={this.onChanger}
      />
    </div>
    )
  }
}

export default BooksApp
