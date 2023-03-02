import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrescriptionsByUserId } from "../../../store/actions/PrescriptionAction";
import { useParams } from "react-router-dom";

function FetchPrescriptionByUserId() {
    const prescriptions = useSelector(state => state.PrescriptionReducer.prescriptions);
    const dispatch = useDispatch();
    const { userId } = useParams();
    useEffect(() => {
        dispatch(fetchPrescriptionsByUserId(userId));
    }, [userId])
    return (
        <div>

            <div className='container'>
                <table className='table table-bordered'>
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



        </div>
    )
}
export default FetchPrescriptionByUserId;