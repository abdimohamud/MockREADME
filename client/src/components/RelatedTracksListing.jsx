import React from "react";

export default function RelatedTracksListing(props) {
  return (
    <div id="relatedTracksListing">
      <div id="recPictureContainer">
        <div id="recPicture">
        </div>
      </div>
      <p id="songTitle">{props.songTitle}</p>
      <p id="producerName">{props.producerName}</p>
      <p id="playTime">{props.playTime}</p>
    </div>
  );
}
