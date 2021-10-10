import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useContextProvider from '../../hooks/useContextProvider';

const Header = () => {
  const style = {
    fontWeight: "bold",
    color: "goldenrod"
  };
  const { logOut, user } = useContextProvider();

    return (
      <div>
        <img className="img-fluid w-25" src={logo} alt="" />
        <nav className="nav bg-dark ps-3">
          <NavLink
            activeStyle={style}
            className="nav-link"
            aria-current="page"
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink activeStyle={style} className="nav-link" to="/orders">
            Order review
          </NavLink>
          <NavLink activeStyle={style} className="nav-link" to="/inventory">
            Manage Inventory Here
          </NavLink>
          {!user.email ? (
            <NavLink activeStyle={style} className="nav-link" to="/login">
              Login
            </NavLink>
          ) : (
            <>
              <span className="text-white">{user.displayName.toUpperCase()}</span>
              <button onClick={logOut}>Log Out</button>
            </>
          )}
        </nav>
      </div>
    );
};

export default Header;