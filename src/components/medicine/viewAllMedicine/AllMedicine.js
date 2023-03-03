import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedicine } from "../../../Store/Actions/MedicineAction";
import "./MedicineAll.css";
// import banner from "./banner.jpg";
import neem from "../../../assets/neem.jpg";
import { Link } from "react-router-dom";

function AllMedicine() {
  const medicines = useSelector((state) => state.medicineReducer.medicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMedicine());
  }, []);

  return (
    <div >
    {/* <div style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}> */}
      <div className="card-container">
        {medicines.length > 0 &&
          medicines.map((m) => (
            <div key={m.medicineId} className="card">
              <Link to={`/medicine/${m.medicineId}`}>
                <img src={neem} alt={m.medicineName} />
                <h2>{m.medicineName}</h2>
                <p>Cost: {m.medicineCost}</p>
                <p>Company: {m.companyName}</p>
                <p>Rating: {m.rating}</p>
                <button>View Product</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllMedicine;


