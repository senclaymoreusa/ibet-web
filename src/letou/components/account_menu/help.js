import React from 'react'; import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, show_account_menu, hide_help } from '../../../actions';
import { images } from '../../../util_config';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import '../../css/account_menu.scss';


const styles = theme => ({
    root: {
        width: '100%',
    },
    titleRow: {
        height: 43,
        width: '100%',
        paddingTop: 8,
        paddingLeft: 8,
    },
    backButton: {
        display: 'inline',
        width: 30,
        height: 30,
        minWidth: 30,
    },
    title: {
        display: 'inline',
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 6,
        height: 30,
        marginTop: 12,

    },
    spaceRow: {
        backgroundColor: '#f1f1f1',
        height: 30,
    },
    bottomRow: {
        marginTop: 1,
        backgroundColor: '#f1f1f1',
        height: 30,
        borderRadius: 5,
    },
    helpPaper: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    gridRow: {
        padding: 10,
        borderBottom: '1px solid #f1f1f1',
    },
    row: {
        padding: 10,
    },
    boldText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
});

export class Help extends React.Component {

    backClicked = (event) => {
        this.props.show_account_menu();
        this.props.hide_help();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                        <img src={images.src + 'account-menu-back.svg'} alt=""/>
                        </Button>
                        <div className={classes.title}>
                            <FormattedMessage id="accountmenu.help" defaultMessage="Help" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.spaceRow}>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.helpPaper}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.boldText}>
                                        <FormattedMessage id="help.contact-us" defaultMessage="Contact Us" />
                                    </div>
                                </Grid>
                                <Grid item xs={3} className={classes.gridRow}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="help.call-us" defaultMessage="Call Us" />
                                    </div>
                                </Grid>
                                <Grid item xs={6} className={classes.gridRow}>
                                    <span className={classes.text}>(000) 000 0000</span>
                                </Grid>
                                <Grid item xs={3} className={classes.gridRow}></Grid>
                                <Grid item xs={3} className={classes.gridRow}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="help.email-us" defaultMessage="Email Us" />
                                    </div>
                                </Grid>
                                <Grid item xs={6} className={classes.gridRow}>
                                    <span className={classes.text}>contactus@email.com</span>
                                </Grid>
                                <Grid item xs={3} className={classes.gridRow}></Grid>
                                <Grid item xs={12} className={classes.row}>
                                    <div className={classes.text}>
                                        <FormattedMessage id="footer.contact_support_text" defaultMessage="Our friendly customer service team is on hand to answer any questions you may have 24 hours a day, 7 days a week." />
                                    </div></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.bottomRow}>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang,
    }
}

Help.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage, show_account_menu, hide_help })(Help))));