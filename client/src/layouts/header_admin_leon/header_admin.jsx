import React, { Component } from "react";
import logo from "./logo_original_white.png";
import notification from "./bell_white.png";
import avator from "./user_white.png";
import paydata from "./paydata.svg";
import pos from "./ic_sharp-point-of-sale.svg";
import "./header_admin.scss";

class Header_admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

        <header className="header_admin">
                <div className="App-header">
                  
                    <img src={logo} alt="logo"  />
                  
                  <div className="header_admin_item">
                     {/*counter for notifications*/}
                    <div  data-badge={this.props.notification_count}>
                    <img src={notification} alt="notification" />
                    </div>
                    <img
                      src={avator}
                      alt="avator"
                      
                    />
                  </div>
                </div>

          
        </header>

          <nav className="header_admin_nav">
                    <figure>
                    
                      <img src={paydata} alt="paydata" />
                      <figcaption>Revenue</figcaption>
                    </figure>
                    <figure>
                      <img src={pos} alt="pos" />
                      <figcaption>Pay data</figcaption>
                    </figure>
          </nav>
      </div>
      
    );
  }
}
export default Header_admin;
