import { MEDICINE_FETCH_ALL, MEDICINE_FETCH_BY_ID } from "../../AppConstants";

const initialState = {
  medicine: null,
  medicines: [],
  selectedMedicine: null,
};

export default function MedicineReducer(state = initialState, action) {
  switch (action.type) {
    case "medicine/add":
      return {
        ...state,
        medicine: action.payload,
      };

    case MEDICINE_FETCH_ALL:
      return {
        ...state,
        medicines: action.payload,
      };
    case MEDICINE_FETCH_BY_ID:
      return {
        ...state,
        selectedMedicine: action.payload,
      };
    default:
      return state;
  }
}
