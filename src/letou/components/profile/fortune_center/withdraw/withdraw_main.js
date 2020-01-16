import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, AUTH_RESULT_FAIL, sendingLog
} from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { images } from '../../../../../util_config';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../../../util_config';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import WithdrawSuccess from './withdraw_success';
import WithdrawError from './withdraw_error';
import VietnamLocalBank from './vn/local_bank';
import ThaiLocalBank from './th/local_bank';
import Help2Pay from './th/help2pay';
import SetWithdrawalPassword from '../../account_management/set_withdrawal_password';
import MoneyPay from './vn/money_pay';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    sectionMobile: {
        width: '100%',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    addButton: {
        width: 87,
        padding: 0,
        height: 58,
        marginBottom: 32,
        backgroundColor: '#efefef',
        display: 'inline-block',
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid #32c5ff'
        }
    },
    methodColumn: {
        borderBottom: '1px solid #eff3f4',
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    methodGrid: {
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10
    },
    mobileRow: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    mobileBar: {
        paddingLeft: 0,
        paddingRight: 0,
        width: '100%',
        borderBottom: '1px solid #d8d8d8'
    },
    mobileMenuButton: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1)
        },
        textTransform: 'capitalize'
    },
    mainTab: {
        [theme.breakpoints.down('md')]: {
            variant: 'fullWidth'
        }
    },
    title: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#676767',
        whiteSpace: 'nowrap'
    },
    mobileTitle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000',
    },
    active: {
        fontSize: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.18,
        letterSpacing: 0.06,
        color: '#53abe0',
        whiteSpace: 'nowrap'
    },
    selected: {
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid #34abe8',
        position: 'absolute',
        bottom: 0
    },
    favourite: {
        position: 'absolute',
        right: -9,
        bottom: 0
    },
    content: {
        flexGrow: 1,
        paddingTop: 50,
        paddingBottom: 50
    },
});

const StyledTabs = withStyles({
    root: {
        borderBottom: '1px solid #efefef'
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > div': {
            width: '100%',
            backgroundColor: '#53abe0',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: '#474747',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        '&:focus': {
            opacity: 1,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.38,
            letterSpacing: -0.06,
            textAlign: 'center'
        },
        '&:selected': {
            height: '100%',
        },
    },
    selected: {
        backgroundColor: 'rgba(228, 228, 228, 0.4)'
    }
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export class WithdrawMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentValue: '',
            tabValue: 'none'
        };

        this.setPage = this.setPage.bind(this);
        this.withdrawWith = this.withdrawWith.bind(this);
    }

    componentDidMount() {
        const { user, operationProp } = this.props;
        console.log('operationProp: ' + operationProp)
        if (!operationProp) {
            switch (user.country.toLowerCase()) {
                case 'thailand':
                    this.props.history.push('/p/fortune-center/withdraw/thlocalbank');
                    break;
                case 'vietnam':
                    this.props.history.push('/p/fortune-center/withdraw/vnlocalbank');
                    break;
            }
        }
    }

    setPage = (page, msg) => {
        if (msg)
            this.setState({ withdrawMessage: msg });

        //this.setState({ contentValue: page });
        this.setState({ tabValue: page });
    };

    withdrawWith(paymentMethod) {
        this.props.history.push('/p/fortune-center/withdraw/' + paymentMethod)
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    getAvailablePaymentMethods() {
        const { classes, user, operationProp } = this.props;
        const { width } = this.props;
        console.log('width: '+ width)
        switch (user.country.toLowerCase()) {
            case 'china':
                return (
                    <div></div>
                );
            case 'thailand':
                return (
                    <StyledTabs
                        variant={width == 'xs' ? 'fullWidth' : 'standard'}
                        className={classes.mainTab}
                        value={operationProp ? operationProp : 'none'}>
                        <StyledTab
                            style={{
                                width: 0,
                                minWidth: 0,
                                maxWidth: 0,
                                padding: 0
                            }}
                            value="none"
                        />
                        <StyledTab
                            label={this.getLabel('local-bank')}
                            value="thlocalbank"
                            onClick={() => {
                                if (this.props.match.params.type !== 'thlocalbank') {
                                    this.withdrawWith('thlocalbank');
                                }
                            }}
                        />
                        <StyledTab
                            label={this.getLabel('help-pay')}
                            value="help2pay"
                            onClick={() => {
                                if (this.props.match.params.type !== 'help2pay') {
                                    this.withdrawWith('help2pay');
                                }
                            }}
                        />
                    </StyledTabs>
                );
            case 'vietnam':
                return (
                    <StyledTabs
                        value={operationProp ? operationProp : 'none'}>
                        <StyledTab
                            style={{
                                width: 0,
                                minWidth: 0,
                                maxWidth: 0,
                                padding: 0
                            }}
                            value="none"
                        />
                        <StyledTab
                            label={this.getLabel('local-bank')}
                            value="vnlocalbank"
                            onClick={() => {
                                if (this.props.match.params.type !== 'vnlocalbank') {
                                    this.withdrawWith('vnlocalbank');
                                }
                            }}
                        />

                        <StyledTab
                            label={this.getLabel('money-pay')}
                            value="moneypay"
                            onClick={() => {
                                if (this.props.match.params.type !== 'moneypay') {
                                    this.withdrawWith('moneypay');
                                }
                            }}
                        />
                    </StyledTabs>
                );
            default:
                return <div></div>;
        }
    }

    getPaymentMethodContent() {
        const { operationProp } = this.props;
        const { contentValue } = this.state;

        if (contentValue === 'error')
            return <WithdrawError callbackFromParent={this.setPage} errorMessage={this.state.withdrawMessage} />;
        else if (contentValue === 'success')
            return <WithdrawSuccess callbackFromParent={this.setPage} successMessage={this.state.withdrawMessage} />;

        if (operationProp === 'thlocalbank')
            return <ThaiLocalBank callbackFromParent={this.setPage} />;
        else if (operationProp === 'help2pay')
            return <Help2Pay callbackFromParent={this.setPage} />;
        else if (operationProp === 'vnlocalbank')
            return <VietnamLocalBank callbackFromParent={this.setPage} />;
        else if (operationProp === 'moneypay')
            return <MoneyPay callbackFromParent={this.setPage} />;
    }

    render() {
        const { classes, user } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.sectionMobile}>
                    <AppBar position="static" className={classes.mobileRow}>
                        <Toolbar className={classes.mobileBar}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Button
                                        className={classes.mobileMenuButton}
                                        onClick={() => {
                                            this.props.history.push('/p/');
                                        }}
                                    >
                                        <ArrowBackIos style={{ width: 16 }} />
                                        {this.getLabel('back-label')}
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}
                                >
                                    <span className={classes.mobileTitle}>
                                        {this.getLabel('withdraw-label')}
                                    </span>
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
                {user.hasWithdrawPassword ? this.getAvailablePaymentMethods() : null}
                {user.hasWithdrawPassword ? this.getPaymentMethodContent() : <SetWithdrawalPassword />}
            </div >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { user } = state.auth;

    return {
        user: user,
        operationProp: ownProps.match.params.operation,
    };
};

export default withWidth()(
    withStyles(styles)
        (withRouter(
            injectIntl(
                connect(
                    mapStateToProps, { authCheckState }
                )(WithdrawMain)
            )
        )
        )
);
