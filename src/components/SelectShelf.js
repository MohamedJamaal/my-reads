import React from 'react';
import PropTypes from 'prop-types';

function SelectShelf(props) {
  const { book, books, selectShelf } = props;

  const changeShelf = (e) => {
    selectShelf(book, e.target.value);
  };
  let currentSehlf = 'none';

  for (let entry of books) {
    if (entry.id === book.id) {
      currentSehlf = entry.shelf;
      break;
    }
  }
  return (
    <div className="book-shelf-changer">
      <select onChange={changeShelf} defaultValue={currentSehlf}>
        <option value="none" disabled>
          Move To ...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want To Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

SelectShelf.propTpes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  selectShelf: PropTypes.func.isRequired,
};

export default SelectShelf;
