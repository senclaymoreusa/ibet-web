import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
import { getLanguage } from './actions/language';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  notification: {
    backgroundColor: '#0095ff',
  },
  checkIcon: {
    float: 'left',
  },
  message: {
    marginLeft: 10,
    float: 'left',
    lineHeight: 1.9
  },
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lang: 'zh',
      showReminder: false,
    }
  }

  handleWindowBeforeUnload = (ev) => {
    return "Unsaved changes. Are you sure?";
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.handleWindowBeforeUnload);

    this.props.getLanguage();

    setInterval(() => this.checkIfReminderTime(), 1000)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleWindowBeforeUnload);
  }

  checkIfReminderTime() {
    var reminderText = localStorage.getItem('reminderData');

    if (!reminderText)
      return;

    var reminderObj = JSON.parse(reminderText);


    const reminderStartTime = localStorage.getItem('activityReminderStartTime');
    const duration = localStorage.getItem('activityReminderDuration');

    let now = new Date();

    if (reminderStartTime === null)
      localStorage.setItem("activityReminderStartTime", now);

    if (duration === null)
      localStorage.setItem("activityReminderDuration", 60);

    let milliseconds = Date.parse(reminderStartTime)
    let threshold = new Date(milliseconds);
    let mins = threshold.getMinutes();
    threshold.setMinutes(mins + parseInt(duration));

    if (threshold < now) {
      this.setState({ showReminder: true });
      localStorage.setItem("activityReminderStartTime", now);
    }
  }

  closeReminderClicked() {
    this.setState({ showReminder: false });
  }

  render() {
    const { lang } = this.props;
    const { classes } = this.props;
    const activityReminderDuration = localStorage.getItem('activityReminderDuration');

    return (
      <IntlProvider locale={lang} messages={messages[lang]} >
        <div>
          <Router>
            <BaseRouter />
          </Router>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={this.state.showReminder}
            onClose={this.closeReminderClicked.bind(this)}
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
                    You have been playing for {activityReminderDuration} minutes.
                </span>
                </div>
              }
              action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  className={classes.close}
                  onClick={this.closeReminderClicked.bind(this)}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
            /></Snackbar>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(connect(mapStateToProps, { getLanguage })(App));
