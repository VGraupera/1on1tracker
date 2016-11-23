import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="container">
      <h1>Page Not Found</h1>
      <p><Link to="/">Return to the homepage</Link></p>
    </div>
  );
};

export default NotFound;
