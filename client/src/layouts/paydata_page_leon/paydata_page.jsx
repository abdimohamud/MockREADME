import React, { Component } from "react";
import trending_up from "./trending-up.svg";
import trending_down from "./trending-down.svg";

import elipse_red from "./Ellipse_21.svg";

import "./paydata_page.scss";
import {Line} from 'react-chartjs-2';




var cardWidth = "30%";

class Paydata extends Component {

 constructor(props) {
    super(props);
    this.state = {
    matches768: window.matchMedia("(max-width: 800px)").matches,
    matches578: window.matchMedia("(max-width: 600px)").matches,
  };
  this.changeCardWidth = this.changeCardWidth.bind(this);
  }
  componentDidMount(){
    //monitor screen size
    const handler768 = e => this.setState({matches768: e.matches});
    const handler578 = e => this.setState({matches578: e.matches});
    window.matchMedia("(max-width: 800px)").addListener(handler768);
    window.matchMedia("(max-width: 600px)").addListener(handler578);
  }
 
  changeCardWidth(){
    if(this.state.matches578){
      cardWidth = "60%";
    }
    if(this.state.matches768 &&!this.state.matches578){
      cardWidth="40%";
    }
    if(!this.state.matches768 &&!this.state.matches578){
      cardWidth="30%";
    }
  }

  render() {
    this.changeCardWidth();

    const data_lineChart={
      labels: ['','January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '6 months sale',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0,65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    
    return (
      <main>
        
        <article>
          <section>
            <div className="cardGroup">
            <div className="card" style={{width:cardWidth}}>
              <h2>Beats</h2>
              <p>Total beats sold today</p>
              <div className="revenue_card_trend">
                <h3 style={{margin:"1em"}}>123</h3>
                <div className="revenue_car_trend_percentage">
                <img src={trending_up} alt="trending up" />
                <h2 >60%</h2>
                </div>
                
                
                
                
              </div>
              <p>Detail</p>
            </div>
            <div className="card" style={{width:cardWidth}}>
              <h2>Revenue</h2>
              <p>Total revenue today</p>
              <div className="revenue_card_trend">
                <h3 style={{margin:"1em"}}>$230</h3>
                <div className="revenue_car_trend_percentage"><img src={trending_down} alt="trending up" />
                <h2 >60%</h2></div>
                
                
                
                
              </div>
              <p>Detail</p>
            </div>
            <div className="card" style={{width:cardWidth}}>
              <h2>Album</h2>
              <p>Total album today</p>
              <div className="revenue_card_trend">
                <h3 style={{margin:"1em"}}>20</h3>
                <div className="revenue_car_trend_percentage"><img src={trending_up} alt="trending up" />
                <h2 >60%</h2></div>
                
                
                
              </div>
              <p>Detail</p>
            </div>
            </div>
            
          </section>
          
          <section>
          <h2 style={{textAlign:"center"}}>Total Sales</h2>
          <div className="linechar-container">
          <Line useRef="chart" data={data_lineChart} 
   options={{ maintainAspectRatio: true, responsive:true }}/>
          </div>
          
        
        
        
        
          </section>
        </article>
      </main>
    );
  }

}
export default Paydata;
