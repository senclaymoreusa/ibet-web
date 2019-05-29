import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { game_type } from '../actions';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import  TopNavbar from "./top_navbar";
import '../css/game_type.css';
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
      textTransform: "none",
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

class Lottery_Type extends Component {

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
    
            lottery: [],
            all_lottery: [],

            value: '1'
        }

    }

    async handle_category_change(category){
      this.setState({ value: category })
  }

    async componentDidMount() {

        this.props.authCheckState()
    }


    render() {

        const { classes } = this.props;

        var recent_lottery = JSON.parse(localStorage.getItem("recent-lottery"));

        return (
            <div>
          
                <TopNavbar activeMenu={'lottery'}/>

                <div className={classes.root}>
                    <AppBar position="static" >
                        <StyledTabs centered value={this.state.value} onChange={this.handlechange} style={{backgroundColor: '#2d2d2d'}}>
                            <StyledTab 
                                style={{outline: 'none'}} 
                               label="LOTTERY 1" 
                                value='1'
                                onClick={() => {
                                  this.handle_category_change('1');
                              }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label="LOTTERY 2" 
                                value='2'
                                onClick={() => {
                                  this.handle_category_change('2');
                              }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label="LOTTERY 3" 
                                value='3'
                                onClick={() => {
                                  this.handle_category_change('3');
                              }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}}
                                label="LOTTERY 4" 
                                value='4'
                                onClick={() => {
                                  this.handle_category_change('4');
                              }}
                            />
                        </StyledTabs>
                    </AppBar>
                </div>

        </div>
      );
    }
  }

  export default withStyles(styles)(connect(null, {game_type, authCheckState})(Lottery_Type));