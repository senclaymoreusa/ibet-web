import React, { Component } from 'react';
import { live_casino_type, authCheckState } from '../../actions';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import TopNavbar from './top_navbar';
import '../css/slot_type.css';
import axios from 'axios';
import { config } from '../../util_config';


import Footer from './footer';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import placeholderimage from '../images/casino-stock-photo.jpg';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const handleGameClick = (username, token) => {
    console.log('test game click');
    console.log(username, token);
    window.open(
        `https://666.claymoreasia.com/SingleLogin?merchantcode=IBT&lang=en&userId=${username}&uuId=${token}`
    );
};
const onClickDict = {
    n2_games: handleGameClick
};

const styles = theme => ({
    fab: {
        width: '240px',
        marginTop: '48px',
        backgroundColor: '#ffffff;',
        fontSize: '18px'
    },
    extendedIcon: {
        marginRight: theme.spacing()
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper
    },
    grow: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    lobby: {
        margin: 'auto',
        width: '80%'
        // backgroundColor: 'blue',
        // paddingLeft: 50,
        // paddingRight: 50
    },
    square: {
        cursor: 'pointer'
    }
});

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 100,
            width: '100%',
            backgroundColor: 'white'
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'uppercase',
        color: '#fff',
        margin: 'auto',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        '&:focus': {
            opacity: 1
        },
        '&:hover': {
            color: 'white',
            opacity: 1,
            backgroundColor: 'black'
        }
    }
}))(props => <Tab disableRipple {...props} />);

class LiveCasino_Type extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top_rated: false,
            new: false,
            slots: false,
            jackpots: false,
            table_game: false,
            vitrual_sport: false,
            other_game: false,
            expand: false,
            urlPath: '',
            live_casino: []
        };
    }

    type_change(text) {
        this.props.slot_type(text);
    }

    handleExpand = () => {
        this.setState({
            live_casino: this.state.all_live_casino,
            expand: true
        });
    };

    async handle_category_change(category, sub) {
        // const { sub } = this.props.match.params;
        var url = this.state.urlPath;
        var parts = url.split('/');
        // console.log("domainUrl: "  + domainUrl);
        if (parts.length >= 3) {
            url = '/';
            var path = parts.slice(1, 3).join('/');
            url = url + path;
        }
        // console.log("sub: " + sub);
        // console.log("category: " + category);
        url = url + '/' + category;
        // this.setState({ api: url });
        // console.log("URL: " + url);
        this.props.history.push(url);
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    // async componentWillReceiveProps(props) {
    //     // console.log('componentWillReceiveProps');
    //     const { type } = this.props.match.params;
    //     const { sub } = props.match.params;
    //     const { filter } = props.match.params;
    //     // console.log("live page filter:" + filter);
    //     var URL = API_URL + 'games/api/games/?type=' + type;
    //     if (sub) {
    //         URL = URL + '&category=' + sub;
    //     }
    //     if (filter) {
    //         URL = URL + '&' + filter;
    //     }
    //     await axios.get(URL, config).then(res => {
    //         // console.log(res);
    //         var gameArray = [];
    //         var chunk = 6;
    //         for (var i = 0, j = res.data.length; i < j; i += chunk) {
    //             var tempArr = res.data.slice(i, i + chunk);
    //             gameArray.push(tempArr);
    //         }
    //         this.setState({ live_casino: gameArray });
    //         // this.setState({ all_live_casino: res.data})
    //     });
    // }

    async componentDidMount() {
        this.props.authCheckState();
        

        this.setState({ urlPath: this.props.history.location.pathname });

        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;

        let userInfo = await axios.get(API_URL + 'users/api/user/', config);

        this.setState({
            token: token,
            data: userInfo.data,
            currencyValue: userInfo.data.currency
        });
    }

    render() {
        const { classes } = this.props;
        const { formatMessage } = this.props.intl;

        let allMessage = formatMessage({ id: 'nav.all' });
        let rouletteMessage = formatMessage({ id: 'nav.roulette' });
        let blackjackMessage = formatMessage({ id: 'nav.blackjack' });
        let baccaratMessage = formatMessage({ id: 'nav.baccarat' });
        let pokerMessage = formatMessage({ id: 'nav.poker' });
        let tournamentMessage = formatMessage({ id: 'nav.tournaments' });

        const { data: userdata, live_casino: games, token } = this.state;

        let username = '';
        if (userdata) username = userdata.username;
        return (
            <div className={classes.root}>
                <TopNavbar />
                <AppBar position="static" style={{ zIndex: 0 }}>
                    <StyledTabs
                        centered
                        value={this.props.match.params.sub}
                        onChange={this.handlechange}
                        style={{ backgroundColor: '#2d2d2d' }}
                    >
                        <StyledTab
                            style={{ outline: 'none' }}
                            label={allMessage}
                            value="all"
                            onClick={() => {
                                if (this.props.match.params.sub !== 'all') {
                                    this.handle_category_change('all');
                                }
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            label={rouletteMessage}
                            value="roulette"
                            onClick={() => {
                                if (
                                    this.props.match.params.sub !== 'roulette'
                                ) {
                                    this.handle_category_change('roulette');
                                }
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="blackjack"
                            label={blackjackMessage}
                            onClick={() => {
                                if (
                                    this.props.match.params.sub !== 'blackjack'
                                ) {
                                    this.handle_category_change('blackjack');
                                }
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="baccarat"
                            label={baccaratMessage}
                            onClick={() => {
                                if (
                                    this.props.match.params.sub !== 'baccarat'
                                ) {
                                    this.handle_category_change('baccarat');
                                }
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="poker"
                            label={pokerMessage}
                            onClick={() => {
                                if (this.props.match.params.sub !== 'poker') {
                                    this.handle_category_change('poker');
                                }
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="tournaments"
                            label={tournamentMessage}
                            onClick={() => {
                                if (
                                    this.props.match.params.sub !==
                                    'tournaments'
                                ) {
                                    this.handle_category_change('tournaments');
                                }
                            }}
                        />
                    </StyledTabs>
                </AppBar>
                {/* <SelectFieldExampleMultiSelect /> */}
                <Grid
                    id="game-lobby"
                    className={classes.lobby}
                    container
                    item
                    xs={12}
                    sm={12}
                    key="455"
                >
                    <Grid container item xs={12} sm={12}>
                        {games.map((game, i) => {
                            var gameFields = game['fields'];
                            return (
                                <GameSquare
                                    pk={game.pk}
                                    imageURL={gameFields.imageURL}
                                    name={gameFields.name}
                                    key={i}
                                    user={username}
                                    token={token}
                                    className={classes.square}
                                />
                            );
                        })}
                    </Grid>
                </Grid>
                <Footer activeMenu={'live-casino'} />
            </div>
        );
    }
}

function GameSquare(props) {
    const user = props.user;
    const token = props.token;
    const fallback = () => {
        console.log('hi :)');
    };
    let onClick = onClickDict[props.name] || fallback;
    return (
        <Grid
            item
            xs={3}
            sm={3}
            key={props.pk}
            onClick={() => onClick(user, token)}
        >
            <Paper style={{ margin: 25 }} className={props.className}>
                <div>
                    <img
                        src={props.imageURL || placeholderimage}
                        height="200"
                        width="100%"
                        alt="Not available"
                    />
                    <br />
                    <div className="game-title">{props.name}</div>
                    {/* <div>{user}</div>
                    <div>{token}</div> */}
                </div>
            </Paper>
        </Grid>
    );
}

const mapStateToProps = state => {
    const { token } = state.auth;
    return {
        isAuthenticated: token !== null && token !== undefined,
        error: state.auth.error,
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        connect(mapStateToProps, { live_casino_type, authCheckState })(
            LiveCasino_Type
        )
    )
);
