import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';

import '../css/deposit.css';
// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { ReactComponent as CloseIcon } from '../assets/img/svg/red-close.svg';

import { hide_deposit_confirm, show_deposit_success, show_deposit } from '../actions';
import { ReactComponent as BackIcon } from '../assets/img/svg/account-menu-back.svg';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 44,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    backButton: {
        width: 32,
        height: 32,
        minWidth: 32,
        marginTop: 6,
        marginBottom: 6,
    },
    depositRow: {
        height: 32,
        width: '100%',
        backgroundColor: '#212121',
        paddingTop: 6,
    },
    contentRow: {
        backgroundColor: '#f1f1f1',
        padding: 20,
    },
    contentPaper: {
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    margin: {
        margin: 'auto',
    },

    textField: {
        flexBasis: 200,
        width: 330,
        backgroundColor: '#ffffff;'
    },

    cssRoot: {
        color: theme.palette.getContrastText(blue[300]),
        backgroundColor: blue[300],
        '&:hover': {
            backgroundColor: blue[800],
        },
    },
    title: {
        display: 'inline',
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 6,
        height: 30,
        marginTop: 12,

    },
    depositLabel: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#ffffff',
        fontSize: 15.8,
        textTransform: 'uppercase',
    },
    depositAccount: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 16,
        margintop: 20,
    },
    depositAmount: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 16,
        margintop: 10,
    },
    confirmButton: {
        width: 160,
        marginTop: 20,
        textTransform: 'capitalize',
    },
    confirmDepositLabel: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
    }
});

class New_Deposit_Confirm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: '',
            amount: 0,
        }
    }

    componentDidMount() {
        if (this.props.depositInfo) {
            this.setState({ account: this.props.depositInfo.depositAccount });
            this.setState({ amount: this.props.depositInfo.depositAmount });
        }
    }


    backClicked = (event) => {
        this.props.hide_deposit_confirm();
        this.props.show_deposit();
    }


    confirmClicked = event => {
        this.props.hide_deposit_confirm();
        this.props.show_deposit_success();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                            <BackIcon />
                        </Button>
                        <div className={classes.title}>
                            <FormattedMessage id="accountmenu.deposit" defaultMessage="Deposit" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.depositRow}>
                        <div className={classes.depositLabel}>
                            <FormattedMessage id="accountmenu.deposit" defaultMessage="DepositCVBB" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.contentRow}>
                        <Paper className={classes.contentPaper}>
                            <div className={classes.confirmDepositLabel}>
                                <FormattedMessage id="accountmenu.confirm-deposit" defaultMessage="Confirm Deposit" />
                            </div>

                            <span className={classes.depositAccount}>
                                {this.state.account}
                            </span>
                            <span className={classes.depositAmount}>
                                {this.state.amount}
                            </span>
                            <Button variant="contained" color="primary" className={classes.confirmButton}
                                disabled={!(this.state.amount > 0) || (this.state.account === '')}
                                onClick={this.confirmClicked}

                            >Confirm</Button>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { hide_deposit_confirm, show_deposit_success, show_deposit })(New_Deposit_Confirm)));