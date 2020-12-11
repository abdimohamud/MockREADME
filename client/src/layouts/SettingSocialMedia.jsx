import React from "react";
import Navbar from '../components/Navbar';
import {SettingNavbar} from "../components";

export default function SettingSocialMedia() {
    return (
      <div id="setting">
        <Navbar/>
        <SettingNavbar/>
        <h1>Social Media Setting</h1>
        <form id="socialMediaSetting">
          <label>Soundcloud<br/>
            <input type="text"/>
          </label><br/>
          <label>Instagram<br/>
            <input type="text"/>
          </label><br/>
          <label>Youtube<br/>
            <input type="text"/>
          </label><br/>
          <label>Twitter<br/>
            <input type="text"/>
          </label><br/>
          <label>Facebook<br/>
            <input type="text"/>
          </label><br/>
          <label>Tik Tok<br/>
            <input type="text"/>
          </label><br/>
          <input type="submit" value="Save Changes" id="submitBtn"/>
        </form>
      </div>
    );
}
