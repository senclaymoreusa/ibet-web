import React, { Component } from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import { connect } from 'react-redux';
import { authCheckState, handle_referid, hide_landing_page } from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import { images } from '../../../util_config';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Button from '@material-ui/core/Button';
import LockOpen from '@material-ui/icons/LockOpen';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,

  },
  grow: {
    flexGrow: 1,
    backgroundImage: "url(" + images.src + "letou/register_bg.jpg)",
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  registerPaper: {
    width: 360,
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 30
  },
});

export class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      hidden: true,

      name: '',
      email: '',
      button_clicked: 0,
      check: false,
      showPassword: false,

      usernameInvalid: true,
      passwordInvalid: true,

      usernameFocused: false,
      passwordFocused: false,

      loginDisabled: true,
      wrongPasswordError: false,
      userBlocked: false
    };

    this.onInputChange_password = this.onInputChange_password.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handle_one_click = this.handle_one_click.bind(this);
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopNavbar />
        <div className={classes.grow} >
          <Grid container>
            <Grid item xs={7} >
            </Grid>
            <Grid item xs={5} >
              <Paper className={classes.registerPaper}>
                <Grid container>
                  <Grid item xs={12} className={classes.titleRow}>
                    <span className={classes.title}>
                      {this.getLabel('title-register')}
                    </span>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 20, paddingBottom: 20, textAlign: 'center' }}>
                    <span className={classes.loginText}>{this.getLabel('already-have-account')}</span>
                    <span className={classes.loginText}>{this.getLabel('login-here')}</span>
                  </Grid>
                  <form onSubmit={this.onFormSubmit.bind(this)} style={{ width: '100%' }}>
                    <Grid item xs={12} style={{ paddingBottom: 20 }}>
                      <TextField
                        className={classes.usernameText}
                        placeholder={this.getLabel('user-name')}
                        onChange={(event) => {
                          this.setState({ username: event.target.value });
                          this.setState({ usernameInvalid: event.target.value.length === 0 });

                        }}
                        onFocus={() => {
                          this.setState({ usernameFocused: true });
                        }}
                        error={this.state.usernameInvalid && this.state.usernameFocused}
                        helperText={(this.state.usernameInvalid && this.state.usernameFocused) ? this.getLabel('enter-valid-username') : ' '}
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: <InputAdornment position="start">
                            <PermIdentity />
                          </InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: 40 }}>
                      <TextField
                        className={classes.passwordText}
                        placeholder={this.getLabel('password-text')}
                        onChange={(event) => {
                          this.setState({ password: event.target.value });
                          this.setState({ passwordInvalid: event.target.value.length === 0 });

                        }}
                        onFocus={() => {
                          this.setState({ passwordFocused: true });
                        }}
                        error={this.state.passwordInvalid && this.state.passwordFocused}
                        helperText={(this.state.passwordInvalid && this.state.passwordFocused) ? this.getLabel('enter-password') : ' '}
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (<InputAdornment position="start">
                            <LockOpen />
                          </InputAdornment>),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                disabled={this.state.password.length === 0}
                                aria-label="Toggle password visibility"
                                onClick={() => {
                                  this.setState(state => ({ showPassword: !state.showPassword }))
                                }}
                              >
                                {this.state.showPassword ? <VisibilityOff className={classes.showIcon} /> : <Visibility className={classes.showIcon} />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        type={this.state.showPassword ? '' : 'password'} />
                    </Grid>
                    <Grid item xs={12} >
                      <Button className={classes.loginButton}
                        onClick={this.handleClick}
                        disabled={this.state.usernameInvalid ||
                          this.state.passwordInvalid}
                      >{this.getLabel('title-login')}</Button>
                    </Grid>
                  </form>
                  <Grid item xs={12} style={{ paddingTop: 10, textAlign: 'center' }}>
                    <Button className={classes.forgotButton}
                      onClick={() => {
                        this.props.hide_letou_login()
                        this.props.show_letou_forgot_password()
                      }}
                    >{this.getLabel('forgot-password')}</Button>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 10 }}>
                    <span className={classes.loginQuestionText}>{this.getLabel('login-question-text')}</span>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(Register));