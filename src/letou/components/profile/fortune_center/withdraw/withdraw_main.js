import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, AUTH_RESULT_FAIL
} from '../../../../../actions';
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
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
import MoneyPay from './vn/money_pay';

import BankAccounts from './zh/bank_accounts';
import CreateWithdrawalPassword from '../create_withdrawal_password'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = () => ({
    root: {
        width: '100%',
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
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: '#474747',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
            fontWeight: 800,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.38,
            letterSpacing: - 0.06,
            textAlign: 'center',
            // color: '#252525',
            backgroundColor: '#c5c5c5',
        },
        '&:selected': {
            height: '100%',
            backgroundColor: '#c5c5c5',
            //borderBottom: '2px solid #53abe0',
        },
    },
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
            urlPath: '',
            contentValue: '',
            selectedType: '',
            userCountry: '',
            favouriteMethod: '',

            tabValue: ''
        };

        this.handleTabChange = this.handleTabChange.bind(this);

        this.setPage = this.setPage.bind(this);
        this.withdrawWith = this.withdrawWith.bind(this);
        this.checkFavoriteMethod = this.checkFavoriteMethod.bind(this);
    }

    handleTabChange(newValue) {
        this.setState({ tabValue: newValue })
    }

    componentWillReceiveProps(props) {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ userCountry: res.data.country });
                this.setState({ favouriteMethod: res.data.favorite_payment_method });
            });

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ userCountry: res.data.country });
                this.setState({ favouriteMethod: res.data.favorite_payment_method });
            });

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length > 4) {
            if (parts[4].length > 0) {
                this.setState({ contentValue: parts[4] })
            }
        } else
            this.setState({ contentValue: '' })
    }

    setPage = (page, msg) => {
        if (msg)
            this.setState({ withdrawMessage: msg });

        this.setState({ contentValue: page });
    };

    withdrawWith(paymentMethod) {
        this.setState({ contentValue: paymentMethod });

        var url = this.state.urlPath;
        var parts = url.split('/');

        if (parts.length >= 4) {
            url = '/';
            var path = parts.slice(1, 4).join('/');
            url = url + path;
        }
        url = url + '/' + paymentMethod;
        this.props.history.push(url);

    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    checkFavoriteMethod() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ favouriteMethod: res.data.favorite_payment_method });
            });
    }

    getAvailablePaymentMethods() {
        const { classes } = this.props;
        const { contentValue, userCountry, favouriteMethod, tabValue } = this.state;

        switch (userCountry.toLowerCase()) {
            case 'china':
                return (
                    // <BankAccounts />
                    <CreateWithdrawalPassword/>
                );
            case 'thailand':
                return (
                    <div>
                        <StyledTabs
                            value={tabValue}
                            onChange={this.handleTabChange}>
                            <StyledTab
                                label={this.getLabel('local-bank')}
                                value="localbank"
                                onClick={() => {
                                    if (this.props.match.params.type !== 'localbank') {
                                        this.handleTabChange('localbank');
                                    }
                                }}
                            />
                            <StyledTab
                                label={this.getLabel('money-pay')}
                                value="moneypay"
                                onClick={() => {
                                    if (this.props.match.params.type !== 'moneypay') {
                                        this.handleTabChange('moneypay');
                                    }
                                }}
                            />
                        </StyledTabs>
                        {this.state.tabValue === 'localbank' && <VietnamLocalBank />}
                        {this.state.tabValue === 'moneypay' && <MoneyPay />}
                    </div>
                );
            case 'vietnam':
                return (
                    <div></div>
                );
            default:
                return <div></div>;
        }
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.content}>
                    {this.getAvailablePaymentMethods()}

                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang,
    };
};

export default withStyles(styles)
    (withRouter(
        injectIntl(
            connect(
                mapStateToProps, { authCheckState }
            )(WithdrawMain)
        )
    )
    );
