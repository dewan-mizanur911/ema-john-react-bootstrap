import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const style = {
    fontWeight: "bold",
    color: "goldenrod"
  };
    return (
      <div>
        <img className="img-fluid w-25" src={logo} alt="" />
        <nav className="nav bg-dark ps-3">
          <NavLink activeStyle={style} className="nav-link" aria-current="page" to="/shop">
            Shop
          </NavLink>
          <NavLink activeStyle={style} className="nav-link" to="/orders">
            Order review
          </NavLink>
          <NavLink activeStyle={style} className="nav-link" to="/inventory">
            Manage Inventory Here
          </NavLink>
        </nav>
      </div>
    );
};

export default Header;