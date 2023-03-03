import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function addMedicine(medicine){
    return(dispatch)=>{
        return axios.post('http://localhost:8080/medicine/addMedicine',medicine)
        .then(resp=>{
            toast.success('Medicine Added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
          )
          dispatch({
            type:'addmedicine',
            action:resp.data
          })
        }
        )
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



export function UpdMed(medicine){
    return(dispatch)=>{
        return  axios.put("http://localhost:8080/medicine/updateMedicine", medicine)
        .then(resp => {
            toast.success('Medicine Updated', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            dispatch({
                type:'updateMed',
                action:resp.data
            })
        })
        .catch(error=>toast.error('Something went wrong', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }))
        
    }
}
