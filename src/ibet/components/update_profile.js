import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { config } from '../../util_config';
import { sendingLog } from '../../actions';
import { FormattedMessage } from 'react-intl';
import Calendar from 'react-calendar';
import TopNavbar from "./top_navbar";
import '../css/profile.css';


// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import classNames from 'classnames';

import { getNames } from 'country-list';



//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    margin: {
        margin: 'auto',
    },

    textField: {
        flexBasis: 200,
        width: 300,
        backgroundColor: '#ffffff;'
    },

    cssRoot: {
        color: theme.palette.getContrastText(blue[300]),
        backgroundColor: blue[300],
        '&:hover': {
            backgroundColor: blue[800],
        },
    },
});


const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
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
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

class Update extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
            date_of_birth: '',
            street_address_1: '',
            street_address_2: '',
            country: '',
            city: '',
            zipcode: '',
            state: '',

            all_country_name: [],

            fetched_data: {},
            errorCode: '',

            button_disable: false,
            show_date: false,

            live_check_firstname: false,
            live_check_lastname: false,
            live_check_dob: false,
            live_check_country: false,
            live_check_city: false,
            live_check_state: false,
            live_check_zipcode: false,
        }

        this.onInputChange_first_name = this.onInputChange_first_name.bind(this);
        this.onInputChange_last_name = this.onInputChange_last_name.bind(this);
        this.onInputChange_date_of_birth = this.onInputChange_date_of_birth.bind(this);
        this.onInputChange_street_address_1 = this.onInputChange_street_address_1.bind(this);
        this.onInputChange_street_address_2 = this.onInputChange_street_address_2.bind(this);
        this.onInputChange_country = this.onInputChange_country.bind(this);
        this.onInputChange_city = this.onInputChange_city.bind(this);
        this.onInputChange_zipcode = this.onInputChange_zipcode.bind(this);
        this.onInputChange_state = this.onInputChange_state.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        await axios.get(API_URL + 'users/api/user/', config)
            .then(res => {
                this.setState({ fetched_data: res.data })
            })

        this.setState({
            username: this.state.fetched_data.username,
            email: this.state.fetched_data.email,
            first_name: this.state.fetched_data.first_name,
            last_name: this.state.fetched_data.last_name,
            phone: this.state.fetched_data.phone,
            date_of_birth: this.state.fetched_data.date_of_birth,
            street_address_1: this.state.fetched_data.street_address_1,
            street_address_2: this.state.fetched_data.street_address_2,
            country: this.state.fetched_data.country,
            city: this.state.fetched_data.city,
            zipcode: this.state.fetched_data.zipcode,
            state: this.state.fetched_data.state
        })

        this.setState({ all_country_name: getNames() })
    }

    async onInputChange_first_name(event) {
        if (!event.target.value.match(/^[a-zA-Z]+$/)) {
            this.setState({ live_check_firstname: true, button_disable: true })
        } else {
            this.setState({ live_check_firstname: false })

        }
        await this.setState({ first_name: event.target.value });
        this.check_button_disable()
    }

    async onInputChange_last_name(event) {
        if (!event.target.value.match(/^[a-zA-Z]+$/)) {
            this.setState({ live_check_lastname: true, button_disable: true })
        } else {
            this.setState({ live_check_lastname: false })

        }
        await this.setState({ last_name: event.target.value });
        this.check_button_disable()
    }

    async onInputChange_date_of_birth(date) {
        var res = date.toString().split(" ");
        var month = res[1];
        var day = res[2];
        var year = res[3];

        var today = new Date();
        var cur_year = today.getFullYear();
        var cur_month = today.getMonth() + 1;
        var cur_day = today.getDate();

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        var months_to = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        month = months_to[months.indexOf(month)]
        if (parseInt(year) > cur_year || (parseInt(year) === cur_year && parseInt(month) > cur_month) || (parseInt(year) === cur_year && parseInt(month) === cur_month && parseInt(day) > cur_day)) {
            var result = month + '/' + day + '/' + year;
            await this.setState({ date_of_birth: result });
            this.setState({ live_check_dob: true, button_disable: true });
        } else {
            var result = month + '/' + day + '/' + year;
            await this.setState({ date_of_birth: result });
            this.setState({ live_check_dob: false });
            this.check_button_disable();
        }
    }

    onInputChange_street_address_1(event) {
        this.setState({ street_address_1: event.target.value });
    }

    onInputChange_street_address_2(event) {
        this.setState({ street_address_2: event.target.value });
    }

    onInputChange_country(event) {
        this.setState({ country: event.target.value });
    }

    async onInputChange_city(event) {
        if (!event.target.value.match(/^[a-zA-Z\s]+$/)) {
            this.setState({ live_check_city: true, button_disable: true });
        } else {
            this.setState({ live_check_city: false })

        }
        await this.setState({ city: event.target.value });
        this.check_button_disable()
    }

    async onInputChange_zipcode(event) {
        if (!event.target.value.match(/^[0-9]+$/)) {
            this.setState({ live_check_zipcode: true, button_disable: true });
        } else {
            this.setState({ live_check_zipcode: false })

        }
        await this.setState({ zipcode: event.target.value });
        this.check_button_disable()
    }

    async onInputChange_state(event) {
        if (!event.target.value.match(/^[a-zA-Z]+$/)) {
            this.setState({ live_check_state: true, button_disable: true });
        } else {
            this.setState({ live_check_state: false })
        }
        await this.setState({ state: event.target.value });
        this.check_button_disable()
    }

    check_button_disable() {
        if (
            !this.state.live_check_firstname && this.state.first_name &&
            !this.state.live_check_lastname && this.state.last_name &&
            !this.state.live_check_dob && this.state.date_of_birth &&
            !this.state.live_check_city && this.state.city &&
            !this.state.live_check_state && this.state.state &&
            !this.state.live_check_zipcode && this.state.zipcode) {
            this.setState({ button_disable: false })
        }
    }

    onFormSubmit(event) {
        event.preventDefault();

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;

        const body = JSON.stringify({
            username: this.state.username ? this.state.username : this.state.fetched_data.username,
            email: this.state.email ? this.state.email : this.state.fetched_data.email,
            first_name: this.state.first_name ? this.state.first_name : this.state.fetched_data.first_name,
            last_name: this.state.last_name ? this.state.last_name : this.state.fetched_data.last_name,
            phone: this.state.phone ? this.state.phone : this.state.fetched_data.phone,
            date_of_birth: this.state.date_of_birth ? this.state.date_of_birth : this.state.fetched_data.date_of_birth,
            street_address_1: this.state.street_address_1,
            street_address_2: this.state.street_address_2,
            country: this.state.country ? this.state.country : this.state.fetched_data.country,
            city: this.state.city ? this.state.city : this.state.fetched_data.city,
            state: this.state.state ? this.state.state : this.state.fetched_data.state,
            zipcode: this.state.zipcode ? this.state.zipcode : this.state.fetched_data.zipcode
        });

        axios.put(API_URL + 'users/api/user/', body, config)
            .then(() => {
                this.props.history.push("/profile");
            })
            .catch((err) => {
                console.log(err.response);
                sendingLog(err);
                // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
            })
    }

    render() {

        const { classes } = this.props;

        const showErrors = () => {
            if (this.state.username_error) {
                return (
                    <div style={{ color: 'red' }}> {this.state.username_error} </div>
                )
            } else if (this.state.email_error) {
                return (
                    <div style={{ color: 'red' }}> {this.state.email_error} </div>
                )

            } else if (this.state.password_error) {
                return (
                    <div style={{ color: 'red' }}> {this.state.password_error} </div>
                )
            } else if (!this.state.username_error && !this.state.email_error && !this.state.password_error) {
                return (
                    <div style={{ color: 'red' }}> {this.state.error} </div>
                )
            }
        }

        return (
            <div>

                <TopNavbar />

                <form onSubmit={this.onFormSubmit} className='profile-form' >

                    <div>
                        <FormattedMessage id="update_profile.username" defaultMessage='Username: ' />

                        <br />

                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            disabled={true}
                            value={this.state.username}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            type={'text'}
                            onClick={() => {
                                this.props.history.push('/change_password/')
                            }}
                        >
                            <FormattedMessage id="update_profile.update_password" defaultMessage='Change Password' />
                        </Button>

                    </div>



                    <div>
                        <FormattedMessage id="update_profile.email" defaultMessage='Email: ' />
                        <br />
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            disabled={true}
                            value={this.state.email}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            type={'text'}
                            onClick={() => {
                                this.props.history.push('/change_email/')
                            }}
                        >
                            <FormattedMessage id="update_profile.update_email" defaultMessage='Update Email' />
                        </Button>
                    </div>

                    <div>

                        <FormattedMessage id="update_profile.phone" defaultMessage='Phone: ' />
                        <br />
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            disabled={true}
                            value={this.state.phone}
                        />

                    </div>

                    <div>
                        <FormattedMessage id="update_profile.firstName" defaultMessage='First Name: ' />

                        <br />

                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.first_name}
                            onChange={this.onInputChange_first_name}
                        />
                    </div>

                    {this.state.live_check_firstname && <div style={{ color: 'red' }}> <FormattedMessage id="error.firstname" defaultMessage='First name not valid' /> </div>}

                    <div>

                        <FormattedMessage id="update_profile.lastName" defaultMessage='Last Name: ' />

                        <br />

                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.last_name}
                            onChange={this.onInputChange_last_name}
                        />
                    </div>

                    {this.state.live_check_lastname && <div style={{ color: 'red' }}> <FormattedMessage id="error.lastname" defaultMessage='Last name not valid' /> </div>}

                    <div>

                        <FormattedMessage id="update_profile.dob" defaultMessage='Date of Birth: ' />
                        <br />

                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.date_of_birth}
                        />


                        <div onClick={() => { this.setState({ show_date: !this.state.show_date }) }} style={{ color: 'blue' }}>
                            {
                                this.state.show_date ?
                                    <FormattedMessage id="sign.close_date" defaultMessage='Close date' />
                                    :
                                    <FormattedMessage id="sign.pick_date" defaultMessage='Pick date' />
                            }
                        </div>

                    </div>

                    {
                        this.state.show_date && <Calendar
                            onChange={this.onInputChange_date_of_birth}
                            value={this.state.date}
                        />
                    }

                    {this.state.live_check_dob && <div style={{ color: 'red' }}> <FormattedMessage id="error.dateofbirth" defaultMessage='Date of birth not valid' /> </div>}

                    <div>
                        <FormattedMessage id="update_profile.street1" defaultMessage='Street Address 1: ' />
                        <br />
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.street_address_1}
                            onChange={this.onInputChange_street_address_1}
                        />
                    </div>

                    <div>

                        <FormattedMessage id="update_profile.street2" defaultMessage='Street Address 2: ' />

                        <br />

                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.street_address_2}
                            onChange={this.onInputChange_street_address_2}
                        />
                    </div>

                    <div>
                        <FormattedMessage id="update_profile.country" defaultMessage='Country: ' />
                        <br />

                        {/* <CountryDropdown
                            value={this.state.country}
                            onChange={this.onInputChange_country} 
                        /> */}

                        <FormControl className={classes.margin}>
                            <Select
                                value={this.state.country}
                                onChange={this.onInputChange_country}
                                input={<BootstrapInput name="country" id="country-customized-select" />}
                            >
                                {this.state.all_country_name.map(name => (
                                    <MenuItem key={name} value={name} >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormattedMessage id="update_profile.city" defaultMessage='City: ' />
                        <br />
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.city}
                            onChange={this.onInputChange_city}
                        />
                    </div>

                    {this.state.live_check_city && <div style={{ color: 'red' }}> <FormattedMessage id="error.city" defaultMessage='City not valid' /> </div>}

                    <div>
                        <FormattedMessage id="update_profile.zipcode" defaultMessage='Zipcode: ' />
                        <br />
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.zipcode}
                            onChange={this.onInputChange_zipcode}
                        />
                    </div>

                    {this.state.live_check_zipcode && <div style={{ color: 'red' }}> <FormattedMessage id="error.zipcode" defaultMessage='Zipcode not valid' /> </div>}

                    <div>
                        <FormattedMessage id="update_profile.state" defaultMessage='State: ' />
                        <br />
                        <TextField
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={'text'}
                            value={this.state.state}
                            onChange={this.onInputChange_state}
                        />
                    </div>

                    {this.state.live_check_state && <div style={{ color: 'red' }}> <FormattedMessage id="error.state" defaultMessage='State not valid' /> </div>}

                    <br />

                    <Button
                        disabled={this.state.button_disable}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >

                        <FormattedMessage id="update_profile.submit" defaultMessage='Submit' />
                    </Button>

                    <Button
                        style={{ marginLeft: '20px' }}
                        className='profile-update-cancel'
                        variant="contained"
                        color="secondary"
                        onClick={() => { this.props.history.push("/profile") }}>
                        <FormattedMessage id="update_profile.cancel" defaultMessage='Cancel' />
                    </Button>

                </form>


                {
                    showErrors()
                }

            </div>
        )
    }
}

export default withStyles(styles)(withRouter(Update));