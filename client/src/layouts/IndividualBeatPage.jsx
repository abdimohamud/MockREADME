import React, {useState} from "react";
import Navbar from '../components/Navbar';
import {RelatedTracksListing, IndividualBeat} from "../components";

export default function IndividualBeatPage() {
  const beats={
    songTitle:"Title",
    producerName:"P1",
    genre:"pop",
    length:4.5,
    price:200,
    beatPic:"../assets/landing-page/free.png"
  };
    return (
      <div id="individualBeat">
        <Navbar/>
        <IndividualBeat
          songTitle="Beat Title"
          producerName="Producer Name"
          length="5.03"
          likes="100"
          price="599.99"
        />
        <div id="discussion">

        </div>
        <div id="relatedTracksListingContainer">
          <p id="relatedTracksListing">Our Recommendation</p>
          <div id="Tracks">
            <RelatedTracksListing
              songTitle="Song Title"
              producerName="Producer Name"
              playTime="4.03"/>
          </div>
        </div>
      </div>
    );
}
