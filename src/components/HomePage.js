import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const HomePage = (props) => {
  const { books, selectShelf } = props;

  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want To Read' },
    { type: 'read', title: 'Read' },
  ];

  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          // console.log(books);
          const bookShelf = books.filter((book) => book.shelf === shelf.type);

          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelf books={bookShelf} selectShelf={selectShelf} />
              </div>
              <div className="open-search">
                <a href="/search">Search</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomePage.prototype = {
  books: PropTypes.array.isRequired,
  selectShelf: PropTypes.func.isRequired,
};

export default HomePage;
