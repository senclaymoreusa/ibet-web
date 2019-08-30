import React from 'react'; import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage, FormattedNumber, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, show_account_menu, hide_open_bets, hide_settled_bets } from '../../actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../../css/account_menu.scss';

import axios from 'axios';
import { config, images } from '../../util_config';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL


const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 44,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    backButton: {
        width: 32,
        height: 32,
        minWidth: 32,
        marginTop: 6,
        marginBottom: 6,
    },
    logo: {
        marginTop: 13,
        marginBottom: 13,
        marginLeft: 20,
    },
    userButton: {
        border: '1px solid #fe0000',
        minWidth: 32,
        height: 32,
        padding: 0,
        marginTop: 6,
        marginBottom: 6,

    },
    balanceButton: {
        backgroundColor: '#fe0000',
        color: '#ffffff',
        "&:hover": {
            backgroundColor: '#fe0000',
        },
        height: 32,
        marginTop: 6,
        marginBottom: 6,
        marginRight: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },
    depositIcon: {
        marginRight: 5,
        marginTop: -4,
    },
    title: {
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
    betPaper: {
        padding: 0,
        marginBottom: 10,
    },
    curvedArrow: {
        marginTop: 3,
        display: 'inline',
        float: 'right',
        marginRight: 10,
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
        display: 'inline',
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
    formControl: {
        width: 60,
        height: 20,
        float: 'right',
        display: 'inline',
    },
    selectFilter: {
        width: 60,
        height: 20,
        paddingTop: 0,
        marginBottom: 10,
        paddingBottom: 0,
        float: 'right',
        display: 'inline',
    },
    mb: {
        marginBottom: 10,
    },
    gridRow: {
        padding: 10,
        borderBottom: '1px solid #f1f1f1',
    },
    auxiliaryRow: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    grayRow: {
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    stakeLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    stakeValue: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
    },
    returnLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
        float: 'right',
    },
    returnValue: {
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.69,
        letterSpacing: 'normal',
        color: '#2d2d2d',
        float: 'right',
    },
    confButton: {
        height: 36,
        backgroundColor: '#ffffff',
        padding: 1,
        border: '1px solid #000000',
        borderRadius: 2,
        width: '100%',
        marginRight: 10,
    },
    cashOutButton: {
        width: 72,
        height: 36,
        backgroundColor: '#000000',
        padding: 1,
        border: '1px solid #000000',
        color: '#ffffff',
        borderRadius: 2,
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: '#000000',

        },
    },

});

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


export class MyBets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.tabValue,
            filter: 'all',

            balance: 0.00,
            balanceCurrency: "USD",
        };

        this.handleTabChange = this.handleTabChange.bind(this);

    }

    componentDidMount() {

        if (this.props.isAuthenticated) {
            const token = localStorage.getItem('token');
            config.headers["Authorization"] = `Token ${token}`;

            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ balance: res.data.main_wallet });
                    this.setState({ balanceCurrency: res.data.currency });
                })
        }
    }

    backClicked = (event) => {
        this.props.show_account_menu();

        this.props.hide_open_bets();
        this.props.hide_settled_bets();
    }

    handleTabChange(event, newValue) {
        this.setState({ value: newValue });
        this.props.onMenuItemClicked('settled-bets');
    }

    handleFilterChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { value, filter } = this.state;

        const openBets = (
            <div className={classes.tabContainer}>
                <div className={classes.mb}>
                    <div className="betsTitle">
                        <FormattedMessage id="open-bets.open-bets" defaultMessage="Open Bets" />
                    </div>
                    <select
                        value={filter}
                        onChange={this.handleFilterChange}
                        className={classes.selectFilter}
                    >
                        <option value={'all'}>All</option>
                        <option value={'none'}>None</option>
                        <option value={'which'}>Which</option>
                    </select>
                </div>
                <Paper className={classes.betPaper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className={classes.gridRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                            <span className={classes.single}>Single</span>
                        </Grid>
                        <Grid item xs={12} className={classes.gridRow}>
                            <span className={classes.betDate}>Bet ID: O658530/38344000</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betName}>Tottenham vs Liverpool</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>Draw @ 7.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>(Win/Draw/Win)</span>
                        </Grid>
                        <Grid item xs={6} className={classes.grayRow}>
                            <span className={classes.stakeLabel}>Stake: </span>
                            <span className={classes.stakeValue}>$6.00</span>
                        </Grid>
                        <Grid item xs={6} className={classes.grayRow}>
                            <span className={classes.returnValue}>$16.00</span>
                            <span className={classes.returnLabel}>Est. Return: </span>
                        </Grid>
                        <Grid item xs={4} className={classes.gridRow}>
                            <Button className={classes.confButton}>
                                <img src={images.src + 'shape.svg'}  alt=""/>
                            </Button>
                        </Grid>
                        <Grid item xs={8} className={classes.gridRow}>
                            <Button className={classes.cashOutButton}> Cash Out: $16.00</Button>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.betPaper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className={classes.gridRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                            <span className={classes.single}>Single</span>
                        </Grid>
                        <Grid item xs={12} className={classes.gridRow}>
                            <span className={classes.betDate}>Bet ID: O658530/38344000</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betName}>Tottenham vs Liverpool</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>Draw @ 7.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>(Win/Draw/Win)</span>
                        </Grid>
                        <Grid item xs={6} className={classes.grayRow}>
                            <span className={classes.stakeLabel}>Stake: </span>
                            <span className={classes.stakeValue}>$6.00</span>
                        </Grid>
                        <Grid item xs={6} className={classes.grayRow}>
                            <span className={classes.returnValue}>$16.00</span>
                            <span className={classes.returnLabel}>Est. Return: </span>
                        </Grid>
                        <Grid item xs={4} className={classes.gridRow}>
                            <Button className={classes.confButton}>
                                <img src={images.src + 'shape.svg'}  alt=""/>
                            </Button>
                        </Grid>
                        <Grid item xs={8} className={classes.gridRow}>
                            <Button className={classes.cashOutButton}> Cash Out: $16.00</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
        const cashOut = (
            <div className={classes.tabContainer}>
                <div className={classes.mb}>
                    <div className="betsTitle">
                        <FormattedMessage id="my-bets.cash-out" defaultMessage="Cash Out" />
                    </div>
                    <select
                        value={filter}
                        onChange={this.handleFilterChange}
                        className={classes.selectFilter}
                    >
                        <option value={'all'}>All</option>
                        <option value={'none'}>None</option>
                        <option value={'which'}>Which</option>
                    </select>
                </div>
                <Paper className={classes.betPaper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className={classes.gridRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                            <span className={classes.single}>Single</span>
                        </Grid>
                        <Grid item xs={12} className={classes.gridRow}>
                            <span className={classes.betDate}>Bet ID: O658530/38344000</span>
                            <img src={images.src + 'curved-arrow.svg'} className={classes.curvedArrow}  alt=""/>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betName}>Tottenham vs Liverpool</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>Draw @ 7.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                        </Grid>
                        <Grid item xs={12} className={classes.auxiliaryRow}>
                            <span className={classes.betDate}>(Win/Draw/Win)</span>
                        </Grid>
                        <Grid item xs={6} className={classes.grayRow}>
                            <span className={classes.stakeLabel}>Stake: </span>
                            <span className={classes.stakeValue}>$6.00</span>
                        </Grid>
                        <Grid item xs={6} className={classes.grayRow}>
                            <span className={classes.returnValue}>$16.00</span>
                            <span className={classes.returnLabel}>Est. Return: </span>
                        </Grid>
                        <Grid item xs={4} className={classes.gridRow}>
                            <Button className={classes.confButton}>
                                <img src={images.src + 'shape.svg'}  alt=""/>
                            </Button>
                        </Grid>
                        <Grid item xs={8} className={classes.gridRow}>
                            <Button className={classes.cashOutButton}> Cash Out: $16.00</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );

        const settledBets = (
            <div className={classes.tabContainer}>
                <Paper className={classes.betPaper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className={classes.firstGridRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                            <span className={classes.single}>Single</span>
                        </Grid>
                        <Grid item xs={12} className={classes.secondGridRow}>
                            <span className={classes.betName}>Tottenham vs Liverpool</span>
                        </Grid>
                        <Grid item xs={6} className={classes.thirdGridRow}>
                            <span className={classes.betScoreLabel}>Correct Score</span>
                            <span className={classes.betScore}>0-1</span>
                        </Grid>
                        <Grid item xs={6} className={classes.thirdGridRow}>
                            <Button className={classes.wonButton}>won</Button>
                        </Grid>
                        <Grid item xs={12} className={classes.thirdGridRow}>
                            <span className={classes.betScoreLabel}>Corners over/Under 9.5</span>
                            <span className={classes.betScore}>Under 9.5 Corners</span>
                        </Grid>
                        <Grid item xs={8} className={classes.fifthGridRow}>
                            <span className={classes.betDetailLabel}>Combined odds:</span>
                            <span className={classes.betDetailLabel}>Stake:</span>
                            <span className={classes.betDetailLabel}>Returns:</span>
                        </Grid>
                        <Grid item xs={4} className={classes.fifthGridRowRight}>
                            <span className={classes.betValueBold}>$15.40</span>
                            <span className={classes.betValue}>$10.00</span>
                            <span className={classes.betValueBold}>%56.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.betIdRow}>
                            <span className={classes.betIDText}>Bet ID: O658530/38344000</span>
                            <span className={classes.copy}>Copy</span>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.betPaper}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className={classes.firstGridRow}>
                            <span className={classes.betDate}>01/06/2019 at 18:00pm</span>
                            <span className={classes.single}>Single</span>
                        </Grid>
                        <Grid item xs={12} className={classes.secondGridRow}>
                            <span className={classes.betName}>Tottenham vs Liverpool</span>
                        </Grid>
                        <Grid item xs={6} className={classes.thirdGridRow}>
                            <span className={classes.betScoreLabel}>Correct Score</span>
                            <span className={classes.betScore}>0-1</span>
                        </Grid>
                        <Grid item xs={6} className={classes.thirdGridRow}>
                            <Button className={classes.lossButton}>loss</Button>
                        </Grid>
                        <Grid item xs={12} className={classes.thirdGridRow}>
                            <span className={classes.betScoreLabel}>Corners over/Under 9.5</span>
                            <span className={classes.betScore}>Under 9.5 Corners</span>
                        </Grid>
                        <Grid item xs={8} className={classes.fifthGridRow}>
                            <span className={classes.betDetailLabel}>Combined odds:</span>
                            <span className={classes.betDetailLabel}>Stake:</span>
                            <span className={classes.betDetailLabel}>Returns:</span>
                        </Grid>
                        <Grid item xs={4} className={classes.fifthGridRowRight}>
                            <span className={classes.betValueBold}>$15.40</span>
                            <span className={classes.betValue}>$10.00</span>
                            <span className={classes.betValueBold}>%56.00</span>
                        </Grid>
                        <Grid item xs={12} className={classes.betIdRow}>
                            <span className={classes.betIDText}>Bet ID: O658530/38344000</span>
                            <span className={classes.copy}>Copy</span>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={12} className={classes.titleRow}>
                        <Button onClick={this.backClicked} className={classes.backButton}>
                            <img src={images.src + 'account-menu-back.svg'}  alt=""/>
                        </Button>
                        <img src={images.src + 'logo-red.svg'} className={classes.logo}  alt=""/>
                        <div className={classes.grow} />
                        <Button variant="contained" className={classes.balanceButton}>
                            <img src={images.src + 'deposit.svg'} className={classes.depositIcon}  alt=""/>
                            <FormattedNumber
                                maximumFractionDigits={2}
                                value={this.state.balance}
                                style={"currency"}
                                currency={this.state.balanceCurrency}
                            />
                        </Button>
                        <Button variant="outlined" className={classes.userButton}>
                            <img src={images.src + 'red-user.svg'}  alt=""/>

                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.myBetsRow}>
                        <div className={classes.myBetsLabel}>
                            <FormattedMessage id="accountmenu.my-bets" defaultMessage="My Bets" />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTabs value={value} onChange={this.handleTabChange} variant="fullWidth">
                            <StyledTab label="Open" />
                            <StyledTab label="Cash Out" />
                            <StyledTab label="Settled" />
                        </StyledTabs>
                        {value === 0 && openBets}
                        {value === 1 && cashOut}
                        {value === 2 && settledBets}
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

MyBets.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(injectIntl(connect(mapStateToProps, { logout, handle_search, setLanguage, show_account_menu, hide_open_bets, hide_settled_bets })(MyBets))));