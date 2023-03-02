import axios from 'axios';
import { BASE_URL, FETCH_PRESCRIPTIONS_USERID } from '../../AppConstants';
export function fetchPrescriptionsByUserId(userId){
    return dispatch=>{
        return axios.get(BASE_URL+'/prescriptions/getPrescriptions/'+userId).then(resp=>{
            dispatch({
                type:FETCH_PRESCRIPTIONS_USERID,
                action:resp.data
            })
        })
    }
}