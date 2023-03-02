import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import  maleIcon from '../../../assets/maleIcon.jpg';
import femaleIcon from '../../../assets/femaleIcon.jpg'

function Sidebar({ firstName, lastName, gender,userId}) {

  const iconSrc = gender === "male" ? maleIcon : femaleIcon;


  return (
    <div className="sidebar">
    <div className="greeting">
    
      <img src={iconSrc} alt="icon" className="icon" />
    
      
      <div className="hello-text">Hello</div>
        <div className="name-text">{firstName} {lastName}</div>
    </div>
  

    
        

        
    


      <div className="links">
        <ul>
          <li>
            <Link to="/customer/update/:userId">Update Profile</Link>
          </li>
          <li>
            <Link to={`/customer/update/address/:userId`}>Update Address</Link>
          </li>
          <li>View Orders</li>
          <li>My Prescriptions</li>
        </ul>
      </div>

      <div className="logout">
        <button  className="btn btn-primary" onClick=''>Log Out</button>
      </div>
    </div>
  );
}

export default Sidebar;





