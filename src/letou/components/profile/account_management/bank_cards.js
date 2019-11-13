import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState,sendingLog } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Create from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { config } from '../../../../util_config';
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = () => ({
    root: {
    },
  
});

export class BankCards extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }

    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentDidMount() {

        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                }
            })

        // const token = localStorage.getItem('token');
        // config.headers["Authorization"] = `Token ${token}`;

        // axios.get(API_URL + 'users/api/user/', config)
        //     .then(res => {
        //         this.setState({ phone: res.data.phone });
        //         this.setState({ username: res.data.username });
        //     }).catch(function (err) {
        //         sendingLog(err);
        //     });
    }

    render() {
        const { classes } = this.props;
        const { activeStep, phone, verificationCode, verificationCodeSent } = this.state;

        return (
            <div className={classes.root}>
                bank cards page works!!
                {/* <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title}>
                            {this.getLabel('modify-phone')}
                        </span>
                    </Grid>
                    <Grid item xs={12} >
                        <Stepper alternativeLabel activeStep={activeStep}>
                            <Step key={this.getLabel('phone-verification')}>
                                <StepLabel StepIconComponent={customStepIcon}>{this.getLabel('phone-verification')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('phone-settings')}>
                                <StepLabel>{this.getLabel('phone-settings')}</StepLabel>
                            </Step>
                            <Step key={this.getLabel('set-successfully')}>
                                <StepLabel>{this.getLabel('set-successfully')}</StepLabel>
                            </Step>
                        </Stepper>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('phone-number')}
                        </span>
                    </Grid>
                    <Grid item xs={6} className={classes.row}>
                        <span className={classes.value}>
                            {this.state.phone}
                        </span>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                        <span className={classes.label}>
                            {this.getLabel('verification-code')}
                        </span>
                    </Grid>
                    <Grid item xs={9} className={classes.row}>
                        <TextField className={classes.verificationCodeField}
                            value={verificationCode}
                            onChange={(event) => {
                                this.setState({ verificationCode: event.target.value });
                            }}
                            InputProps={{
                                disableUnderline: true,

                            }}></TextField>
                        <Button variant="contained"
                            color="default"
                            onClick={this.sendVerificationCode}
                            className={classes.sendButton}>{this.getLabel('send-code')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                    </Grid>
                    <Grid item xs={9} className={classes.row}>
                        {this.getLabel('only-three-code')}
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                    </Grid>
                    <Grid item xs={9} className={classes.row}>
                        <Button variant="contained"
                            disabled={verificationCode.length === 0}
                            //onClick={this.sendVerificationCode.bind(this)}
                            className={classes.nextButton}>{this.getLabel('next-step')}</Button>
                    </Grid>
                    <Grid item xs={3} className={classes.row}>
                    </Grid>
                    <Grid item xs={9} className={classes.row}>
                        <FormControlLabel
                            control={
                                <CustomCheckbox checked={verificationCodeSent} readOnly={true} value="checkedA" />
                            }
                            label={this.getLabel('verification-code-sent')}
                        />
                    </Grid>
                </Grid> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(BankCards))));