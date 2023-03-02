import medicineReducer from "./MedicineReducer";
import {combineReducers} from 'redux';
import loginReducer from './LoginReducer'
import CustomerReducer from "./CustomerReducer";


const rootReducer = combineReducers({
    medicineReducer,
    loginReducer,
    CustomerReducer
    
   
})

export default rootReducer;