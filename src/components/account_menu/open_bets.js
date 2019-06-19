import React from 'react'; import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Person from '@material-ui/icons/Person';
import Input from '@material-ui/icons/Input';
import Language from '@material-ui/icons/Language';
import Settings from '@material-ui/icons/Settings';
import PersonOutline from '@material-ui/icons/PersonOutline';
import BarChart from '@material-ui/icons/BarChart';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Message from '@material-ui/icons/Message';
import TouchApp from '@material-ui/icons/TouchApp';
import AttachMoney from '@material-ui/icons/AttachMoney';

import PeopleOutline from '@material-ui/icons/PeopleOutline';
import DirectionsRun from '@material-ui/icons/DirectionsRun';

import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, postLogout } from '../../actions';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

import { ReactComponent as CloseIcon } from '../../assets/img/svg/profile_close.svg';
// import { ReactComponent as HelpIcon } from '../../assets/img/svg/help.svg';
import { ReactComponent as LockIcon } from '../../assets/img/svg/lock.svg';

import { ReactComponent as DepositIcon } from '../../assets/img/svg/account-menu-deposit.svg';
import { ReactComponent as WithdrawIcon } from '../../assets/img/svg/account-menu-withdraw.svg';
import { ReactComponent as OpenBetsIcon } from '../../assets/img/svg/account-menu-open-bets.svg';
import { ReactComponent as SettledBetsIcon } from '../../assets/img/svg/account-menu-settled-bets.svg';
import { ReactComponent as PromotionsIcon } from '../../assets/img/svg/account-menu-promotions.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/svg/account-menu-settings.svg';
import { ReactComponent as HelpIcon } from '../../assets/img/svg/account-menu-help.svg';
import { ReactComponent as ResponsibleIcon } from '../../assets/img/svg/account-menu-responsible.svg';
import { ReactComponent as LogoutIcon } from '../../assets/img/svg/account-menu-logout.svg';


import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Flag from 'react-flagkit';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../../css/account_menu.scss';


const styles = theme => ({
    root: {
        width: '100%',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        display: 'inline',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
    },
    back: {
        display: 'inline',
    },
    myBets: {
        backgroundColor: '#212121',
        height: 50,
        width: '100%',
        textAlign: 'center',
        color: '#ffffff',
        textTransform: 'upperCase',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        paddingTop: 14,
    },
    changePasswordButton: {
        height: '100%',
        width: '100%',
        color: '#04599a',
        fontSize: 13.5,
        textTransform: 'capitalize',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },

});

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

export class OpenBets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };


    }

    backClicked = (event) => {
        this.props.onMenuItemClicked('');
    }

    handleTabChange(event, newValue) {
        this.setState({ value: newValue });
    }

    render() {
        const { classes, value } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.sectionDesktop}>
                    <Grid container className={classes.root} spacing={0}>
                        <Grid item xs={12}>
                            <Button onClick={this.backClicked} className={classes.back}>back</Button>
                            <div className={classes.title}>
                                <FormattedMessage id="open-bets.open-bets" defaultMessage="Open Bets" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.myBets}>
                                <FormattedMessage id="open-bets.my-bets" defaultMessage="My Bets" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <AppBar position="static">
                                <Tabs value={value} onChange={this.handleTabChange}>
                                    <Tab label="Item One" />
                                    <Tab label="Item Two" />
                                    <Tab label="Item Three" />
                                </Tabs>
                            </AppBar>
                            {value === 0 && <TabContainer>Item One</TabContainer>}
                            {value === 1 && <TabContainer>Item Two</TabContainer>}
                            {value === 2 && <TabContainer>Item Three</TabContainer>}
                        </Grid>
                    </Grid>

                </div>
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

OpenBets.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage })(OpenBets))));