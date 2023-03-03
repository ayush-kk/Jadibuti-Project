import medicineReducer from "./MedicineReducer";
import {combineReducers} from 'redux';
import loginReducer from './LoginReducer'
import CustomerReducer from "./CustomerReducer";
import OrderReducer from "./OrderReducer";
import registerReducer from "./RegisterReducer";
import prescriptionReducer from "./PrescriptionReducer";



const rootReducer = combineReducers({
    medicineReducer,
    loginReducer,
    CustomerReducer,
    OrderReducer,
    registerReducer,
    prescriptionReducer

    
   
})

export default rootReducer;