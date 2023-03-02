const initialState = {
    orders: [],
    addOrder: null,
    orderwithId: null,
    orderswithuserId: []
    
}

export default function OrderReducer(state = initialState, action) {
    if (action.type === 'order/allorders') {
        return {
            ...state,
            orders: action.payload
        }
    }
    else if (action.type === 'order/addorder') {
        return {
            ...state,
            addOrder: action.payload
        }
    }
    else if (action.type === 'order/orderbyid') {
        return {
            ...state,
            orderwithId: [action.payload]
          }
    }
    else if (action.type === 'order/orderbyuserid') {
        return {
            ...state,
            orderByUserId: action.payload
        }
    }
    
    else { return state; }
}
