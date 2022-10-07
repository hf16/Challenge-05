import "./MainNav.css";
import React from "react";
import { Link } from "react-router-dom";

//Main Navbar berada paling atas yang berisi logo movielist dan button login register
const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <nav className="navbar-brand">
        <Link className="navbar-brand" to="/">
          <h3> MovieList</h3>
        </Link>
           
        </nav>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
        </ul>
          <div className="all__right">
            <div className="btn-login">
                <button className=" login-btn">login</button>
                <button className=" register-btn">Register</button>
            </div>          
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
