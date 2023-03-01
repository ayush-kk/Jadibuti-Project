import React from "react";
import making from "../../assets/making.jpg";
import "./Aboutus.css"

function Aboutus() {
  return (
    <section
      className="about_section layout_margin-bottom"
      style={{ marginTop: "%" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={making} alt="making" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About <span>Us</span>
                </h2>
              </div>
              <p>
                Ayurvedic medicine is an ancient system of healthcare that
                originated in India over 5,000 years ago. It is based on the
                belief that good health is achieved through a balance of mind,
                body, and spirit. Ayurveda uses natural herbs and remedies to
                promote health and prevent illness. At its core, Ayurveda is
                about discovering your unique mind-body type and creating a
                personalized health plan to optimize your well-being. This is
                achieved through a combination of lifestyle changes, diet
                modifications, and the use of specific herbs and supplements.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
