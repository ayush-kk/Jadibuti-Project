import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row } from "reactstrap";

// import "./Sidebar.css";
import "./Sidebar.module.css";
import maleIcon from "../../../assets/maleIcon.jpg";
import femaleIcon from "../../../assets/femaleIcon.jpg";

function Sidebar({ firstName, lastName, gender, userId }) {
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const iconSrc = gender === "male" ? maleIcon : femaleIcon;

  const navigate = useNavigate();
  const doLogout = () => {
    if (myuser !== null) {
      localStorage.removeItem("myuser");
      alert("logged out.");
      navigate("/");
    }
  };

  return (
    <div className="sidebar-container">
      <div className="greeting-container">
        <Row md={7}>
          <img src={iconSrc} alt="icon" className="icon" />
        </Row>
        <div className="hello-text">Hello</div>
        <div className="name-text">
          {firstName} {lastName}
        </div>
      </div>
      
      <div className="links-container">
        <ul>
          <li>
            <Link to={`/customer/update/${myuser.userId}`}>Update Profile</Link>
          </li>
          <li>
            <Link to={`/customer/update/address/${myuser.userId}`}>
              Update Address
            </Link>
          </li>
          <li>
            <Link to={`/customer/update/address/${myuser.userId}`}>
              View Orders
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to=""
              id="navbardrop"
              data-toggle="dropdown"
            >
              Prescription
            </Link>
            <div className="dropdown-menu">
              <Link
                to={`/prescriptions/${myuser.userId}`}
                className="dropdown-item"
              >
                View Prescriptions
              </Link>
              <Link to="/" className="dropdown-item">
                Add Prescription
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="logout-container">
        <button className="logout-button" onClick={doLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
