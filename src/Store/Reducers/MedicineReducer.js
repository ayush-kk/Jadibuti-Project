const initialState= {
    medicine: null
}

export default function MedicineReducer(state=initialState,action){
    if(action.type==='addmedicine'){
        return{
            ...state, medicine:action.payload
        }
    }

    else if(action.type==='updateMed'){
        return{
            ...state, medicine:action.payload
        }
    }
    return state;
}