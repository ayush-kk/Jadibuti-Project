import axios from 'axios';
import { 
    BASE_URL,
    CUSTOMER_FETCH_ALL,
    CUSTOMER_FETCH_BYID,
    CUSTOMER_SAVE
        } from '../../AppConstants';



export function fetchAllCustomers(){

    return(dispatch)=>{

        return axios.get(BASE_URL+"/admin/getAllCustomers").then(
            resp=>{
                dispatch({
                    type:CUSTOMER_FETCH_ALL,
                    payload:resp.data
                });
            }
        )
    }
}




export function fetchCustomer(customerId) {

    return (dispatch) => {
        return axios.get(BASE_URL+"/admin/getCustomerById/"+customerId).then(
            resp => {
                dispatch({
                    type: CUSTOMER_FETCH_BYID,
                    payload: resp.data
                });
            }
        )
    }
}
export function addCustomer(customer){
    return dispatch=>{
        return axios.post(BASE_URL+"/customer/register",customer).then(
            resp=>{
                alert("customer registration done");
                dispatch({
                    type:'customer/save',
                    payload:resp.data
                })

            }

        ).catch(error=>{
            alert("registration failed")
        })
    }
}

export function updateCustomer(customerId){
    return dispatch=>{
        return axios.put(BASE_URL+"/customer/updateCustomer",customerId).then(
            resp=>{
                alert("customer updation done");
                dispatch({
                    type:'customer/update',
                    payload:resp.data
                })

            }

        ).catch(error=>{
            alert("updation failed")
        })
    }
}

export function updateAddress(customerId){
    return dispatch=>{
        return axios.put(BASE_URL+"/customer/updateAddress",customerId).then(
            resp=>{
                alert("address updation done");
                dispatch({
                    type:'customeraddress/update',
                    payload:resp.data
                })

            }

        ).catch(error=>{
            alert("updation failed")
        })
    }
}



