import { FETCH_ALL_ORDERS, FETCH_ORDERS_BY_STATUS, FETCH_ORDER_BY_ID } from "../../AppConstants";

const intialState ={
    orders:[],
    order: null,
    ordersByStatus : []
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
    
        return state;
    
}