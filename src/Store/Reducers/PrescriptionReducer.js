import { FETCH_PRESCRIPTIONS_USERID } from "../../AppConstants"

const initialState ={
    prescriptions:[]
}

export default function PrescriptionReducer(state=initialState,action){
    if(action.type=== FETCH_PRESCRIPTIONS_USERID ){
        return{
            ...state,
            prescriptions:action.payload
        }
    }
    return state;
}