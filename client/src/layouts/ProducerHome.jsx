import React, {useState} from "react";
import "./styles/producerHome.scss";
import Navbar from '../components/Navbar';
import {
  RelatedTracksListing,
  RecommendationListing,
  ProducerNavbar,
  ProducerProfile,
  TopListing
} from "../components";

export default function ProducerHome() {
    return (
      <div>
        <Navbar/>
        <ProducerNavbar/>
        <div id="producerHome">
          <ProducerProfile
            producerName="Offset"
            status="Hello this is afhkjfasfh"
            specialty="Hip Hop"
            totalPlay="50000"
            tracksLeased="30"/>
          <div id="chartsContainer">
            <div className="chart" id="trendingTrack">
              <h1 class="chart-title">All Tracks</h1>
              <TopListing rank={1} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
              <TopListing rank={2} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
            </div>
            <div className="chart">
              <h1 class="chart-title">Trending</h1>
              <TopListing rank={1} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
              <TopListing rank={2} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
            </div>
          </div>
        </div>
      </div>
    );
}
