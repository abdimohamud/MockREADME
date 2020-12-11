import React, {useState} from "react";
import "./styles/cartPage.scss";
import Navbar from '../components/Navbar';
import {CartListing, RecommendationListing} from "../components";

export default function CartPage() {
  const beats={
    songTitle:"Title",
    producerName:"P1",
    category:"pop",
    length:4.5,
    license:"Standard License",
    price:200,
    beatPic:"../assets/landing-page/free.png"
  };
  var numberOfBeats=0;
  var subtotal=100;
  var taxes = subtotal*0.0875;
  var fees = 50;
  var total= subtotal+taxes+fees;

  const [couponCode, setCouponCode] = useState('');
  console.log(couponCode);

    return (
      <div id="cartPage">
        <Navbar/>
        <div id="recommendationContainer">
          <p id="recommendationTitle">Our Recommendation</p>
          <div id="recommendations">
            <RecommendationListing
              songTitle="Song Title"
              producerName="Producer Name"/>
            <RecommendationListing
              songTitle="Song Title2"
              producerName="Producer Name2"/>
          </div>
        </div>
        <div id="contentContainer">
          <h2 id="cartTitle"> YOUR CART({numberOfBeats})</h2>
          <div id = "content">
            <div id="labelContainer">
              <div id="beatTitleLabel">
              Beat Title
              </div>
              <div id="licenseLabel">
              License
              </div>
              <div id="amountLabel">
              Amount
              </div>
            </div>
            <br/>
            <div id="beatsList">
              <CartListing
                songTitle={beats.songTitle}
                producerName={beats.producerName}
                category={beats.category}
                length={beats.length}
                license={beats.license}
                price={beats.price}
                beatPic={beats.beatPic}/>
              <CartListing
                songTitle="Kelly Title"
                producerName="Kelly"
                category="Pop"
                length="3.5"
                license="Standard License"
                price="100"/>
            </div>
            <button id="continueButton">CONTINUE SHOPPING</button>
          </div>
          <div id="summaryContainer">
            <div id="summaryBox">
              <h3>SUMMARY</h3>
              <input type="text" id="couponCodeField"
              placeholder="Enter a coupon code"
              onChange={event=>setCouponCode(event.target.value)}/>
              <div className="description">
                <p>SUBTOTAL</p>
                <p>TAXES</p>
                <p>FEES</p><br/><br/>
              </div>
              <div className="number">
                <p>{subtotal}</p>
                <p>{taxes}</p>
                <p>{fees}</p><br/><br/>
              </div>
              <hr id="line"/>
              <div className="description">
                <p>TOTAL</p><br/>
              </div>
              <div className="number">
                <p>{total}</p>
                <p><u>Empty Cart</u></p>
              </div>
              <button id="checkoutBtn"><b>CHECKOUT</b></button>
            </div>
          </div>
        </div>
      </div>
    );
}
