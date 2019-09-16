import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { config } from '../../../util_config';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        minHeight: 688,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },
    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.64,
        textAlign: 'center',
        color: 'black',
        marginTop: 28,
    },
    pleased:{
        fontSize: 17,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.53,
        letterSpacing: 0.45,
        color: 'black',
    },
    steps:{
        fontSize: 17,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 0.53,
        letterSpacing: 0.55,
        color: '#6d7278',
    },
    pleasedRow:{
        paddingTop: 20,
        paddingLeft: 28,
        paddingRight:49,
    },
    noRow:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50
    },
    noEligible:{
        fontSize: 17,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.55,
        color: 'black',
    },
});

export class EligibleRewards extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }


    }



    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>Eligible Rewards</span>
                    </Grid>
                    <Grid item xs={12} className={classes.pleasedRow}>
                        <span className={classes.pleased}>We are pleased you are interested in our rewards. Please note we change these on occasion to offer you the best options. Below is what is available to you today.</span>
                        <span className={classes.steps}>Rewards steps: (1)  Accept Rewards (2) Place bets (3) Get rewards money if you lose  (4) Play to convert rewards to cash.</span>                 
                    </Grid>    
                    <Grid item xs={12} className={classes.noRow}>
                        <span className={classes.noEligible}>Right now there are no Eligible Rewards  available. Please try later.</span>
                    </Grid>         
                </Grid>
            </div>
        );
    }
}

EligibleRewards.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(EligibleRewards)));