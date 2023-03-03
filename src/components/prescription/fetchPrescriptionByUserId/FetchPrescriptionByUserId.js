import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrescriptionsByUserId } from "../../../Store/Actions/PrescriptionAction";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import NavbarWeb from "../../navbar/NavbarWeb";

function FetchPrescriptionByUserId() {
    const prescriptions = useSelector(state => state.PrescriptionReducer.prescriptions);
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const dispatch = useDispatch();
    const { userId } = useParams();
    useEffect(() => {
        dispatch(fetchPrescriptionsByUserId(userId));
    }, [userId])
    return (
        <div>
            
             <section>
            <div className='container pre-con'>
                <table className='table table-bordered pre-table'>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>uploaded date</th>
                            <th>valid Upto</th>
                            <th>delieveryDate</th>
                            {/* <th></th> */}
                        </tr>

                    </thead>
                    {
                        prescriptions.length > 0 &&
                        prescriptions.map(prescription =>
                            <tbody key={prescription.prescriptionId}>
                                <tr>
                                    <td>image not available</td>
                                    <td>{prescription.prescriptionId}</td>
                                    <td>{prescription.uploadDate}</td>
                                    <td>{prescription.validationDate}</td>
                                    {/* <td><Link to={`/order/${order.orderId}`}> view</Link></td> */}
                                </tr>

                            </tbody>

                        )
                    }
                </table>

            </div>
            </section>

         
        </div>
    )
}
export default FetchPrescriptionByUserId;