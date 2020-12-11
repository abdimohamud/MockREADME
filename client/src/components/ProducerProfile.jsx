import React from "react";
import "./styles/producerProfile.scss";
import facebook from '../assets/social-media-icons/facebook.svg';
import instagram from '../assets/social-media-icons/instagram.svg';
import snapchat from '../assets/social-media-icons/snapchat.svg';
import tiktok from '../assets/social-media-icons/tiktok.svg';
import twitter from '../assets/social-media-icons/twitter.svg';


export default function ProducerProfile(props) {
  return (
    <div id="producerProfile">
      <div id="leftContainer">
        <div id="pictureContainer">
          <div id="picture">
          </div>
        </div>
        <a href="google.com">
          <img alt="snapchat" id="firstIcon" src={snapchat}/>
        </a>
        <a href="google.com">
          <img alt="twitter" src={twitter}/>
        </a>
        <a href="google.com">
          <img alt="facebook" src={facebook}/>
        </a>
        <a href="google.com">
          <img alt="instagram" src={instagram}/>
        </a>
        <a href="google.com">
          <img alt="tiktok" src={tiktok}/>
        </a>
      </div>

      <div id="rightContainter">
        <h1 id="producerName">{props.producerName}</h1>
        <p id="status">Status: {props.status}</p>
        <p>Specialty: {props.specialty}</p>
        <h2>{props.totalPlay} Total Plays | {props.tracksLeased} Tracks Leased</h2>
      </div>
      <button><b>UPLOAD</b></button>
    </div>
  );
}
