import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { orderuserId } from '../../store/actions/OrderAction';


function OrderByUserId() {
    const ordersByUserId = useSelector(state => state.orderReducer.ordersByUserId);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(orderuserId(userId));
    }, [userId])

    return (
        <div className="container">
            <div className="outer">
                <div className='inner'>
                    {
                        ordersByUserId !== null &&
                        ordersByUserId.map(m =>
                            <div key={m.userId} className="form-group">
                                <div className="form-group">
                                    <p>noOfItems:{m.noOfItems}</p>
                                    <p>totalCost:{m.totalCost} </p>
                                    <p>delieveryDate: {m.delieveryDate}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default OrderByUserId;

