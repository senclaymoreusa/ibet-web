import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { images } from '../../../../util_config';
import clsx from 'clsx';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import Snackbar from '@material-ui/core/Snackbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const styles = () => ({
    root: {
        paddingLeft: 50,
        paddingRight: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        color: '#000',
    },
    titleRow: {
        paddingTop: 12,
        paddingBottom: 20,
        borderBottom: '1px solid #cdcdcd'
    },
    boldText: {
        fontSize: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        color: '#000'
    },
    row: {
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    allButton: {
        textTransform: 'capitalize',
        color: '#057aff'
    },
    walletColumn: {
        maxWidth: 362,
    },
    grow: {
        flexGrow: 1,
    },
    walletButton: {
        border: '1px dashed #e1e1e1',
        width: 110,
        height: 60,
        textTransform: 'capitalize',

    },
    arrow: {
        marginLeft: 23,
        marginRight: 23,
    },
    amountField: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingTop: 6,
        paddingLeft: 6,
        paddingRight: 10,
        width: 294,
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        '&:hover': {
            border: 'solid 1px #717171'
        },
        '&:focus': {
            border: 'solid 1px #717171'
        },
        '&::placeholder': {
            fontStyle: 'italic',
        },
    },
    label: {
        backgroundColor: '#f8f8f8',
        height: 42,
        marginTop: -2,
        marginLeft: -6,
        width: 80,
        color: '#212121',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        textAlign: 'center',
        paddingTop: 12,
    },
    nextButton: {
        borderRadius: 18,
        height: 36,
        width: 294,
        textTransform: 'capitalize',
        fontSize: 15,
        whiteSpace: 'nowrap',
        backgroundColor: '#4DA9DF',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
        "&:focus": {
            backgroundColor: '#57b9f2',
            color: '#fff',

        },
    },
    chartColumn: {
        paddingTop: 20,
        paddingBottom: 20,
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center'
    },
    paper: {
        width: '80%',
        maxHeight: 435,
    },
});


function ConfirmationDialogRaw(props) {
    const { onClose, open, ...other } = props;
     const radioGroupRef = React.useRef(null);


    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose('ok');
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title">
                <FormattedMessage id='transfer-to-main' defaultMessage='Transfer All to Main Wallet' />
            </DialogTitle>
            <DialogContent dividers>
           <FormattedMessage id='are-u-sure-transfer' defaultMessage='Are you sure?' />
          
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel} color="primary">
                    <FormattedMessage id='cancel-label' defaultMessage='Cancel' />
                </Button>
                <Button onClick={handleOk} color="primary">
                    <FormattedMessage id='ok-label' defaultMessage='OK' />
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};


const walletStyles = makeStyles(() => ({
    root: {
        width: 110,
        height: 60,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f2f4f8',
        position: 'relative'
    },
    name: {
        fontSize: 10,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
    },
    amount: {
        fontSize: 13,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#212121',
        marginBottom: 3
    },
    content: {
        padding: 5
    },
    grow: {
        flexGrow: 1,
    },
    close: {
        padding: 0,
        height: 11,
        width: 11,
        minWidth: 11,
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#f2f4f8',
        "&:hover": {
            backgroundColor: '#f2f4f8',
        },
        "&:focus": {
            backgroundColor: '#f2f4f8',
        },
    },
    pointer: {
        cursor: 'pointer',
    }
}));

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

function LetouWallet(props) {
    const classes = walletStyles();
    const { className, wallet, isMain, onClick, closeClick, ...other } = props;

    return (
        <Paper onClick={onClick}
            className={clsx({
                [classes.root]: true,
                [classes.pointer]: (onClick !== undefined)
            })}
            aria-describedby="client-snackbar"
            {...other}>
            <div className={classes.content}>
                <Typography className={classes.amount}>
                    {wallet.currency}{wallet.value}
                </Typography>
                <Typography className={classes.name}>
                    {wallet.title}
                </Typography>
                {(closeClick !== undefined) &&
                    <Button className={classes.close} onClick={closeClick}>
                        <img src={images.src + 'letou/close-wallet.svg'} alt="" />
                    </Button>}
            </div >
            <div className={classes.grow} />
            <div style={{
                height: 6,
                backgroundColor: wallet.color,
                borderBottomLeftRadius: 3,
                borderBottomRightRadius: 3
            }}>
            </div>
        </Paper >
    );
}

LetouWallet.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    closeClick: PropTypes.func,
    wallet: PropTypes.object
};



const snackStyles = makeStyles(theme => ({
    success: {
        backgroundColor: '#21e496',
    },
    error: {
        backgroundColor: '#fa2054',
    },
    info: {
        backgroundColor: '#53abe0',
    },
    warning: {
        backgroundColor: '#f28f22',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function LetouSnackbarContentWrapper(props) {
    const classes = snackStyles();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

LetouSnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export class TotalAssets extends Component {

    constructor(props) {
        super(props);

        this.state = {
            from: null,
            to: null,
            amount: '',
            amountInvalid: false,
            amountFocused: true,
            currency: '$',
            walletObjs: [
                {
                    title: 'OneWorks',
                    value: 1000,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'EA',
                    value: 1000,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'AG',
                    value: 500,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'OPUS',
                    value: 500,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'GPI',
                    value: 0,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'BBIN',
                    value: 0,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'PT',
                    value: 400,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'KY',
                    value: 0,
                    isMain: false,
                    color: ''
                },
                {
                    title: 'Main Wallet',
                    value: 5000,
                    isMain: true,
                    color: ''
                }
            ],

            showSnackbar: false,
            snackType: 'info',
            snackMessage: '',

            showConfirmationDialog: false
        }

        this.handleWalletClick = this.handleWalletClick.bind(this);
        this.sendAllToMainWallet = this.sendAllToMainWallet.bind(this);
    }
    componentDidMount() {

        var randomColor = require('randomcolor');

        this.setState(prevState => ({
            walletObjs: prevState.walletObjs.map(
                obj => (obj.value !== 0 ? Object.assign(obj, { color: randomColor({ luminosity: 'bright', hue: 'random' }) }) : Object.assign(obj, { color: '#d9d9d9' }))
            )
        }));
    }
    
    sendClicked() {
        var randomColor = require('randomcolor');

        let fromObj = this.state.from;
        fromObj.color = (parseInt(fromObj.value) - parseInt(this.state.amount)) === 0 ? '#d9d9d9' : fromObj.color;
        fromObj.value = parseInt(fromObj.value) - parseInt(this.state.amount);

        let toObj = this.state.to;
        toObj.color = (parseInt(toObj.value) === 0) ? randomColor({ luminosity: 'bright', hue: 'random' }) : toObj.color;
        toObj.value = parseInt(toObj.value) + parseInt(this.state.amount);


        this.setState({ from: null });
        this.setState({ to: null });

        this.setState(prevState => ({
            walletObjs: prevState.walletObjs.map(
                obj => (obj.title === fromObj.title ? Object.assign(obj, fromObj) : obj)
            )
        }));

        this.setState(prevState => ({
            walletObjs: prevState.walletObjs.map(
                obj => (obj.title === toObj.title ? Object.assign(obj, toObj) : obj)
            )
        }));

        this.setState({ amount: '', amountInvalid: false, amountFocused: false });
    }

    sendAllToMainWallet() {
        let amount = 0;

        this.state.walletObjs.forEach(wallet => {
            amount += wallet.value
        });

        this.setState(prevState => ({
            walletObjs: prevState.walletObjs.map(
                obj => (obj.isMain === true ? Object.assign(obj, { value: amount }) : Object.assign(obj, { value: 0, color: '#d9d9d9' }))
            )
        }));
    }

    amountChanged = event => {
        this.setState({ amountFocused: true });

        if (event.target.value.length === 0) {
            this.setState({ amount: '', amountInvalid: true });
        } else {
            if (this.state.from !== null && this.state.from.value < event.target.value) {
                this.setState({ snackType: 'error' });
                this.setState({ snackMessage: this.getLabel('invalid-transfer-value') });
                this.setState({ showSnackbar: true });
                this.setState({ amountInvalid: true });
            } else {
                this.setState({ amount: event.target.value, amountInvalid: false });
            }
        }
    };

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ showSnackbar: false });
    }

    handleWalletClick(id) {
        let wallet = this.state.walletObjs.filter(item => item.title === id)[0];

        if (this.state.from === null) {

            if (wallet.value > 0)
                this.setState({ from: wallet });
            else {
                this.setState({ snackType: 'warning' });
                this.setState({ snackMessage: this.getLabel('empty-wallet-message') });
                this.setState({ showSnackbar: true });
            }
        } else if (this.state.to === null) {
            this.setState({ to: wallet });
        }
    }

    closeConfirmationDialog = newValue => {
        this.setState({ showConfirmationDialog: false });

        if (newValue)
            this.sendAllToMainWallet();
    }

    render() {
        const { classes } = this.props;
        const { from, to, amount, walletObjs, showConfirmationDialog } = this.state;

        let mainWalletObj = walletObjs.filter(item => item.isMain === true)[0];

        let otherWalletObjs = walletObjs.filter(item => item.isMain === false);

        let mainWallet = (
            <LetouWallet wallet={mainWalletObj} onClick={() => { this.handleWalletClick(mainWalletObj.title) }} />
        );

        const fromWallet = (
            (from) ?
                <LetouWallet wallet={from} closeClick={() => { this.setState(() => ({ from: null })) }} />
                :
                <Button className={classes.walletButton}>{this.getLabel('from-label')}</Button>
        );

        const toWallet = (
            (to) ?
                <LetouWallet wallet={to} closeClick={() => { this.setState(() => ({ to: null })) }} />
                :
                <Button className={classes.walletButton}>{this.getLabel('to-label')}</Button>
        );

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleRow}>
                        <span className={classes.title} >
                            {this.getLabel('transfer-label')}
                        </span>
                    </Grid>
                    <Grid item xs={7} className={classes.walletColumn}>
                        <Grid item xs={12} className={classes.row}>
                            <span className={classes.boldText} >
                                {this.getLabel('select-transfer')}
                            </span>
                        </Grid>
                        <Grid item xs={12} style={{ paddingBottom: 20 }}>
                            {mainWallet}
                        </Grid>
                        <Grid item xs={12} style={{ borderTop: '1px solid #979797', paddingTop: 5 }}>
                            <Button href="#text-buttons" className={classes.allButton}
                                onClick={() => {
                                     this.setState({showConfirmationDialog: true});
                                }}>
                                {this.getLabel('transfer-to-main')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: 30 }}>
                            <Grid container spacing={2}>
                                {otherWalletObjs.map(walletObj => (
                                    <Grid item xs={4} key={walletObj.title}>
                                        <LetouWallet wallet={walletObj}
                                            onClick={() => { this.handleWalletClick(walletObj.title) }} />
                                    </Grid>
                                ))}
                                
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} className={classes.chartColumn}>
                        <ReactMinimalPieChart
                            animate={true}
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={walletObjs}
                            label={false}
                            labelPosition={50}
                            lengthAngle={360}
                            lineWidth={15}
                            onClick={undefined}
                            onMouseOut={undefined}
                            onMouseOver={undefined}
                            paddingAngle={0}
                            radius={20}
                            ratio={1}
                            rounded={false}
                            startAngle={0}
                        />
                    </Grid>

                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.state.showSnackbar}
                    autoHideDuration={3000}
                    onClose={this.handleSnackbarClose}
                >
                    <LetouSnackbarContentWrapper
                        onClose={this.handleSnackbarClose}
                        variant={this.state.snackType}
                        message={this.state.snackMessage}
                    />
                </Snackbar>
                <ConfirmationDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id="ringtone-menu"
                    keepMounted
                    open={showConfirmationDialog}
                    onClose={this.closeConfirmationDialog.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(TotalAssets))));

/*import React, { Component } from 'react';


import { connect } from 'react-redux';
import { authCheckState } from '../../../../actions';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
       
    },

});



export class TotalAssets extends Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
               total assets page works!!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { authCheckState })(TotalAssets))));*/