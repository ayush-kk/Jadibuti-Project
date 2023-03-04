import { Container, Grid, Icon, Input } from 'semantic-ui-react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer_section">
      <Container>
        <Grid columns={4} stackable>
          <Grid.Column>
            <div className="footer_contact">
              <h4>Reach at..</h4>
              <div className="contact_link_box">
                <a href="">
                  <Icon name="map marker" />
                  <span>Location</span>
                </a>
                <a href="">
                  <Icon name="phone" />
                  <span>Call 100100100</span>
                </a>
                <a href="">
                  <Icon name="mail" />
                  <span>जड़ीबूटी@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="footer_social">
              <a href="">
                <Icon name="facebook" />
              </a>
              <a href="">
                <Icon name="twitter" />
              </a>
              <a href="">
                <Icon name="linkedin" />
              </a>
              <a href="">
                <Icon name="instagram" />
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="footer_detail">
              <h4>About</h4>
              <p>
                जड़ीबूटी, the online ayurvedic store sells all kinds of
                ayurvedic medicine and ayurvedic products online from India's
                top most ayurvedic brands like Kottakkal Arya Vaidya Sala.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
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
                
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <h4>Newsletter</h4>
            <form action="#">
              <Input type="email" placeholder="Enter email" action="Subscribe" />
            </form>
          </Grid.Column>
        </Grid>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By  जड़ीबूटी
            <br/>
            &copy; <span id="displayYear"></span> Distributed By Ayurveda Group 5

          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
