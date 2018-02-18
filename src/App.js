import React from 'react';
import BookList from './BookList.js';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  allBooks: [],
  targetShelf: {},
  targetId: {}
}

componentDidMount(){
  BooksAPI.getAll().then((allBooks) => {
    this.setState({ allBooks })
 })
}

//On Select Grab Shelf and Id of Book
// checkStatus = () => {
//   console.log(this.state)
//
// }

//We run this Onchange of Select
updateTarget = (targetShelf,targetId) => {
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



// onChanger = (change) => {
//

   //   this.setState((previousState) => {
   //   previousState.allBooks[2].shelf = 'wantToRead';
   //   // console.log(previousState);
   // });




   // console.log(results[0].title)




  render() {
    return (
    <div>
      <BookList
        allBooks={this.state.allBooks}
        updateTarget={this.updateTarget}
      />
    </div>
    )
  }
}

export default BooksApp
