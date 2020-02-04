/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Register from './components/login-register/register';
import live_casino from './components/live_casino';

import AboutUs from './components/help/member/about_us';
import ForMember from './components/help/member/for_member';
import ForPartner from './components/help/partner/for_partner';
import ContactUs from './components/help/member/contact_us';
import Statement from './components/help/member/statement';
import Disclaimer from './components/help/member/disclaimer';
import Privacy from './components/help/member/privacy';
import SafeBet from './components/help/member/safe_bet';
import Identity from './components/help/member/identity';
import OfferTerms from './components/help/member/offer_terms';
import Rules from './components/help/member/rules';
import FootballRules from './components/help/member/football_rules';
import BetRules from './components/help/member/bet_rules';
import GeneralRules from './components/help/member/general_rules';
import GamePoker from './components/help/member/game_poker';
import GameNiuniu from './components/help/member/game_niuniu';
import GameRuleSix from './components/help/member/game_rule6';
import member_rule1 from './components/help/partner/partner_rule1';
import member_rule2 from './components/help/partner/partner_rule2';
import member_rule3 from './components/help/partner/partner_rule3';
import member_rule4 from './components/help/partner/partner_rule4';
import member_rule5 from './components/help/partner/partner_rule5';
import member_rule6 from './components/help/partner/partner_rule6';
import LotteryRuleOne from './components/help/member/lottery_rule1';
import GameSedie from './components/help/member/game_sedie';
import GameErbagang from './components/help/member/game_erbagang';
import SpecialRules from './components/help/member/special_rules';
import GameRuleTwo from './components/help/member/game_rule2';
import GameWenzhoujiupai from './components/help/member/game_wenzhoujiupai';
import GameRuleFive from './components/help/member/game_rule5';
import GameLongHu from './components/help/member/game_longhu';
import GameRuleSeven from './components/help/member/game_rule7';
import GameGubao from './components/help/member/game_gubao';
import LotteryRuleFour from './components/help/member/lottery_rule4';
import GameRuleFour from './components/help/member/game_rule4';
import GameSangong from './components/help/member/game_sangong';
import GameRuleEight from './components/help/member/game_rule8';
import LotteryRuleTwo from './components/help/member/lottery_rule2';
import LotteryRuleThree from './components/help/member/lottery_rule3';
import GameRuleThree from './components/help/member/game_rule3';
import GameRuleOne from './components/help/member/game_rule1';
import BetRuleTwo from './components/help/member/bet_rules2';
import BetRuleThree from './components/help/member/bet_rules3';
import BetRuleFour from './components/help/member/bet_rules4';
import Baijiale from './components/help/member/game_baijiale';
import Lunpan from './components/help/member/game_lunpan';
import Game21dian from './components/help/member/game_21dian';
import Virtual from './components/help/member/virtual_sports';

import AboutUsTh from './components/help/member_th/about_us';
import ForMemberTh from './components/help/member_th/for_member';
import ForPartnerTh from './components/help/partner_th/for_partner';
import ContactUsTh from './components/help/member_th/contact_us';
import StatementTh from './components/help/member_th/statement';
import DisclaimerTh from './components/help/member_th/disclaimer';
import PrivacyTh from './components/help/member_th/privacy';
import SafeBetTh from './components/help/member_th/safe_bet';
import IdentityTh from './components/help/member_th/identity';
import OfferTermsTh from './components/help/member_th/offer_terms';
import RulesTh from './components/help/member_th/rules';
import FootballRulesTh from './components/help/member_th/football_rules';
import BetRulesTh from './components/help/member_th/bet_rules';
import GeneralRulesTh from './components/help/member_th/general_rules';
import GamePokerTh from './components/help/member_th/game_poker';
import GameNiuniuTh from './components/help/member_th/game_niuniu';
import GameRuleSixTh from './components/help/member_th/game_rule6';
import member_rule1Th from './components/help/partner_th/partner_rule1';
import member_rule2Th from './components/help/partner_th/partner_rule2';
import member_rule3Th from './components/help/partner_th/partner_rule3';
import member_rule4Th from './components/help/partner_th/partner_rule4';
import member_rule5Th from './components/help/partner_th/partner_rule5';
import member_rule6Th from './components/help/partner_th/partner_rule6';
import LotteryRuleOneTh from './components/help/member_th/lottery_rule1';
import GameSedieTh from './components/help/member_th/game_sedie';
import GameErbagangTh from './components/help/member_th/game_erbagang';
import SpecialRulesTh from './components/help/member_th/special_rules';
import GameRuleTwoTh from './components/help/member_th/game_rule2';
import GameWenzhoujiupaiTh from './components/help/member_th/game_wenzhoujiupai';
import GameRuleFiveTh from './components/help/member_th/game_rule5';
import GameLongHuTh from './components/help/member_th/game_longhu';
import GameRuleSevenTh from './components/help/member_th/game_rule7';
import GameGubaoTh from './components/help/member_th/game_gubao';
import LotteryRuleFourTh from './components/help/member_th/lottery_rule4';
import GameRuleFourTh from './components/help/member_th/game_rule4';
import GameSangongTh from './components/help/member_th/game_sangong';
import GameRuleEightTh from './components/help/member_th/game_rule8';
import LotteryRuleTwoTh from './components/help/member_th/lottery_rule2';
import LotteryRuleThreeTh from './components/help/member_th/lottery_rule3';
import GameRuleThreeTh from './components/help/member_th/game_rule3';
import GameRuleOneTh from './components/help/member_th/game_rule1';
import BetRuleTwoTh from './components/help/member_th/bet_rules2';
import BetRuleThreeTh from './components/help/member_th/bet_rules3';
import BetRuleFourTh from './components/help/member_th/bet_rules4';
import BaijialeTh from './components/help/member_th/game_baijiale';
import LunpanTh from './components/help/member_th/game_lunpan';
import Game21dianTh from './components/help/member_th/game_21dian';
import VirtualTh from './components/help/member_th/virtual_sports';

import Profile from './components/profile/profile';

import AboutUsVn from './components/help/member_vn/about_us';
import ForMemberVn from './components/help/member_vn/for_member';
import ForPartnerVn from './components/help/partner_vn/for_partner';
import ContactUsVn from './components/help/member_vn/contact_us';
import StatementVn from './components/help/member_vn/statement';
import DisclaimerVn from './components/help/member_vn/disclaimer';
import PrivacyVn from './components/help/member_vn/privacy';
import SafeBetVn from './components/help/member_vn/safe_bet';
import IdentityVn from './components/help/member_vn/identity';
import OfferTermsVn from './components/help/member_vn/offer_terms';
import RulesVn from './components/help/member_vn/rules';
import FootballRulesVn from './components/help/member_vn/football_rules';
import BetRulesVn from './components/help/member_vn/bet_rules';
import GeneralRulesVn from './components/help/member_vn/general_rules';
import GamePokerVn from './components/help/member_vn/game_poker';
import GameNiuniuVn from './components/help/member_vn/game_niuniu';
import GameRuleSixVn from './components/help/member_vn/game_rule6';
import member_rule1Vn from './components/help/partner_vn/partner_rule1';
import member_rule2Vn from './components/help/partner_vn/partner_rule2';
import member_rule3Vn from './components/help/partner_vn/partner_rule3';
import member_rule4Vn from './components/help/partner_vn/partner_rule4';
import member_rule5Vn from './components/help/partner_vn/partner_rule5';
import member_rule6Vn from './components/help/partner_vn/partner_rule6';
import LotteryRuleOneVn from './components/help/member_vn/lottery_rule1';
import GameSedieVn from './components/help/member_vn/game_sedie';
import GameErbagangVn from './components/help/member_vn/game_erbagang';
import SpecialRulesVn from './components/help/member_vn/special_rules';
import GameRuleTwoVn from './components/help/member_vn/game_rule2';
import GameWenzhoujiupaiVn from './components/help/member_vn/game_wenzhoujiupai';
import GameRuleFiveVn from './components/help/member_vn/game_rule5';
import GameLongHuVn from './components/help/member_vn/game_longhu';
import GameRuleSevenVn from './components/help/member_vn/game_rule7';
import GameGubaoVn from './components/help/member_vn/game_gubao';
import LotteryRuleFourVn from './components/help/member_vn/lottery_rule4';
import GameRuleFourVn from './components/help/member_vn/game_rule4';
import GameSangongVn from './components/help/member_vn/game_sangong';
import GameRuleEightVn from './components/help/member_vn/game_rule8';
import LotteryRuleTwoVn from './components/help/member_vn/lottery_rule2';
import LotteryRuleThreeVn from './components/help/member_vn/lottery_rule3';
import GameRuleThreeVn from './components/help/member_vn/game_rule3';
import GameRuleOneVn from './components/help/member_vn/game_rule1';
import BetRuleTwoVn from './components/help/member_vn/bet_rules2';
import BetRuleThreeVn from './components/help/member_vn/bet_rules3';
import BetRuleFourVn from './components/help/member_vn/bet_rules4';
import BaijialeVn from './components/help/member_vn/game_baijiale';
import LunpanVn from './components/help/member_vn/game_lunpan';
import Game21dianVn from './components/help/member_vn/game_21dian';
import VirtualVn from './components/help/member_vn/virtual_sports';
import VNPromotion from './components/promotions/vn_promotion';
import gbsports from './components/sports/gbsports';
import gbesports from './components/sports/gbesports';
import onebook from './components/sports/onebook';
import btisports from './components/sports/btisports';
import eonebook from './components/sports/eonebook';
import gblotto from './components/sports/gblotto';
import gbkeno from './components/sports/gbkeno';
import gbk3 from './components/sports/gbk3';
import gbpk10 from './components/sports/gbpk10';
import gbssc from './components/sports/gbssc';
// import  Games  from './components/game';
import GameLobby from './components/games/game_lobby';
import GameDetail from './components/games/game_detail';

import Promotion from './components/promotion';
import NoMatch from './ErrorBoundary/NoMatch';

import VNFirstTime200SlotBonus from './components/bonus/vn_first_time_200_slots';
import VNFirstTimeGameBonus from './components/bonus/vn_first_time_game';
import VNFirstTime120SportsBonus from './components/bonus/vn_first_time_120_sports';
import VNFirstTimeSportsBookBonus from './components/bonus/vn_first_time_sports_book';
import VNFirstTime100LiveCasinoBonus from './components/bonus/vn_first_time_100_live_casino';
import VNFirstTime200ScratchCardBonus from './components/bonus/vn_first_time_200_scratch_card';
import VNFirstTime200FGOBonus from './components/bonus/vn_first_time_200_fgo';


const containerStyle = {
    minHeight: '100%'
};

const BaseRouter = () => (
    <div style={containerStyle}>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/live_casino" component={live_casino} />
        <Route exact path="/gbsports" component={gbsports} />
        <Route exact path="/btisports" component={btisports} />
        <Route exact path="/gbesports" component={gbesports} />
        <Route exact path="/onebook" component={onebook} />
        <Route exact path="/eonebook" component={eonebook} />
        <Route exact path="/gblotto" component={gblotto} />
        <Route exact path="/gbkeno" component={gbkeno} />
        <Route exact path="/gbk3" component={gbk3} />
        <Route exact path="/gbpk10" component={gbpk10} />
        <Route exact path="/gbssc" component={gbssc} />
        {/* <Route exact path="/game" component={Games} /> */}
        <Route exact path="/game/:category?/:search?/" component={GameLobby} />
        <Route exact path="/game_detail/:id" component={GameDetail} />

        <Route exact path="/zh/about_us" component={AboutUs} />
        <Route exact path="/zh/contact_us" component={ContactUs} />
        <Route exact path="/zh/statement" component={Statement} />
        <Route exact path="/zh/disclaimer" component={Disclaimer} />
        <Route exact path="/zh/for_member" component={ForMember} />
        <Route exact path="/zh/for_partner" component={ForPartner} />
        <Route exact path="/zh/privacy" component={Privacy} />
        <Route exact path="/zh/safe_bet" component={SafeBet} />
        <Route exact path="/zh/identity" component={Identity} />
        <Route exact path="/zh/offer_terms" component={OfferTerms} />
        <Route exact path="/zh/rules" component={Rules} />
        <Route exact path="/zh/football_rules" component={FootballRules} />
        <Route exact path="/zh/bet_rules" component={BetRules} />
        <Route exact path="/zh/bet_rules2" component={BetRuleTwo} />
        <Route exact path="/zh/bet_rules3" component={BetRuleThree} />
        <Route exact path="/zh/bet_rules4" component={BetRuleFour} />
        <Route exact path="/zh/general_rules" component={GeneralRules} />
        <Route exact path="/zh/special_rules" component={SpecialRules} />
        <Route exact path="/zh/virtual_sports" component={Virtual} />
        <Route exact path="/zh/game_baijiale" component={Baijiale} />
        <Route exact path="/zh/game_lunpan" component={Lunpan} />
        <Route exact path="/zh/game_21dian" component={Game21dian} />
        <Route exact path="/zh/game_longhu" component={GameLongHu} />
        <Route exact path="/zh/game_gubao" component={GameGubao} />
        <Route exact path="/zh/game_erbagang" component={GameErbagang} />
        <Route exact path="/zh/game_sangong" component={GameSangong} />
        <Route
            exact
            path="/zh/game_wenzhoujiupai"
            component={GameWenzhoujiupai}
        />
        <Route exact path="/zh/game_sedie" component={GameSedie} />
        <Route exact path="/zh/game_poker" component={GamePoker} />
        <Route exact path="/zh/game_niuniu" component={GameNiuniu} />
        <Route exact path="/zh/game_rule1" component={GameRuleOne} />
        <Route exact path="/zh/game_rule2" component={GameRuleTwo} />
        <Route exact path="/zh/game_rule3" component={GameRuleThree} />
        <Route exact path="/zh/game_rule4" component={GameRuleFour} />
        <Route exact path="/zh/game_rule5" component={GameRuleFive} />
        <Route exact path="/zh/game_rule6" component={GameRuleSix} />
        <Route exact path="/zh/game_rule7" component={GameRuleSeven} />
        <Route exact path="/zh/game_rule8" component={GameRuleEight} />
        <Route exact path="/zh/lottery_rule1" component={LotteryRuleOne} />
        <Route exact path="/zh/lottery_rule2" component={LotteryRuleTwo} />
        <Route exact path="/zh/lottery_rule3" component={LotteryRuleThree} />
        <Route exact path="/zh/lottery_rule4" component={LotteryRuleFour} />
        <Route exact path="/zh/member_rule1" component={member_rule1} />
        <Route exact path="/zh/member_rule2" component={member_rule2} />
        <Route exact path="/zh/member_rule3" component={member_rule3} />
        <Route exact path="/zh/member_rule4" component={member_rule4} />
        <Route exact path="/zh/member_rule5" component={member_rule5} />
        <Route exact path="/zh/member_rule6" component={member_rule6} />

        <Route exact path="/th/about_us" component={AboutUsTh} />
        <Route exact path="/th/contact_us" component={ContactUsTh} />
        <Route exact path="/th/statement" component={StatementTh} />
        <Route exact path="/th/disclaimer" component={DisclaimerTh} />
        <Route exact path="/th/for_member" component={ForMemberTh} />
        <Route exact path="/th/for_partner" component={ForPartnerTh} />
        <Route exact path="/th/privacy" component={PrivacyTh} />
        <Route exact path="/th/safe_bet" component={SafeBetTh} />
        <Route exact path="/th/identity" component={IdentityTh} />
        <Route exact path="/th/offer_terms" component={OfferTermsTh} />
        <Route exact path="/th/rules" component={RulesTh} />
        <Route exact path="/th/football_rules" component={FootballRulesTh} />
        <Route exact path="/th/bet_rules" component={BetRulesTh} />
        <Route exact path="/th/bet_rules2" component={BetRuleTwoTh} />
        <Route exact path="/th/bet_rules3" component={BetRuleThreeTh} />
        <Route exact path="/th/bet_rules4" component={BetRuleFourTh} />
        <Route exact path="/th/general_rules" component={GeneralRulesTh} />
        <Route exact path="/th/special_rules" component={SpecialRulesTh} />
        <Route exact path="/th/virtual_sports" component={VirtualTh} />
        <Route exact path="/th/game_baijiale" component={BaijialeTh} />
        <Route exact path="/th/game_lunpan" component={LunpanTh} />
        <Route exact path="/th/game_21dian" component={Game21dianTh} />
        <Route exact path="/th/game_longhu" component={GameLongHuTh} />
        <Route exact path="/th/game_gubao" component={GameGubaoTh} />
        <Route exact path="/th/game_erbagang" component={GameErbagangTh} />
        <Route exact path="/th/game_sangong" component={GameSangongTh} />
        <Route exact path="/th/game_wenzhoujiupai" component={GameWenzhoujiupaiTh}/>
        <Route exact path="/th/game_sedie" component={GameSedieTh} />
        <Route exact path="/th/game_poker" component={GamePokerTh} />
        <Route exact path="/th/game_niuniu" component={GameNiuniuTh} />
        <Route exact path="/th/game_rule1" component={GameRuleOneTh} />
        <Route exact path="/th/game_rule2" component={GameRuleTwoTh} />
        <Route exact path="/th/game_rule3" component={GameRuleThreeTh} />
        <Route exact path="/th/game_rule4" component={GameRuleFourTh} />
        <Route exact path="/th/game_rule5" component={GameRuleFiveTh} />
        <Route exact path="/th/game_rule6" component={GameRuleSixTh} />
        <Route exact path="/th/game_rule7" component={GameRuleSevenTh} />
        <Route exact path="/th/game_rule8" component={GameRuleEightTh} />
        <Route exact path="/th/lottery_rule1" component={LotteryRuleOneTh} />
        <Route exact path="/th/lottery_rule2" component={LotteryRuleTwoTh} />
        <Route exact path="/th/lottery_rule3" component={LotteryRuleThreeTh} />
        <Route exact path="/th/lottery_rule4" component={LotteryRuleFourTh} />
        <Route exact path="/th/member_rule1" component={member_rule1Th} />
        <Route exact path="/th/member_rule2" component={member_rule2Th} />
        <Route exact path="/th/member_rule3" component={member_rule3Th} />
        <Route exact path="/th/member_rule4" component={member_rule4Th} />
        <Route exact path="/th/member_rule5" component={member_rule5Th} />
        <Route exact path="/th/member_rule6" component={member_rule6Th} />

        <Route exact path="/vi/about_us" component={AboutUsVn} />
        <Route exact path="/vi/contact_us" component={ContactUsVn} />
        <Route exact path="/vi/statement" component={StatementVn} />
        <Route exact path="/vi/disclaimer" component={DisclaimerVn} />
        <Route exact path="/vi/for_member" component={ForMemberVn} />
        <Route exact path="/vi/for_partner" component={ForPartnerVn} />
        <Route exact path="/vi/privacy" component={PrivacyVn} />
        <Route exact path="/vi/safe_bet" component={SafeBetVn} />
        <Route exact path="/vi/identity" component={IdentityVn} />
        <Route exact path="/vi/offer_terms" component={OfferTermsVn} />
        <Route exact path="/vi/rules" component={RulesVn} />
        <Route exact path="/vi/football_rules" component={FootballRulesVn} />
        <Route exact path="/vi/bet_rules" component={BetRulesVn} />
        <Route exact path="/vi/bet_rules2" component={BetRuleTwoVn} />
        <Route exact path="/vi/bet_rules3" component={BetRuleThreeVn} />
        <Route exact path="/vi/bet_rules4" component={BetRuleFourVn} />
        <Route exact path="/vi/general_rules" component={GeneralRulesVn} />
        <Route exact path="/vi/special_rules" component={SpecialRulesVn} />
        <Route exact path="/vi/virtual_sports" component={VirtualVn} />
        <Route exact path="/vi/game_baijiale" component={BaijialeVn} />
        <Route exact path="/vi/game_lunpan" component={LunpanVn} />
        <Route exact path="/vi/game_21dian" component={Game21dianVn} />
        <Route exact path="/vi/game_longhu" component={GameLongHuVn} />
        <Route exact path="/vi/game_gubao" component={GameGubaoVn} />
        <Route exact path="/vi/game_erbagang" component={GameErbagangVn} />
        <Route exact path="/vi/game_sangong" component={GameSangongVn} />
        <Route
            exact
            path="/vi/game_wenzhoujiupai"
            component={GameWenzhoujiupaiVn}
        />
        <Route exact path="/vi/game_sedie" component={GameSedieVn} />
        <Route exact path="/vi/game_poker" component={GamePokerVn} />
        <Route exact path="/vi/game_niuniu" component={GameNiuniuVn} />
        <Route exact path="/vi/game_rule1" component={GameRuleOneVn} />
        <Route exact path="/vi/game_rule2" component={GameRuleTwoVn} />
        <Route exact path="/vi/game_rule3" component={GameRuleThreeVn} />
        <Route exact path="/vi/game_rule4" component={GameRuleFourVn} />
        <Route exact path="/vi/game_rule5" component={GameRuleFiveVn} />
        <Route exact path="/vi/game_rule6" component={GameRuleSixVn} />
        <Route exact path="/vi/game_rule7" component={GameRuleSevenVn} />
        <Route exact path="/vi/game_rule8" component={GameRuleEightVn} />
        <Route exact path="/vi/lottery_rule1" component={LotteryRuleOneVn} />
        <Route exact path="/vi/lottery_rule2" component={LotteryRuleTwoVn} />
        <Route exact path="/vi/lottery_rule3" component={LotteryRuleThreeVn} />
        <Route exact path="/vi/lottery_rule4" component={LotteryRuleFourVn} />
        <Route exact path="/vi/member_rule1" component={member_rule1Vn} />
        <Route exact path="/vi/member_rule2" component={member_rule2Vn} />
        <Route exact path="/vi/member_rule3" component={member_rule3Vn} />
        <Route exact path="/vi/member_rule4" component={member_rule4Vn} />
        <Route exact path="/vi/member_rule5" component={member_rule5Vn} />
        <Route exact path="/vi/member_rule6" component={member_rule6Vn} />
        <Route exact path="/vi/promotion" component={VNPromotion} />


        <Route exact path="/vi/promotion/first_time_200Slotgames" component={VNFirstTime200SlotBonus} />
        <Route exact path="/vi/promotion/first_time_game" component={VNFirstTimeGameBonus} />
        <Route exact path="/vi/promotion/first_time_120sports" component={VNFirstTime120SportsBonus} />
        <Route exact path="/vi/promotion/first_time_sports_book" component={VNFirstTimeSportsBookBonus} />
        <Route exact path="/vi/promotion/first_time_100live_casion" component={VNFirstTime100LiveCasinoBonus} />
        <Route exact path="/vi/promotion/first_time_200scratchcard" component={VNFirstTime200ScratchCardBonus} />
        <Route exact path="/vi/promotion/first_time_200FGo" component={VNFirstTime200FGOBonus} />

        <Route exact path="/p/:type?/:sub?/:operation?" component={Profile} />
        <Route exact path="/promotions" component={Promotion} />
        <Route path="*" component={NoMatch} />
        </Switch>
    </div>
);

export default BaseRouter;
