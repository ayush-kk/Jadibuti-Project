import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/actions/LoginAction';

function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors,setFormErrors] = useState({});
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const loginUser = useSelector(state=>state.loginReducer.loginUser);


    const dispatch = useDispatch();

    const doLogin=()=>{
        let errors ={};
        if(!userName){
           errors['userNameError'] = 'username is required';
        }
        if(!password){
            errors['passwordError'] = 'Password is required';
        }
        setFormErrors(errors);
        if(Object.keys(errors).length===0){
            const payLoad = {
                username: userName,
                password: password
            }
            dispatch(userLogin(payLoad));
        } 
        if(loginUser!==null){
            
                const role = loginUser.role;
                if(role ==='customer'){
                    
                     navigate("/home")
                }
                if(role ==='admin'){
                    
                    navigate("/admin")
                }
    
        } 

    }
    return (
        <div>
           
            <div>
                <label>Username</label>
                <input type="text" name="userName" value={userName}
                 onChange={event => setUserName(event.target.value)} />
                 {
                    formErrors.userNameError &&
                    <div style={{color:'red'}}>
                        {formErrors.userNameError}
                    </div>
                 }
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} 
                onChange={event => setPassword(event.target.value)} />
                {
                    formErrors.passwordError &&
                    <div style={{color:'red'}}>
                        {formErrors.passwordError}
                    </div>
                 }
            </div>
            <button onClick={doLogin}>Login</button>
        </div>
    )
}
export default Login;