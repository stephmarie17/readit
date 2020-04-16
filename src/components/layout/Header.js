import React from 'react';
import headerImg from './sincerely-media-header.jpg';
import './header.css';

const Header = () => {
    return (
        <div className="header">
          <div className="header-styled">
          <h1>Readit</h1> <i className="fas fa-book-open"/>   
          <p>A few things to read.</p>
          </div>
        </div>
    )
}

export default Header
