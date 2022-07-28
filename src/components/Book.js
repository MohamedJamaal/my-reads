import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import noCover from '../icons/error.jpg';
import SelectShelf from './SelectShelf';

function Book(props) {
  const { book, books, selectShelf } = props;

  //   useEffect(() => {
  //     console.log(book);
  //   }, []);

  useEffect(() => {
    console.log(book.imageLinks.thumbnail);
  }, []);

  const title = book.title ? book.title : 'No book title';

  return (
    <div className="books-grid">
      <li>
        <div className="book-top">
          <div className="book">
            <SelectShelf book={book} books={books} selectShelf={selectShelf} />
          </div>

          <div className="book-cover-title">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
            />
            <div className="book-title">{title}</div>
          </div>

          {book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}{' '}
              </div>
            ))}
        </div>
      </li>
    </div>
  );
}

Book.prototype = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  selectShelf: PropTypes.func.isRequired,
};

export default Book;
