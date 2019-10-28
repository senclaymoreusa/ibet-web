import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Register from './components/login-register/register';
import live_casino from "./components/live_casino";
import AboutUs from './components/member/about_us'
import ForMember from './components/member/for_member'
import ForPartner from './components/partner/for_partner';
import ContactUs from './components/member/contact_us';
import  Statement  from './components/member/statement';
import  Disclaimer  from './components/member/disclaimer';
import  Privacy from './components/member/privacy';
import SafeBet  from './components/member/safe_bet';
import  Identity  from './components/member/identity';
import  OfferTerms  from './components/member/offer_terms';
import  Rules  from './components/member/rules';
import  FootballRules  from './components/member/football_rules';
import  BetRules  from './components/member/bet_rules';
import  GeneralRules  from './components/member/general_rules';

import  GamePoker  from './components/member/game_poker';
import  GameNiuniu  from './components/member/game.niuniu';
import  GameRuleSix  from './components/member/game_rule6';

import member_rule1 from './components/partner/partner_rule1';
import member_rule2 from './components/partner/partner_rule2';
import member_rule3 from './components/partner/partner_rule3';
import member_rule4 from './components/partner/partner_rule4';
import member_rule5 from './components/partner/partner_rule5';
import member_rule6 from './components/partner/partner_rule6';
import  LotteryRuleOne  from './components/member/lottery_rule1';
import  GameSedie  from './components/member/game_sedie';
import  GameErbagang  from './components/member/game_erbagang';
import  SpecialRules  from './components/member/special_rules';
import  GameRuleTwo  from './components/member/game_rule2';
import  GameWenzhoujiupai  from './components/member/game_wenzhoujiupai';
import  GameRuleFive  from './components/member/game_rule5';
import  GameLongHu  from './components/member/game_longhu';
import  GameRuleSeven  from './components/member/game_rule7';
import  GameGubao  from './components/member/game_gubao';
import  LotteryRuleFour  from './components/member/lottery_rule4';
import  GameRuleFour  from './components/member/game_rule4';
import  GameSangong  from './components/member/game_sangong';
import  GameRuleEight  from './components/member/game_rule8';
import virtual_sports from './components/member/virtual_sports';
import  LotteryRuleTwo  from './components/member/lottery_rule2';
import  LotteryRuleThree  from './components/member/lottery_rule3';
import  GameRuleThree  from './components/member/game_rule3';
import  GameRuleOne  from './components/member/game_rule1';
import  BetRuleTwo  from './components/member/bet_rules2';
import  BetRuleThree  from './components/member/bet_rules3';
import  BetRuleFour  from './components/member/bet_rules4';
import  Baijiale  from './components/member/game_baijiale';
import  Lunpan  from './components/member/game_lunpan';
import  Game21dian  from './components/member/game_21dian';

import Profile from "./components/profile/profile"
import  Iovation  from './components/iovation';



const containerStyle = {
    mineight: '100%'
};

const BaseRouter = () => (
    <div style={containerStyle}>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/live_casino" component={live_casino} />
        <Route exact path="/about_us" component={AboutUs} />
        <Route exact path="/contact_us" component={ContactUs} />
        <Route exact path="/statement" component={Statement} />
        <Route exact path="/disclaimer" component={Disclaimer} />
        <Route exact path="/for_member" component={ForMember} />
        <Route exact path="/for_partner" component={ForPartner} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/safe_bet" component={SafeBet} />
        <Route exact path="/identity" component={Identity} />
        <Route exact path="/offer_terms" component={OfferTerms} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/football_rules" component={FootballRules} />
        <Route exact path="/bet_rules" component={BetRules} />
        <Route exact path="/bet_rules2" component={BetRuleTwo} />
        <Route exact path="/bet_rules3" component={BetRuleThree} />
        <Route exact path="/bet_rules4" component={BetRuleFour} />

        <Route exact path="/general_rules" component={GeneralRules} />
        <Route exact path="/special_rules" component={SpecialRules} />
        <Route exact path="/virtual_sports" component={virtual_sports} />
        <Route exact path="/game_baijiale" component={Baijiale} />
        <Route exact path="/game_lunpan" component={Lunpan} />
        <Route exact path="/game_21dian" component={Game21dian} />

        <Route exact path="/game_longhu" component={GameLongHu} />
        <Route exact path="/game_gubao" component={GameGubao} />
        <Route exact path="/game_erbagang" component={GameErbagang} />
        <Route exact path="/game_sangong" component={GameSangong} />
        <Route exact path="/game_wenzhoujiupai" component={GameWenzhoujiupai} />
        <Route exact path="/game_sedie" component={GameSedie} />
        <Route exact path="/game_poker" component={GamePoker} />
        <Route exact path="/game_niuniu" component={GameNiuniu} />
        <Route exact path="/game_rule1" component={GameRuleOne} />

        <Route exact path="/game_rule2" component={GameRuleTwo} />
        <Route exact path="/game_rule3" component={GameRuleThree} />

        <Route exact path="/game_rule4" component={GameRuleFour} />
        <Route exact path="/game_rule5" component={GameRuleFive} />
        <Route exact path="/game_rule6" component={GameRuleSix} />
        <Route exact path="/game_rule7" component={GameRuleSeven} />
        <Route exact path="/game_rule8" component={GameRuleEight} />
        <Route exact path="/lottery_rule1" component={LotteryRuleOne} />
        <Route exact path="/lottery_rule2" component={LotteryRuleTwo} />
        <Route exact path="/lottery_rule3" component={LotteryRuleThree} />

        <Route exact path="/lottery_rule4" component={LotteryRuleFour} />
        <Route exact path="/member_rule1" component={member_rule1} />
        <Route exact path="/member_rule2" component={member_rule2} />
        <Route exact path="/member_rule3" component={member_rule3} />
        <Route exact path="/member_rule4" component={member_rule4} />
        <Route exact path="/member_rule5" component={member_rule5} />
        <Route exact path="/member_rule6" component={member_rule6} />


        <Route exact path="/p/:type?/:sub?" component={Profile} />
        <Route exact path="/iovation" component={Iovation} />

    </div>
);

export default BaseRouter;
