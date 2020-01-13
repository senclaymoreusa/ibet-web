/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Footer from './footer';
import TopNavbar from './top_navbar';
import { connect } from 'react-redux';
import {
    authCheckState,
    handle_referid,
    hide_landing_page
} from '../../actions';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper
    },
    grow: {
        flexGrow: 1
    }
});

export class Promotion extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TopNavbar />
                promotion page works!!
                <div className={classes.grow} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, {
        authCheckState,
        handle_referid,
        hide_landing_page
    })(Promotion)
);
