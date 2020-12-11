import React from 'react';
import './styles/top-listing.scss';
import playButton from '../assets/top-listing/play-icon.svg';
import play from '../assets/top-listing/play-count.svg';
import heart from '../assets/top-listing/heart-count.svg';
import comment from '../assets/top-listing/comment-count.svg';
import bag from '../assets/top-listing/bag-icon.svg';

export default function TopListing(props) {

  return (
    <div className="top-listing-container">
      <div className="rank">
        {props.rank}.
      </div>
      <div class="cover-art">
      </div>
      <img alt="" src={playButton}/>
      <div className="info-container">
        <h3>{props.songName}</h3>
        <p>{props.producerName}</p>
        <div className="stats-container">
          <img alt="" src={play} />
          <p className="stat">{props.playCount}</p>
          <img alt="" src={heart} />
          <p className="stat">{props.heartCount}</p>
          <img alt="" src={comment} />
          <p className="stat">{props.commentCount}</p>
        </div>
      </div>
      <div className="purchase-button">
        ${props.price} <img alt="" src={bag} />
      </div>
    </div>
  );
}
