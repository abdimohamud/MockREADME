import React from "react";
import './styles/recommendationListing.scss';

export default function RecommendationListing(props) {
  return (
    <div id="recListingContainer">
      <p id="songTitle">{props.songTitle}</p>
      <p id="producerName">{props.producerName}</p>
      <div id="recPictureContainer">
        <div id="recPicture">
        </div>
      </div>
    </div>
  );
}
