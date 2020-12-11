import React, {useState} from "react";
import Navbar from '../components/Navbar';
import "./styles/setting.scss";
import {SettingNavbar} from "../components";

export default function SettingPassword() {
    const [currentPw, setCurrentPw] = useState('');
    const [newPw, setNewPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    return (
      <div id="setting">
        <Navbar/>
        <SettingNavbar/>
        <h1>Password Settings</h1>
        <form>
          <input type="password"
            placeholder="Current Password"
            onChange={event=>setCurrentPw(event.target.value)}/><br/>
          <input type="password"
            placeholder="New Password"
            onChange={event=>setNewPw(event.target.value)}/><br/>
          <input type="password"
            placeholder="Confirm New Password"
            onChange={event=>setConfirmPw(event.target.value)}/><br/>
          <input type="submit" value="Save Changes" id="submitBtn"/>
        </form>
      </div>
    );
}
