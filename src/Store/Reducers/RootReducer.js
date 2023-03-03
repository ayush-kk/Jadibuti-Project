import medicineReducer from "./MedicineReducer";
import {combineReducers} from 'redux';
import loginReducer from './LoginReducer'
import CustomerReducer from "./CustomerReducer";
import registerReducer from "./RegisterReducer";
import prescriptionReducer from "./PrescriptionReducer";


const rootReducer = combineReducers({
    medicineReducer,
    loginReducer,
    CustomerReducer,
    registerReducer,
    prescriptionReducer
    
   
})

export default rootReducer;