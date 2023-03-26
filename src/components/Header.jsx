import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const username = JSON.parse(localStorage.getItem("user"));
  const isloggedin = JSON.parse(localStorage.getItem("isloggedin"));

  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.setItem("isloggedin", false);
    navigate("/Login");
  };

  return (
    <>
     

      <nav className="bootstrapnavbar navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <Link to="/" className="logolink">
            <h3 className="logoheading navbar-brand">Room Booking Website</h3>
          </Link>
            
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form class="d-flex formlinks" role="search">

            <h5 className="username">{isloggedin ? username.name : " "}</h5>


            {isloggedin ? (
              <button className="logoutbtn btn btn-outline-success" onClick={handlelogout}>
                Logout
              </button>
            ) : (
              <Link to="/Login" className="headerLink">
                <button className=" loginbtn btn btn-outline-success">Login</button>
              </Link>
            )}


              

            
              <Link to="/cart" className="headerLink">
                <div className="headerOptions_Basket">
                  <span className="headerOption_Two basketCount btn btn-outline-success">
                    Cart : {cartItems ? cartItems.length : 0}
                  </span>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
