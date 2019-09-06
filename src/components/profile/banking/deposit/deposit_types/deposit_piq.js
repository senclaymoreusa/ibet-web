import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { FormattedNumber, injectIntl } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../../../util_config';
import { connect } from 'react-redux';
import _PaymentIQCashier from 'paymentiq-cashier-bootstrapper';
import uuidv1 from 'uuid/v1';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import {
    LinearProgress,
    Grid,
    Button,
    Select,
    MenuItem,
    TextField,
    InputBase
} from '@material-ui/core';
import InputMask from 'react-input-mask';

import { authCheckState, AUTH_RESULT_FAIL } from '../../../../../actions';
import { checkPropTypes } from 'prop-types';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3
        }
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
            '"Segoe UI Symbol"'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
    }
}))(InputBase);

const styles = function(theme) {
    return {
        root: {
            width: 925,
            height: 500,
            backgroundColor: '#ffffff',
            border: 'solid 1px #979797'
        },
        titleRow: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            height: 80
        },
        backCell: {
            paddingLeft: 10,
            paddingTop: 20,
            alignItems: 'left',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            height: 80
        },
        contentRow: {
            paddingLeft: 263,
            paddingRight: 262,
            paddingTop: 50,
            paddingBottom: 50
        },
        cardTypeCell: {
            borderTop: '1px solid #d8d8d8',
            borderBottom: '1px solid #d8d8d8',
            height: 77,
            paddingTop: 15,
            textAlign: 'center'
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
            marginTop: 28
        },
        continueButton: {
            width: 324,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#d8d8d8'
        },
        backBankingButton: {
            width: 324,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#d8d8d8'
        },
        buttonCell: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 40
        },
        backButtonCell: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 20
        },
        rememberCell: {
            paddingTop: 20
        },
        cardTypeButton: {
            width: 72,
            height: 48,
            borderRadius: 4.8,
            backgroundColor: '#f1f1f1'
        },
        infoCell: {
            paddingTop: 15
        },
        infoRow: {
            display: 'block'
        },
        infoLabel: {
            display: 'inline-block',
            fontSize: 16,
            fontWeight: 600,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a'
        },
        infoValue: {
            display: 'inline-block',
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
            marginLeft: 3
        },
        detailRow: {
            paddingBottom: 15
        },
        leftButton: {
            display: 'inline-block',
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 90,
            height: 44
        },
        middleButton: {
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 90,
            height: 44
        },
        rightButton: {
            marginLeft: 10,
            marginRight: 0,
            borderRadius: 4,
            backgroundColor: '#efefef',
            marginTop: 15,
            marginBottom: 15,
            width: 88,
            height: 44
        },
        otherText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 6,
            width: 400,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        amountRow: {
            height: 40,
            borderBottom: '4px solid #5e5e5e'
        },
        amountRightRow: {
            height: 40,
            textAlign: 'right',
            borderBottom: '4px solid #5e5e5e'
        },
        amountText: {
            fontSize: 20,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929'
        },
        detailText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            marginTop: 10,
            paddingLeft: 10,
            width: 400,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        expireText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            marginTop: 10,
            marginRight: 10,
            paddingLeft: 10,
            width: 400,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        cvvText: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            marginTop: 10,
            marginLeft: 10,
            paddingLeft: 10,
            paddingRight: 10,
            width: 190,
            borderRadius: 4,
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        dropDowns: {
            paddingTop: 12,
            paddingBottom: 20
            // marginRight: 5,
            // marginLeft: 10
        },
        textField: {
            border: 'solid 1px #e4e4e4',
            '&:hover': {
                border: 'solid 1px #717171'
            },
            '&:focus': {
                border: 'solid 1px #717171'
            }
        },
        amountButtonRow: {
            paddingTop: 30
        },
        select: {
            fontSize: 14,
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#292929',
            height: 44,
            marginTop: 10,
            width: 200
        },
        menuItem: {
            marginRight: 20
        }
    };
};

class DepositPIQ extends Component {
    constructor(props) {
        super(props);

        this.amountInput = React.createRef();

        this.state = {
            serialNumber: '',
            numberFocused: false,
            numberInvalid: true,

            pinNumber: '',
            pinNumberFocused: false,
            pinNumberInvalid: true,

            operator: 'none',
            operatorInvalid: true,

            amount: 'none',
            amountFocused: false,
            amountInvalid: true,

            showLinearProgressBar: false
        };

        this.backClicked = this.backClicked.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    // static propTypes = {
    //     history: PropTypes.array.isRequired
    // };
    componentDidMount() {
        console.log('component mounted');
        this.props.authCheckState().then(res => {
            if (res === AUTH_RESULT_FAIL) {
                this.props.history.push('/');
                return;
            }
        });

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            console.log('componentDidMount');
            console.log(res);
            this.setState({ data: res.data });
            this.setState({ currencyValue: res.data.currency });
            new _PaymentIQCashier(
                '#cashier',
                {
                    merchantId: '100185999',
                    userId: res.data.username,
                    sessionId: '66',
                    containerHeight: '550px',
                    containerWidth: '60%',
                    environment: 'test' // if not set, defaults to production
                },
                api => {
                    api.on({
                        doneLoading: function(data) {
                            console.log(
                                'Cashier intialized and ready to take down the empire1'
                            );
                        },
                        update: function(data) {
                            console.log(
                                'Cashier intialized and ready to take down the empire2'
                            );
                        }
                    });
                }
            );
        });
    }

    backClicked(ev) {
        this.props.callbackFromParent('deposit_method');
    }

    numberChanged(event) {
        this.setState({ serialNumber: event.target.value });
        this.setState({ numberFocused: true });
        this.setState({
            numberInvalid:
                event.target.value.toString().length < 10 ||
                event.target.value.toString().length > 17
        });
    }

    async handleClick(event) {
        event.preventDefault();
        const { data } = this.state;

        const token = localStorage.getItem('token');

        if (!token) {
            console.log('no token -- user is not logged in');
        }
        config.headers['Authorization'] = `Token ${token}`;

        console.log('data');
        console.log(data);
    }

    render() {
        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        const { showLinearProgressBar, operator, amount } = this.state;

        let depositAmountMessage = formatMessage({
            id: 'deposit.deposit_amount'
        });
        let continueMessage = formatMessage({ id: 'deposit.continue' });
        let backMessage = formatMessage({ id: 'deposit.back_to_banking' });

        const backButton = (
            <Button onClick={this.backClicked}>
                <img src={images.src + 'prev_step.svg'} />
            </Button>
        );

        return <div className={classes.root} id="cashier"></div>;
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(
            mapStateToProps,
            { authCheckState }
        )(DepositPIQ)
    )
);
