import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { hide_user_profile, show_update_profile, authCheckState } from '../../../actions';
import { connect } from 'react-redux';
import { config } from '../../../util_config';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { getNames } from 'country-list';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

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
    cancelButton: {
        height: 52,
        borderRadius: 10,
        minWidth: 162,
        display: 'inline-block',
        marginBottom: 23,
        marginRight: 20,
        border: 'solid 0.8px #979797',
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
    readonlyText: {
        fontSize: 20,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.2,
        letterSpacing: 0.55,
        marginTop: -4,
        color: '#000',
    },
    label: {
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 2,
        letterSpacing: 0.35,
        color: '#000',
    },
    margin: {
        width: '100%',
    },
    bootstrapInput: {
        height: 30,
    },
    supportRow: {
        paddingTop: 20,
        paddingBottom: 30,
        paddingLeft: 128,
    },
    supportText: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.17,
        letterSpacing: 0.3,
        color: '#000',
    },
    mandatoryText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
        width: '100%',
        borderRadius: 4,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    optionalText: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#292929',
        height: 44,
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        borderRadius: 4,
        marginBottom: 8,
        border: 'solid 1px #e4e4e4',
        "&:hover": {
            border: 'solid 1px #717171',
        },
        "&:focus": {
            border: 'solid 1px #717171',
        },
    },
    showIcon:{
        fontSize: 20
    },
});

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        marginTop: 10,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
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
    }
}))(InputBase);

class UserInformationEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchedUserData: '',
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

            password: '',
            newPassword: '',
            confirmPassword: '',
            countries: [],

            showLinearProgressBar: false,

            passwordInvalid: false,
            newPasswordInvalid: false,
            confirmPasswordInvalid: false,

            passwordSame: false,
            passwordTooSimple: false,

            showPassword: false,
            showNewPassword: false,
            showConfirmPassword: false,

            usernameFocused: false,
            usernameInvalid: false,
            usernameAlreadyExists: false,
        }

        this.cancelClicked = this.cancelClicked.bind(this);
        this.updateClicked = this.updateClicked.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.phoneChanged = this.phoneChanged.bind(this);
        this.address1Changed = this.address1Changed.bind(this);
        this.address2Changed = this.address2Changed.bind(this);
        this.cityChanged = this.cityChanged.bind(this);
        this.zipCodeChanged = this.zipCodeChanged.bind(this);
        this.stateChanged = this.stateChanged.bind(this);
        this.countryChanged = this.countryChanged.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.usernameFocused = this.usernameFocused.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.newPasswordChanged = this.newPasswordChanged.bind(this);
        this.confirmPasswordChanged = this.confirmPasswordChanged.bind(this);

        this.showPasswordClicked = this.showPasswordClicked.bind(this);
        this.showNewPasswordClicked = this.showNewPasswordClicked.bind(this);
        this.showConfirmPasswordClicked = this.showConfirmPasswordClicked.bind(this);
    }

    componentDidMount() {
        this.setState({ countries: getNames() })

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
                this.setState({ fetchedUserData: res.data })
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

    showPasswordClicked = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    showNewPasswordClicked = () => {
        this.setState(state => ({ showNewPassword: !state.showNewPassword }));
    };

    showConfirmPasswordClicked = () => {
        this.setState(state => ({ showConfirmPassword: !state.showConfirmPassword }));
    };

    cancelClicked() {
        this.props.callbackFromParent('user_information');
    }

    updateClicked() {
        this.props.callbackFromParent('user_information');
    }

    usernameChanged(event) {
        this.setState({ username: event.target.value });

        this.setState({ usernameInvalid: (event.target.value.length === 0) });
    }

    usernameFocused(event) {
        this.setState({ usernameFocused: true });
    }

    phoneChanged(value) {
        this.setState({ phone: value });
    }
    countryChanged(event) {
        this.setState({ country: event.target.value });
    }

    address1Changed(event) {
        this.setState({ address1: event.target.value });
    }

    address2Changed(event) {
        this.setState({ address2: event.target.value });
    }

    zipCodeChanged(event) {
        this.setState({ zipCode: event.target.value });
    }

    cityChanged(event) {
        this.setState({ city: event.target.value });
    }

    stateChanged(event) {
        this.setState({ state: event.target.value });
    }

    async passwordChanged(event) {
        await this.setState({ password: event.target.value, passwordInvalid: false, passwordSame: false });
    }

    async newPasswordChanged(event) {
        if (this.state.confirmPassword && event.target.value !== this.state.confirmPassword) {
            this.setState({ newPasswordInvalid: true })
        } else {
            this.setState({ newPasswordInvalid: false })
        }

        this.setState({ passwordTooSimple: (event.target.value.length < 8) })

        await this.setState({ newPassword: event.target.value, passwordSame: false });
    }

    async confirmPasswordChanged(event) {
        if (event.target.value !== this.state.newPassword) {
            this.setState({ confirmPasswordInvalid: true })
        } else {
            this.setState({ confirmPasswordInvalid: false })
        }
        await this.setState({ confirmPassword: event.target.value, passwordSame: false });
    }

    onFormSubmit(event) {
        event.preventDefault();
        let currentComponent = this;

        currentComponent.setState({ showLinearProgressBar: true });

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        const body = JSON.stringify({
            username: this.state.username,
            phone: this.state.phone,
            street_address_1: this.state.address1,
            street_address_2: this.state.address2,
            country: this.state.country,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipCode,

            date_of_birth: this.state.fetchedUserData.date_of_birth,
            email: this.state.fetchedUserData.email,
            first_name: this.state.fetchedUserData.first_name,
            last_name: this.state.fetchedUserData.last_name,
        });

        axios.put(API_URL + 'users/api/user/', body, config)
            .then(() => {
                currentComponent.setState({ showLinearProgressBar: false });

                this.props.callbackFromParent('user_information');
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    render() {

        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { password, newPassword, confirmPassword, countries, username, userId, firstName, lastName, email, phone, address1, address2, zipCode, city, state, country, registrationDate } = this.state;
        const { showLinearProgressBar } = this.state;

        let titleMessage = formatMessage({ id: "user_information.user_information" });
        let saveButtonMessage = formatMessage({ id: "user_information.save_changes" });
        let cancelButtonMessage = formatMessage({ id: "user_information.cancel" });
        let supportMessage = formatMessage({ id: "user_information.support" });


        let usernameErrorMessage = 'User name cannot be empty.';

        if (this.state.usernameAlreadyExists)
            usernameErrorMessage = 'This user name is taken. Please, try another one.';

        return (
            <div className={classes.root}>
                <form onSubmit={this.onFormSubmit}  >
                    <Grid container>
                        <Grid item xs={12} className={classes.titleCell}>
                            <span className={classes.title}>{titleMessage}</span>
                        </Grid>
                        <Grid item xs={12}>
                            {showLinearProgressBar === true && <LinearProgress />}
                        </Grid>
                        <Grid item xs={12} style={(showLinearProgressBar === true) ? { pointerEvents: 'none' } : { pointerEvents: 'all' }} >
                            <Grid container>
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
                                        <Grid item xs={12}>
                                            <span className={classes.label}>User name</span>
                                            <TextField
                                                className={classes.mandatoryText}
                                                value={username}
                                                placeholder="Username"
                                                onChange={this.usernameChanged}
                                                onFocus={this.usernameFocused}
                                                error={this.state.usernameInvalid && this.state.usernameFocused}
                                                helperText={(this.state.usernameInvalid && this.state.usernameFocused) ? usernameErrorMessage : ''}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <span className={classes.label}>Email</span>
                                            <TextField
                                                className={classes.readonlyText}
                                                margin="normal"
                                                fullWidth
                                                value={email}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    readOnly: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{ paddingBottom: 20 }}>
                                            <span className={classes.label}>Phone</span>
                                            <ReactPhoneInput defaultCountry={'us'} className={classes.mandatoryText}
                                                value={phone} onChange={this.phoneChanged} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <span className={classes.label}>Member Since</span>
                                            <TextField
                                                className={classes.readonlyText}
                                                margin="normal"
                                                fullWidth
                                                value={new Date(registrationDate).toLocaleDateString()}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    readOnly: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} className={classes.rightRow}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <span className={classes.label}>Password</span>
                                            <TextField
                                                className={classes.mandatoryText}
                                                value={password}
                                                placeholder="Current password"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                onChange={this.passwordChanged}
                                                error={this.state.passwordInvalid && this.state.passwordFocused}
                                                helperText={(this.state.passwordInvalid && this.state.passwordFocused) ? 'Incorrect password. Please, try again.' : ''}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton 
                                                            aria-label="Toggle password visibility"
                                                            onClick={this.showPasswordClicked}
                                                            >
                                                            {this.state.showPassword ? <VisibilityOff className={classes.showIcon}/> : <Visibility className={classes.showIcon}/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                        ),
                                                }} />
                                            <TextField
                                                className={classes.mandatoryText}
                                                value={newPassword}
                                                placeholder="New password"
                                                type={this.state.showNewPassword ? 'text' : 'password'}
                                                onChange={this.newPasswordChanged}
                                                onFocus={this.newPasswordFocused}
                                                error={this.state.newPasswordInvalid && this.state.newPasswordFocused}
                                                helperText={(this.state.showNewPasswordInvalid && this.state.newPasswordFocused) ? 'Incorrect password. Please, try again.' : ''}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton 
                                                            aria-label="Toggle password visibility"
                                                            onClick={this.showNewPasswordClicked}
                                                            >
                                                            {this.state.showNewPassword ? <VisibilityOff className={classes.showIcon}/> : <Visibility className={classes.showIcon}/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                        ),
                                                }} />
                                            <TextField
                                                className={classes.mandatoryText}
                                                value={confirmPassword}
                                                placeholder="Confirm password"
                                                type={this.state.showConfirmPassword ? 'text' : 'password'}
                                                onChange={this.confirmPasswordChanged}
                                                onFocus={this.confirmPasswordFocused}
                                                error={this.state.confirmPasswordInvalid && this.state.confirmPasswordFocused}
                                                helperText={(this.state.confirmPasswordInvalid && this.state.confirmPasswordFocused) ? 'Your password does not match' : ''}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton 
                                                            aria-label="Toggle password visibility"
                                                            onClick={this.showConfirmPasswordClicked}
                                                            >
                                                            {this.state.showConfirmPassword ? <VisibilityOff className={classes.showIcon}/> : <Visibility className={classes.showIcon}/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                        ),
                                                }} />
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: 20 }}>
                                            <span className={classes.label}>Address</span>
                                            <TextField
                                                className={classes.optionalText}
                                                value={address1}
                                                placeholder="Address 1"
                                                onChange={this.address1Changed}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={classes.optionalText}
                                                value={address2}
                                                placeholder="Address 2"
                                                onChange={this.address2Changed}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }} />
                                        </Grid>
                                        <Grid item xs={6} style={{ paddingRight: 4 }}>
                                            <TextField
                                                className={classes.optionalText}
                                                value={city}
                                                placeholder="City"
                                                onChange={this.cityChanged}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }} />
                                        </Grid>
                                        <Grid item xs={3} style={{ paddingLeft: 4, paddingRight: 4 }}>
                                            <TextField
                                                className={classes.optionalText}
                                                value={zipCode}
                                                placeholder="Zipcode"
                                                onChange={this.zipCodeChanged}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }} />
                                        </Grid>
                                        <Grid item xs={3} style={{ paddingLeft: 4 }}>
                                            <TextField
                                                className={classes.optionalText}
                                                value={state}
                                                placeholder="State"
                                                onChange={this.stateChanged}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl className={classes.margin}>
                                                <Select
                                                    className={classes.textField}
                                                    value={country}
                                                    onChange={this.countryChanged}
                                                    input={<BootstrapInput name="country" id="country-customized-select" value={country} />}
                                                >
                                                    {countries.map(name => (
                                                        <MenuItem key={name} value={name} >
                                                            {name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.supportRow}>
                                    <span className={classes.supportText}>{supportMessage}</span>
                                </Grid>
                                <Grid item xs={12} className={classes.updateRow}>
                                    <Button className={classes.cancelButton} onClick={this.cancelClicked} >
                                        {cancelButtonMessage}
                                    </Button>
                                    <Button className={classes.button} type="submit" >
                                        {saveButtonMessage}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(null, { hide_user_profile, show_update_profile, authCheckState })(UserInformationEdit))));