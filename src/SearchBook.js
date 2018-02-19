import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class SearchBook extends Component{

  render(){
    return(
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      {/* BACK HOME*/}
      <Link
          to="/"
          className="home"
        > <span>BACK TO MY BOOKS</span>
      </Link>
    </div>
    )
  }
}

export default SearchBook
