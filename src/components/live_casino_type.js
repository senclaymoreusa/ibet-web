import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { live_casino_type } from '../actions';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import  TopNavbar from "./top_navbar";
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

// import { ReactComponent as Black } from '../images/black-background.svg';
// import { ReactComponent as Jack } from '../images/jackpot.svg';
// import { ReactComponent as Table } from '../images/table-game.svg';
// import { ReactComponent as Poker}  from '../images/poker.svg';
// import { ReactComponent as Grey}  from '../images/grey.svg';

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

class LiveCasino_Type extends Component {

    constructor(props){
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
    
            live_casino: [],
            all_live_casino: [],

            value: 'top-rated'
        }

        this.handle_expand = this.handle_expand.bind(this);
        this.handlechange = this.handlechange.bind(this);

    }

    async componentDidMount() {

        this.props.authCheckState()
        
        // var URL = API_URL + 'users/api/live_casino/?term=LiveCasino';

        // await axios.get(URL, config)
        // .then(res => {

        //     this.setState({ live_casino: res.data.slice(0, 8) });
        //     this.setState({ all_live_casino: res.data})
        // })

        this.setState({ ready: true })
    }

    type_change(text){
        this.props.slot_type(text);
    }

    handle_expand(){
        this.setState({live_casino: this.state.all_live_casino,  expand: true})
    }

    async handle_category_change(category){
        // var URL = API_URL + 'users/api/live_casino/?term=' + category

        // await axios.get(URL, config)
        // .then(res => {
        //     this.setState({ live_casino: res.data.slice(0, 8) });
        //     this.setState({ all_live_casino: res.data})
        // })
    }

    handlechange(event, newValue){
      this.setState({value: newValue})
  }
  
    async componentDidMount() {
        
    }


    render() {

        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        let topRatedMessage = formatMessage({ id: "nav.top-rated" });
        let newMessage = formatMessage({ id: "nav.new" });
        let rouletteMessage = formatMessage({ id: "nav.roulette" });
        let blackjackMessage = formatMessage({ id: "nav.blackjack" });
        let baccaratMessage = formatMessage({ id: "nav.baccarat" });
        let pokerMessage = formatMessage({ id: "nav.poker" });
        let torunamentsMessage = formatMessage({ id: "nav.tournaments" });

        var recent_live_casino = JSON.parse(localStorage.getItem("recent-live-casino"));

        return (
            <div>
          
                <TopNavbar activeMenu={'live-casino'}/>

                <div className={classes.root}>
                    <AppBar position="static" >
                        <StyledTabs centered value={this.state.value} onChange={this.handlechange} style={{backgroundColor: '#2d2d2d'}}>
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="top-rated"
                                label={topRatedMessage} 
                                onClick={() => {
                                    this.handle_category_change('top-rated');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label={newMessage}
                                value="new" 
                                onClick={() => {
                                    this.handle_category_change('new');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label={rouletteMessage}
                                value="roulette"
                                onClick={() => {
                                    this.handle_category_change('roulette');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}}
                                value="blackjack"
                                label={blackjackMessage}
                                onClick={() => {
                                    this.handle_category_change('blackjack');
                                }}
                            />
                             <StyledTab 
                                style={{outline: 'none'}}
                                value="baccarat"
                                label={baccaratMessage}
                                onClick={() => {
                                    this.handle_category_change('baccarat');
                                }}
                            />
                             <StyledTab 
                                style={{outline: 'none'}}
                                value="poker"
                                label={pokerMessage}
                                onClick={() => {
                                    this.handle_category_change('poker');
                                }}
                            />
                             <StyledTab 
                                style={{outline: 'none'}}
                                value="tournaments"
                                label={torunamentsMessage}
                                onClick={() => {
                                    this.handle_category_change('tournaments');
                                }}
                            />

                        </StyledTabs>
                    </AppBar>
                </div>
        
        </div>
      );
    }
  }

  export default withStyles(styles)(injectIntl(connect(null, {live_casino_type, authCheckState})(LiveCasino_Type)));