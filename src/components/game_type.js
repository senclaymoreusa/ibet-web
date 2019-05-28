import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { game_type } from '../actions';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import  TopNavbar from "./top_navbar";
import '../css/game_type.css';
import axios from 'axios';
import { config } from '../util_config';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

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
  });


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
            all_games: []
        }

        this.handle_expand = this.handle_expand.bind(this);

    }

    async componentDidMount() {
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

    async handle_category_change(category){
        var URL = API_URL + 'users/api/games/?term=' + category

        await axios.get(URL, config)
        .then(res => {
            this.setState({ games: res.data.slice(0, 8) });
            this.setState({ all_games: res.data})
        })
    }

    render() {

        const { classes } = this.props;

        var recent_games = JSON.parse(localStorage.getItem("recent-games"));

        return (
            <div>
          
                <TopNavbar activeMenu={'games'}/>

                <div className='game-category-dropdown'>

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

                </div>

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

          </div>
        </div>
      );
    }
  }

  export default withStyles(styles)(connect(null, {game_type})(Game_Type));