import React from "react";
import { Link } from "react-router-dom";
import './styles/sideNavbar.scss';

export default function ProducerNavbar(props) {
  return (
    <div id="sideNavbar">
      <ul>
        <li className= "active"><Link to={"/producer-home"}>Home</Link></li>
        <li><Link to={"/producer-stats"}>Stats</Link></li>
        <li><Link to={"/producer-bundles"}>Bundles</Link></li>
        <li><Link to={"/producer-notable-sales"}>Notable Sales</Link></li>
        <li><Link to={"/producer-contact-admin"}>Contact Admin</Link></li>
      </ul>

    </div>
  );
}
