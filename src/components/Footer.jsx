import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../assets/NavLogo.jpeg";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={NavLogo} className="footer__logo--img" alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/movies" className="footer__link">
              Movies
            </Link>
            <Link to="/cart" className="footer__link--contact">
              Contact
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2025 Fast Lane Collection</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
