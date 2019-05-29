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

            value: ''
        }

        this.handle_expand = this.handle_expand.bind(this);
        this.handlechange = this.handlechange.bind(this);

    }

    async componentDidMount() {

        this.props.authCheckState()
        
        var URL = API_URL + 'users/api/lottery/?term=Lottery';

        await axios.get(URL, config)
        .then(res => {

            this.setState({ lottery: res.data.slice(0, 8) });
            this.setState({ all_lottery: res.data})
        })

        this.setState({ ready: true })
    }

    type_change(text){
        this.props.game_type(text);
    }

    handle_expand(){
        this.setState({lottery: this.state.all_lottery,  expand: true})
    }

    async handle_category_change(category){
        var URL = API_URL + 'users/api/lottery/?term=' + category

        await axios.get(URL, config)
        .then(res => {
            this.setState({ lottery: res.data.slice(0, 8) });
            this.setState({ all_lottery: res.data})
        })
    }

    handlechange(event, newValue){
        this.setState({value: newValue})
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
                                onClick={() => {
                                    //this.handle_category_change('in-play');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label="LOTTERY 2" 
                                onClick={() => {
                                    //this.handle_category_change('football');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}} 
                                label="LOTTERY 3" 
                                onClick={() => {
                                    //this.handle_category_change('basketball');
                                }}
                            />
                            <StyledTab 
                                style={{outline: 'none'}}
                                label="LOTTERY 4" 
                                onClick={() => {
                                    //this.handle_category_change('tennis');
                                }}
                            />
                        </StyledTabs>
                    </AppBar>
                </div>

                {/* <div className='game-category-dropdown'>

                    <div className={this.state.top_rated ? 'each-game-category-selected' : 'each-game-category'}
                    onClick={() => {
                        this.setState({top_rated: true, new: false, slots: false, jackpots: false, table_game: false, vitrual_sport: false, other_game: false})
                        this.handle_category_change('bet');
                    }}>
                        TOP RATED
                    </div>

                    <div className={this.state.new ? 'each-game-category-selected' : 'each-game-category'}
                    onClick={() => {
                        this.setState({top_rated: false, new: true, slots: false, jackpots: false, table_game: false, vitrual_sport: false, other_game: false})
                        this.handle_category_change('ball');
                    }}>
                        NEW
                    </div>

                    <div className={this.state.slots ? 'each-game-category-selected' : 'each-game-category'}
                    onClick={() => {
                        this.setState({top_rated: false, new: false, slots: true, jackpots: false, table_game: false, vitrual_sport: false, other_game: false})
                        this.handle_category_change('poker');
                    }}>
                        SLOTS
                    </div>

                    <div className={this.state.jackpots ? 'each-game-category-selected' : 'each-game-category'} 
                    onClick={() => {
                        this.setState({top_rated: false, new: false, slots: false, jackpots: true, table_game: false, vitrual_sport: false, other_game: false})
                        this.handle_category_change('bet');
                    }}>
                        JACKPOTS
                    </div>

                    <div className={this.state.table_game ? 'each-game-category-selected' : 'each-game-category'}
                    onClick={() => {
                        this.setState({top_rated: false, new: false, slots: false, jackpots: false, table_game: true, vitrual_sport: false, other_game: false})
                        this.handle_category_change('poker');
                    }}>
                        TABLE GAMES
                    </div>

                    <div className={this.state.vitrual_sport ? 'each-game-category-selected' : 'each-game-category'}
                    onClick={() => {
                        this.setState({top_rated: false, new: false, slots: false, jackpots: false, table_game: false, vitrual_sport: true, other_game: false})
                        this.handle_category_change('basketball');
                    }}>
                        VITURAL SPORTS
                    </div>

                    <div className={this.state.other_game ? 'each-game-category-selected' : 'each-game-category'}
                    onClick={() => {
                        this.setState({top_rated: false, new: false, slots: false, jackpots: false, table_game: false, vitrual_sport: false, other_game: true})
                        this.handle_category_change('football');
                    }}>
                        OTHER GAMES
                    </div>

                </div> */}

                {/* <div className='category-section'>

                    <div className="wrapper" onClick={() => {
                        this.setState({jackpot: true, table_game: false, poker: false})
                        this.handle_category_change('ball');
                    }}>
                    {
                        !this.state.jackpot ?
                        <div>
                            <Grey />
                            <Jack className="logo"/>
                            <br/>
                            <div className='category-title'> 
                                Jackpots
                            </div>
                        </div>  
                        :
                        <div>
                            <Black className='selected-bottom'/>
                            <Jack className="logo "/>
                            <br/>
                            <div className='category-title'> 
                                Jackpots
                            </div>
                        </div>

                    }

                </div>

                <div className="wrapper" onClick={() => {
                    this.setState({table_game: true, jackpot: false, poker: false});
                    this.handle_category_change('bet');
                }}>
                    {
                        !this.state.table_game ?
                        <div> 
                            <Grey />
                            <Table className="logo"/>
                            <br/>
                            <div className='category-title'> 
                                Table Games
                            </div>
                        </div>

                        :
                        <div> 
                            <Black className='selected-bottom' />
                            <Table className="logo"/>
                            <br/>
                            <div className='category-title'> 
                                Table Games
                            </div>
                        </div>
                    }
                    
                </div>

            
                <div className="wrapper" onClick={() => {
                    this.setState({poker: true, jackpot: false, table_game: false})
                    this.handle_category_change('poker');
                }}>
                    {
                        !this.state.poker ?
                        <div>
                            <Grey />
                            <Poker className="logo-poker"/>
                            <br/>
                            <div className='category-title'> 
                                Poker
                            </div>
                        </div> 
                        :
                        <div> 
                            <Black className='selected-bottom' />
                            <Poker className="logo-poker"/>
                            <br/>
                            <div className='category-title'> 
                                Poker
                            </div>
                        </div>
                    }
                
                </div>


            </div> */}

            {
                this.state.ready &&
                <div className='top-title'>
                    <FormattedMessage id="home.new" defaultMessage='New Games' />
                </div>
            }

            <div className="cont">
            {
                this.state.ready && this.state.lottery.map(item => {
                    return (
                    <div key={item.pk} className='each-game' onClick={() => {
                        var array = JSON.parse(localStorage.getItem("recent-lottery"));
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
                        localStorage.setItem("recent-lottery", JSON.stringify(array));

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
                this.state.ready && !this.state.expand && this.state.all_lottery.length > 8 && 
                <div className='expand-icon'>
                    <Fab  
                        onClick={this.handle_expand}
                        className={classNames(classes.fab, 'text')}
                        variant="extended"
                    > 
                    <FormattedMessage id="home.expand" defaultMessage='View All' />
                    {' (' + this.state.all_lottery.length + ')'}
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
                this.state.ready && recent_lottery && recent_lottery.map(item => {
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
                this.state.ready && this.state.lottery.slice(0,4).map(item => {
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

           

            {/* <div className='type'>
                <NavLink to='/game_list/Lottery' style={{ textDecoration: 'none' }}>
                    <div className='title-game'> 
                        <FormattedMessage id="lottery_type.lottery" defaultMessage='Lottery' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/soccer.jpg" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div>

            <div className='type'>
                <NavLink to='/game_list/Casino' style={{ textDecoration: 'none' }} >
                    <div className='title-game'> 
                        <FormattedMessage id="lottery_type.casino" defaultMessage='Casino' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/casino.jpg" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div>

            <div className='type'>
                <NavLink to='/game_list/Poker' style={{ textDecoration: 'none' }} >
                    <div className='title-game'> 
                        <FormattedMessage id="lottery_type.poker" defaultMessage='Poker' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/poker.jpg" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div>

            <div className='type'> 
                <NavLink to='/game_list/Guide' style={{ textDecoration: 'none' }} >
                    <div className='title-game'> 
                         <FormattedMessage id="lottery_type.guide" defaultMessage='Guide' />
                    </div>
                    <br/>
                    <img src="http://localhost:8000/media/game_image/guide.png" height = '100' width = '150' alt='Not available' ></img>
                </NavLink>
                
            </div> */}

          </div>
        </div>
      );
    }
  }

  export default withStyles(styles)(connect(null, {game_type, authCheckState})(Lottery_Type));