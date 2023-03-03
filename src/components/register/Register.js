import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registerApp.css'
import { useDispatch } from 'react-redux';
import {RegisterAction} from '../../Store/Actions/RegisterAction'
import { ToastContainer } from 'react-toastify';
export default function Register() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [usrName, setUName] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [hno, setHno] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pcode, setPCode] = useState('');
    const [role, setRole] = useState('customer');

    //const nav = useNavigate();

    const [validation, setValidation] = useState({});

    const dispatch = useDispatch();

    const handleRegister = () => {
        let errors = {};


        let pattern = /^[A-Za-z]+[0-9]+$/
        if (!pattern.test(usrName)) errors['unameErr'] =
            'Username must start with alphabets and ends with a number'

        setValidation(errors);

        if (Object.keys(errors).length === 0) {
            const payload =
            {

                firstName: fName,
                lastName: lName,
                username: usrName,
                password: password,
                age: age,
                gender: gender,
                email: email,
                phoneNumber: phno,
                role: role,
                address: {
                    houseNumber: hno,
                    street: street,
                    landmark: landmark,
                    city: city,
                    state: state,
                    pinCode: pcode,
                    role: role
                }
            }
            dispatch(RegisterAction(payload))
            //nav('/')

        }
    }
    return (
        <div className='container conReg'>
            <div className='registerAlign'>
                <div className='row rowReg'>
                    <div className='col colReg'>
                        <h2 style={{ fontFamily: 'Segoe UI' }}>Register Yourself</h2>
                    </div>
                </div>
                <div className='row rowReg' style={{ marginTop: '4%' }}>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="fName">First Name </label>
                        <input type="text" name="fName" value={fName} placeholder="Enter your first name"
                            onChange={event => setFName(event.target.value)} required />
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="lName">Last Name </label>
                        <input type="text" name="lName" value={lName}
                            placeholder="Enter your last name"
                            onChange={event => setLName(event.target.value)} required />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for='age'>Age</label>
                        <input type='number' name='age' value={age} placeholder='Enter age'
                            onChange={event => setAge(event.target.value)} required />
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for='gen'>Gender</label>
                        <select name='gen' value={gender} onChange={event => setGender(event.target.value)} id='gen'>
                            <option>---SELECT GENDER---</option>
                            <option value='male' >
                                MALE</option>
                            <option value='female'>
                                FEMALE</option>
                        </select>
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="Enter your email address" value={email}
                            onChange={event => setEmail(event.target.value)}
                            required />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg' for="phno">Mobile Number</label>
                        <input type="number" name="phno" value={phno}
                            placeholder="Enter your mobile number"
                            onChange={event => setPhno(event.target.value)}
                            required />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg' for='usrname'>Username </label>
                        <input type='text' name='usrname' value={usrName} placeholder='Enter username'
                            onChange={event => setUName(event.target.value)} required />
                        {
                            validation.unameErr &&
                            <div style={{ color: 'red' }}>
                                {validation.unameErr}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg' for='passwd'>Password </label>
                        <input type='password' name='password' value={password} placeholder='Enter password'
                            onChange={event => setPassword(event.target.value)} required />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="hno">House Number</label>
                        <input type="number" name="hno" value={hno}
                            placeholder="Enter your house number"
                            onChange={event => setHno(event.target.value)} required />
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="street">Street </label>
                        <input type="text" name="street" value={street}
                            placeholder="Enter street name"
                            onChange={event => setStreet(event.target.value)} required />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="landmark">Landmark </label>
                        <input type="text" name="landmark" value={landmark} placeholder="landmark"
                            onChange={event => setLandmark(event.target.value)}
                            required />
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="city">City </label>
                        <input type="text" name="city" value={city}
                            placeholder="Enter city name"
                            onChange={event => setCity(event.target.value)} />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="state">State </label>
                        <input type="text" name="state" value={state} placeholder="Enter state"
                            onChange={event => setState(event.target.value)} required />
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="pincode">Pincode </label>
                        <input type="text" name="pincode" value={pcode}
                            placeholder="Enter pincode"
                            onChange={event => setPCode(event.target.value)} required />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg'>Role</label>
                        <input type='text' value={role} disabled />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <br />
                        <button className='btn btn-primary text-center' onClick={handleRegister}
                        >Register</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <br />
                        <p style={{ textAlign: 'center' }}>Already have an account?<Link to='/login'>
                            Login Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}