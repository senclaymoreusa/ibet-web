import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slot_type } from '../actions';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import  TopNavbar from "./top_navbar";
import '../css/slot_type.css';
import axios from 'axios';
import { config } from '../util_config';
import { authCheckState } from '../actions';
import SelectFieldExampleMultiSelect from "./filter_bar";


import Footer from "./footer";


// Material-UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
      marginRight: theme.spacing(),
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

class Slot_Type extends Component {

    constructor(props){
        super(props);

        this.state = {
            top_rated: false,
            new: false,
            // slots: false,
            jackpots: false,
            table_game: false,
            vitrual_sport: false,
            other_game: false,

            expand: false,
    
            slots: [],
            all_slots: [],

            value: 'top-rated'
        }

        this.handle_expand = this.handle_expand.bind(this);
        this.handlechange = this.handlechange.bind(this);

    }

    // async componentDidMount() {

    //     this.props.authCheckState()
        
    //     var URL = API_URL + 'users/api/games/?term=Sports';

    //     await axios.get(URL, config)
    //     .then(res => {

    //         this.setState({ slots: res.data.slice(0, 8) });
    //         this.setState({ all_slots: res.data})
    //     })

    //     this.setState({ ready: true })
    // }

    async componentWillReceiveProps(props) {
        // console.log('componentWillReceiveProps');
        const { type } = this.props.match.params;
        const { sub } = props.match.params;
        const { filter } = props.match.params;
        // console.log("live page filter:" + filter);
        var URL =  API_URL + 'games/api/games/?type=' + type;
        if (sub) {
            URL = URL + '&category=' + sub;
        }
        if (filter) {
            URL = URL + '&' + filter;
        }
        await axios.get(URL, config)
        .then(res => {
            // console.log(res);
            var gameArray = []
            var chunk = 6;
            for (var i = 0, j = res.data.length; i < j; i += chunk) {
                var tempArr = res.data.slice(i, i + chunk);
                gameArray.push(tempArr);
            }
            this.setState({ all_slots: gameArray });
            // this.setState({ all_live_casino: res.data})
        })
    }


    async componentDidMount() {

        this.props.authCheckState();
        const { type } = this.props.match.params;
        const { sub } = this.props.match.params;
        const { filter } = this.props.match.params;
        this.setState({ urlPath: this.props.history.location.pathname });
        var URL =  API_URL + 'games/api/games/?type=' + type;
        if (sub) {
            URL = URL + '&category=' + sub;
        }
        if (filter) {
            URL = URL + '&' + filter;
        }
        await axios.get(URL, config)
        .then(res => {
            // console.log(res);
            var gameArray = []
            var chunk = 6;
            for (var i = 0, j = res.data.length; i < j; i += chunk) {
                var tempArr = res.data.slice(i, i + chunk);
                gameArray.push(tempArr);
            }
            this.setState({ all_slots: gameArray });
        })
        // console.log(this.state.live_casino);
    }

    type_change(text){
        this.props.slot_type(text);
    }

    handle_expand(){
        this.setState({slots: this.state.all_slots,  expand: true})
    }

    // async handle_category_change(category, subnav){
    //     var URL = API_URL + 'users/api/games/?term=' + category

    //     await axios.get(URL, config)
    //     .then(res => {
    //         this.setState({ slots: res.data.slice(0, 8) });
    //         this.setState({ all_slots: res.data})
    //     })

    //     this.setState({ value: subnav});
    // }

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

    handlechange(event, newValue){
        this.setState({value: newValue})
    }

    render() {

        const { classes } = this.props;

        const { formatMessage } = this.props.intl;
        let allMessage = formatMessage({ id: "nav.all" });
        let slotsMessage = formatMessage({ id: "nav.slots" });
        let jackpotsMessage = formatMessage({ id: "nav.jackpots" });
        let tableGamesMessage = formatMessage({ id: "nav.table-games" });
        let otherGamesMessage = formatMessage({ id: "nav.other-games" });

        return (
            <div>
          
                   <div className={classes.root}>
                    <TopNavbar activeMenu={'slots'}/>

            
                    <AppBar position="static" >
                        <StyledTabs centered value={this.props.match.params.sub} onChange={this.handlechange} style={{backgroundColor: '#2d2d2d'}}>
                            {/* <StyledTab 
                                style={{outline: 'none'}} 
                                value="top-rated"
                                label={topRatedMessage} 
                                onClick={() => {
                                    // this.handle_category_change('bet', 'top-rated');
                                    if (this.props.match.params.sub !== 'top-rated') {
                                        this.handle_category_change('top-rated', this.props.match.params.sub);
                                    }
                                }}
                            /> */}
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="all"
                                label={allMessage}
                                onClick={() => {
                                    // this.handle_category_change('ball', 'new');
                                    if (this.props.match.params.sub !== 'all') {
                                        this.handle_category_change('all', this.props.match.params.sub);
                                    }
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="slots"
                                label={slotsMessage} 
                                onClick={() => {
                                    // this.handle_category_change('poker', 'slots');
                                    if (this.props.match.params.sub !== 'slots') {
                                        this.handle_category_change('slots', this.props.match.params.sub);
                                    }
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}}
                                value="jackpots"
                                label={jackpotsMessage}
                                onClick={() => {
                                    // this.handle_category_change('bet', 'jackpots');
                                    if (this.props.match.params.sub !== 'jackpots') {
                                        this.handle_category_change('jackpots', this.props.match.params.sub);
                                    }
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="table-slots"
                                label={tableGamesMessage} 
                                onClick={() => {
                                    // this.handle_category_change('poker', 'table-games');
                                    if (this.props.match.params.sub !== 'table-games') {
                                        this.handle_category_change('table-games', this.props.match.params.sub);
                                    }
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                value="other-games"
                                label={otherGamesMessage} 
                                onClick={() => {
                                    // this.handle_category_change('poker', 'other-games');
                                    if (this.props.match.params.sub !== 'other-games') {
                                        this.handle_category_change('other-games', this.props.match.params.sub);
                                    }
                                }}
                            />
                        </StyledTabs>
                    </AppBar>
                    <SelectFieldExampleMultiSelect/>
                    <Grid container item xs={12} sm={12} key="455">
                        {/* <Grid item xs={11} sm={11} key="234"> */}
                        {  
                            this.state.all_slots.map((games, index) => {
                                return (
                                    <Grid container item xs={12} sm={12} key={index}>
                                    {
                                        games.map(game => {
                                            var gameFields = game['fields'];
                                            // var gameName = '';
                                            // if (gameFields.name) {
                                            //     gameName = gameFields.name.replace(/\s+/g, '-').toLowerCase();
                                            // }
                                            return (
                                                <Grid item xs={2} sm={2} key={game.pk}>
                                                    <Paper style={{ margin: 15 }}>
                                                        <NavLink to = {`/game_detail/${game.pk}`} style={{ textDecoration: 'none' }}> 
                                                            <div>
                                                                <img src={placeholdimage} height = "200" width="100%" alt = 'Not available'/>
                                                                
                                                                <br/>
            
                                                                <div className='game-title'> 
                                                                    {gameFields.name} 
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                    </Paper>
                                                </Grid>
                                            )
                                        })
                                    }
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
            </div>

            {/* {
                this.state.ready &&
                <div className='top-title'>
                    <FormattedMessage id="home.new" defaultMessage='New Games' />
                </div>
            }

            <div className="cont">
            {
                this.state.ready && this.state.slots.map(item => {
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
                this.state.ready && !this.state.expand && this.state.all_slots.length > 8 && 
                <div className='expand-icon'>
                    <Fab  
                        onClick={this.handle_expand}
                        className={classNames(classes.fab, 'text')}
                        variant="extended"
                    > 
                    <FormattedMessage id="home.expand" defaultMessage='View All' />
                    {' (' + this.state.all_slots.length + ')'}
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
                this.state.ready && recent_slots && recent_slots.map(item => {
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
                this.state.ready && this.state.slots.slice(0,4).map(item => {
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
          
          <div className='row'> */}

           

            {/* <div className='type'>
                <NavLink to='/game_list/Sports' style={{ textDecoration: 'none' }}>
                    <div className='title-game'> 
                        <FormattedMessage id="games_type.sports" defaultMessage='Sports' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/soccer.jpg" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div>

            <div className='type'>
                <NavLink to='/game_list/Casino' style={{ textDecoration: 'none' }} >
                    <div className='title-game'> 
                        <FormattedMessage id="games_type.casino" defaultMessage='Casino' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/casino.jpg" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div>

            <div className='type'>
                <NavLink to='/game_list/Poker' style={{ textDecoration: 'none' }} >
                    <div className='title-game'> 
                        <FormattedMessage id="games_type.poker" defaultMessage='Poker' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/poker.jpg" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div>

            <div className='type'> 
                <NavLink to='/game_list/Guide' style={{ textDecoration: 'none' }} >
                    <div className='title-game'> 
                         <FormattedMessage id="games_type.guide" defaultMessage='Guide' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/guide.png" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div> */}

          {/* </div> */}

          <Footer activeMenu={'slots'}/>
        </div>
      );
    }
  }

  export default withStyles(styles)(injectIntl(connect(null, {slot_type, authCheckState})(Slot_Type)));