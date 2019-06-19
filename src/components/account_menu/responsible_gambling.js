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


import '../../css/account_menu.scss';


const styles = theme => ({
    root: {
        width: '100%',
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
    firstNameLabel: {
        display: 'inline',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 5,
    },
    balanceLabel: {
        display: 'inline',
        float: 'right',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
    },
    usernameLabel: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
    },
    balanceValue: {
        display: 'inline',
        float: 'right',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        textAlign: 'right',
        color: '#212121',
        fontSize: 15.8,
        marginLeft: 5,
    },

    closeButton: {
        height: 20,
        width: 20,
        padding: 0,
        display: 'inline',
        float: 'right',
    },
    cashLabel: {
        display: 'inline',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#359888',
    },
    cashValue: {
        display: 'inline',
        float: 'right',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#359888',
    },
    bonusLabel: {
        display: 'inline',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    bonusValue: {
        display: 'inline',
        float: 'right',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    cashBetValue: {
        display: 'inline',
        float: 'right',
        fontSize: 15.8,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    allAboutBonus: {
        fontSize: 13.5,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.67,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: '#212121',
        textDecoration: 'underline',
        marginBottom: 10,
        marginTop: 10,
    },
    feeBetPaper: {
        textAlign: 'center',

        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 15,
    },
    feeBetLabel: {
        display: 'inline',
        textAlign: 'center',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
    },
    feeBetValue: {
        display: 'inline',
        textAlign: 'center',
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.6,
        color: '#212121',
        fontSize: 15.8,
    },
    achievedLabel: {
        display: 'inline',
        fontSize: 13.5,
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#359888',
    },
    achievedStart: {
        display: 'inline',
        fontSize: 13.5,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#212121',
    },
    achievedEnd: {
        display: 'inline',
        fontSize: 13.5,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
        color: '#212121',
    },
    achievedProgress: {
        width: '100%',
        height: 24,
    },
    achievedProgressBar: {
        display: 'inline',
        width: 278,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        height: 17,
        borderRadius: 9.3,
        border: 0,
        backgroundImage: 'linear-gradient(95deg, #40bea5, #98e2a8)',
    },
    lock: {
        display: 'inline',
    },
    leftGridButton: {
        textAlign: 'center',
        borderTop: '1px solid #cdcdcd',
        borderRight: '1px solid #cdcdcd',
        height: 90,
    },
    rightGridButton: {
        textAlign: 'center',
        borderTop: '1px solid #cdcdcd',
        height: 90,
    },
    mergedGridButton: {
        textAlign: 'center',
        borderTop: '1px solid #cdcdcd',
        height: 60,
    },
    gridButton: {
        height: '100%',
        width: '100%',
    },
    blockButtonLabel: {
        position: 'relative',
    },
    menuIcon: {
        width: '100%',
    },
    responsibleButton: {
        height: '100%',
        width: '100%',
        color: '#212121',
        fontSize: 13.5,
        textTransform: 'capitalize',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
    },
    logoutButton: {
        height: '100%',
        width: '100%',
        color: '#212121',
        fontSize: 13.5,
        textTransform: 'capitalize',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 0.5,
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
    button: {
        width: '90%',
        margin: theme.spacing.unit,
        textTransform: 'capitalize'
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    grow: {
        flexGrow: 1,
    },
    help: {
        width: 20,
        height: 11.7,
    },
    oval: {
        marginLeft: 8,
        width: 20,
        height: 20,
        minWidth: 20,
        boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.18)',
        border: 'solid 2.3px #1e1e1e',
        backgroundColor: '#2b2b2b',
        borderRadius: 20,
        display: 'inline',
    },
    chart: {
        marginTop: 10,
        marginBottom: 10
    }
});

export class ResponsibleGambling extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,

            lang: 'en',
            showLeftPanel: false,
            showRightPanel: false,
            showLangListItems: false,
            term: '',
            facebooklogin: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        };


    }

    toggleSidePanel = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    handleLanguageMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleLanguageMenuClose = (ev) => {
        this.setState({ anchorEl: null });
        this.changeLanguage(ev.nativeEvent.target.dataset.myValue);
    };

    changeLanguage = (lang) => {
        this.props.setLanguage(lang)
            .then((res) => {
                // console.log("language change to:" + res.data);
            });
    };

    componentWillReceiveProps(props) {
        this.setState({ term: '' });
    }

    componentDidMount() {
        var fackbooklogin = localStorage.getItem('facebook')
        this.setState({ facebooklogin: fackbooklogin })
        var fackbookObj = JSON.parse(localStorage.getItem('facebookObj'))
        if (fackbooklogin === 'true') {
            this.setState({
                userID: fackbookObj.userID,
                name: fackbookObj.name,
                email: fackbookObj.email,
                picture: fackbookObj.picture
            })
        }
    }

    toggleLanguageListItem = () => {
        this.setState(state => ({ showLangListItems: !state.showLangListItems }));
    };

    handleMenuClose = (ev) => {
        // this.setState({ this.props.showProfilePopper: false });
    };

    backClicked = (event) => {
        this.props.onMenuItemClicked('');      
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        let languagesMessage = formatMessage({ id: "accountmenu.languages" });

        var LineChart = require("react-chartjs").Line;

        var chartData = {
            labels: ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [28, 48, 60, 30, 45, 30, 20]
                }
            ]
        };

        const chartOptions = {
            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,
            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,
            //Boolean - Whether to show a dot for each point
            pointDot: true,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,
        };

        return (
            <div className={classes.root}>
                <div className={classes.sectionDesktop}>
                    <Grid container className={classes.root} spacing={0}>
                        <Grid item xs={12}>
                            <Button onClick={this.backClicked}>back in Withdraw</Button>
                            <div className={classes.back}>
                                <FormattedMessage id="accountmenu.open-bets" defaultMessage="Open Bets" />
                            </div>
                            <span className={classes.firstNameLabel}>David</span>
                            <span className={classes.balanceValue}>$345.00</span>
                            <div className={classes.balanceLabel}>
                                <FormattedMessage id="accountmenu.balance" defaultMessage="Balance:" />
                            </div>
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

ResponsibleGambling.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage })(ResponsibleGambling))));