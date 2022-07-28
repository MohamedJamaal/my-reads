import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>There are No books in this search </h1>
      <NavLink to="/" />
    </div>
  );
};

export default Error;
