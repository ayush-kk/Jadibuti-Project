import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export function userLogin(payLoad){
    
    return (dispatch)=>{
        axios.post("http://localhost:8080/auth/login",payLoad).then(
            resp=>{
                const myuser={
                    userId : resp.data.userId,
                    firstName : resp.data.firstName,
                    lastName : resp.data.lastName,
                    role :resp.data.role
                }
                // const loggedInUser = resp.data;
                // const myObj = {
                //     userId : loggedInUser.userId,
                //     firstName : loggedInUser.firstName,
                //     lastName : loggedInUser.lastName,
                //     role : loggedInUser.role
                // }
                localStorage.setItem("myuser",JSON.stringify(myuser));
                // const role = loggedInUser.role;
                // if(role ==='customer'){
                    
                //      navigate("/customer")
                // }
                // if(role ==='admin'){
                    
                //     navigate("/admin")
                // }
                dispatch({
                    type:'login/success',
                    payload : resp.data
                })
            }
        ).catch(error => alert(error.response.data))
    }
}