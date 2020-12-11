import React, { useState } from 'react';
import './styles/landing-page.scss';
import Navbar from '../components/Navbar';
import TopListing from '../components/TopListing';
import search from '../assets/landing-page/search-icon.svg';
import headphone from '../assets/landing-page/headphone-icon.svg';
import computer from '../assets/landing-page/computer-icon.svg';
import genre from '../assets/landing-page/genre-icon.svg';
import pop from '../assets/landing-page/pop.png';
import hiphop from '../assets/landing-page/hip-hop.png';
import lofi from '../assets/landing-page/lo-fi.png';
import typebeat from '../assets/landing-page/type-beat.png';
import trap from '../assets/landing-page/trap.png';
import free from '../assets/landing-page/free.png';
import star from '../assets/landing-page/star-icon.svg';

export default function LandingPage() {
  const [tabs, setTabs] = useState(['active', 'inactive', 'inactive']);

  function setActive(index){
    var arr = ['inactive', 'inactive', 'inactive'];
    arr[index] = 'active';
    setTabs(arr);
  }

  function mainBody() {
    if(tabs[0] === "active") return displayTopListings("RATED", "UPLOADS");
    else if(tabs[1] === "active") return displayTopListings("PRODUCERS", "PRODUCERS");
    else return displayGenres();
  }

  function displayTopListings(firstChartTitle, secondChartTitle){
    return (
      <div className="charts-container">
        <div className="chart">
          <h1 class="chart-title"><img alt="" src={star}/>TOP {firstChartTitle}</h1>
          <TopListing rank={1} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
          <TopListing rank={2} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
          <button>VIEW ALL</button>
        </div>
        <div className="chart">
          <h1 class="chart-title"><img alt="" src={star}/>NEW {secondChartTitle}</h1>
          <TopListing rank={1} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
          <TopListing rank={2} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99}/>
          <button>VIEW ALL</button>
        </div>
      </div>
    );
  }

  function displayGenres(){
    return (
      <div className="genre-container">
        <div className="row">
          <div className="genre">
            <img alt="" src={pop} />
            <h3>POP</h3>
            <div className="count">120 Tracks</div>
          </div>
          <div className="genre">
            <img alt="" src={hiphop} />
            <h3>HIP HOP</h3>
            <div className="count">120 Tracks</div>
          </div>
          <div className="genre">
            <img alt="" src={lofi} />
            <h3>LO-FI</h3>
            <div className="count">120 Tracks</div>
          </div>
        </div>
        <div className="row">
          <div className="genre">
            <img alt="" src={typebeat} />
            <h3>TYPE BEAT</h3>
            <div className="count">120 Tracks</div>
          </div>
          <div className="genre">
            <img alt="" src={trap} />
            <h3>TRAP</h3>
            <div className="count">120 Tracks</div>
          </div>
          <div className="genre">
            <img alt="" src={free} />
            <h3>FREE</h3>
            <div className="count">120 Tracks</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="landing-page">
      <section className="hero">
        <Navbar cart="black" />
        <h1>Produce. Listen. Buy<br/>From The Best</h1>
        <div className="main-content input-container">
          <input type="text" placeholder='Search "hip hop beat" or "hip hop"' />
          <img alt="" src={search} />
        </div>
      </section>
      <div className="tabs-container">
        <h2 className={tabs[0]} onClick={() => setActive(0)}><img alt="" src={headphone}/> Beats</h2>
        <h2 className={tabs[1]} onClick={() => setActive(1)}><img alt="" src={computer}/> Producers</h2>
        <h2 className={tabs[2]} onClick={() => setActive(2)}><img alt="" src={genre}/> Genres</h2>
      </div>
      <div className="main-body">
        {mainBody()}
      </div>
    </div>
  );
}
