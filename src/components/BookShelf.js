import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props) => {
  const { books, selectShelf } = props;

  return (
    <div className="books-grid">
      <ol>
        {books.map((book) => (
          <Book
            book={book}
            books={books}
            key={book.id}
            selectShelf={selectShelf}
          />
        ))}
      </ol>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  selectShelf: PropTypes.func.isRequired,
};

export default BookShelf;
