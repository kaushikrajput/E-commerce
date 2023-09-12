import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.displayName);
        setDisplayName(user.displayName);
      } else {
        setDisplayName("");
      }
    });
  });

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
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="item">
            <Link className="link" to="/store">
              Store
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/signup">
              Sign in
            </Link>
          <a href="#home" className="link">
            {displayName}
          </a>
          </div>

          <div className="icons">
            {/* <i className="fa-regular fa-heart"></i> */}
            <div className="cartIcon" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bag-shopping "></i>
              <span>0</span>
            </div>
            {/* <div className="item">
              <Link className="link" to="/" onClick={logout}>
                LogOut
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {user && <Auth />}
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
