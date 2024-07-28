import "./navbar.scss";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  if (currentUser) fetch();
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
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
             {number>0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="./menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link className="link" to="/">
            Home{" "}
          </Link>
          <Link className="link" to="/">
            About{" "}
          </Link>
          <Link className="link" to="/contact">
            Contact{" "}
          </Link>
          {/* <Link to="/">Agents </Link> */}
          <Link className="link" to="/">
            Sign in{" "}
          </Link>
          <Link className="link" to="/">
            Sign up{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
