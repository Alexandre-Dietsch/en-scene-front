import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  return(
    <div className="mobile-menu-container">
      <div className="mobile-menu-left">
        <Link to='/'>
          <i className="fas fa-home" />
        </Link>
        <i className="fas fa-search" />
      </div>
      <div className="mobile-menu-rigth">
        <i className="fas fa-heart" />
        <i className="fas fa-user" />
      </div>
      <div className="mobile-menu-add">
        <i className="fas fa-plus-circle" />
      </div>
    </div>
  );
};