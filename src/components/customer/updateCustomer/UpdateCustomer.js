import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import '../updateCustomer/UpdateCustomer.css';

import { updateCustomer } from '../../../Store/Actions/CustomerActions';
import Sidebar from '../sidebar/Sidebar';
import NavbarWeb from '../../navbar/NavbarWeb';
import Footer from '../../footer/Footer';


function UpdateCustomer() {

    const customer = useSelector(state => state.CustomerReducer.customer);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const [cage, setCAge] = useState(customer.age);
    const [cgender, setCGender] = useState(customer.gender);
    const [cemail, setCEmail] = useState(customer.email);
    const [cphoneNumber, setCPhoneNumber] = useState(customer.phoneNumber);
    const [cfirstName, setCFirstName] = useState(customer.firstName);
    const [clastName, setCLastName] = useState(customer.lastName);
    const [cusername, setCUsername] = useState(customer.username);
    const [cpassword, setCPassword] = useState(customer.password);
    const [chno, setCHno] = useState(customer.address.houseNumber);
    const [cstreet, setCStreet] = useState(customer.address.street);
    const [clandmark, setCLandmark] = useState(customer.address.landmark);
    const [ccity, setCCity] = useState(customer.address.city);
    const [cstate, setCState] = useState(customer.address.state);
    const [cpincode, setCPincode] = useState(customer.address.pinCode);


    // useEffect(() => {
    //     dispatch(fetchCustomer(userId));
    //     if(customer !=null){
    //         setCEmail(customer.email)
    //     }

    
    // }, [userId])

    
    


   const update=()=>{

    const payload={
        userId: userId,
                age:cage,
                gender: cgender,
                email: cemail,
                phoneNumber: cphoneNumber,
                firstName:cfirstName,
                lastName: clastName,
                username:cusername,
                password: cpassword,
                
            
                address: {
                    houseNumber:chno,
                    street: cstreet,
                    landmark: clandmark,
                    city: ccity,
                    state: cstate,
                    pinCode: cpincode
    
                }


    }
    dispatch(updateCustomer(payload))


   }


    return (

      <div className="form-container">
        <NavbarWeb/>
        <Sidebar firstName={cfirstName} lastName={clastName} gender={cgender} />
  <form className="form-box">
  <div className="form-row">
    <div className="form-group col-md-12"> 
      <label htmlFor="cuid">UserId</label>
      <input type="text" name="userId" id="userId" value={userId}  readOnly/>
    </div>
</div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="cfirstName">First Name</label>
        <input type="text" name="cfirstName" id="cfirstName" value={cfirstName} onChange={(event) => setCFirstName(event.target.value)} />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="clastName">Last Name</label>
        <input type="text" name="clastName" id="clastName" value={clastName} onChange={(event) => setCLastName(event.target.value)} />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="cage">Age</label>
        <input type="text" name="cage" id="cage" value={cage} onChange={(event) => setCAge(event.target.value)} />
      </div>
      
    
      <div className="form-group col-md-6">
  <label htmlFor="cgender">Gender</label>
  <div className="gender-radio-buttons">
  
    <label htmlFor="male" className={cgender === "male" ? "selected" : ""}>
      <input type="radio" name="cgender" id="male" value="male" onChange={(event) => setCGender(event.target.value)} />
      <span className="circle"></span>
      <span>Male</span>
    </label>

    <label htmlFor="female" className={cgender === "female" ? "selected" : ""}>
      <input type="radio" name="cgender" id="female" value="female" onChange={(event) => setCGender(event.target.value)} />
      <span className="circle"></span>
      <span>Female</span>
    </label>
  </div>
</div>
</div>



    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="cemail">Email</label>
        <input type="text" name="cemail" id="cemail" value={cemail} onChange={(event) => setCEmail(event.target.value)} />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="cphoneNumber">Phone Number</label>
        <input type="text" name="cphoneNumber" id="cphoneNumber" value={cphoneNumber} onChange={(event) => setCPhoneNumber(event.target.value)} />
      </div>
    </div>

    <div className="form-group">
      <button className="btn btn-primary" onClick={update}>Update</button>
    </div>
  </form>
  <Footer/>
</div>


    )
}
export default UpdateCustomer;

