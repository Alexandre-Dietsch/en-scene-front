import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <div className="header-container">
      <div className="header-title">
        <Link to='/'>
          <h1>En scène</h1>
        </Link>
      </div>
    </div>
  );
}