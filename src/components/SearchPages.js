import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

function SearchPages(props) {
  const [query, setQuery] = useState('');
  const [newBooks, setNewBooks] = useState([]);
  const [searchErr, setSearchErr] = useState(false);

  const { books, selectShelf } = props;

  const getBooks = (e) => {
    const query = e.target.value;
    setQuery(query);
    console.log(query);
    if (query) {
      BooksAPI.search(query).then((books) => {
        // console.log(books);
        books.length > 0
          ? setNewBooks({ newBooks: books, searchErr: false })
          : setNewBooks({ newBooks: [], searchErr: true });
      });
    } else setNewBooks({ newBooks: [], searchErr: true });
  };

  useEffect(() => {
    console.log(newBooks.newBooks);
  }, [newBooks]);

  return (
    <div>
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <input
          type="text"
          placeholder="Search by Title, Author or ISBN"
          value={query}
          onChange={getBooks}
        />
      </div>

      <div className="">
        {newBooks.newBooks && (
          <div className="search-books-results">
            <h3>Search Returned {newBooks.newBooks.length} Books</h3>
            <ol>
              {newBooks.newBooks.map((book) => (
                <Book
                  book={book}
                  books={books}
                  key={book.id}
                  selectShelf={selectShelf}
                />
              ))}
            </ol>
          </div>
        )}
        {searchErr && (
          <h3>Search did NOT return any Books. Please try again !</h3>
        )}
      </div>
    </div>
  );
}

SearchPages.propTypes = {
  books: PropTypes.array.isRequired,
  selectShelf: PropTypes.func.isRequired,
};

export default SearchPages;
