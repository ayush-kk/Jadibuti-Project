import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addMedicine} from '../../../store/actions/MedicineAction'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './AddMedicine.css';
export default function AddMed() {
    const [medicine, updateMedicine] = useState({
        mname: '',
        mcost: '',
        cname: '',
        mfd: '',
        expd: '',
        stk: '',
        rate: '',
        mdet: '',
        mtype: '',
        ingrdt: '',
        quant: '',
        categoryId: 0

    })

    const dispatch = useDispatch();



    const handleButton = () => {
        const payload = {
            medicineName: medicine.mname,
            medicineCost: medicine.mcost,
            companyName: medicine.cname,
            manufactureDate: medicine.mfd,
            expiryDate: medicine.expd,
            stock: medicine.stk,
            rating: medicine.rate,
            description: {

                details: medicine.mdet,
                medicineType: medicine.mtype,
                ingredients: medicine.ingrdt,
                quantity: medicine.quant
            },
            category: {
                categoryId: medicine.categoryId
            }
        }

        dispatch(addMedicine(payload));

    }
    return (
        <div className='container containermed'>
            <div className='row rowmed'>
                <div className='col col-med'>
                    <h2>ADD MEDICINE</h2>
                </div>
            </div>
            <div className='row rowmed'>
                <div className='col-sm-6 col-sm-med'>
                    <label>Medicine Name </label>
                    <input type='text' name='mname' value={medicine.mname} placeholder='enter medicine name'
                        onChange={event => updateMedicine({ ...medicine, mname: event.target.value })}
                    />

                </div>
                <div className='col-sm-6 col-sm-med'>
                    <label>Medicine Cost  </label>
                    <input type='number' name='mcost' value={medicine.mcost} placeholder='enter medicine cost'
                        onChange={event => updateMedicine({ ...medicine, mcost: event.target.value })}
                    />
                </div>
            </div>

            <div className='row rowmed'>
                <div className='col colmed'>
                    <label>Company Name</label>
                    <input type='text' name='cname' value={medicine.cname} placeholder='enter company name'
                        onChange={event => updateMedicine({ ...medicine, cname: event.target.value })}
                    />
                </div>
            </div>

            <div className='row rowmed'>
                <div className='col-sm-6 col-sm-med'>
                    <label>Manufacture Date</label>
                    <input type='date' name='mfd' value={medicine.mfd}
                        onChange={event => updateMedicine({ ...medicine, mfd: event.target.value })}
                    />

                </div>
                <div className='col-sm-6 col-sm-med'>
                    <label>Expiry Date</label>
                    <input type='date' name='expd' value={medicine.expd}
                        onChange={event => updateMedicine({ ...medicine, expd: event.target.value })}
                    />
                </div>
            </div>

            <div className='row rowmed'>
                <div className='col-sm-6 col-sm-med'>
                    <label>Stock</label>
                    <input type='number' name='stk' value={medicine.stk} placeholder='enter the value of stock'
                        onChange={event => updateMedicine({ ...medicine, stk: event.target.value })}
                    />

                </div>
                <div className='col-sm-6 col-sm-med'>
                    <label>Rating</label>
                    <input type='number' name='rate' value={medicine.rate} placeholder='enter rating'
                        onChange={event => updateMedicine({ ...medicine, rate: event.target.value })}
                    />
                </div>
            </div>

            <div className='row rowmed'>
                <div className='col-sm-6 col-sm-med'>
                    <label>Medicine Details</label>
                    <input type='text' name='mdet' value={medicine.mdet} placeholder='details of medicine'
                        onChange={event => updateMedicine({ ...medicine, mdet: event.target.value })}
                    />

                </div>
                <div className='col-sm-6 col-sm-med'>
                    <label>Type of medicine</label>
                    <input type='text' name='mtype' value={medicine.mtype} placeholder='type of medicine'
                        onChange={event => updateMedicine({ ...medicine, mtype: event.target.value })}
                    />
                </div>
            </div>

            <div className='row rowmed'>
                <div className='col-sm-6 col-sm-med'>
                    <label>Ingredients</label>
                    <input type='text' name='ingrdt' value={medicine.ingrdt} placeholder='enter ingredients'
                        onChange={event => updateMedicine({ ...medicine, ingrdt: event.target.value })}
                    />

                </div>
                <div className='col-sm-6 col-sm-med'>
                    <label>Quantity</label>
                    <input type='text' name='quant' value={medicine.quant} placeholder='enter quantity'
                        onChange={event => updateMedicine({ ...medicine, quant: event.target.value })}
                    />
                </div>
            </div>

            <div className='row rowmed'>
                <div className='col colmed'>
                    <label for='categoryId'>Category</label>
                    <select  name='categoryId' value={medicine.categoryId}
                        onChange={event => { updateMedicine({ ...medicine, categoryId: event.target.value }) }}  >
                        <option value={1}>Health</option>
                        <option value={2}>Hair</option>
                        <option value={3}>Skin</option>
                    </select>
                </div>
            </div>
            <div className='row rowmed'>
                <div className='col colmed'>
                    <button onClick={handleButton} className="btn btn-primary" >
                        Add medicine</button>
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
    )
}