import React from "react";
import './styles/cartListing.scss';

export default function CartListing(props) {
  return (
    <div id="cartListingContainter">
      <div id="beatTitleContainer">
        <div id="beatPictureContainer">
          <img src={props.beatPic} alt="beats cover"/>
          <div id="beatPicture">
          </div>
        </div>
        <div id="beatDescriptionContainer">
          {props.songTitle}<br/>
          {props.producerName}<br/>
          {props.category}<br/>
          {props.length}
        </div>
      </div>
      <div id="licenseContainer">
        {props.license}
      </div>
      <div id="amountContainer">
        {props.price}
      </div>
      <div id ="buttonContainer">
        <button id="editButton" className="buttonStyle">Edit</button>
        <button className="buttonStyle">Remove</button>
      </div>
    </div>
  );
}
