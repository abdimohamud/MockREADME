import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "./logo_original_white.png";
import notification from "./bell_white.png";
import avator from "./user_white.png";
import cart from "./cart_white.png";

import "./header_user.scss";

class Header_user extends Component {
  render() {
    return (
      <header>
        <div className="User_header">
          
           <Link to="/"><img src={logo} alt="logo"  /></Link> 
          
          <div className="Header_user_header_item">
            <Link to="/MarketPlace"><h3>Market Place</h3></Link>
            <Link to="/SellBeats"><h3>Sell Beats</h3></Link>
             {/*add number for notifications*/}
             <span class="notification_count">3</span>
            <img src={notification} alt="notification" />
            <img src={avator} alt="avator" />
            <Link to="/cart"> <img src={cart} alt="shoppingCart" /></Link>
           
          </div>
        </div>

        
      </header>
    );
  }
}
export default Header_user;
