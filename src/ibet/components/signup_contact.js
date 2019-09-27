import React from 'react';
import { connect } from 'react-redux';
import { show_signup_contact, hide_signup_contact, show_signup_detail, show_signup_phone, handle_signup_address, handle_signup_city, handle_signup_zipcode, handle_signup_country } from '../actions';
import axios from 'axios'
import { getNames } from 'country-list';
import { FormattedMessage } from 'react-intl';
import { images } from '../../util_config';



import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
    textField: {
        width: 530,
    },

    textField2: {
        width: 320,
    },

    textField3: {
        width: 150,
    },

    textFieldDOB: {
        width: 70,
    },

    cssOutlinedInput: {
        "& $notchedOutline": {
            //add this nested selector
            borderColor: "'#e4e4e4'",
        },

        "&$cssFocused $notchedOutline": {
            borderColor: "blue",
        }
    },

    cssFocused: {},

    notchedOutline: {},
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
        width: 490,
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

class SignupContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: this.props.signup_address ? this.props.signup_address : '',
            city: this.props.signup_city ? this.props.signup_city : '',
            zipcode: this.props.signup_zipcode ? this.props.signup_zipcode : '',
            country: this.props.signup_country ? this.props.signup_country : '',
            all_country_name: [],

            live_check_address: false,
            live_check_city: false,
            live_check_zipcode: false,

            button_disable: this.props.signup_address ? false : true
        }
    }

    componentDidMount() {
        this.setState({ all_country_name: getNames() })

        if (!this.props.signup_country) {
            axios.get('https://ipapi.co/json/')
                .then(res => {
                    this.setState({
                        country: res.data.country_name
                    })
                })
        }
    }

    async onInputChange_address(event) {
        if (!event.target.value.match(/^[a-zA-Z0-9.\s]+$/)) {
            this.setState({ live_check_address: true, button_disable: true })
        } else {
            this.setState({ live_check_address: false })
        }
        await this.setState({ address: event.target.value });
        this.check_button_disable()
    }

    async onInputChange_city(event) {
        if (!event.target.value.match(/^[a-zA-Z\s]+$/)) {
            this.setState({ live_check_city: true, button_disable: true })
        } else {
            this.setState({ live_check_city: false })
        }
        await this.setState({ city: event.target.value });
        this.check_button_disable()
    }

    async onInputChange_zipcode(event) {
        if (!event.target.value.match(/^[0-9]+$/)) {
            this.setState({ live_check_zipcode: true, button_disable: true })
        } else {
            this.setState({ live_check_zipcode: false })
        }
        await this.setState({ zipcode: event.target.value });
        this.check_button_disable()
    }

    onInputChange_country(event) {
        this.setState({ country: event.target.value });
    }

    check_button_disable() {
        if (this.state.address && this.state.city && this.state.country && this.state.zipcode &&
            !this.state.live_check_address && !this.state.live_check_city && !this.state.live_check_zipcode) {
            this.setState({ button_disable: false })
        }
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.handle_signup_address(this.state.address);
        this.props.handle_signup_city(this.state.city);
        this.props.handle_signup_zipcode(this.state.zipcode);
        this.props.handle_signup_country(this.state.country);


        this.props.hide_signup_contact();
        this.props.show_signup_phone();
    }

    render() {

        const { classes } = this.props;

        return (
            <div style={{ backgroundColor: 'white', minHeight: 650, width: 662 }}>
                <form onSubmit={this.onFormSubmit.bind(this)}>

                    <div className='signup-title'>

                        <img src={images.src + 'back.svg'} alt=""
                            style={{ cursor: 'pointer', position: 'absolute', top: 12, left: 30, height: 25, width: 15 }}
                            onClick={() => {
                                this.props.hide_signup_contact();
                                this.props.show_signup_detail();
                            }}
                        />

                        <div style={{ paddingTop: 20, fontSize: 14, fontWeight: 600, color: '#212121', letterSpacing: 0.88, fontFamily: 'Gilroy', fontStyle: 'normal', fontStretch: 'normal', lineHeight: 'normal' }}>
                            <FormattedMessage id="signup.openaccount" defaultMessage='OPEN ACCOUNT' />
                        </div>

                        <img src={images.src + 'close_page.svg'} alt=""
                            style={{ cursor: 'pointer', position: 'absolute', top: 8, left: 620, height: 40, width: 20 }}
                            onClick={() => {
                                this.props.hide_signup_contact();
                            }}
                        />

                    </div>

                    <div style={{ marginTop: 30, textAlign: 'center' }}>
                        <span style={{ color: '#e4e4e4' }} > ____________________  1 </span>  <span style={{ color: '#e4e4e4' }}> ____________________  2 </span >  <span style={{ fontWeight: 600 }}> ____________________ 3 </span>
                    </div>

                    <div style={{ color: 'red', fontSize: 25, fontWeight: 600, marginTop: 20, marginLeft: 70 }}>
                        <FormattedMessage id="signup.contact.title" defaultMessage='Contact details' />
                    </div>

                    <div style={{ color: '#e4e4e4', textAlign: 'center' }}>
                        __________________________________________________________________
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <TextField
                            label="ADDRESS"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={this.state.address}
                            onChange={this.onInputChange_address.bind(this)}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                    </div>

                    {this.state.live_check_address && <div style={{ color: 'red', marginLeft: 65 }}> <FormattedMessage id="error.address" defaultMessage='Address not valid' /> </div>}

                    <div className='row' style={{ marginLeft: 65 }}>

                        <div>
                            <TextField
                                className={classes.textField2}
                                label="CITY"
                                margin="normal"
                                onChange={this.onInputChange_city.bind(this)}
                                value={this.state.city}
                                variant="outlined"
                                style={{ marginRight: 60 }}
                                InputProps={{
                                    classes: {
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />

                            {this.state.live_check_city && <div style={{ color: 'red' }}> <FormattedMessage id="error.city" defaultMessage='City not valid' /> </div>}
                        </div>

                        <div>
                            <TextField
                                className={classes.textField3}
                                label="ZIPCODE"
                                margin="normal"
                                onChange={this.onInputChange_zipcode.bind(this)}
                                value={this.state.zipcode}
                                variant="outlined"
                                InputProps={{
                                    classes: {
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />

                            {this.state.live_check_zipcode && <div style={{ color: 'red' }}> <FormattedMessage id="error.zipcode" defaultMessage='Zipcode not valid' /> </div>}

                        </div>

                    </div>

                    <div style={{ marginTop: 20, textAlign: 'center' }}>
                        <FormControl >
                            <Select
                                className={classes.textField}
                                value={this.state.country}
                                onChange={this.onInputChange_country.bind(this)}
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

                    <div style={{ textAlign: 'center' }}>
                        <button
                            disabled={this.state.button_disable}
                            style={{ backgroundColor: this.state.button_disable ? '#ff8080' : 'red', height: 48, width: 272, marginTop: 30, color: 'white', cursor: 'pointer', border: 'none', fontSize: 14, fontWeight: 600, fontFamily: 'Gilroy', letterSpacing: 0.88 }}
                            type='submit'
                        >
                            <FormattedMessage id="signup.continue" defaultMessage='CONTINUE' />
                        </button>
                    </div>

                    <div style={{ color: '#747175', fontSize: 12, marginTop: 10, textAlign: 'center' }}> By signing up you agree to ibet's <b style={{ color: 'black', cursor: 'pointer' }} onClick={() => window.open('/terms_conditions')}> terms and conditions </b> and</div>
                    <div style={{ color: '#747175', fontSize: 12, textAlign: 'center' }}> confirm you've read and understood the <b style={{ color: 'black', cursor: 'pointer' }} onClick={() => window.open('/privacy_policy')}> privacy </b> policy</div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup_address: state.general.signup_address,
        signup_city: state.general.signup_city,
        signup_zipcode: state.general.signup_zipcode,
        signup_country: state.general.signup_country
    }
}

export default withStyles(styles)(connect(mapStateToProps, { show_signup_contact, hide_signup_contact, show_signup_detail, show_signup_phone, handle_signup_address, handle_signup_city, handle_signup_zipcode, handle_signup_country })(SignupContact));