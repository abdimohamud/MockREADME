import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "./logo_original_white.png";
import notification from "./bell_white.png";
import avator from "./user_white.png";
import cart from "./cart_white.png";
import hamburger from "./hamburger_white.png";

import "./header_user.scss";

class Header_user extends Component {
   
  
  constructor(props) {
    super(props);
    //set breakpoint of screen
    this.state={matches: window.matchMedia("(max-width: 768px)").matches, showMenu:false};
    this.displayMobileMenu = this.displayMobileMenu.bind(this);
    
  }
  componentDidMount(){
    //monitor screen size
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(max-width: 768px)").addListener(handler);
  }
  displayMobileMenu(){
    this.state.showMenu?this.setState({showMenu:false}):this.setState({showMenu:true});
    /*(!this.state.showMenu){
      this.setState({showMenu:true});
      
    }
    else{
      this.setState({showMenu:false});
    }*/
 
    
  }

  render() {
    let headerListClassName = this.state.matches?'mobileMenu':'Header_user_header_item';
    
    return (
      <header>
        <div className="User_header">
          
           <Link to="/"><img src={logo} alt="logo"  /></Link> 
           {/*desktop menu*/}
           {!this.state.matches &&
              <div className={headerListClassName}>
                
                  <Link to="/MarketPlace"><h3>Community</h3></Link>
                  <Link to="/SellBeats"><h3>Sell Beats</h3></Link>
                  {/*counter for notifications*/}
                  <div  data-badge={this.props.notification_count}>
                  <img src={notification} alt="notification" />
                  </div>
                  
                  <img src={avator} alt="avator" />
                  {/*counter for cart*/}
                  <Link to="/cart"><div  data-badge={this.props.cart_count}> <img src={cart} alt="shoppingCart" /></div></Link>
              
              </div>
          }
          {/*mobile menu*/}
          {this.state.matches &&
            <div className="Header_user_header_hamburger">
              <img src={hamburger} alt="hamburger" onClick={this.displayMobileMenu} />
              

              
            </div>
          }
          
        </div>
        {this.state.matches &&
          <div>
                {this.state.showMenu  &&

                <div className="MobileHeaderList">
                                
                    <Link to="/MarketPlace"><h3>Community</h3></Link>
                    <Link to="/SellBeats"><h3>Sell Beats</h3></Link>
                    {/*counter for notifications*/}
                    <Link to="/notification"><h3  data-badge={this.props.notification_count}>
                    Notification </h3></Link>
                    
                    <Link to="/user_setting"><h3  >
                    Setting </h3></Link>
                    
                    {/*counter for cart*/}
                    <Link to="/cart"> <h3 data-badge={this.props.cart_count}>Cart</h3></Link>
                    <Link to="/signout"><h3  >
                    Sign out </h3></Link>

                </div>

                }
          </div>
           


        }
        

      </header>
    );
  }
}
export default Header_user;
