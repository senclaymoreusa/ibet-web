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

    </div>
);

export default BaseRouter;
