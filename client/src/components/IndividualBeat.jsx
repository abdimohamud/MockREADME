import React from "react";

export default function IndividualBeat(props) {
  return (
    <div id="individualBeat">
      <div id="PictureContainer">
        <div id="Picture">
        </div>
      </div>
      <p id="songTitle">{props.songTitle}</p>
      <p id="producerName">{props.producerName}</p>
      <p>{props.length}</p>
      <p>{props.likes}</p>
      <p>{props.price}</p>
    </div>
  );
}
