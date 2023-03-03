import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addPrescription } from "../../../Store/Actions/PrescriptionAction";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './pres.css'

export default function AddPrescription() {
    const [uploadDate, setUpDate] = useState(new Date().toISOString().slice(0, 10));
    const [validDate, setValDate] = useState(new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10));
    const [userId, setUserId] = useState('');


    console.log(uploadDate);

    const dispatch = useDispatch();

    const handlePrescriptionButton = () => {
        const payload = {
            uploadDate: uploadDate,
            validationDate: validDate,
            customer: {
                userId: userId
            }
        }
        dispatch(addPrescription(payload));
    }
    return (
        <div className="container containerpres">
            <div id='presDiv'>
                <div className="row rowpres">
                    <div className="col colpres">
                        <h2>ADD PRESCRIPTION</h2>
                    </div>
                </div>
                <div className="row rowpres" style={{marginTop:'4%'}}>
                    <div className="col colpres">
                        <label for='upDate'>Upload Date</label>
                        <input type='date' value={uploadDate} name='upDate' disabled />
                    </div>
                </div>

                <div className="row rowpres">
                    <div className="col colpres">
                        <label for='valDate'>Validation Date</label>
                        <input type='date' value={validDate} name='valDate' disabled  />
                    </div>
                </div>

                <div className="row rowpres">
                    <div className="col colpres">
                        <label for='uid'>User ID</label>
                        <input type='number' name='uid' value={userId} onChange={event => setUserId(event.target.value)}
                            placeholder="enter your id" required />
                    </div>
                </div>

                <div className="row rowpres">
                    <div className="col colpres">
                        <label for='pres'>Select the Prescription file</label>
                        <input type='file' id='pres' name="pres" multiple style={{align:'left'}}/>
                    </div>
                </div>

                <div className="row rowpres">
                    <div className="col colpres">
                        <button onClick={handlePrescriptionButton} className='btn btn-warning'>
                            Add Prescription</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
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
            </div>

        </div>
    )
}