import React from "react";
import Navbar from '../components/Navbar';
import {SettingNavbar} from "../components";

export default function SettingPreferences() {
    return (
      <div id="setting">
        <Navbar/>
        <SettingNavbar/>
        <h1>Preferences Setting</h1>
        <form id = "preferenceSetting">
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Receive emails on latest updates and news
          </label><br/><br/><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Show how many people leased your beats
          </label><br/><br/><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Increase beat lease price by:
          </label>
          <input id="slideBar" type="range" min="1" max="100" value="50"/>
          <br/><br/><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Upload custom lease agreement
          </label><br/><br/>
          <label>Title*<br/>
            <input type="text"/>
          </label><br/>
          <label>
            Lease*<br/>
            <textarea/>
          </label>
          <input type="submit" value="Save Changes" id="submitBtn"/>
        </form>
      </div>
    );
}
