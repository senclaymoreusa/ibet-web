import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import live_casino from "./components/live_casino";

const containerStyle = {
    minHeight: '100%'
};

const BaseRouter = () => (
    <div style={containerStyle}>
        <Route exact path="/" component={Home} />
        <Route exact path="/live_casino" component={live_casino} />
    </div>
);

export default BaseRouter;
