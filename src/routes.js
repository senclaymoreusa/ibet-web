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
import Change_Email from './components/change_email'
import Forget_Password from './components/forget_password'
import Reset_Password from './components/reset_password'
import Email_Sent from './components/email_sent'
import ResetPasswordDone from './components/reset_password_done'
import Referral from './components/referral'
import Balance from './components/balance'
import Activation from './components/activation'
import Activate from './components/activate'
import TermsConditions from './components/policy/terms_conditions'
import PrivacyPolicy from './components/policy/privacy_policy'
import CookiePolicy from './components/policy/cookie_policy'
import ChangePassword from './components/change_password_new'
import WithdrawAsiapay from './components/withdraw_asiapay'
import NewProfile from './components/new_profile2'
import NewUpdateProfile from './components/new_update_profile2'
import Profile from "./components/profile/profile"

const divStyle = {
  minHeight: '100%',
};

const BaseRouter = () => (
  <div style={divStyle}>
    <Route exact path="/" component={Home} />
    <Route exact path="/home/:referid?" component={Home} />
    <Route exact path="/slot_type/:type?/:sub?/:filter?" component={Slot_Type} />
    <Route exact path="/sports_type/:type?" component={Sports_Type} />
    <Route exact path="/lottery_type/:type?" component={Lottery_Type} />
    <Route exact path="/liveCasino_type/:type?/:sub?/:filter?" component={LiveCasino_Type} />
    <Route exact path="/game_list/:term?" component={Game_List} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/game_detail/:id?" component={Game_Detail} />
    <Route exact path="/game_search/:term?" component={Game_Search} />
    <Route exact path="/profile" component={NewProfile} />
    <Route exact path="/update_profile" component={NewUpdateProfile} />
    <Route exact path="/change_email" component={Change_Email} />
    <Route exact path="/forget_password" component={Forget_Password} />
    <Route exact path="/reset_password/:email?" component={Reset_Password} />
    <Route exact path="/email_sent/:email?" component={Email_Sent} />
    <Route exact path="/reset_password_done" component={ResetPasswordDone} />
    <Route exact path="/referral" component={Referral} />
    <Route exact path="/balance/:type?" component={Balance} />
    <Route exact path="/activation" component={Activation} />
    <Route exact path="/activate/:token?" component={Activate} />
    <Route exact path="/withdraw_asiapay/" component={WithdrawAsiapay} />
    <Route exact path="/terms_conditions/" component={TermsConditions} />
    <Route exact path="/privacy_policy/" component={PrivacyPolicy} />
    <Route exact path="/cookie_policy/" component={CookiePolicy} />
    <Route exact path="/change_password/" component={ChangePassword} />
    <Route exact path="/p/:type?/:sub?" component={Profile} />

  </div>
);

export default BaseRouter;