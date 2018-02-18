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
checkStatus = () => {
  console.log(this.state)

  const bookie = this.state.allBooks.filter(book => book.shelf === this.state.targetShelf)
  console.log(bookie)
}

updateTarget = (targetShelf,targetId) => {
  this.setState({targetShelf: targetShelf, targetId:targetId}, this.checkStatus)
}



// onChanger = (change) => {
//

   //   this.setState((previousState) => {
   //   previousState.allBooks[2].shelf = 'wantToRead';
   //   // console.log(previousState);
   // });

   //Updater
   // let book1 = this.state.allBooks[0]
   //   BooksAPI.update(book1, "currentlyReading")
   //   console.log(book1)


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
