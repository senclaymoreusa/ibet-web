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

            value: ''
        }

        this.handle_expand = this.handle_expand.bind(this);
        this.handlechange = this.handlechange.bind(this);

    }

    async componentDidMount() {

        this.props.authCheckState()
        
        var URL = API_URL + 'users/api/live_casino/?term=LiveCasino';

        await axios.get(URL, config)
        .then(res => {

            this.setState({ live_casino: res.data.slice(0, 8) });
            this.setState({ all_live_casino: res.data})
        })

        this.setState({ ready: true })
    }

    type_change(text){
        this.props.game_type(text);
    }

    handle_expand(){
        this.setState({live_casino: this.state.all_live_casino,  expand: true})
    }

    async handle_category_change(category){
        var URL = API_URL + 'users/api/live_casino/?term=' + category

        await axios.get(URL, config)
        .then(res => {
            this.setState({ live_casino: res.data.slice(0, 8) });
            this.setState({ all_live_casino: res.data})
        })
    }

    handlechange(event, newValue){
        this.setState({value: newValue})
    }

    render() {

        const { classes } = this.props;

        var recent_live_casino = JSON.parse(localStorage.getItem("recent-live-casino"));

        return (
            <div>
          
                <TopNavbar activeMenu={'live-casino'}/>

                <div className={classes.root}>
                    <AppBar position="static" >
                        <StyledTabs centered value={this.state.value} onChange={this.handlechange} style={{backgroundColor: '#2d2d2d'}}>
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label="LIVE CASINO 1" 
                                onClick={() => {
                                    //this.handle_category_change('in-play');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label="LIVE CASINO 2" 
                                onClick={() => {
                                    //this.handle_category_change('football');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label="LIVE CASINO 3" 
                                onClick={() => {
                                    //this.handle_category_change('basketball');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}}
                                label="LIVE CASINO 4" 
                                onClick={() => {
                                    //this.handle_category_change('tennis');
                                }}
                            />
                        </StyledTabs>
                    </AppBar>
                </div>
            {
                this.state.ready &&
                <div className='top-title'>
                    <FormattedMessage id="home.new" defaultMessage='New Live Casino' />
                </div>
            }

            <div className="cont">
            {
                this.state.ready && this.state.live_casino.map(item => {
                    return (
                    <div key={item.pk} className='each-game' onClick={() => {
                        var array = JSON.parse(localStorage.getItem("recent-live-casino"));
                        if (!array){
                        array = []
                        array.push(item)
                        }else{
                        var check = true;
                        array.map(thing => {
                            if(thing.name === item.name){
                            check = false
                            }
                        })
                        if (check){
                            array.push(item)
                        }
                        
                        }
                        if (array.length > 4){
                        array.shift()
                        }
                        localStorage.setItem("recent-live-casino", JSON.stringify(array));

                    }}>
                        <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}> 

                        {
                        //  item.image ? 
                        //  <img src={item.image} height = "240" width="319" alt = 'Not available'/>
                        //  :
                        <img src={placeholdimage} height = "220" width="300" alt = 'Not available'/>
                        }

                            
                        <br/>
                        <div className='game-title'> 
                            {item.name} 
                        </div>
                        
                        </NavLink>
                    </div>
                    )
                })
            }
            </div>


            {
                this.state.ready && !this.state.expand && this.state.all_live_casino.length > 8 && 
                <div className='expand-icon'>
                    <Fab  
                        onClick={this.handle_expand}
                        className={classNames(classes.fab, 'text')}
                        variant="extended"
                    > 
                    <FormattedMessage id="home.expand" defaultMessage='View All' />
                    {' (' + this.state.all_live_casino.length + ')'}
                    <ExpandMore />
                    </Fab>
                </div>
            }


            {
                this.state.ready &&
                <div className='top-title margin-title' >
                    <FormattedMessage id="home.recent" defaultMessage='Recently Played' />
                </div>
            }

            <div className="cont">
            {
                this.state.ready && recent_live_casino && recent_live_casino.map(item => {
                    return (
                    <div key={item.name} className='each-game' >
                        <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}> 
                        {
                            // item.image ? 
                            // <img src={item.image} height = "240" width="319" alt = 'Not available'/>
                            // :
                            <img src={placeholdimage} height = "220" width="300" alt = 'Not available'/>
                        }
                        <br/>
                        <div className='game-title'> 
                            {item.name} 
                        </div> 
                        </NavLink>
                    </div>
                    )
                })
            }
            </div>

            {
                this.state.ready &&
                <div className='top-title margin-title' >
                    <FormattedMessage id="home.selected" defaultMessage='Selected for you' />
                </div>
            }

            <div className="cont">
            {
                this.state.ready && this.state.live_casino.slice(0,4).map(item => {
                    return (
                    <div key={item.name} className='each-game' >
                        <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}> 
                        {
                            // item.image ? 
                            // <img src={item.image} height = "240" width="319" alt = 'Not available'/>
                            // :
                            <img src={placeholdimage} height = "220" width="300" alt = 'Not available'/>
                        }
                        <br/>
                        <div className='game-title'> 
                            {item.name} 
                        </div> 
                        </NavLink>
                    </div>
                    )
                })
            }
            </div>
          
          <div className='row'>

          </div>
        </div>
      );
    }
  }

  export default withStyles(styles)(connect(null, {game_type, authCheckState})(LiveCasino_Type));