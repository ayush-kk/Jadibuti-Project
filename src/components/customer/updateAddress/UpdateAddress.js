import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../updateCustomer/UpdateCustomer.css';

import { updateAddress } from '../../../Store/Actions/CustomerActions';
import Sidebar from '../sidebar/Sidebar';

function UpdateAddress() {

    const customer = useSelector(state => state.CustomerReducer.customer);
    const dispatch = useDispatch();
    const { userId } = useParams();
    // const [cage, setCAge] = useState(customer.age);
    const [cgender, setCGender] = useState(customer.gender);
    // const [cemail, setCEmail] = useState(customer.email);
    // const [cphoneNumber, setCPhoneNumber] = useState(customer.phoneNumber);
     const [cfirstName, setCFirstName] = useState(customer.firstName);
     const [clastName, setCLastName] = useState(customer.lastName);
    // const [cusername, setCUsername] = useState(customer.username);
    // const [cpassword, setCPassword] = useState(customer.password);
    const [chno, setCHno] = useState(customer.address.houseNumber);
    const [cstreet, setCStreet] = useState(customer.address.street);
    const [clandmark, setCLandmark] = useState(customer.address.landmark);
    const [ccity, setCCity] = useState(customer.address.city);
    const [cstate, setCState] = useState(customer.address.state);
    const [cpincode, setCPincode] = useState(customer.address.pinCode);

    const update = () => {

        const payload = {
            userId: userId,
            houseNumber: chno,
            street: cstreet,
            landmark: clandmark,
            city: ccity,
            state: cstate,
            pinCode: cpincode
        }
        dispatch(updateAddress(payload))


    }
    return (
        <div className="container">

             <Sidebar firstName={cfirstName} lastName={clastName} gender={cgender} userId={userId}/> 
            <form className="form-box">

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="userId">UserId</label>
                        <input type="text" name="userId" id="userId" value={userId} readOnly />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="chno">House Number</label>
                        <input type="text" name="chno" id="chno" value={chno} onChange={(event) => setCHno(event.target.value)} />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="cstreet">Street</label>
                        <input type="text" name="cstreet" id="cstreet" value={cstreet} onChange={(event) => setCStreet(event.target.value)} />
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="clandmark">Landmark</label>
                        <input type="text" name="clandmark" id="clandmark" value={clandmark} onChange={(event) => setCLandmark(event.target.value)} />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="ccity">City</label>
                        <input type="text" name="ccity" id="ccity" value={ccity} onChange={(event) => setCCity(event.target.value)} />
                    </div>
                </div>





                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="cstate">State</label>
                        <input type="text" name="cstate" id="cstate" value={cstate} onChange={(event) => setCState(event.target.value)} />
                    </div>


                    <div className="form-group col-md-6">
                        <label htmlFor="cpincode">PinCode</label>
                        <input type="text" name="cpincode" id="cpincode" value={cpincode} onChange={(event) => setCPincode(event.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={update}>Update</button>
                </div>

            </form>



            {/* <div className="go-back">
            <li> <Link to={`/customer/update/${cid}`}>Go Back</Link></li>
           </div> */}

        </div>

    )
}
export default UpdateAddress;