import medicineReducer from "./MedicineReducer";
import {combineReducers} from 'redux';
import loginReducer from './LoginReducer'
import CustomerReducer from "./CustomerReducer";
import OrderReducer from "./OrderReducer";


const rootReducer = combineReducers({
    medicineReducer,
    loginReducer,
    CustomerReducer,
    OrderReducer
   
})

export default rootReducer;