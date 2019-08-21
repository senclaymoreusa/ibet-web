import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authCheckState } from '../../../actions';
import { injectIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


import { withStyles } from '@material-ui/core/styles';

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
    notification: {
        backgroundColor: '#3ce86a',
        marginTop: 202,
        minWidth: 1330,
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



export class Privacy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bonus: false,
            vip: false,
            showSuccessMessage: false,
        }

        this.updateClicked = this.updateClicked.bind(this);
        this.bonusClicked = this.bonusClicked.bind(this);
        this.vipClicked = this.vipClicked.bind(this);
        this.closeNotificationClicked = this.closeNotificationClicked.bind(this);

    }

    updateClicked(ev) {
        this.setState({ showSuccessMessage: true });

    }

    bonusClicked(ev) {
        this.setState({ bonus: !this.state.bonus });
    }

    vipClicked(ev) {
        this.setState({ vip: !this.state.vip });
    }

    closeNotificationClicked() {
        this.setState({ showSuccessMessage: false });

    }

    render() {
        const { classes } = this.props;
        const { bonus, vip, showSuccessMessage } = this.state;
        const { formatMessage } = this.props.intl;

        let titleMessage = formatMessage({ id: "settings.privacy_title" });
        let privacyTextMessage = formatMessage({ id: "settings.privacy_text" });
        let bonusesMessage = formatMessage({ id: "settings.bonuses" });
        let noMessage = formatMessage({ id: "settings.no" });
        let yesMessage = formatMessage({ id: "settings.yes" });
        let bonusTextMessage = formatMessage({ id: "settings.bonus_text" });
        let readMoreMessage = formatMessage({ id: "settings.read_more" });
        let vipMessage = formatMessage({ id: "settings.vip" });
        let vipTextMessage = formatMessage({ id: "settings.vip_text" });
        let updateMessage = formatMessage({ id: "settings.update" });

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} className={classes.titleCell}>
                        <span className={classes.title}>{titleMessage}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.row}>
                        <span className={classes.text}>{privacyTextMessage}</span>
                    </Grid>
                    <Grid item xs={4} className={classes.row}>
                        <span className={classes.subTitle}>{bonusesMessage}</span>
                    </Grid>
                    <Grid item xs={8} style={{ paddingTop: 20 }}>
                        <Typography component="div">
                            <Grid component="label" container alignItems="center" >
                                <Grid item>{noMessage}</Grid>
                                <Grid item>
                                    <Switch
                                        color="secondary"
                                        checked={bonus}
                                        onChange={this.bonusClicked}
                                        value="checkedC"
                                    />
                                </Grid>
                                <Grid item>{yesMessage}</Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid item xs={9} className={classes.row}>
                        <span className={classes.text}>{bonusTextMessage}</span>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4} className={classes.row}>
                        <span className={classes.subTitle}>{vipMessage}</span>
                    </Grid>
                    <Grid item xs={8} style={{ paddingTop: 20 }}>
                        <Typography component="div">
                            <Grid component="label" container alignItems="center" >
                                <Grid item>{noMessage}</Grid>
                                <Grid item>
                                    <Switch
                                        color="secondary"
                                        checked={vip}
                                        onChange={this.vipClicked}
                                        value="checkedC"
                                    />
                                </Grid>
                                <Grid item>{yesMessage}</Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid item xs={9} className={classes.row} style={{ paddingBottom: 30 }}>
                        <span className={classes.text}>{vipTextMessage}</span>
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
                    TransitionComponent={Fade}
                >
                    <SnackbarContent
                        className={classes.notification}
                        aria-describedby="client-snackbar"
                        message={
                            <div>
                                <CheckCircleIcon className={classes.checkIcon} />
                                <span id="client-snackbar" className={classes.message}>
                                    Your changes are successfully updated.
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

            </div>
        );
    }
}

Privacy.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { authCheckState })(Privacy)));