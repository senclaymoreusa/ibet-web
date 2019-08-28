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
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
        paddingBottom: 20,
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
    }
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
            countries: [],

            usernameFocused: false,
            usernameInvalid: true,
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

    cancelClicked() {
        this.props.callbackFromParent('user_information');
    }

    updateClicked() {
        this.props.callbackFromParent('user_information');
    }

    usernameChanged(event) {
        this.setState({ username: event.target.value });

        if (event.target.value.length === 0)
            this.setState({ usernameAlreadyExists: true });
    }

    usernameFocused(event) {
        this.setState({ usernameFocused: true });
    }

    phoneChanged(event) {
        this.setState({ phone: event.target.value });
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

    onFormSubmit(event) {
        event.preventDefault();

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        const body = JSON.stringify({
            username: this.state.username ? this.state.username : this.state.fetchedUserData.username,
            phone: this.state.phone ? this.state.phone : this.state.fetchedUserData.phone,
            street_address_1: this.state.street_address_1,
            street_address_2: this.state.street_address_2,
            country: this.state.country ? this.state.country : this.state.fetchedUserData.country,
            city: this.state.city ? this.state.city : this.state.fetchedUserData.city,
            state: this.state.state ? this.state.state : this.state.fetchedUserData.state,
            zipcode: this.state.zipcode ? this.state.zipCode : this.state.fetchedUserData.zipcode,

            date_of_birth: this.state.fetchedUserData.date_of_birth,
            email: this.state.fetchedUserData.email,
            first_name: this.state.fetchedUserData.first_name,
            last_name: this.state.fetchedUserData.last_name,
        });

        axios.put(API_URL + 'users/api/user/', body, config)
            .then(() => {
                this.props.callbackFromParent('user_information');
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    render() {

        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { countries, username, userId, firstName, lastName, email, phone, address1, address2, zipCode, city, state, country, registrationDate } = this.state;

        let titleMessage = formatMessage({ id: "user_information.user_information" });
        let saveButtonMessage = formatMessage({ id: "user_information.save_changes" });
        let cancelButtonMessage = formatMessage({ id: "user_information.cancel" });
        let supportMessage = formatMessage({ id: "user_information.support" });


        let usernameErrorMessage = 'Username cannot be empty.';

        if (this.state.usernameAlreadyExists)
            usernameErrorMessage = 'This username is taken. Please, try another one.';

        return (
            <div className={classes.root}>
                <form onSubmit={this.onFormSubmit}  >
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
                                <Grid item xs={12}>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-username">
                                            Username
                                    </InputLabel>
                                        <BootstrapInput id="bootstrap-username"
                                            value={username} placeholder="Username"
                                            onChange={this.usernameChanged}
                                            onFocus={this.usernameFocused}
                                            error={this.state.usernameInvalid && this.state.usernameFocused}
                                            // helperText={(this.state.usernameInvalid && this.state.usernameFocused) ? usernameErrorMessage : ''}
                                        />
                                    </FormControl>
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
                                <Grid item xs={12}>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-phone">
                                            Phone
                                    </InputLabel>
                                        <BootstrapInput id="bootstrap-phone" value={phone} placeholder="Phone" onChange={this.phoneChanged} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
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
                                <Grid item xs={12}>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-password">
                                            Current Password
                                    </InputLabel>
                                        <BootstrapInput id="bootstrap-password" placeholder="Current password" type="password"/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl className={classes.margin}>
                                        <BootstrapInput id="bootstrap-new-password" placeholder="New password" type="password"/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl className={classes.margin}>
                                        <BootstrapInput id="bootstrap-confirm-new-password" placeholder="Confirm password" type="password"/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: 20 }}>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-address1">
                                            Address
                                    </InputLabel>
                                        <BootstrapInput id="bootstrap-address1" placeholder="Street Address 1" value={address1} onChange={this.address1Changed} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl className={classes.margin}>
                                        <BootstrapInput id="bootstrap-address2" placeholder="Street Address 2" value={address2} onChange={this.address2Changed} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} style={{ paddingRight: 4 }}>
                                    <FormControl className={classes.margin}>
                                        <BootstrapInput id="bootstrap-city" placeholder="City" value={city} onChange={this.cityChanged} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3} style={{ paddingLeft: 4, paddingRight: 4 }}>
                                    <FormControl className={classes.margin}>
                                        <BootstrapInput id="bootstrap-zipcode" placeholder="Zip code" value={zipCode} onChange={this.zipCodeChanged} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3} style={{ paddingLeft: 4 }}>
                                    <FormControl className={classes.margin}>
                                        <BootstrapInput id="bootstrap-state" placeholder="State" value={state} onChange={this.stateChanged} />
                                    </FormControl>
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
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(null, { hide_user_profile, show_update_profile, authCheckState })(UserInformationEdit))));