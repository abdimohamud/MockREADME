import React from "react";
import "./styles/career.scss";
import Navbar from '../components/Navbar';

export default function CareerPage() {
    return (
      <div>
        <Navbar/>
        <div id="career">
          <h1>CAREER</h1>
          <form id = "careerForm">
            <label><b>NAME</b><br/>
              <input type="text"/>
            </label><br/>
            <label><b>EMAIL</b><br/>
              <input type="text"/>
            </label><br/>
            <label><b>LINKEDIN</b><br/>
              <input type="text"/>
            </label><br/>
            <label><b>POSITION</b><br/>
              <input type="text"/>
            </label><br/>
            <label><b>COVER LETTER</b><br/>
              <textarea/>
            </label><br/>
            <button>UPLOAD RESUME</button>
            <label className="checkboxContianer">
              <input className="checkboxLabel" id="pop" type="checkbox"/>
              Attachment 1
            </label>
            <input type="submit" value="SUBMIT" id="submitBtn"/>
          </form>
        </div>
      </div>
    );
}
