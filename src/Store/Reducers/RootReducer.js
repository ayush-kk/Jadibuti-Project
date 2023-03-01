import medicineReducer from "./MedicineReducer";
import {combineReducers} from 'redux';
import loginReducer from './LoginReducer'


const rootReducer = combineReducers({
    medicineReducer,
    loginReducer
    
   
})

export default rootReducer;