import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../AppConstants";
import neem from "../../../assets/neem.jpg";

function MedicineById() {
  const [medicine, setMedicine] = useState({});
  const { id } = useParams();



  useEffect(() => {
    axios
      .get(`${BASE_URL}/medicine/getMedicineById/${id}`)
      .then((res) => setMedicine(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2 style={{ fontFamily: "Segoe UI", fontSize: "70px" }}>
        {medicine.medicineName}
      </h2>
      <div style={{ display: "flex", textAlign:"left" }}>
        {/* <img src={medicine.image} alt={medicine.medicineName} /> */}
        <img
          src={neem}
          alt={medicine.medicineName}
          style={{ height: "400px", marginLeft: "10%", marginTop: "7%" }}
        />
        <div style={{ marginLeft: "8%", marginTop:"10%", fontSize: "200%", fontWeight: "bold" }}>
          <p>Cost: {medicine.medicineCost}</p>
          <p>Company: {medicine.companyName}</p>
          <p>Rating: {medicine.rating}</p>
          {/* <p>Description: {medicine.details}</p> */}
          {/* <label>Description:</label>
          <ul>
            <li>Ingredients: {medicine.description.ingredients}</li>
            <li>Medicine Type: {medicine.description.medicineType}</li>
          </ul> */}
          <button className="btn btn-warning"><Link to={"/order/addorder"}>Add to Cart</Link> </button>
        </div>
      </div>
    </div>
  );
}

export default MedicineById;
