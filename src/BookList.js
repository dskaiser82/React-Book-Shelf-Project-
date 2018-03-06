import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BookList extends React.Component {
  static PropTypes = {
    allBooks: PropTypes.array.isRequired,
    grabTarget: PropTypes.func.isRequired
  }

    render() {
      const { allBooks, grabTarget} = this.props
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

const shelfTitles = shelves.map(shelf => shelf.title)
///////////////////

  // const foo = shelves.map(shelf => {
  //   shelf.theBooks.map(book =>
  //        console.log(book.title)
  //   )
  // })

  const foo = shelves.filter(shelf => shelf.id === "read").map(shelf =>
   shelf.theBooks.map(book =>
           console.log(book.title)
   )
  )




  // console.log(money)



 //Currently All Books filtered bu currently Reading
  const  one = allBooks.filter(book => book.shelf === "currentlyReading")
    // console.log(one)





      return(
        <div className="app">




            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>


                {shelfTitles.map((shelf) =>(
              <div key={shelf[0]} className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">

                    {shelves.filter(shelf => shelf.id === shelf.id).map(shelf =>
                     shelf.theBooks.map(book =>

                    <li key={book.id} >
                      <div className="book">
                        <div className="book-top">


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
          ))
        }


              <div className="list-books-content">
                <div>

                  {/* Book Section */}
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">

                        {allBooks.filter(book => book.shelf === "currentlyReading")
                          .map((book) =>(
                            <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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

                  {/* Book Section */}
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">

                        {allBooks.filter(book => book.shelf === "wantToRead")
                          .map((book) =>(
                            <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">

                                    <select id={book.id}
                                      onChange={(event) => grabTarget(event.target.value, event.target.id)}
                                      >

                                      <option value="wantToRead">Want to Read</option>
                                      <option value="currentlyReading">Currently Reading</option>
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

                  {/* Book Section */}
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Have Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">

                        {allBooks.filter(book => book.shelf === "read")
                          .map((book) =>(
                            <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">

                                    <select id={book.id}
                                      onChange={(event) => grabTarget(event.target.value, event.target.id)}
                                      >

                                      <option value="read">Read</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
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
              </div>

              {/* Open Search */}
              <Link
                  to="/search"
                  className="open-search"
                >+
              </Link>
            </div>
          )}
        </div>
      )
    }
}

export default BookList
