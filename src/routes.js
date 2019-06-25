import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Slot_Type from "./components/slot_type";
import Sports_Type from "./components/sports_type";
import LiveCasino_Type from "./components/live_casino_type";
import Lottery_Type from "./components/lottery_type";
import Game_List from "./components/game_list";
import Login from './components/login';
import Signup from './components/signup';
import Game_Detail from './components/game_detail';
import Game_Search from './components/game_search';
import Profile from './components/profile';
import Update from './components/update_profile';
import Change_Email from './components/change_email'
import Forget_Password from './components/forget_password'
import Reset_Password from './components/reset_password'
import Email_Sent from './components/email_sent'
import Reset_Password_Done from './components/reset_password_done'
import Referral from './components/referral'
import Balance from './components/balance'
import Activation from './components/activation'
import Activate from './components/activate'
import FundManagement from './components/fund_management'
import OpenBets from './components/open_bets'
import UserMessages from './components/user_messages'
import PointsRewards from './components/points_rewards'
import UsageAnalysis from './components/usage_analysis'
import PersonalDetails from './components/personal_details'
import AccountSettings from './components/account_settings'
import DepositPaypal from './components/deposit_paypal'
import TermsConditions from './components/policy/terms_conditions'
import PrivacyPolicy from './components/policy/privacy_policy'
import CookiePolicy from './components/policy/cookie_policy'
import Change_Password from './components/change_password'
import DepositQaicah from './components/deposit_qaicash'
import DepositAsiapay from './components/deposit_asiapay'
import Deposit from './components/deposit'
const divStyle = {
  minHeight: '100%',
};

const BaseRouter = () => (
  <div style={divStyle}>
    <Route exact path="/" component={Home} />
    <Route exact path="/slot_type/" component={Slot_Type} />
    <Route exact path="/sports_type/" component={Sports_Type} />
    <Route exact path="/live_casino_type/" component={LiveCasino_Type} />
    <Route exact path="/lottery_type/" component={Lottery_Type} />
    <Route exact path="/game_list/:term?" component={Game_List} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup/:filter?" component={Signup} />
    <Route exact path="/game_detail/:id?" component={Game_Detail} />
    <Route exact path="/game_search/:term?" component={Game_Search} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/update_profile" component={Update} />
    <Route exact path="/change_email" component={Change_Email} />
    <Route exact path="/forget_password" component={Forget_Password} />
    {/*<Route exact path="/reset_password/:filter?" component={Reset_Password} /> */}  
    <Route exact path="/reset_password/:email?" component={Reset_Password} />
    <Route exact path="/email_sent/:email?" component={Email_Sent} />
    <Route exact path="/reset_password_done" component={Reset_Password_Done} />
    <Route exact path="/referral" component={Referral} />
    <Route exact path="/balance/:type?" component={Balance} />
    <Route exact path="/activation" component={Activation} />
    <Route exact path="/activate/:token?" component={Activate} />
    <Route exact path="/fund_management/" component={FundManagement} />
    <Route exact path="/open_bets/" component={OpenBets} />
    <Route exact path="/user_messages/" component={UserMessages} />
    <Route exact path="/points_rewards/" component={PointsRewards} />
    <Route exact path="/usage_analysis/" component={UsageAnalysis} />
    <Route exact path="/personal_details/" component={PersonalDetails} />
    <Route exact path="/account_settings/" component={AccountSettings} />
    <Route exact path="/deposit_paypal/" component={DepositPaypal} />
    <Route exact path="/deposit/" component={Deposit} />
    <Route exact path="/deposit_qaicash/" component={DepositQaicah} />
    <Route exact path="/deposit_asiapay/" component={DepositAsiapay} />
    <Route exact path="/terms_conditions/" component={TermsConditions} />
    <Route exact path="/privacy_policy/" component={PrivacyPolicy} />
    <Route exact path="/cookie_policy/" component={CookiePolicy} />
    <Route exact path="/change_password/" component={Change_Password} />
  </div>
);

export default BaseRouter;