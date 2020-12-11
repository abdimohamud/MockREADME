import React from "react";
import { Link } from "react-router-dom";
import './styles/sideNavbar.scss';

export default function SettingNavbar(props) {
  return (
    <div id="sideNavbar">
      <ul>
        <li className= "active"><Link to={"/account-setting"}>Account</Link></li>
        <li><Link to={"/password-setting"}>Password</Link></li>
        <li><Link to={"/payment-setting"}>Payment</Link></li>
        <li><Link to={"/billing-setting"}>Billing</Link></li>
        <li><Link to={"/social-media-setting"}>Social Media</Link></li>
        <li><Link to={"/preference-setting"}>Preferences</Link></li>
        <li><Link to={"/recommendations-setting"}>Recommendations</Link></li>
      </ul>

    </div>
  );
}
