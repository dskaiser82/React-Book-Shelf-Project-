import React from 'react';

import PropTypes from 'prop-types';

class BookList extends React.Component {
  static PropTypes = {
    allBooks: PropTypes.array.isRequired,
    grabTarget: PropTypes.func.isRequired
  }

    render() {
      const { allBooks, grabTarget, shelfString, shelfVar} = this.props
      const shelves = [
        {
        title: "Currently Reading",
        id: "currentlyReading",
        theBooks: allBooks.filter(book => book.shelf === 'currentlyReading')
       },
       {
        title: "Want to Read",
        id: "wantToRead",
        theBooks: allBooks.filter(book => book.shelf === 'wantToRead')
      },
      {
       title: "Read",
       id: "read",
       theBooks: allBooks.filter(book => book.shelf === 'read')
     },
        ]


      return(
        <div className="app">

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>


              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfString}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">

                    {shelves.map(shelf =>
                     shelf.theBooks
                     .filter(book => book.shelf === shelfVar)
                     .map(book =>

                       <li key={book.id}>

                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                             </div>
                             <div className="book-shelf-changer">

                               <select id={book.id}
                                 onChange={(event) => grabTarget(event.target.value, event.target.id)}
                                 >
                                 <option value="currentlyReading">Currently Reading</option>
                                 <option value="wantToRead">Want to Read</option>
                                 <option value="read">Read</option>
                                 <option value="none">None</option>
                               </select>

                             </div>
                           </div>
                           <div className="book-title">{book.title}</div>
                           <div className="book-authors">{book.authors}</div>
                         </div>
                       </li>
                  ))
                }
              </ol>
            </div>
          </div>

            </div>
          )}
        </div>
      )
    }
}

export default BookList
