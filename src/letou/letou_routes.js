import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/about_us'
import ForMember from './components/for_member';
import ForPartner from './components/for_partner';
import ContactUs from './components/contact_us';

const containerStyle = {
    minHeight: '100%'
};

const BaseRouter = () => (
    <div style={containerStyle}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about_us" component={AboutUs} />
        <Route exact path="/contact_us" component={ContactUs} />
        <Route exact path="/for_member" component={ForMember} />
        <Route exact path="/for_partner" component={ForPartner} />
        

    </div>
);

export default BaseRouter;
