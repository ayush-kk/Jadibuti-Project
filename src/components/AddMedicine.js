import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMedicine } from '../Store/Actions/MedicineAction';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../Store/CssFiles/medicine.css';
function AddMed() {
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
        <div className='container'>
            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>जड़ीबूटी.com </h2>
            <div id='medContainer'>
                <h3 style={{ textAlign: 'center', fontFamily: 'Segoe UI' }}>ADD MEDICINE</h3><br />
                <div className='form-inline' style={{ paddingLeft: '105px' }}>
                    <label>Medicine Name &nbsp;</label>
                    <input type='text' name='mname' value={medicine.mname} placeholder='enter medicine name'
                        onChange={event => updateMedicine({ ...medicine, mname: event.target.value })}
                        style={{ borderRadius: '20px' }} /> &emsp;&emsp;
                    <label>Medicine Cost  &nbsp;</label>
                    <input type='number' name='mcost' value={medicine.mcost} placeholder='enter medicine cost'
                        onChange={event => updateMedicine({ ...medicine, mcost: event.target.value })}
                        style={{ borderRadius: '20px' }} />
                </div>

                <div className='form-group'>
                    <label>Company Name&nbsp;</label>
                    <input type='text' name='cname' value={medicine.cname} placeholder='enter company name'
                        onChange={event => updateMedicine({ ...medicine, cname: event.target.value })}
                        style={{ marginTop: '20px', width: '522px', borderRadius: '20px' }} />
                </div>

                <div className='form-inline' style={{ paddingLeft: '105px' }}>
                    <label>Manufacture Date&nbsp;</label>
                    <input type='date' name='mfd' value={medicine.mfd}
                        onChange={event => updateMedicine({ ...medicine, mfd: event.target.value })}
                        style={{ width: '200px', borderRadius: '20px' }} />&emsp;&emsp;
                    <label>Expiry Date</label>
                    <input type='date' name='expd' value={medicine.expd}
                        onChange={event => updateMedicine({ ...medicine, expd: event.target.value })}
                        style={{ width: '196px', borderRadius: '20px' }} />

                </div>


                <div className='form-inline' style={{ marginTop: '20px', paddingLeft: '105px' }}>
                    <label>Stock&emsp;&emsp;</label>
                    <input type='number' name='stk' value={medicine.stk} placeholder='enter the value of stock'
                        onChange={event => updateMedicine({ ...medicine, stk: event.target.value })}
                        style={{ width: '260px', borderRadius: '20px' }} />&emsp;&emsp;&emsp;&emsp;
                    <label>Rating&nbsp;</label>
                    <input type='number' name='rate' value={medicine.rate} placeholder='enter rating'
                        onChange={event => updateMedicine({ ...medicine, rate: event.target.value })}
                        style={{ width: '195px', borderRadius: '20px' }} />
                </div>


                <div className='form-inline' style={{ marginTop: '20px', paddingLeft: '105px' }}>
                    <label>Medicine Details&nbsp;</label>
                    <input type='text' name='mdet' value={medicine.mdet} placeholder='details of medicine'
                        onChange={event => updateMedicine({ ...medicine, mdet: event.target.value })}
                        style={{ borderRadius: '20px' }} /> &emsp;
                    <label>Type of medicine&nbsp;</label>
                    <input type='text' name='mtype' value={medicine.mtype} placeholder='type of medicine'
                        onChange={event => updateMedicine({ ...medicine, mtype: event.target.value })}
                        style={{ borderRadius: '20px' }} />
                </div>

                <div className='form-group' style={{ marginTop: '20px' }}>

                    <label>Ingredients&nbsp;</label>
                    <input type='text' name='ingrdt' value={medicine.ingrdt} placeholder='enter ingredients'
                        onChange={event => updateMedicine({ ...medicine, ingrdt: event.target.value })}
                        style={{ width: '226px', borderRadius: '20px' }} />
                    &emsp;
                    <label>Quantity&nbsp;</label>
                    <input type='text' name='quant' value={medicine.quant} placeholder='enter quantity'
                        onChange={event => updateMedicine({ ...medicine, quant: event.target.value })}
                        style={{ width: '250px', borderRadius: '20px' }} />
                </div>


                <div className='form-group'>
                    <label>Category&emsp;&nbsp;</label>
                    <select type='number' name='categoryId' style={{ width: '557px', borderRadius: '20px' }}
                     onChange={event=>{updateMedicine({...medicine,categoryId:event.target.value})}}  >
                         <option value={medicine.categoryId=1} onChange={event=>{updateMedicine({...medicine,categoryId:event.target.value})}} >Health</option>
                        <option value={medicine.categoryId=2} onChange={event=>{updateMedicine({...medicine,categoryId:event.target.value})}}>Hair</option>
                        <option value={medicine.categoryId=3} onChange={event=>{updateMedicine({...medicine,categoryId:event.target.value})}}>Skin</option>
                    </select>
                </div>
                <button onClick={handleButton} className="btn btn-primary" style={{ width: '644px', borderRadius: '20px' }}>
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
    )
}
export default AddMed;