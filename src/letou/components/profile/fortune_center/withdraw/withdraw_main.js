import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    authCheckState, AUTH_RESULT_FAIL, sendingLog
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
import ThaiLocalBank from './th/local_bank';
import Help2Pay from './th/help2pay';
import SetWithdrawalPassword from '../../account_management/set_withdrawal_password';
import MoneyPay from './vn/money_pay';
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
    root: {
        borderBottom: '1px solid #efefef',
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
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
        backgroundColor: '#e4e4e4',
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
        },
        '&:selected': {
            opacity: 1,
            height: '100%',
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
            contentValue: '',
            activeStep: -1,
        };

        this.handleTabChange = this.handleTabChange.bind(this);

        this.setPage = this.setPage.bind(this);
        this.withdrawWith = this.withdrawWith.bind(this);

    }

    handleTabChange(newValue) {
        this.setState({ tabValue: newValue })
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
                //
                this.setState({ userId: res.data.pk });
                this.setState({ activeStep: res.data.withdraw_password ? 1 : 0 })
                //
            });

        this.setState({ urlPath: this.props.history.location.pathname });

        this.setContent();
    }

    setContent() {
        var url = this.props.history.location.pathname;
        var parts = url.split('/');

        if (parts.length > 4) {
            if (parts[4].length > 0) {
                //this.setState({ contentValue: parts[4] })
                this.setState({ tabValue: parts[4] })
            }
        } else
            //this.setState({ contentValue: '' })
            this.setState({ tabValue: '' })
    }

    setPage = (page, msg) => {
        if (msg)
            this.setState({ withdrawMessage: msg });

        //this.setState({ contentValue: page });
        this.setState({ tabValue: page });
    };

    withdrawWith(paymentMethod) {
        //this.setState({ contentValue: paymentMethod });
        this.setState({ tabValue: paymentMethod });

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

    getAvailablePaymentMethods() {
        const { classes, user, operationProp } = this.props;
        const { contentValue, tabValue } = this.state;

        switch (user.country.toLowerCase()) {
            case 'china':
                return (
                    <div></div>
                );
            case 'thailand':
                return (
                    <StyledTabs
                        value={tabValue}
                        onChange={this.handleTabChange}>
                        <StyledTab
                            label={this.getLabel('local-bank')}
                            value="thailocalbank"
                            onClick={() => {
                                if (this.props.match.params.type !== 'thailocalbank') {
                                    this.handleTabChange('thailocalbank');
                                    this.withdrawWith('thailocalbank');
                                }
                            }}
                        />
                        <StyledTab
                            label={this.getLabel('help-pay')}
                            value="help2pay"
                            onClick={() => {
                                if (this.props.match.params.type !== 'help2pay') {
                                    this.handleTabChange('help2pay');
                                    this.withdrawWith('help2pay');
                                }
                            }}
                        />
                    </StyledTabs>
                );
            case 'vietnam':
                return (
                    <StyledTabs
                        value={tabValue}
                        onChange={this.handleTabChange}>
                        <StyledTab
                            label={this.getLabel('local-bank')}
                            value="vietnamelocalbank"
                            onClick={() => {
                                if (this.props.match.params.type !== 'vietnamelocalbank') {
                                    this.handleTabChange('vietnamelocalbank');
                                    this.withdrawWith('vietnamelocalbank');
                                }
                            }}
                        />

                        <StyledTab
                            label={this.getLabel('money-pay')}
                            value="moneypay"
                            onClick={() => {
                                if (this.props.match.params.type !== 'moneypay') {
                                    this.handleTabChange('moneypay');
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


        if (operationProp === 'thailocalbank')
            return <ThaiLocalBank callbackFromParent={this.setPage} />;

    }

    render() {
        const { classes } = this.props;
        const { tabValue, activeStep } = this.state;

        return (
            <div className={classes.root}>
                {this.getAvailablePaymentMethods()}
                <div className={classes.content}>

                    {activeStep === 0 && <SetWithdrawalPassword />}

                    {activeStep === 1 && tabValue === 'success' && <WithdrawSuccess callbackFromParent={this.setPage} successMessage={this.state.depositMessage} />}
                    {activeStep === 1 && tabValue === 'error' && <WithdrawError callbackFromParent={this.setPage} successMessage={this.state.depositMessage} />}

                    {activeStep === 1 && tabValue === 'thailocalbank' && (<ThaiLocalBank callbackFromParent={this.setPage} />)}
                    {activeStep === 1 && tabValue === 'help2pay' && <Help2Pay callbackFromParent={this.setPage} />}
                    {activeStep === 1 && tabValue === 'vietnamelocalbank' && (<VietnamLocalBank callbackFromParent={this.setPage} />)}

                </div>
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

export default withStyles(styles)
    (withRouter(
        injectIntl(
            connect(
                mapStateToProps, { authCheckState }
            )(WithdrawMain)
        )
    )
    );
