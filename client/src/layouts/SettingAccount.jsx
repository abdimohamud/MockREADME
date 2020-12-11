import React, {useState} from "react";
import Navbar from '../components/Navbar';
import "./styles/setting.scss";
import {SettingNavbar} from "../components";

export default function SettingAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');

    return (
      <div id="setting">
        <Navbar/>
        <SettingNavbar/>
        <h1>Account Setting</h1>
        <form id="accountSetting">
          <img id="profilePic" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="profile"/><br/>
          <button>Change Profile Picture</button><br/>
          <input type="text" className="nameField"
            placeholder="First Name"
            onChange={event=>setFirstName(event.target.value)}/>
          <input type="text" className="nameField"
            placeholder="Last Name"
            onChange={event=>setLastName(event.target.value)}/><br/>
          <input type="text"
            placeholder="Date of Birth"
            onChange={event=>setDob(event.target.value)}/><br/>
          <input type="text"
            placeholder="Username"
            onChange={event=>setUsername(event.target.value)}/><br/>
          <input type="text"
            placeholder="Country of Origin"
            onChange={event=>setCountry(event.target.value)}/><br/>
          <input type="submit" value="Save Changes" id="submitBtn"/>
        </form>
      </div>
    );
}
