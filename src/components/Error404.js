import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>We are sorry, page not found</h2>
        <p>
          The page you are looking for might have been removed, had it's name
          changed or is temporarily unavailable.
        </p>
        <NavLink to="/">Back to Homepage</NavLink>
      </div>
    </div>
  );
};

export default Error404;
