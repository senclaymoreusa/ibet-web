import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { sports_type } from '../actions';
import { connect } from 'react-redux';
import { FormattedMessage , injectIntl} from 'react-intl';
import TopNavbar from "./top_navbar";
import '../css/slot_type.css';
import axios from 'axios';
import { config } from '../util_config';
import { authCheckState } from '../actions';


// Material-UI
import ExpandMore from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import placeholdimage from '../images/handsomecat.jpg';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;


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
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
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

        // var URL = API_URL + 'users/api/sports/?term=Sports';

        // await axios.get(URL, config)
        // .then(res => {

        //     this.setState({ sports: res.data.slice(0, 8) });
        //     this.setState({ all_sports: res.data})
        // })

        this.setState({ ready: true })
    }

    type_change(text) {
        this.props.slot_type(text);
    }

    handle_expand() {
        this.setState({ sports: this.state.all_sports, expand: true })
    }

    async handle_category_change(category) {
        // var URL = API_URL + 'users/api/sports/?term=' + category

        // await axios.get(URL, config)
        // .then(res => {
        //     this.setState({ sports: res.data.slice(0, 8) });
        //     this.setState({ all_sports: res.data})
        // })


    }

    handlechange(event, newValue) {
        this.setState({ value: newValue })
    }

    async componentDidMount() {

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
            <div>

                <TopNavbar activeMenu={'sports'} />

                <div className={classes.root}>
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
                                style={{ outline: 'none'}}
                                value="tennis"
                                label={tennisMessage}
                                onClick={() => {
                                    this.handle_category_change('tennis');
                                }}
                            />
                        </StyledTabs>
                    </AppBar>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(injectIntl(connect(null, { sports_type, authCheckState })(Sports_Type)));