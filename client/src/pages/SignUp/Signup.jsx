import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./signup.scss";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Password do not match.");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Registration Successfull...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="signup">
        <h1> User registration </h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email-address"></label>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email "
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password"></label>
            <input
              type="password"
              label="Create password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit">Sign up</button>
        </form>

        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </div>
    </>
  );
};

export default Signup;
