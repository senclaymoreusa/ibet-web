import React from 'react';
import { Route } from 'react-router-dom';

const divStyle = {
    minHeight: '100%'
};

const BaseRouter = () => (
    <div style={divStyle}>
        <Route exact path="/" component={TestHome} />
    </div>
);
function TestHome() {
    return (
        <div>
            <h1>Hi</h1>
        </div>
    );
}
export default BaseRouter;
