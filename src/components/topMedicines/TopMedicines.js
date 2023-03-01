import React from "react";
import triphala from "../../assets/triphala.jpg";
import ashwagandha from "../../assets/Ashwagandha.webp";
import neem from "../../assets/neem.jpg";
import "./TopMedicines.css"

const TopProducts = () => {
  const products = [
    { name: "Triphala", image: triphala, category: "Digestive" },
    { name: "Ashwagandha", image: ashwagandha, category: "Adaptogenic" },
    { name: "Neem", image: neem, category: "Antibacterial" },
  ];

  return (
    <div>
      <section className="doctor_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 className="our-product">Our Top Products</h2>
            <p className="col-md-7 mx-auto px-2" style={{fontSize:'20px',textAlign:'center',color:'cornsilk'}}>
              "Our Ayurvedic herbal supplements are formulated using traditional
              recipes and high-quality ingredients to promote natural healing and
              enhance overall wellness."
            </p>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-6 col-lg-4 mx-auto" key={product.name}>
                <div className="box">
                  <div className="img-box">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="detail-box">
                    <h5>{product.name}</h5>
                    <h6 className="">{product.category}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box" style={{paddingBottom:"30px"}}>
            <a href="">View All</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TopProducts;
