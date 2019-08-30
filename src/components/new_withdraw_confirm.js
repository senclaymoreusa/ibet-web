import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { images } from '../util_config';
import { hide_withdraw_confirm, show_withdraw_success, show_withdraw } from '../actions';

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
    withdrawRow: {
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
    withdrawAccount: {
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
    withdrawAmount: {
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
    confirmWithdrawLabel: {
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

class NewWithdrawConfirm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: '',
            amount: 0,
        }
    }

    componentDidMount() {
        if (this.props.withdrawInfo) {
            this.setState({ account: this.props.withdrawInfo.withdrawAccount });
            this.setState({ amount: this.props.withdrawInfo.withdrawAmount });
        }
    }

    backClicked = (event) => {
        this.props.hide_withdraw_confirm();
        this.props.show_withdraw();
    }

    confirmClicked = event => {
        this.props.hide_withdraw_confirm();
        this.props.show_withdraw_success();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                        <img src={images.src + 'account-menu-back.svg'} />
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
                    <Grid item xs={12} className={classes.contentRow}>
                        <Paper className={classes.contentPaper}>
                            <div className={classes.confirmWithdrawLabel}>
                                <FormattedMessage id="accountmenu.confirm-withdraw" defaultMessage="Confirm Withdraw" />
                            </div>

                            <span className={classes.withdrawAccount}>
                                {this.state.account}
                            </span>
                            <span className={classes.withdrawAmount}>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { hide_withdraw_confirm, show_withdraw_success, show_withdraw })(NewWithdrawConfirm)));