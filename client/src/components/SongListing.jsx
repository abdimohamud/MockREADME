import React from 'react';
import './styles/song-listing.scss';
import playButton from '../assets/song-listing/play-button.svg';
import playIcon from '../assets/song-listing/play-icon.svg';
import heartIcon from '../assets/song-listing/heart-icon.svg';
import commmentsIcon from '../assets/song-listing/comments-icon.svg';
import bagIcon from '../assets/song-listing/bag-icon.svg';

export default function SongListing(props) {

  return (
    <div className="song-listing-container">
      <div className="rank">
        {props.rank}.
      </div>
      <div class="cover-art">
      </div>
      <img alt="" src={playButton}/>
      <div className="info-container">
        <h3>{props.songName}</h3>
        <p>{props.producerName}</p>
      </div>
      <div className="stats-container">
        <p className="stat">BPM: {props.bpm}</p>
        <img alt="" src={playIcon} />
        <p className="stat">{props.playCount}</p>
        <img alt="" src={heartIcon} />
        <p className="stat">{props.heartCount}</p>
        <img alt="" src={commmentsIcon} />
        <p className="stat">{props.commentCount}</p>
      </div>
      <div className="purchase-button">
        ${props.price} <img alt="" src={bagIcon} />
      </div>
    </div>
  );
}
