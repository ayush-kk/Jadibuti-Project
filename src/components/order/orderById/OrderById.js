import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { orderById } from '../../store/actions/OrderAction';

import styling from "./orderById.module.css";
function OrderById() {
    const orderbyid = useSelector(state => state.orderReducer.orderbyid);
    const dispatch = useDispatch();
    const { orderId } = useParams();

    useEffect(() => {
        dispatch(orderById(orderId));
    }, [orderId])

    return (
        <div className={styling.container}>
            {
                orderbyid !== null &&
                orderbyid.map(m =>
                    <div key={m.orderId} className="form-group">
                        <div className="form-group">
                            <p>noOfItems:{m.noOfItems}</p>
                            <p>totalCost:{m.totalCost} </p>
                            <p>delieveryDate: {m.delieveryDate}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default OrderById;

