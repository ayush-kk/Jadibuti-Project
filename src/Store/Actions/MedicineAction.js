import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL, MEDICINE_FETCH_ALL, MEDICINE_FETCH_BY_ID } from "../../AppConstants";

export function addMedicine(medicine){
    return(dispatch)=>{
        return axios.post('http://localhost:8080/medicine/addMedicine',medicine)
        .then(resp=>toast.success('Medicine Added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }))
        .catch(error=>toast.error('Unable to add medicine', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }))
    }
}





export function fetchAllMedicine() {
  return (dispatch) => {
    return axios.get(BASE_URL + "/medicine/allMedicines").then((resp) => {
      dispatch({
        type: MEDICINE_FETCH_ALL,
        payload: resp.data,
      });
    });
  };
}

export function fetchMedicineById(id) {
  return (dispatch) => {
    return axios.get(BASE_URL + `/medicine/getMedicineById/${id}`).then((resp) => {
      dispatch({
        type: MEDICINE_FETCH_BY_ID,
        payload: resp.data,
      });
    });
  };
}
