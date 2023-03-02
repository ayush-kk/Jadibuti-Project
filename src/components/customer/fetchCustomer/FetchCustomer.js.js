import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCustomer } from '../../../Store/Actions/CustomerActions';
import { Link } from 'react-router-dom';

function FetchCustomer() {
    const customer = useSelector(state => state.CustomerReducer.customer);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(fetchCustomer(userId));
    }, [userId])

    return (
        <div>
            {
                customer !== null &&
                <div>
                    <p>CustomerId :{customer.userId}</p>
                    <p>FirstName :{customer.firstName}</p>
                    <p>LastName :{customer.lastName}</p>
                    <p>Email :{customer.email}</p>
                    <p>Age:{customer.age}</p>
                    <p>Gender:{customer.gender}</p>
                    <p>Mobile :{customer.phoneNumber}</p>
                    <p>UserName:{customer.username}</p>
                    <p>Password:{customer.password}</p>
                    <p>Hno:{customer.address.houseNumber}</p>
                    <p>Street:{customer.address.street}</p>
                    <p>Landmark:{customer.address.landmark}</p>
                    <p>City:{customer.address.city}</p>
                    <p>State:{customer.address.state}</p>
                    <p>PinCode:{customer.address.pinCode}</p>
                    <Link to={`/customer/update/${customer.userId}`}>update profile </Link>
                    <span>&</span>
                    <Link to={`/customer/up/${customer.userId}`}>update Address </Link>

                </div>
            }
        
        </div>
    )
}
export default FetchCustomer;

