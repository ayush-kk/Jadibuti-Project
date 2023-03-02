import React, { useState } from "react";
import { Link } from "react-router-dom";
import herbal from "../../assets/herbal.svg";

import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarWeb = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const loginUser = useSelector(state=>state.loginReducer.loginUser);
  const navigate=useNavigate();
  const doLogout=() => {
    if(myuser !==null) {
      localStorage.removeItem("myuser")
      alert("logged out.");
      navigate("/home");
    }
  }

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div style={{ backgroundColor: "gainsboro" }}>
      <div></div>
      <nav
        className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
        data-bs-theme="dark"
      >
        <a className="navbar-brand" href="#">
          <img
            src={herbal}
            width="30"
            height="30"
            className="d-inline-block align-text-top"
            style={{ marginRight: "15px" }}
          />
          Ayurvedic Medicine
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Category
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Skin products
              </a>
              <a className="dropdown-item" href="#">
                Hair products
              </a>
              <a className="dropdown-item" href="#">
                Face products
              </a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <SearchBar/>
          {myuser!==null? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Profile
                </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" onClick={doLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" onClick={handleLogin} to='/login' >Login</Link>
                {/* <a  href="/login" onClick={handleLogin}>
                  Login
                </a> */}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarWeb;
