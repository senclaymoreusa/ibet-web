import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { hide_deposit, show_deposit_confirm, show_deposit_paypal, show_withdraw, show_account_menu, show_deposit_success } from '../actions';
import { ReactComponent as CloseIcon } from '../assets/img/svg/red-close.svg';
import wechat from '../images/WeChat.png';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';


import Right from '@material-ui/icons/ChevronRight';
import { ReactComponent as Paypal } from '../assets/img/svg/paypal.svg';
import { ReactComponent as BackIcon } from '../assets/img/svg/account-menu-back.svg';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
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
    userButton: {
        border: '1px solid #fe0000',
        minWidth: 32,
        height: 32,
        padding: 0,
        marginTop: 6,
        marginBottom: 6,

    },
    balanceButton: {
        backgroundColor: '#fe0000',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: '#fe0000',
        },
        height: 32,
        marginTop: 6,
        marginBottom: 6,
        marginRight: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },
    depositIcon: {
        marginRight: 5,
        marginTop: -4,
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
    spaceRow: {
        backgroundColor: '#f1f1f1',
        height: 30,
    },
    fromAccountRow: {
        backgroundColor: '#f1f1f1',
        padding: 20,
    },
    accountListRow: {
        backgroundColor: '#f1f1f1',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 20,
    },

    bottomRow: {
        marginTop: 1,
        backgroundColor: '#f1f1f1',
        height: 30,
        borderRadius: 5,
    },
    depositRow: {
        height: 32,
        width: '100%',
        backgroundColor: '#212121',
        paddingTop: 6,
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
    fromAccountLabel: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 18,
        paddingBottom: 15,
        borderBottom: '1px solid #e3e3e3',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        width: 320,
    },
    depositAmountPaper: {
        width: '100%',
        padding: 20,
        textAlign: 'center',
    },
    availableValue: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 16,
        display: 'block',

    },
    amountText: {
        marginTop: 20,
        width: 180,
        textAlign: 'center',
        border: '0',
    },
    amountInput: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 1,
        color: '#212121',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
        width: 180,
        height: 48,
        textAlign: 'center',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderBottom: '1px solid #f6f6f6',
        "&:focus": {
            borderTop: '0',
            borderLeft: '0',
            borderRight: '0',
            borderBottom: '1px solid #212121',
            outline: 'none',
        },
    },
    continueRow: {
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40,
        paddingTop: 30,
        backgroundColor: '#f1f1f1',
    },
    continueButton: {
        textTransform: 'capitalize',
        width: 160,
    }
});

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 2px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


class New_Deposit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: '',
            amount: 0,
        }

        
        this.continueClicked = this.continueClicked.bind(this);

    }

    backClicked = (event) => {
        this.props.show_account_menu();
        this.props.hide_deposit();
    }

    accountChanged = (event) => {
        this.setState({ account: event.target.value });
    }

    amountChanged = (event) => {
        this.setState({ amount: event.value });
    }

    componentDidMount() {
        const accounts = ["Bank 0978", "Credit 7564", "Bank 8574", "Credit 9785"];
        this.setState({ userAvailableAccounts: accounts })
    }

    continueClicked = (event) => {

        const depositInfo = { 
            'depositAmount': this.state.amount,
            'depositAccount': this.state.account,
     };

        this.setState(depositInfo);
        this.props.onChange(depositInfo);

        // if (this.state.account === "PayPal") {
        //     this.props.hide_deposit();
        //     this.props.show_deposit_paypal();
        // } else if (this.state.account === "WeChat") {
        //     this.props.hide_deposit();
        //     this.props.show_deposit_amount();
        // }

        this.props.hide_deposit();
        this.props.show_deposit_confirm();
    }

    render() {
        const { classes } = this.props;


        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} md={6} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                            <BackIcon />
                        </Button>
                        <div className={classes.title}>
                            <FormattedMessage id="accountmenu.deposit" defaultMessage="Deposit" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.depositRow}>
                        <div className={classes.depositLabel}>
                            <FormattedMessage id="accountmenu.deposit" defaultMessage="Deposit" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.fromAccountRow}>
                        <div className={classes.fromAccountLabel}>
                            <FormattedMessage id="deposit.from-account" defaultMessage="From account" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.accountListRow}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={this.state.account}
                                onChange={this.accountChanged.bind(this)}
                                input={<BootstrapInput name="account" id="outlined-age-native-simple" />}
                            >
                                {
                                    this.state.userAvailableAccounts && this.state.userAvailableAccounts.map(name => (
                                        <MenuItem key={name} value={name} >
                                            {name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.depositAmountPaper}>
                            <span className={classes.availableValue}>$392 Available</span>
                            {/* <TextField
                                id="amount"
                                className={classes.amountText}
                                type="number"
                                value={this.state.amount}
                                onChange={this.amountChanged}
                                onFocus={this.amountFocused}
                                // autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    classes: {
                                        input: classes.amountInput,
                                    },
                                }}
                            /> */}
                            <NumberFormat thousandSeparator={true}
                                prefix={'$'}
                                className={classes.amountInput}
                                value={this.state.amount}
                                onValueChange={this.amountChanged}
                                fixedDecimalScale={true}
                                decimalScale={2} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.continueRow}>
                        <Button variant="contained" color="primary" disabled={!(this.state.amount > 0) || (this.state.account === '')} className={classes.continueButton}
                            onClick={this.continueClicked}>Continue</Button>
                    </Grid>
                </Grid>

                {/* <Paper
                    className="row" style={{ height: 80, width: 320, paddingTop: 10, paddingLeft: 20, marginLeft: 30, marginTop: 10, cursor: 'pointer' }}
                    onClick={() => {
                        this.props.hide_deposit();
                        this.props.show_deposit_amount();
                    }}
                >
                    <img style={{ marginTop: 5 }} src={wechat} height="50" width="50" alt='Not available' />
                    <div style={{ marginTop: 20, marginLeft: 30 }}>
                        WeChat
                    </div>
                    <div style={{ marginTop: 18, marginLeft: 100 }}>
                        <Right />
                    </div>
                </Paper>


                <Paper
                    className="row" style={{ height: 80, width: 320, paddingTop: 10, paddingLeft: 20, marginLeft: 30, marginTop: 10, cursor: 'pointer' }}
                    onClick={() => {
                        this.props.hide_deposit();
                        this.props.show_deposit_paypal();
                    }}
                >
                    <div style={{ marginTop: 5 }}>
                        <Paypal style={{ height: 50, width: 60 }} />
                    </div>
                    <div style={{ marginTop: 20, marginLeft: 20 }}>
                        PayPal
                    </div>
                    <div style={{ marginTop: 18, marginLeft: 100 }}>
                        <Right />
                    </div>
                </Paper> */}

            </div>
        )
    }
}

New_Deposit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(null, { hide_deposit, show_deposit_confirm, show_deposit_paypal, show_withdraw, show_account_menu, show_deposit_success })(New_Deposit));