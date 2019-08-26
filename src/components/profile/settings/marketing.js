import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { config } from '../../../util_config';

import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';

import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: 925,
        backgroundColor: '#ffffff',
        border: 'solid 1px #979797',
    },

    titleCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 80
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
        marginTop: 28,
    },
    contentPaper: {

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
    },
    leftCell: {
        display: 'flex',
        alignItems: 'left',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',

    },
    rightCell: {
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #212121',
    },
    button: {
        height: 52,
        borderRadius: 10,
        minWidth: 162,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'inline-block',
        marginBottom: 23,
        color: '#fff',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        '&:focus': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
    },
    updateRow: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 75,
        textAlign: 'right',
        paddingTop: 13,
        paddingRight: 52,
    },
    text: {
        fontSize: 15,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
    },
    subTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
    },
    row: {
        paddingLeft: 85,
        paddingRight: 85,
        paddingTop: 30,
    },
    subRow: {
        paddingLeft: 140,
        paddingRight: 85,
        paddingTop: 10,
    },
    success: {
        backgroundColor: '#72f542',
    },
    error: {
        backgroundColor: '#f54257',
    },
    info: {
        backgroundColor: '#42eff5',
    },
    warning: {
        backgroundColor: '#f5b642',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

const useStyles1 = makeStyles(theme => ({
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const MySnackbarContentWrapper = (props) => {
    const classes = props;
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

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export class Marketing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            communication: false,
            phone: false,
            email: false,
            sms: false,
            postalMail: false,
            socialMedia: false,
            showSuccessMessage: false,

        }

        this.updateClicked = this.updateClicked.bind(this);
        this.communicationClicked = this.communicationClicked.bind(this);
        this.phoneClicked = this.phoneClicked.bind(this);
        this.emailClicked = this.emailClicked.bind(this);
        this.smsClicked = this.smsClicked.bind(this);
        this.postalMailClicked = this.postalMailClicked.bind(this);
        this.socialMediaClicked = this.socialMediaClicked.bind(this);
        this.closeNotificationClicked = this.closeNotificationClicked.bind(this);

    }

    componentWillReceiveProps(props) {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        alert('will')
        axios.get(API_URL + 'users/api/marketing-settings/', config)
            .then(res => {
                this.setState({ communication: res.data })
                this.setState({ phone: res.data })
                this.setState({ email: res.data })
                this.setState({ sms: res.data })
                this.setState({ postalMail: res.data })
                this.setState({ socialMedia: res.data })

            })
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        alert('did')
        axios.get(API_URL + 'users/api/marketing-settings/', config)
            .then(res => {
                this.setState({ communication: res.data })
                this.setState({ phone: res.data })
                this.setState({ email: res.data })
                this.setState({ sms: res.data })
                this.setState({ postalMail: res.data })
                this.setState({ socialMedia: res.data })

            })
    }

    updateClicked(ev) {

        this.setState({ showSuccessMessage: true });

    }

    communicationClicked(ev) {
        this.setState({ communication: !this.state.communication });

        if (this.state.communication) {
            this.setState({ phone: false });
            this.setState({ email: false });
            this.setState({ sms: false });
            this.setState({ postalMail: false });

        }
    }

    phoneClicked(ev) {
        this.setState({ phone: !this.state.phone });
    }

    emailClicked(ev) {
        this.setState({ email: !this.state.email });
    }

    smsClicked(ev) {
        this.setState({ sms: !this.state.sms });
    }

    postalMailClicked(ev) {
        this.setState({ postalMail: !this.state.postalMail });
    }

    socialMediaClicked(ev) {
        this.setState({ socialMedia: !this.state.socialMedia });
    }

    componentDidMount() {

    }


    closeNotificationClicked() {
        this.setState({ showSuccessMessage: false });

    }

    render() {
        const { classes } = this.props;
        const { communication, phone, email, sms, postalMail, socialMedia, showSuccessMessage } = this.state;
        const { formatMessage } = this.props.intl;

        let titleMessage = formatMessage({ id: "settings.marketing_title" });
        let marketingtextMessage = formatMessage({ id: "settings.marketing_text" });
        let communicationMessage = formatMessage({ id: "settings.communication" });
        let communicationTextMessage = formatMessage({ id: "settings.communication_text" });
        let phoneMessage = formatMessage({ id: "settings.phone" });
        let emailMessage = formatMessage({ id: "settings.email" });
        let smsMessage = formatMessage({ id: "settings.sms" });
        let postalMessage = formatMessage({ id: "settings.postal_mail" });
        let socialMediaMessage = formatMessage({ id: "settings.social_media" });
        let socialMediaTextMessage = formatMessage({ id: "settings.social_media_text" });
        let updateMessage = formatMessage({ id: "settings.update" });

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>{titleMessage}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.text}>{marketingtextMessage}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.row}>
                        <FormControlLabel control={<Checkbox color="default" icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={communication} onChange={this.communicationClicked}
                            value="checkedA" />}
                            label={<Typography className={classes.subTitle}>{communicationMessage}</Typography>} />
                    </Grid>
                    <Grid item xs={12} className={classes.subRow}>
                        <span className={classes.text}>{communicationTextMessage}</span>
                    </Grid>
                    <Grid item xs={3} style={{ paddingLeft: 85, marginTop: 30 }}>
                        <FormControlLabel control={<Checkbox disabled={!communication} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={phone} onChange={this.phoneClicked}
                            value="checkedA" />}
                            label={<Typography className={classes.subTitle}>{phoneMessage}</Typography>} />
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: 30 }}>
                        <FormControlLabel control={<Checkbox disabled={!communication} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={email} onChange={this.emailClicked}
                            value="checkedA" />}
                            label={<Typography className={classes.subTitle}>{emailMessage}</Typography>} />
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: 30 }}>
                        <FormControlLabel control={<Checkbox disabled={!communication} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={sms} onChange={this.smsClicked}
                            value="checkedA" />}
                            label={<Typography className={classes.subTitle}>{smsMessage}</Typography>} />
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: 30 }}>
                        <FormControlLabel control={<Checkbox disabled={!communication} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={postalMail} onChange={this.postalMailClicked}
                            value="checkedA" />}
                            label={<Typography className={classes.subTitle}>{postalMessage}</Typography>} />
                    </Grid>
                    <Grid item xs={12} className={classes.row}>
                        <FormControlLabel control={<Checkbox color="default" icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={socialMedia} onChange={this.socialMediaClicked}
                            value="checkedA" />}

                            label={<Typography className={classes.subTitle}>{socialMediaMessage}</Typography>} />
                    </Grid>
                    <Grid item xs={12} className={classes.subRow} style={{ paddingBottom: 30 }}>
                        <span className={classes.text}>{socialMediaTextMessage}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.updateRow}>
                        <Button className={classes.button} onClick={this.updateClicked}>
                            {updateMessage}
                        </Button>
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={showSuccessMessage}
                    onClose={this.closeNotificationClicked}
                    autoHideDuration={3000}
                    TransitionComponent={Fade}>
                    <MySnackbarContentWrapper
                        onClose={this.closeNotificationClicked}
                        variant="success"
                        message="This is a success message!"
                        classes={classes}
                        className={classes.margin}
                    />
                </Snackbar>
            </div>
        );
    }
}

Marketing.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(Marketing)));