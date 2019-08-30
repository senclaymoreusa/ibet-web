import React, { Component } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { hide_user_profile, show_update_profile, authCheckState } from '../../../actions';
import { connect } from 'react-redux';
import { config } from '../../../util_config';
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

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
    username: {
        fontSize: 20,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 2,
        letterSpacing: 0.7,
        color: '#000',
    },
    updateRow: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 75,
        textAlign: 'right',
        paddingTop: 13,
        paddingRight: 52,
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
    nameRow: {
        paddingTop: 30,
        paddingLeft: 128,
        paddingRight: 30,
    },
    idRow: {
        paddingLeft: 128,
        paddingRight: 30,
        paddingBottom: 20,
    },
    leftRow: {
        paddingLeft: 128,
        paddingRight: 30,
    },
    rightRow: {
        paddingLeft: 0,
        paddingRight: 128,
    },
    label: {
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 2,
        letterSpacing: 0.7,
        color: '#000',
    },
    text: {
        marginTop: 0,
    },
    notification: {
        backgroundColor: '#3ce86a',
    },
    message: {
        marginLeft: 10,
        float: 'left',
        lineHeight: 1.9
    },
    checkIcon: {
        float: 'left',
    }
});

class UserInformation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userId: '',
            username: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            zipCode: '',
            city: '',
            state: '',
            country: '',
            registrationDate: '',
        }

        this.updateClicked = this.updateClicked.bind(this);
        this.closeNotificationClicked = this.closeNotificationClicked.bind(this);

    }

    closeNotificationClicked() {
        this.setState({ showMessage: false });
    }

    componentDidMount() {

        this.props.authCheckState()
            .then(res => {
                if (res === 1) {
                    this.props.history.push('/');
                    window.location.reload()
                }
            })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ userId: res.data.pk });
                this.setState({ username: res.data.username });
                this.setState({ firstName: res.data.first_name });
                this.setState({ lastName: res.data.last_name });
                this.setState({ email: res.data.email });
                this.setState({ phone: res.data.phone });
                this.setState({ address1: res.data.street_address_1 });
                this.setState({ address2: res.data.street_address_2 });
                this.setState({ zipCode: res.data.zipcode });
                this.setState({ city: res.data.city });
                this.setState({ state: res.data.state });
                this.setState({ country: res.data.country });
                this.setState({ registrationDate: res.data.time_of_registration });
            })
    }

    onInputChange_country(event) {
        this.setState({ country: event.target.value });
    }

    updateClicked() {
        this.props.callbackFromParent('user_information_edit');
    }

    render() {

        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { userId, username, firstName, lastName, email, phone, address1, address2, zipCode, city, state, country, registrationDate } = this.state;

        let titleMessage = formatMessage({ id: "user_information.user_information" });
        let editButtonMessage = formatMessage({ id: "user_information.edit_information" });

        const { message } = this.props;


        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>{titleMessage}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.nameRow}>
                        <span className={classes.username}>{firstName}</span>
                        <span className={classes.username}>{lastName}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.idRow}>
                        <span className={classes.text}>ID: </span>
                        <span className={classes.text}>{userId}</span>
                    </Grid>
                    <Grid item xs={6} className={classes.leftRow}>
                        <Grid container>
                            <Grid item xs={12} >
                                <TextField
                                    className={classes.text}
                                    label="Username"
                                    margin="normal"
                                    fullWidth
                                    value={username}
                                    InputProps={{
                                        disableUnderline: true,
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.text}
                                    label="Email"
                                    margin="normal"
                                    fullWidth
                                    value={email}
                                    InputProps={{
                                        disableUnderline: true,
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    className={classes.text}
                                    label="Phone"
                                    margin="normal"
                                    fullWidth
                                    value={phone}
                                    InputProps={{
                                        disableUnderline: true,
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    className={classes.text}
                                    label="Member Since"
                                    margin="normal"
                                    fullWidth
                                    value={new Date(registrationDate).toLocaleDateString()}
                                    InputProps={{
                                        disableUnderline: true,
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6} className={classes.rightRow}>
                        <Grid container>
                            <Grid item xs={12} >
                                <TextField
                                    className={classes.text}
                                    label="Password"
                                    margin="normal"
                                    fullWidth
                                    value="********"
                                    InputProps={{
                                        disableUnderline: true,
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    className={classes.text}
                                    label="Address"
                                    margin="normal"
                                    multiline
                                    fullWidth
                                    value={address1 + ' ' +
                                        address2 + ' \n' +
                                        city + ' ' +
                                        zipCode + ' ' +
                                        state + ' ' +
                                        country}
                                    InputProps={{
                                        disableUnderline: true,
                                        readOnly: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{height: 30}}></Grid>
                    <Grid item xs={12} className={classes.updateRow}>
                        <Button className={classes.button} onClick={this.updateClicked}>
                            {editButtonMessage}
                        </Button>
                    </Grid>
                </Grid>
                <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={this.props.message !== undefined && this.props.message.length > 0}
                        onClose={this.closeNotificationClicked}
                        autoHideDuration={3000}
                        TransitionComponent={Fade}
                    >
                        <SnackbarContent
                            className={classes.notification}
                            aria-describedby="client-snackbar"
                            message={
                                <div>
                                    <CheckCircleIcon className={classes.checkIcon} />
                                    <span id="client-snackbar" className={classes.message}>
                                        {this.props.message}
                                    </span>
                                </div>
                            }
                            action={[
                                <IconButton
                                    key="close"
                                    aria-label="close"
                                    color="inherit"
                                    className={classes.close}
                                    onClick={this.closeNotificationClicked}
                                >
                                    <CloseIcon />
                                </IconButton>,
                            ]}
                        /></Snackbar>
            </div >
        )
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(null, { hide_user_profile, show_update_profile, authCheckState })(UserInformation))));