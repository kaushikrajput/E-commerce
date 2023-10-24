import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const items = useSelector((state) => state.cartReducer);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
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
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="item">
            <Link className="link" to="/store">
              Store
            </Link>
          </div>
          <div className="item">
            {user ? (
              <Link className="link" onClick={logout}>
                LogOut
              </Link>
            ) : (
              <Link className="link" to="/signup">
                Sign in
              </Link>
            )}
            <a
              href="#home"
              className="link"
              style={{ color: "red", paddingLeft: "10px" }}
            >
              <i className="fa-solid fa-user"></i>Hello,&nbsp;
              {user && user.displayName ? user.displayName : "Guest"}
            </a>
          </div>
          <Link to={"/cart"}>
            <div className="icons">
              <div className="cartIcon">
                <i className="fa-solid fa-bag-shopping "></i>
                <span>{items?.cartItem?.length}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* {user && <Auth />} */}
      {/* {open && <Cart />} */}
    </div>
  );
};

export default Navbar;
