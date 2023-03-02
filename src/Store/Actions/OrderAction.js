import axios from 'axios';

export function viewAllOrders() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/orders/allOrders").then(resp => {
            dispatch({ type: "order/allorders", payload: resp.data });
        })
    }
}

export function addOrder(order) {
    return dispatch => {
        return axios.post("http://localhost:8080/orders/addorder", order)
            .then(resp => { alert("Order done") })
            .catch(error => { alert("Order failed") })
    }
}

export function orderById(orderId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/orders/order/" + orderId)
            .then(resp => {dispatch({ type: 'order/orderbyid', payload: resp.data })
            .catch(error =>{ alert("Order Not found")})
            })
    }
}

export function orderuserId(userId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/orders/allOrders/" + userId).then(resp => {
            dispatch({ type: "order/orderByUserId", payload: resp.data });
        })
    }
}

