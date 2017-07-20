import React from 'react';
import './Header.css';

const Header = (props) => {
  return(
    <div className="row header">
      <div className="col-sm-3 col-md-3" >
        <div id="logo"></div>
      </div>
      <div className="col-md-9 col-md-9">
        <div className="links">
          <span><a href="#">How we work</a></span>
          <span><a href="#">Companies</a></span>
          <span><a href="#">Testimonials</a></span>
          <span><a href="#">Contact Us</a></span>
          <span><a className="button-links" href="#">Sign Up</a></span>
          <span><a className="button-links" href="#">Login</a></span>
        </div>
      </div>
    </div>
  );
};

export default Header;