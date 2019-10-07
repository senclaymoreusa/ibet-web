import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Register from './components/login-register/register';


const containerStyle = {
    minHeight: '100%'
};

const BaseRouter = () => (
    <div style={containerStyle}>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />

    </div>
);

export default BaseRouter;
