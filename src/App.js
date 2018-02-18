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

}

updateTarget = (targetShelf,targetId) => {
  //you may not need these states << just needed the vars
  // this.setState({targetShelf: targetShelf, targetId:targetId}, this.checkStatus)

    this.setState((previousState) => {
    const bookie = previousState.allBooks.filter(book => book.id === targetId);
    bookie[0].shelf = targetShelf;
    console.log(bookie);
  });


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
