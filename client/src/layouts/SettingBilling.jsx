import React, {useState} from "react";
import Navbar from '../components/Navbar';
import "./styles/setting.scss";
import {SettingNavbar} from "../components";

export default function SettingBilling() {
    return (
      <div id="setting">
        <Navbar/>
        <SettingNavbar/>
        <h1>Billing Setting</h1>
        <form id = "billingSetting">
          <div id="nameContainer">
            <label id="firstNameContainer">
              First Name<br/>
              <input type="text" id="firstName"/>
            </label>
            <label id="lastNameContainer">Last Name<br/>
              <input type="text" id="lastName"/>
            </label>
          </div>
          <label>Address<br/>
            <input type="text"/>
          </label>
          <label>City or Town<br/>
            <input type="text"/>
          </label>
          <label>State or Province<br/>
            <input type="text"/>
          </label>
          <label>Country or Region<br/>
            <input type="text"/>
          </label>
          <label>Zip Code (Only if in U.S.)<br/>
            <input type="text"/>
          </label>
          <label>Phone Number<br/>
            <input type="text"/>
          </label>
          <label className="checkboxContianer">
            <input className="checkboxLabel" type="checkbox"/>
            My Billing and Shipping Address are the same
          </label><br/>
          <input type="submit" value="Save Changes" id="submitBtn"/>
        </form>
      </div>
    );
}
