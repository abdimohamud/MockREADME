import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "./logo_original.png";
import "./footer_user.scss";
import youtube from "./youtube-circle.png";
import facebook from "./facebook-circle.png";
import twitter from "./twitter-circle.png";
import instagram from "./instagram-circle.png";

class Footer_user extends Component {
  render() {
    return (

      <footer className="footer">
        <div className="footer_start">
          <div className="Company_info">
            <h4>FYRE BEATS</h4>
            <Link to="/MarketPlace"><h6>Market Place</h6></Link>
            <Link to="/AboutUs"><h6>About Us</h6></Link> 
            <Link to="/Careers"><h6>Careers</h6></Link>
            <Link to="/Community"><h6>Community</h6></Link>
            <Link to="/ContactUs"><h6>Contact Us</h6></Link>
            <Link to="/Copyright"><h6>Copyright and Licenses</h6></Link>
            <Link to="/Terms"><h6>Terms and Conditions</h6></Link>
          </div>
          <div className="Beats_buy">
            <h4>BUYING</h4>
            <Link to="/BrowseBeats"><h6>Browse Beats</h6></Link>
            <Link to="/FreeBeats"><h6>Free Beats</h6></Link>
            <Link to="/NewBeats"><h6>New Beats</h6></Link>
            <Link to="/TopSellBeats"><h6>Top Selling Beats</h6></Link>
          </div>
          <div className="Beats_sell">
            <h4>SELLING</h4>
            <Link to="/Pricing"><h6>Pricing</h6></Link>
            <Link to="/WhyUs"><h6>Why Us</h6></Link>
            <Link to="/FileComplaint"><h6>File Complaint</h6></Link>
            
          </div>
          <div className="SocialNetwork">
            <h4>FOLLOW US</h4>
            <div className="Social_icons">
              <img src={youtube} alt="youtube" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>

        <div className="footer_end">
          <img src={logo} style={{ width: "5vw" }} alt="logo" />
          <span>&copy; 2020 FYREBEATS All Right Reserved</span>
        </div>
        
      </footer>
    );
  }
}
export default Footer_user;
