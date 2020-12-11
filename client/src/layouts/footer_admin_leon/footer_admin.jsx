import React, { Component } from "react";
import logo from "./logo_original.png";
import "./footer_admin.scss";

class Footer_admin extends Component {
  render() {
    return (
      <footer className="footer">
        <img src={logo} style={{ width: "5vw" }} alt="logo" />
        <span>&copy; 2020 FYREBEATS All Right Reserved</span>
      </footer>
    );
  }
}
export default Footer_admin;
