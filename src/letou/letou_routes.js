import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';

const containerStyle = {
    minHeight: '100%'
};

const BaseRouter = () => (
    <div style={containerStyle}>
        <Route exact path="/" component={Home} />
    </div>
);

export default BaseRouter;
