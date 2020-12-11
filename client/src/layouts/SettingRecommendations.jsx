import React from "react";
import Navbar from '../components/Navbar';
import {SettingNavbar} from "../components";

export default function SettingRecommendations() {
    return (
      <div id="setting">
        <Navbar/>
        <SettingNavbar/>
        <h1>Recommendations Setting</h1>
        <form id = "recommendationSetting">
        <p>Choose which genres you specialize in </p>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Pop
          </label><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Hip Hop
          </label><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Type Beat
          </label><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Lo-Fi
          </label><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Trap
          </label><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Free
          </label><br/>

          <p> Choose if you would like to see trending music</p>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            Yes
          </label><br/>
          <label className="checkboxContianer">
            <input className="checkboxLabel" id="pop" type="checkbox"/>
            No
          </label><br/>
          <input type="submit" value="Save Changes" id="submitBtn"/>
        </form>
      </div>
    );
}
