import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hide_withdraw, show_withdraw_confirm, show_account_menu } from '../actions';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import InputBase from '@material-ui/core/InputBase';
import { images } from '../util_config';

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
    withdrawIcon: {
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
    withdrawRow: {
        height: 32,
        width: '100%',
        backgroundColor: '#212121',
        paddingTop: 6,
    },
    withdrawLabel: {
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
    withdrawAmountPaper: {
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


class NewWithdraw extends Component {

    constructor(props) {
        super(props);

        this.state = {
            balance: '',
            error: false,
            data: '',
            type: '',

            account: '',
            amount: 0,

            live_check_amount: false,

            button_disable: true,
        };

        this.continueClicked = this.continueClicked.bind(this);


        // this.onInputChange_balance          = this.onInputChange_balance.bind(this);
        // this.onFormSubmit                   = this.onFormSubmit.bind(this);
    }

    backClicked = (event) => {
        this.props.show_account_menu();
        this.props.hide_withdraw();
    }

    accountChanged = (event) => {
        this.setState({ account: event.target.value });
    }

    amountChanged = (event) => {
        this.setState({ amount: event.value });
    }

    continueClicked = (event) => {

        const withdrawInfo = {
            'withdrawAmount': this.state.amount,
            'withdrawAccount': this.state.account,
        };

        this.setState(withdrawInfo);
        this.props.onChange(withdrawInfo);

        this.props.hide_withdraw();
        this.props.show_withdraw_confirm();
    }

    componentDidMount() {
        const accounts = ["Bank 0978", "Credit 7564", "Bank 8574", "Credit 9785"];
        this.setState({ userAvailableAccounts: accounts })
   }

   
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} md={6} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                        <img src={images.src + 'account-menu-back.svg'}  alt=""/>
                        </Button>
                        <div className={classes.title}>
                            <FormattedMessage id="accountmenu.withdraw" defaultMessage="Withdraw" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.withdrawRow}>
                        <div className={classes.withdrawLabel}>
                            <FormattedMessage id="accountmenu.withdraw" defaultMessage="Withdraw" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.fromAccountRow}>
                        <div className={classes.fromAccountLabel}>
                            <FormattedMessage id="withdraw.from-account" defaultMessage="From account" />
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
                        <Paper className={classes.withdrawAmountPaper}>
                            <span className={classes.availableValue}>$392 Available</span>
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
            </div>
        )
    }
}

NewWithdraw.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(null, { hide_withdraw, show_withdraw_confirm, show_account_menu  })(NewWithdraw));