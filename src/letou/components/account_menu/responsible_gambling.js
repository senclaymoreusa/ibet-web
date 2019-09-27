import React from 'react'; import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, show_account_menu, hide_responsible_gambling } from '../../actions';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { images } from '../../../util_config';

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
    semiboldText: {
        fontSize: 14,
        fontWeight: 500,
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
    desc: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
        marginTop: 20,
    },
});

export class ResponsibleGambling extends React.Component {

    handleMenuClose = (ev) => {
        // this.setState({ this.props.showProfilePopper: false });
    };

    backClicked = (event) => {
        this.props.show_account_menu();
        this.props.hide_responsible_gambling();
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
                            <FormattedMessage id="accountmenu.responsible-gaming" defaultMessage="Responsible Gaming" />
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.spaceRow}>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.helpPaper}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.boldText}>
                                        <FormattedMessage id="accountmenu.responsible-gambling" defaultMessage="Responsible Gambling" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.semiboldText}>
                                        <FormattedMessage id="responsible-gaming.useful-tips" defaultMessage="Useful Tips" />
                                    </div>
                                    <div className={classes.desc}>
                                        <FormattedMessage id="responsible-gaming.desc" defaultMessage="We've all heard it before -'Time flies when you are having fun' and so too can your funds. So much so in fact, that you may feel you can't tell your friends and loved ones how much you're spending on gaming." />
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.semiboldText}>
                                        <FormattedMessage id="responsible-gaming.gaming-list" defaultMessage="Gaming List" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.semiboldText}>
                                        <FormattedMessage id="responsible-gaming.self-exclusion" defaultMessage="Self-Exclusion" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.gridRow}>
                                    <div className={classes.semiboldText}>
                                        <FormattedMessage id="responsible-gaming.time-out" defaultMessage="Time-Out" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.row}>
                                    <div className={classes.semiboldText}>
                                        <FormattedMessage id="responsible-gaming.reality-check" defaultMessage="Reality Check" />
                                    </div>
                                </Grid>
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

ResponsibleGambling.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage, show_account_menu, hide_responsible_gambling })(ResponsibleGambling))));