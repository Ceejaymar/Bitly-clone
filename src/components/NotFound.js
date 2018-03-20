import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <div>
      <p>Something went wrong :(</p>
      <p>Make sure you are on the correct route path</p>
    </div>
    <Link to={`/`}>Click here to go home</Link>
  </div>
)

export default NotFound;