import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from "../assets/NavLogo.jpeg";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <figure className="nav__logo">
            <img className="logo" src={NavLogo} alt="" />
            <div className="nav__logo--title">FAST LANE</div>
          </figure>
        </Link>

        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link nav__link--hover">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/movies" className="nav__link nav__link--hover">
              Movies
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/contact" className="nav__link nav__link--primary">
              Contact
            </Link>
          </li>

          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>

          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/movies" className="menu__link" onClick={closeMenu}>
                Movies
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/contact" className="menu__link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
