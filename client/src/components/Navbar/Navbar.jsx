import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfull...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="center">
          <Link className="link" to="/">
            Vogueton
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/store">
              Store
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={logout}>
              LogOut
            </Link>
          </div>
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <Link to="/signup">
              <i className="fa-regular fa-user"></i>
            </Link>
            <i className="fa-regular fa-heart"></i>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {user && <Auth />}
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
