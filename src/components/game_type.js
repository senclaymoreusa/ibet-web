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

class Game_Type extends Component {

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
    
            games: [],
            all_games: [],

            value: 'top-rated'
        }

        this.handle_expand = this.handle_expand.bind(this);
        this.handlechange = this.handlechange.bind(this);

    }

    async componentDidMount() {

        this.props.authCheckState()
        
        var URL = API_URL + 'users/api/games/?term=Sports';

        await axios.get(URL, config)
        .then(res => {

            this.setState({ games: res.data.slice(0, 8) });
            this.setState({ all_games: res.data})
        })

        this.setState({ ready: true })
    }

    type_change(text){
        this.props.game_type(text);
    }

    handle_expand(){
        this.setState({games: this.state.all_games,  expand: true})
    }

    async handle_category_change(category, subnav){
        var URL = API_URL + 'users/api/games/?term=' + category

        await axios.get(URL, config)
        .then(res => {
            this.setState({ games: res.data.slice(0, 8) });
            this.setState({ all_games: res.data})
        })

        this.setState({ value: subnav});
    }

    handlechange(event, newValue){
        this.setState({value: newValue})
    }

    render() {

        const { classes } = this.props;

        var recent_games = JSON.parse(localStorage.getItem("recent-games"));

        return (
            <div>
          
                <TopNavbar activeMenu={'games'}/>

                <div className={classes.root}>
                    <AppBar position="static" >
                        <StyledTabs centered value={this.state.value} onChange={this.handlechange} style={{backgroundColor: '#2d2d2d'}}>
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="top-rated"
                                label="TOP RATED" 
                                onClick={() => {
                                    this.handle_category_change('bet', 'top-rated');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="new"
                                label="NEW" 
                                onClick={() => {
                                    this.handle_category_change('ball', 'new');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="slots"
                                label="SLOTS" 
                                onClick={() => {
                                    this.handle_category_change('poker', 'slots');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}}
                                value="jackpots"
                                label="JACKPOTS" 
                                onClick={() => {
                                    this.handle_category_change('bet', 'jackpots');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="table-games"
                                label="TABLE GAMES" 
                                onClick={() => {
                                    this.handle_category_change('poker', 'table-games');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="other-games"
                                label="OTHER GAMES" 
                                onClick={() => {
                                    this.handle_category_change('poker', 'other-games');
                                }}
                            />
                        </StyledTabs>
                    </AppBar>
                </div>
            {
                this.state.ready &&
                <div className='top-title'>
                    <FormattedMessage id="home.new" defaultMessage='New Games' />
                </div>
            }

            <div className="cont">
            {
                this.state.ready && this.state.games.map(item => {
                    return (
                    <div key={item.pk} className='each-game' onClick={() => {
                        var array = JSON.parse(localStorage.getItem("recent-games"));
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
                        localStorage.setItem("recent-games", JSON.stringify(array));

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
                this.state.ready && !this.state.expand && this.state.all_games.length > 8 && 
                <div className='expand-icon'>
                    <Fab  
                        onClick={this.handle_expand}
                        className={classNames(classes.fab, 'text')}
                        variant="extended"
                    > 
                    <FormattedMessage id="home.expand" defaultMessage='View All' />
                    {' (' + this.state.all_games.length + ')'}
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
                this.state.ready && recent_games && recent_games.map(item => {
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
                this.state.ready && this.state.games.slice(0,4).map(item => {
                    return (
                    <div key={item.name} className='each-game' >
                        <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}> 
                        {
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

  export default withStyles(styles)(connect(null, {game_type, authCheckState})(Game_Type));