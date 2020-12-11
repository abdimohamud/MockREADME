import React from "react";
import Navbar from '../components/Navbar';
import {SettingNavbar} from "../components";

export default function SettingPayment() {
    return (
      <div id="setting">
        <Navbar/>
        <SettingNavbar/>
        <h1>Payment Setting</h1>
        <form id="paymentSetting">
          <label>Paypal Email<br/>
            <input type="text"/>
          </label><br/>
          <label>Venmo<br/>
            <input type="text"/>
          </label><br/>
          <label>Cash App<br/>
            <input type="text"/>
          </label><br/>
          <label>Card Number<br/>
            <input type="text"/>
          </label><br/>
          <div id="cardInfoContainer">
            <label id="expirationDateContainer">
              Expiration Date<br/>
              <input type="text" className="expirationDate" id="expirationMonth" placeholder="Month"/>
              <input type="text" className="expirationDate" id="expirationYear" placeholder="Year"/>
            </label>
            <label id="securityCodeContainer">Security Code<br/>
              <input type="text" id="securityCode"/>
            </label>
          </div>
          <input type="submit" value="Save Changes" id="submitBtn"/>
        </form>
      </div>
    );
}
