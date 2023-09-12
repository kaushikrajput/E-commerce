import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./login.scss";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const redirectUser = () => {
  //   if (previousURL.inclues("cart")) {
  //     return navigate("/cart");
  //   }
  //   navigate("/");
  // };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login Successfull...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <div className="form-control">
          <label htmlFor="email-address"> </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div >
          <button className="login-btn">Login</button>
        </div>
        <div className="reset">
          <Link to="/reset">Reset Password</Link>
        </div>
        <button className="google-popup" onClick={signInWithGoogle}>
          <i class="fa-brands fa-google"></i>Login with Google
        </button>
      </form>
      <p className="text-sm text-white text-center">
        No account yet? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
