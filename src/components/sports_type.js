import React, { Component } from 'react';
import { sports_type } from '../actions';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import TopNavbar from "./top_navbar";
import '../css/slot_type.css';
import { authCheckState } from '../actions';

import Footer from "./footer";


// Material-UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = theme => ({
    fab: {
        width: '240px',
        marginTop: '48px',
        backgroundColor: '#ffffff;',
        fontSize: '18px'
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,
        
    },
    grow: {
        flexGrow: 1,
    },
});

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > div": {
            maxWidth: 100,
            width: "100%",
            backgroundColor: "white"
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "uppercase",
        color: "#fff",
        margin: 'auto',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        "&:focus": {
            opacity: 1,
        },
        "&:hover": {
            color: "white",
            opacity: 1,
            backgroundColor: 'black'
        },
    }
}))(props => <Tab disableRipple {...props} />);

class Sports_Type extends Component {

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

            sports: [],
            all_sports: [],

            value: 'live'
        }

        this.handle_expand = this.handle_expand.bind(this);
        this.handlechange = this.handlechange.bind(this);

    }

    async componentDidMount() {

        this.props.authCheckState()

        this.setState({ ready: true })
    }

    type_change(text) {
        this.props.slot_type(text);
    }

    handle_expand() {
        this.setState({ sports: this.state.all_sports, expand: true })
    }

    async handle_category_change(category) {

    }

    handlechange(event, newValue) {
        this.setState({ value: newValue })
    }

    render() {

        const { classes } = this.props;
        const { formatMessage } = this.props.intl;
        let liveMessage = formatMessage({ id: "nav.live" });
        let footballMessage = formatMessage({ id: "nav.football" });
        let basketballMessage = formatMessage({ id: "nav.basketball" });
        let iceHockeyMessage = formatMessage({ id: "nav.ice-hockey" });
        let tennisMessage = formatMessage({ id: "nav.tennis" });

        var recent_sports = JSON.parse(localStorage.getItem("recent-sports"));

        return (
            <div className={classes.root}>
                <TopNavbar activeMenu={'sports'} />
                <AppBar position="static" >
                    <StyledTabs centered value={this.state.value} onChange={this.handlechange} style={{ backgroundColor: '#2d2d2d' }}>
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="live"
                            label={liveMessage}
                            onClick={() => {
                                this.handle_category_change('live');
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="football"
                            label={footballMessage}
                            onClick={() => {
                                this.handle_category_change('football');
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="basketball"
                            label={basketballMessage}
                            onClick={() => {
                                this.handle_category_change('basketball');
                            }}
                        />

                        <StyledTab
                            style={{ outline: 'none' }}
                            value='ice-hockey'
                            label={iceHockeyMessage}
                            onClick={() => {
                                this.handle_category_change('ice-hockey');
                            }}
                        />
                        <StyledTab
                            style={{ outline: 'none' }}
                            value="tennis"
                            label={tennisMessage}
                            onClick={() => {
                                this.handle_category_change('tennis');
                            }}
                        />
                    </StyledTabs>
                </AppBar>
                <div className={classes.grow}></div>
                <Footer activeMenu={'sports'} />
            </div>
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

export default withStyles(styles)(injectIntl(connect(mapStateToProps, { sports_type, authCheckState })(Sports_Type)));