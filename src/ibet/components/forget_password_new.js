import React, { Component } from 'react';
import {
    hide_forget_password,
    show_forget_password_validation,
    forget_email,
    sendingLog
} from '../../actions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { images } from '../../util_config';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    textField: {
        width: 300
    },

    cssOutlinedInput: {
        '& $notchedOutline': {
            //add this nested selector
            borderColor: "'#e4e4e4'"
        },

        '&$cssFocused $notchedOutline': {
            borderColor: 'blue'
        }
    },
    cssFocused: {},

    notchedOutline: {}
});

class NewForgetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            live_check_email: false,
            button_disable: true,
            email_not_exist: false
        };
    }

    async onInputChange_email(event) {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!event.target.value.match(re)) {
            this.setState({ live_check_email: true, button_disable: true });
        } else {
            this.setState({ live_check_email: false, button_disable: false });
        }
        await this.setState({ email: event.target.value });
    }

    handlesubmit(event) {
        let currentComponent = this;
        event.preventDefault();

        axios
            .get(
                API_URL + `users/api/checkemailexist/?email=${this.state.email}`
            )
            .then(res => {
                currentComponent.setState({ email_not_exist: true });
            })
            .catch(function(err) {
                currentComponent.props.hide_forget_password();
                currentComponent.props.show_forget_password_validation();
                currentComponent.props.forget_email(
                    currentComponent.state.email
                );
                axios.post(API_URL + `users/api/generatepasswordcode/`, {
                    email: currentComponent.state.email
                });
                axios.post(API_URL + `users/api/sendresetpasswordcode/`, {
                    email: currentComponent.state.email
                });

                // axios.post(API_URL + 'system/api/logstreamtos3/', { "line": err, "source": "Ibetweb" }, config).then(res => { });
                sendingLog(err);
            });
    }

    render() {
        const { classes } = this.props;

        return (
            <div
                style={{ backgroundColor: 'white', minHeight: 650, width: 662 }}
            >
                <div className="signup-title">
                    <div
                        style={{
                            paddingTop: 20,
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#212121',
                            letterSpacing: 0.88,
                            fontFamily: 'Gilroy',
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 'normal'
                        }}
                    >
                        Forget Password
                    </div>

                    <img
                        src={images.src + 'close_page.svg'}
                        alt=""
                        style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            top: 8,
                            left: 620,
                            height: 40,
                            width: 20
                        }}
                        onClick={() => {
                            this.props.hide_forget_password();
                        }}
                    />
                </div>

                <div style={{ fontSize: 30, marginLeft: 80, marginTop: 30 }}>
                    Please enter the email address
                </div>

                <div style={{ fontSize: 30, marginLeft: 80 }}>
                    associated to your account
                </div>

                <form onSubmit={this.handlesubmit.bind(this)}>
                    <div style={{ textAlign: 'center', marginTop: 80 }}>
                        <TextField
                            value={this.state.email}
                            label="EMAIL ADDRESS"
                            className={classes.textField}
                            type="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onInputChange_email.bind(this)}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                    </div>

                    {this.state.live_check_email && (
                        <div style={{ color: 'red', marginLeft: 180 }}>
                            {' '}
                            <FormattedMessage
                                id="error.email"
                                defaultMessage="Email address not valid"
                            />{' '}
                        </div>
                    )}

                    {this.state.email_not_exist && (
                        <div style={{ color: 'red', marginLeft: 180 }}>
                            {' '}
                            No user is associated with this email address{' '}
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginTop: 50 }}>
                        <button
                            disabled={this.state.button_disable}
                            style={{
                                backgroundColor: this.state.button_disable
                                    ? '#ff8080'
                                    : 'red',
                                height: 48,
                                width: 300,
                                marginTop: 30,
                                color: 'white',
                                cursor: 'pointer',
                                border: 'none',
                                fontSize: 14,
                                fontWeight: 600,
                                fontFamily: 'Gilroy',
                                letterSpacing: 0.88
                            }}
                            type="submit"
                        >
                            <FormattedMessage
                                id="signup.continue"
                                defaultMessage="CONTINUE"
                            />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(
    connect(null, {
        hide_forget_password,
        show_forget_password_validation,
        forget_email
    })(NewForgetPassword)
);
