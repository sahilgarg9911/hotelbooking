import React from "react";
import { useState } from "react";
import { json, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handlelogin = (e) => {
    e.preventDefault();
    const singleloggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email == singleloggeduser.email &&
      input.password == singleloggeduser.password
    ) {
      localStorage.setItem("isloggedin", true);
      toast.success("successfully login");
      navigate("/");
    } else {
      toast.error("Invalid login details");
    }
  };
  return (
    <>
      <div className="Login">

        <div className="LoginContainer">
          <h1>Login</h1>
          <form>
            <h3>Email</h3>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            ></input>
            <h3>Password</h3>
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              required
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            ></input>
            <button className="LoginButton" onClick={handlelogin}>
              Login
            </button>
          </form>
          <Link to="/Signup" className="headerLink">
            <button className="LoginButton">
              Create Your Account
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
