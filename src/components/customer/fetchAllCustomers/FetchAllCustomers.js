import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAllCustomers } from '../../../Store/Actions/CustomerActions';
import { Link } from 'react-router-dom';


function FetchAllCustomers(){

    const customers =useSelector(state=>state.CustomerReducer.customers);
    const dispatch =useDispatch();

    useEffect(()=>{

        dispatch(fetchAllCustomers());
    },[])

    return (
        <div>

            {

                customers.length >0 &&
                customers.map(c=>
                    
                    <div key={c.userId}>
                        
                            {c.firstName} {c.lastName} {c.email} {c.phoneNumber}
                            <Link to={`/customer/${c.userId}`}>View</Link>

                            </div>)
            }
        </div>
    )
}
export default FetchAllCustomers;