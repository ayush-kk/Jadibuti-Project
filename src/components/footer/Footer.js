import "./Footer.css"

function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 footer_col">
            <div className="footer_contact">
              <h4>Reach at..</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call 100100100</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>जड़ीबूटी@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="footer_social">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 footer_col">
            <div className="footer_detail">
              <h4>About</h4>
              <p>
                जड़ीबूटी, the online ayurvedic store sells all kinds of
                ayurvedic medicine and ayurvedic products online from India's
                top most ayurvedic brands like Kottakkal Arya Vaidya Sala.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mx-auto footer_col">
            <div className="footer_link_box">
              <h4>Links</h4>
              <div className="footer_links">
                <a className="active" href="index.html">
                  Home
                </a>
                <a className="" href="#">
                  About
                </a>
                <a className="" href="#">
                  Login
                </a>
                <a className="" href="#">
                  Register
                </a>
                <a className="" href="#">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 footer_col ">
            <h4>Newsletter</h4>
            <form action="#">
              <input type="email" placeholder="Enter email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By <br />
            <a href="#">
              जड़ीबूटी
              <br />
              <br />
            </a>
            &copy; <span id="displayYear"></span> Distributed By
            <a href="#">Ayurveda Group 5</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
