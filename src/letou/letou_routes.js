import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/about_us'
import ForMember from './components/for_member';
import ForPartner from './components/for_partner';
import ContactUs from './components/contact_us';
import  Statement  from './components/statement';
import  Disclaimer  from './components/disclaimer';
import  Privacy from './components/privacy';
import SafeBet  from './components/safe_bet';
import  Identity  from './components/identity';
import  OfferTerms  from './components/offer_terms';
import  Rules  from './components/rules';
import  FootballRules  from './components/football_rules';
import  BetRules  from './components/bet_rules';
import  GeneralRules  from './components/general_rules';
import  SpecialRules  from './components/special_rules';
import  VirtualRules  from './components/virtual_rule';
import  GameLongHu  from './components/game_longhu';
import  GameGubao  from './components/game_gubao';
import  GameErbagang  from './components/game_erbagang';
import  GameSangong  from './components/game_sangong';
import  GameWenzhoujiupai  from './components/game_wenzhoujiupai';
import  GameSedie  from './components/game_sedie';
import  GamePoker  from './components/game_poker';
import  GameNiuniu  from './components/game.niuniu';
import  GameRuleTwo  from './components/game_rule2';
import  GameRuleFour  from './components/game_rule4';
import  GameRuleFive  from './components/game_rule5';
import  GameRuleSix  from './components/game_rule6';
import  GameRuleSeven  from './components/game_rule7';
import  GameRuleEight  from './components/game_rule8';
import  LotteryRuleFour  from './components/lottery_rule4';
import member_rule1 from './components/member_rule1';
import member_rule2 from './components/member_rule2';
import member_rule3 from './components/member_rule3';
import member_rule4 from './components/member_rule4';
import member_rule5 from './components/member_rule5';
import member_rule6 from './components/member_rule6';

const containerStyle = {
    mineight: '100%'
};

const BaseRouter = () => (
    <div style={containerStyle}>
        <Route exact path="/" component={Home} />
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
        <Route exact path="/general_rules" component={GeneralRules} />
        <Route exact path="/special_rules" component={SpecialRules} />
        <Route exact path="/virtual_rules" component={VirtualRules} />
        <Route exact path="/game_longhu" component={GameLongHu} />
        <Route exact path="/game_gubao" component={GameGubao} />
        <Route exact path="/game_erbagang" component={GameErbagang} />
        <Route exact path="/game_sangong" component={GameSangong} />
        <Route exact path="/game_wenzhoujiupai" component={GameWenzhoujiupai} />
        <Route exact path="/game_sedie" component={GameSedie} />
        <Route exact path="/game_poker" component={GamePoker} />
        <Route exact path="/game_niuniu" component={GameNiuniu} />
        <Route exact path="/game_rule2" component={GameRuleTwo} />
        <Route exact path="/game_rule4" component={GameRuleFour} />
        <Route exact path="/game_rule5" component={GameRuleFive} />
        <Route exact path="/game_rule6" component={GameRuleSix} />
        <Route exact path="/game_rule7" component={GameRuleSeven} />
        <Route exact path="/game_rule8" component={GameRuleEight} />
        <Route exact path="/lottery_rule4" component={LotteryRuleFour} />
        <Route exact path="/member_rule1" component={member_rule1} />
        <Route exact path="/member_rule2" component={member_rule2} />
        <Route exact path="/member_rule3" component={member_rule3} />
        <Route exact path="/member_rule4" component={member_rule4} />
        <Route exact path="/member_rule5" component={member_rule5} />
        <Route exact path="/member_rule6" component={member_rule6} />



    </div>
);

export default BaseRouter;
