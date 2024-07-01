import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="./logo.png" alt="" />
          <span>PrimeSpace</span>
        </Link>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        {/* <Link to="/">Agents </Link> */}
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="" alt="" />
            <span>John</span>
            <Link to="/profile" className="profile">
            <div className="notification">
              3
            </div>
            <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="">Sign in</Link>
            <Link to="" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="./menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link className="link" to="/">Home </Link>
          <Link className="link" to="/">About </Link>
          <Link className="link" to="/contact">Contact </Link>
          {/* <Link to="/">Agents </Link> */}
          <Link className="link" to="/">Sign in </Link>
          <Link className="link" to="/">Sign up </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
