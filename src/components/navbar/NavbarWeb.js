import React from "react";
import herbal from "../../assets/herbal.svg";

const NavbarWeb = () => {
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
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarWeb;
