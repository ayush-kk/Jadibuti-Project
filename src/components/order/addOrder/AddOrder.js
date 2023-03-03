import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../../../store/actions/OrderAction";

import styles from "./addorder.module.css"
import "./UserAndAddress.js"
import UserAndAddress from "./UserAndAddress.js";
function AddOrder() {
    // const [order, setOrder] = useState('');
    const [noOfItems, setNoOfItems] = useState('');
    const [orderDate, setOrderDate] = useState(new Date().toISOString().slice(0, 10));
    const [delieveryDate, setDelieveryDate] = useState(new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10));
    //const [status, setStatus] = useState('');
    const [userId, setUserId] = useState('');
    const [medicineId, setMedicineId] = useState('');
    const [prescriptionId, setPrescriptionId] = useState('');

    const dispatch = useDispatch();

    const addOrders = () => {
        const payload = {
            noOfItems: noOfItems,
            orderDate: orderDate,
            delieveryDate: delieveryDate,
            //status: status,
            customer: {
                userId: userId
            },
            medicine: {
                medicineId: medicineId
            },
            prescription: {
                prescriptionId: prescriptionId
            }

        }
        dispatch(addOrder(payload))
    }
    return (
        <div class={styles.container}>
            <div className={styles.outerAddOrder}>
            <UserAndAddress/>
                    <div className={styles.right}>
                    <form>
                        <div className="form-group row" >
                            <label for="noOfItems" >No Of Items</label>

                            <div className="col-sm-10">
                                <input className="form-control" type='number' name='noOfItems' value={noOfItems} placeholder='Enter No of Items'
                                    onChange={event => setNoOfItems(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="userId" >User Id</label>
                            <div className="col-sm-4">
                            <input  className="form-control" type='number' name='userId' value={userId} placeholder='Enter user Id'
                                   onChange={event => setUserId(event.target.value)} />
                            </div>
                            <label for="medicineId" >Medicine Id</label>
                            <div className="col-sm-4">
                            <input className="form-control" type='number' name='medicineId' value={medicineId} placeholder='Enter medicine Id'
                                  onChange={event => setMedicineId(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="prescriptionId" >Prescription Id</label>
                            <div className="col-sm-9">
                                <input className="form-control" type='number' name='prescriptionId' value={prescriptionId} placeholder='Enter prescription Id'
                                  onChange={event => setPrescriptionId(event.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="orderDate" >Order Date</label>
                            <div className="col-sm-4">
                                <input className="form-control" type='date' name='orderDate' value={orderDate}
                                  onChange={event => setOrderDate(event.target.value)}/>
                            </div>
                            <label for="deliveryDate">Delivery Date</label>
                            <div className="col-sm-4">
                                <input className="form-control" type='date' name='delieveryDate' value={delieveryDate}
                                  onChange={event => setDelieveryDate(event.target.value)} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <button className="btn btn-primary" type="submit" onClick={addOrders}>Place Order</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
    )
}

export default AddOrder;
































// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addOrder } from "../../store/actions/OrderAction";

// import "./addorder.css"
// import "./UserAndAddress.js"
// import UserAndAddress from "./UserAndAddress.js";
// function AddOrder() {
//     // const [order, setOrder] = useState('');
//     const [noOfItems, setNoOfItems] = useState('');
//     const [orderDate, setOrderDate] = useState(new Date().toISOString().slice(0, 10));
//     const [delieveryDate, setDelieveryDate] = useState(new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10));
//     //const [status, setStatus] = useState('');
//     const [userId, setUserId] = useState('');
//     const [medicineId, setMedicineId] = useState('');
//     const [prescriptionId, setPrescriptionId] = useState('');

//     const dispatch = useDispatch();

//     const addOrders = () => {
//         if (!noOfItems || isNaN(noOfItems)) {
//             alert("Please enter a valid number of items.");
//             return;
//         }
    
//         if (!userId || isNaN(userId)) {
//             alert("Please enter a valid user ID.");
//             return;
//         }
    
//         if (!medicineId || isNaN(medicineId)) {
//             alert("Please enter a valid medicine ID.");
//             return;
//         }
    
//         if (!prescriptionId || isNaN(prescriptionId)) {
//             alert("Please enter a valid prescription ID.");
//             return;
//         }



//         const payload = {
//             noOfItems: noOfItems,
//             orderDate: orderDate,
//             delieveryDate: delieveryDate,
//             //status: status,
//             customer: {
//                 userId: userId
//             },
//             medicine: {
//                 medicineId: medicineId
//             },
//             prescription: {
//                 prescriptionId: prescriptionId
//             }

//         }
//         dispatch(addOrder(payload))
//     }
//     return (
//         <div className="container">
//             {/* <!-- <Sidebar /> --> */}
//             <div className="outerAddOrder">
//                 <UserAndAddress />
//                 <div className="innerAddOrder">
//                     <form>
//                         <div className="right">
//                             <ul className="list">
//                                 <li className="row">
//                                     <label id="lab">No Of Items</label>
//                                     <input id="inp" type='number' name='noOfItems' value={noOfItems} placeholder='Enter No of Items'
//                                         onChange={event => setNoOfItems(event.target.value)} className="form-control" />
//                                 </li>

//                                 {/* <div className="form-group">
//                                 <label>Order status</label>
//                                 <input type='text' name='status' value={status} placeholder=''
//                                     onChange={event => setStatus(event.target.value)} className="form-control" />
//                                 </div> */}
//                                 <li className="row">
//                                     <label id="lab">Add UserId</label>
//                                     <input id="inp" type='number' name='userId' value={userId} placeholder='Enter user Id'
//                                         onChange={event => setUserId(event.target.value)} className="form-control" />
//                                 </li>
//                                 <li className="row">
//                                     <label id="lab">Add MedicineId</label>
//                                     <input id="inp" type='number' name='medicineId' value={medicineId} placeholder='Enter medicine Id'
//                                         onChange={event => setMedicineId(event.target.value)} className="form-control" />
//                                 </li>
//                                 <li className="row">
//                                     <label id="lab">Add PrescriptionId</label>
//                                     <input id="inp" type='number' name='prescriptionId' value={prescriptionId} placeholder='Enter prescription Id'
//                                         onChange={event => setPrescriptionId(event.target.value)} className="form-control" />
//                                 </li>
//                                 <li className="row">
//                                     <label id="lab">Order Date</label>
//                                     <input id="inp" type='date' name='orderDate' value={orderDate}
//                                         onChange={event => setOrderDate(event.target.value)} className="form-control" />
//                                 </li>
//                                 <li className="row">
//                                     <label id="lab">Expected Delivery Date</label>
//                                     <input id="inp" type='date' name='delieveryDate' value={delieveryDate}
//                                         onChange={event => setDelieveryDate(event.target.value)} className="form-control" />
//                                 </li>
//                             </ul>
//                             <div className="form-group row">
//                                 <div className="col-sm-10 offset-sm-2">
//                                     <button className="btn btn-primary" type="submit" onClick={addOrders}>Place Order</button>
//                                 </div>
//                             </div>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddOrder;