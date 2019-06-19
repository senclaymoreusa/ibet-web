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

import { ReactComponent as BackIcon } from '../../assets/img/svg/account-menu-back.svg';


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
    myBetsRow: {
        height: 32,
        width: '100%',
        backgroundColor: '#212121',
        paddingTop: 6,
    },
    myBetsLabel: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#ffffff',
        fontSize: 15.8,
        textTransform: 'uppercase',
    },
    tabContainer: {
        backgroundColor: '#f1f1f1',
        padding: 7,

    },
    settledPaper: {
        padding: 0,
        marginBottom: 10,
    },
    betDate: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.93,
        letterSpacing: 'normal',
        color: '#747175',
    },
    single: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.93,
        letterSpacing: 'normal',
        color: '#2d2d2d',
        float: 'right',
    },
    firstGridRow: {
        paddingLeft: 10,
        paddingRight: 10,
        borderBottom: '1px solid #f1f1f1',
        height: 30,
    },
    secondGridRow: {
        paddingLeft: 10,
        paddingRight: 10,
        borderBottom: '1px solid #f1f1f1',
        height: 40,
        paddingTop: 8,
    },
    thirdGridRow: {
        paddingLeft: 10,
        paddingRight: 10,
        borderBottom: '1px solid #f1f1f1',
        height: 50,
        paddingTop: 8,
    },
    fifthGridRow: {
        paddingLeft: 10,
        height: 80,
        paddingTop: 8,
    },
    fifthGridRowRight: {
        paddingRight: 10,
        height: 80,
        paddingTop: 8,
        textAlign: 'right',
    },
    betIdRow: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        backgroundColor: '#212121',
        height: 40,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

    },
    betName: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    betScoreLabel: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#2d2d2d',
        float: 'right',
        width: '100%',
    },
    betScore: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#2d2d2d',
        float: 'right',
        width: '100%',
    },
    wonButton: {
        float: 'right',
        width: 72,
        height: 24,
        borderRadius: 2.3,
        backgroundColor: '#498905',
        color: '#ffffff',
        padding: 1,
    },
    lossButton: {
        float: 'right',
        width: 72,
        height: 24,
        borderRadius: 2.3,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        padding: 1,
    },
    betValueBold: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#2d2d2d',
        lineHeight: 1.6,
        display: 'inline-block',
        width: '100%',
    },
    betValue: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#2d2d2d',
        lineHeight: 1.6,
        display: 'inline-block',
    },
    betDetailLabel: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#2d2d2d',
        lineHeight: 1.6,
        width: '100%',
        display: 'block',
    },
    betIDText: {
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        color: '#ffffff',
        lineHeight: 1.9,
    },
    copy: {
        fontSize: 14,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.93,
        letterSpacing: 'normal',
        color: '#ffffff',
        float: 'right',
        textDecoration: 'underline',
    },
});

function TabContainer(props) {
    return (
        <div className={props.styleClasses.tabContainer}>
            <Paper className={props.styleClasses.settledPaper}>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={props.styleClasses.firstGridRow}>
                        <span className={props.styleClasses.betDate}>01/06/2019 at 18:00pm</span>
                        <span className={props.styleClasses.single}>Single</span>
                    </Grid>
                    <Grid item xs={12} className={props.styleClasses.secondGridRow}>
                        <span className={props.styleClasses.betName}>Tottenham vs Liverpool</span>
                    </Grid>
                    <Grid item xs={6} className={props.styleClasses.thirdGridRow}>
                        <span className={props.styleClasses.betScoreLabel}>Correct Score</span>
                        <span className={props.styleClasses.betScore}>0-1</span>
                    </Grid>
                    <Grid item xs={6} className={props.styleClasses.thirdGridRow}>
                        <Button className={props.styleClasses.wonButton}>won</Button>
                    </Grid>
                    <Grid item xs={12} className={props.styleClasses.thirdGridRow}>
                        <span className={props.styleClasses.betScoreLabel}>Corners over/Under 9.5</span>
                        <span className={props.styleClasses.betScore}>Under 9.5 Corners</span>
                    </Grid>
                    <Grid item xs={8} className={props.styleClasses.fifthGridRow}>
                        <span className={props.styleClasses.betDetailLabel}>Combined odds:</span>
                        <span className={props.styleClasses.betDetailLabel}>Stake:</span>
                        <span className={props.styleClasses.betDetailLabel}>Returns:</span>
                    </Grid>
                    <Grid item xs={4} className={props.styleClasses.fifthGridRowRight}>
                        <span className={props.styleClasses.betValueBold}>$15.40</span>
                        <span className={props.styleClasses.betValue}>$10.00</span>
                        <span className={props.styleClasses.betValueBold}>%56.00</span>
                    </Grid>
                    <Grid item xs={12} className={props.styleClasses.betIdRow}>
                        <span className={props.styleClasses.betIDText}>Bet ID: O658530/38344000</span>
                        <span className={props.styleClasses.copy}>Copy</span>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={props.styleClasses.settledPaper}>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={props.styleClasses.firstGridRow}>
                        <span className={props.styleClasses.betDate}>01/06/2019 at 18:00pm</span>
                        <span className={props.styleClasses.single}>Single</span>
                    </Grid>
                    <Grid item xs={12} className={props.styleClasses.secondGridRow}>
                        <span className={props.styleClasses.betName}>Tottenham vs Liverpool</span>
                    </Grid>
                    <Grid item xs={6} className={props.styleClasses.thirdGridRow}>
                        <span className={props.styleClasses.betScoreLabel}>Correct Score</span>
                        <span className={props.styleClasses.betScore}>0-1</span>
                    </Grid>
                    <Grid item xs={6} className={props.styleClasses.thirdGridRow}>
                        <Button className={props.styleClasses.lossButton}>loss</Button>
                    </Grid>
                    <Grid item xs={12} className={props.styleClasses.thirdGridRow}>
                        <span className={props.styleClasses.betScoreLabel}>Corners over/Under 9.5</span>
                        <span className={props.styleClasses.betScore}>Under 9.5 Corners</span>
                    </Grid>
                    <Grid item xs={8} className={props.styleClasses.fifthGridRow}>
                        <span className={props.styleClasses.betDetailLabel}>Combined odds:</span>
                        <span className={props.styleClasses.betDetailLabel}>Stake:</span>
                        <span className={props.styleClasses.betDetailLabel}>Returns:</span>
                    </Grid>
                    <Grid item xs={4} className={props.styleClasses.fifthGridRowRight}>
                        <span className={props.styleClasses.betValueBold}>$15.40</span>
                        <span className={props.styleClasses.betValue}>$10.00</span>
                        <span className={props.styleClasses.betValueBold}>%56.00</span>
                    </Grid>
                    <Grid item xs={12} className={props.styleClasses.betIdRow}>
                        <span className={props.styleClasses.betIDText}>Bet ID: O658530/38344000</span>
                        <span className={props.styleClasses.copy}>Copy</span>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const StyledTabs = withStyles({
    root: {
        height: 40,
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            width: '100%',
            backgroundColor: '#fe0000',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        minWidth: 120,
        textTransform: 'none',
        backgroundColor: '#2d2d2d',
        height: 40,
        color: '#ffffff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: 15,
        opacity: 1,
    },
}))(props => <Tab disableRipple {...props} />);

export class SettledBets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 2,
        };

        this.handleTabChange = this.handleTabChange.bind(this);

    }

    backClicked = (event) => {
        this.props.onMenuItemClicked('');
    }

    handleTabChange(event, newValue) {
        this.setState({ value: newValue });
        this.props.onMenuItemClicked('settled-bets');
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.sectionDesktop}>
                    <Grid container className={classes.root} spacing={0}>
                        <Grid item xs={12} className={classes.titleRow}>
                            <Button onClick={this.backClicked} className={classes.backButton}>
                                <BackIcon />
                            </Button>
                            <div className={classes.title}>
                                <FormattedMessage id="accountmenu.settled-bets" defaultMessage="Settled Bets" />
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.myBetsRow}>
                            <div className={classes.myBetsLabel}>
                                <FormattedMessage id="accountmenu.my-bets" defaultMessage="My Bets" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <AppBar position="static">
                                <StyledTabs value={value} onChange={this.handleTabChange} variant="fullWidth">
                                    <StyledTab label="Open" />
                                    <StyledTab label="Cash Out" />
                                    <StyledTab label="Settled" />
                                </StyledTabs>
                            </AppBar>
                            {value === 0 && <TabContainer styleClasses={classes}>

                            </TabContainer>}
                            {value === 1 && <TabContainer styleClasses={classes}>Item Two</TabContainer>}
                            {value === 2 && <TabContainer styleClasses={classes}>Item Three</TabContainer>}
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

SettledBets.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage })(SettledBets))));