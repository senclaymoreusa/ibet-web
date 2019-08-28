import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { hide_user_profile, show_update_profile, authCheckState } from '../../../actions';
import { connect } from 'react-redux';
import { config } from '../../../util_config';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { fade } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
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
        margin: theme.spacing.unit,
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
        width: 'auto',
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
            user_data: '',
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            zipCode: '',
            city: '',
            state: '',
            country: '',
            registrationDate: ''
        }

        this.cancelClicked = this.cancelClicked.bind(this);
        this.updateClicked = this.updateClicked.bind(this);

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

    cancelClicked() {
        this.props.callbackFromParent('user_information');
    }

    updateClicked() {
        this.props.callbackFromParent('user_information');
    }

    render() {

        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        const { username, firstName, lastName, email, phone, address1, address2, zipCode, city, state, country, registrationDate } = this.state;

        let titleMessage = formatMessage({ id: "user_information.user_information" });
        let saveButtonMessage = formatMessage({ id: "user_information.save_changes" });
        let cancelButtonMessage = formatMessage({ id: "user_information.cancel" });

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>{titleMessage}</span>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 30 }} className={classes.leftRow}>
                        <span className={classes.username}>{firstName}</span>
                        <span className={classes.username}>{lastName}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.leftRow}>
                        <span className={classes.text}>ID:</span>
                        <span className={classes.text}>{username}</span>
                    </Grid>
                    <Grid item xs={6} className={classes.leftRow}>
                        <Grid container>
                            <Grid item xs={12}>
                                <FormControl className={classes.margin}>
                                    <InputLabel shrink htmlFor="bootstrap-username">
                                        Username
                                    </InputLabel>
                                    <BootstrapInput id="bootstrap-username" value={username} />
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
                                    <BootstrapInput id="bootstrap-phone" value={phone} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.text}
                                    label="Member Since"
                                    margin="normal"
                                    fullWidth
                                    value={registrationDate}
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
                                    <BootstrapInput id="bootstrap-password" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.margin}>
                                    <BootstrapInput id="bootstrap-new-password" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.margin}>
                                    <BootstrapInput id="bootstrap-confirm-new-password" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.margin}>
                                <InputLabel shrink htmlFor="bootstrap-address1">
                                        Address
                                    </InputLabel> 
                                    <BootstrapInput id="bootstrap-address1" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.margin}>
                                    <BootstrapInput id="bootstrap-address2" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl className={classes.margin}>
                                    <BootstrapInput id="bootstrap-city" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl className={classes.margin}>
                                    <BootstrapInput id="bootstrap-zipcode" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl className={classes.margin}>
                                    <BootstrapInput id="bootstrap-country" />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.updateRow}>
                        <Button className={classes.cancelButton} onClick={this.cancelClicked} >
                            {cancelButtonMessage}
                        </Button><Button className={classes.button}  >
                            {saveButtonMessage}
                        </Button>
                    </Grid>
                </Grid>


                {/* <div style={{ textAlign: 'center', marginTop: 5 }}>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        disabled={true}
                        value={this.state.user_data.username}
                    />
                </div>



                <div style={{ marginLeft: 30, marginTop: 10 }}>
                    <FormattedMessage id="signup.detail.dob" defaultMessage='DATE OF BIRTH' />
                </div>

                <div className='row'>

                    <div style={{ borderBottom: '1px solid black', width: 80, height: 30, textAlign: 'center', marginTop: 10, marginLeft: 30 }}>
                        {this.state.user_data ? this.state.user_data.date_of_birth.split('/')[0] : ''}
                    </div>

                    <div style={{ borderBottom: '1px solid black', width: 80, height: 30, textAlign: 'center', marginTop: 10, marginLeft: 10 }}>
                        {this.state.user_data ? this.state.user_data.date_of_birth.split('/')[1] : ''}
                    </div>

                    <div style={{ borderBottom: '1px solid black', width: 80, height: 30, textAlign: 'center', marginTop: 10, marginLeft: 10 }}>
                        {this.state.user_data ? this.state.user_data.date_of_birth.split('/')[2] : ''}
                    </div>

                </div>

                <div style={{ color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30 }}>
                    <FormattedMessage id="signup.contact.title" defaultMessage='Contact details' />
                </div>

                <div style={{ textAlign: 'center', color: '#e4e4e4' }}>
                    _________________________________________
                </div>

                <div style={{ marginLeft: 30, marginTop: 5 }}>
                    <FormattedMessage id="signup.detail.address" defaultMessage='Address' />
                </div>

                <div style={{ textAlign: 'center', marginTop: 5 }}>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.street_address_1}
                        disabled={true}
                    />
                </div>

                <div className='row' style={{ marginLeft: 25, marginTop: 5 }}>

                    <div>
                        <div>
                            <FormattedMessage id="profile.city" defaultMessage='City' />
                        </div>

                        <TextField
                            className={classes.textField3}
                            variant="outlined"
                            type='text'
                            value={this.state.user_data.city}
                            disabled={true}
                            style={{ marginTop: 5 }}
                        />

                    </div>

                    <div style={{ marginLeft: 30 }}>
                        <div>
                            <FormattedMessage id="profile.zipcode" defaultMessage='Zipcode' />
                        </div>

                        <TextField
                            className={classes.textField3}
                            variant="outlined"
                            type='text'
                            value={this.state.user_data.zipcode}
                            disabled={true}
                            style={{ marginTop: 5 }}
                        />
                    </div>
                </div>

                <div style={{ marginLeft: 30, marginTop: 5 }}>
                    <FormattedMessage id="profile.country" defaultMessage='Country' />
                </div>

                <div style={{ textAlign: 'center', marginTop: 5 }}>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.country}
                        disabled={true}
                    />
                </div>

                <div style={{ color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30 }}>
                    <FormattedMessage id="new_profile.mobile" defaultMessage='Mobile Details' />
                </div>

                <div style={{ textAlign: 'center', color: '#e4e4e4' }}>
                    _________________________________________
                </div>

                <div style={{ textAlign: 'center', marginTop: 10 }}>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.phone}
                        disabled={true}
                    />
                </div>

                <div style={{ color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 30 }}>
                    <FormattedMessage id="new_profile.email" defaultMessage='Email Details' />
                </div>

                <div style={{ textAlign: 'center', color: '#e4e4e4' }}>
                    _________________________________________
                </div>

                <div style={{ textAlign: 'center', marginTop: 10 }}>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type='text'
                        value={this.state.user_data.email}
                        disabled={true}
                    />
                </div>

                <Link to="/update_profile/" >
                    <button style={{ border: 'none', height: 30, width: 70, backgroundColor: 'black', color: 'white', cursor: 'pointer', borderRadius: 100 }}>
                        <FormattedMessage id="new_profile.edit" defaultMessage='Edit' />
                    </button>
                </Link> */}
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(injectIntl(connect(null, { hide_user_profile, show_update_profile, authCheckState })(UserInformationEdit))));