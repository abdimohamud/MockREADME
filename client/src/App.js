import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  LandingPage,
  CommunityPage,
  TermsAndConditions,
  CartPage,
  FileComplaint,
  AboutUsPage,
  ContactUsPage,
  SettingAccount,
  SettingBilling,
  SettingPassword,
  SettingPayment,
  SettingPreferences,
  SettingRecommendations,
  SettingSocialMedia,
  IndividualBeatPage,
  ProducerHome,
  CareerPage
} from "./layouts";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/career" exact component={CareerPage} />
        <Route path="/producer-home" exact component={ProducerHome} />
        <Route path="/individual-beat-page" exact component={IndividualBeatPage} />
        <Route path="/social-media-setting" exact component={SettingSocialMedia} />
        <Route path="/recommendations-setting" exact component={SettingRecommendations} />
        <Route path="/preference-setting" exact component={SettingPreferences} />
        <Route path="/payment-setting" exact component={SettingPayment} />
        <Route path="/password-setting" exact component={SettingPassword} />
        <Route path="/billing-setting" exact component={SettingBilling} />
        <Route path="/account-setting" exact component={SettingAccount} />
        <Route path="/contact-us" exact component={ContactUsPage} />
        <Route path="/about-us" exact component={AboutUsPage} />
        <Route path="/file-complaint" exact component={FileComplaint} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/terms-and-conditions" exact component={TermsAndConditions} />
        <Route path="/community" exact component={CommunityPage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  );
}
