import { FETCH_ALL_ORDERS, FETCH_ORDERS_BY_STATUS, FETCH_ORDER_BY_ID } from "../../AppConstants";

const intialState ={
    orders:[],
    order: null,
    ordersByStatus : [],
    addOrder: null,
    orderwithId: null,
    orderswithuserId: []
    
}

export default function OrderReducer(state=intialState,action){
    if(action.type===FETCH_ALL_ORDERS){
        return{
            ...state,
            orders : action.payload
        }
    }else if(action.type===FETCH_ORDER_BY_ID){
        return{
            ...state,
            order:action.payload
        }
    }else if(action.type=== FETCH_ORDERS_BY_STATUS){
        return{
            ...state,
            ordersByStatus:action.payload
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
