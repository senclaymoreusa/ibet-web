import React from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../css/banner.css';
import { withRouter } from 'react-router-dom';
import { config } from '../../util_config';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import '../css/help.css'
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '@material-ui/core/Icon';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';





import placeholdimage from '../images/handsomecat.jpg';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL


const GAME_URL = "https://lsl.omegasys.eu/ps/game/GameContainer.action?platform=NETENT_CAS&brandId=524&gameId="

// const gameList = ["imperialriches_mobile_html_sw","berryburst_not_mobile_sw","blackjack3_not_mobile_sw", "butterflystaxx2_not_mobile_sw","kingof3kingdoms_not_mobile_sw",
// "wishmasteroct_not_mobile_sw","wildturkey_not_mobile_sw","whosthebride_not_mobile_sw","monkeys_not_mobile_sw","grandspinn_no_progressive_not_mobile_sw"]


console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,

  },

  game: {
    // marginTop: 20,
    // marginLeft: 200,
    // marginRight: 200,
    display: 'flex',
    
  },
  test: {
    width:1300,

  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    margin: 200
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  item: {
    padding:10,
   

  }

});


const AntTabs = withStyles({
    root: {
    borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
    backgroundColor: '#1890ff',
    },
    // indicator: {
    //     display: "flex",
    //     justifyContent: "center",
    //     backgroundColor: "transparent",
    //     "& > div": {
    //         maxWidth: 100,
    //         width: "100%",
    //         backgroundColor: "white"
    //     }
    // }
})(Tabs);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "red" }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={"prev"}>
        //     <Icon color="secondary"> ^ </Icon>
        // </button>
      <div
        className={className}
        style={{ ...style, background: "red" }}
        onClick={onClick}
        />
    );
  }

export class GameLobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        current: 0,
        freegame: true,
        data: '',
        sessionKey : null,
        
        searchKey: '',
        games:[],
        providers: [],
    };

    this.getLabel = this.getLabel.bind(this);
    this.providerSelect = this.providerSelect.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }

  componentDidMount() {

    var { provider, search } = this.props.match.params;
    console.log(provider, search)
    console.log("component did mount again")
    if (!this.props.isAuthenticated) {
        this.state.freegame = true;
    } else {
        this.state.freegame = false;
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({ data: res.data });
            
        });
    }

    // axios.get(API_URL + 'games/api/games/?provider=' + this.state.searchKey, config).then(res => {
    //     console.log(res.data);
    //     this.setState({ games: res.data });
    // });

    if (!provider) {
        provider = '';
    }

    axios.get(API_URL + 'games/api/games/?provider=' + provider, config).then(res => {
        console.log(res.data);
        this.setState({ games: res.data });
    });
    

    axios.get(API_URL + 'games/api/providers/', config).then(res => {
        console.log(res);
        this.setState({ providers: res.data });
    }); 
  }
  
  getLabel(labelId) {
    const { formatMessage } = this.props.intl;
    return formatMessage({ id: labelId });
  }

  providerSelect(index, provider) {
        console.log("here " + provider);
        if (provider === "All") {
            this.setState({
                current: 0,
                searchKey: ""
            })
        } else {
            this.setState({
                current: index,
                searchKey: provider
            })
            // this.props.history.push('/game/'+provider);
        }
  }

  handlechange(event, newValue) {
        this.setState({ value: newValue })
    }

  async handle_category_change(category, sub) {
      console.log(category);
    // const { sub } = this.props.match.params;
    // var url = this.state.urlPath;
    // var parts = url.split('/');
    // // console.log("domainUrl: "  + domainUrl);
    // if (parts.length >= 3) {
    //     url = '/';
    //     var path = parts.slice(1, 3).join('/');
    //     url = url + path;
    // }
    // // console.log("sub: " + sub);
    // // console.log("category: " + category);
    // url = url + '/' + category;
    // // this.setState({ api: url });
    // // console.log("URL: " + url);
    // this.props.history.push(url);
}


  render() {
  
    const { classes } = this.props;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5.5,
      slidesToScroll: 5.5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    var gridTileStyle= {
        position: 'relative',
        float: 'left',
        width: '100%',
        minHeight: '200px',
        minWidth: '200px',
        overflow: 'hidden',
        height: '100% !important'
    }
    const items = this.state.games.map((game, key) => [
        <div className={classes.item}>
            <GridListTile key={game['fields'].id} {...gridTileStyle}>
                <img src={game['fields'].image_url} alt='Not available' width='213px' height='213px' />
            <GridListTileBar
            title={game['fields'].name}
            subtitle={game['fields'].provider}

            classes={{
                root: classes.titleBar,
                title: classes.title,
            }}
        
            />
            </GridListTile>
        </div>
      ]);
   
    
    return (
        <div className={classes.root}>
            <TopNavbar />
            {/* <div className={classes.game}>
            <Paper square> */}
            {/* <li style={{ marginLeft: 200, marginTop: 50}}> NETENT</li> */}
            {/* <ul className="SecFilter">
                <li key={0} className={this.state.current == 0 ? "Active" : ""} onClick={this.providerSelect.bind(this, 0, "All")}><a>{ "ALL" }</a></li>
                {
                    this.state.providers.map((provider, index) => {
                        return (
                            <li key={index+1} className={this.state.current == index+1 ? "Active" : ""} onClick={this.providerSelect.bind(this, index, provider)}><a>{ provider }</a></li>
                        )
                    })
                }
            </ul> */}
            {/* <AntTabs centered value={""} onChange={this.handlechange} style={{ backgroundColor: '#2d2d2d' }}>
                <AntTabs label="All" 
                onClick={() => {
                    if (this.props.match.params.sub !== 'all') {
                        this.handle_category_change('all');
                    }
                }}/> */}
                {/* <Tab label="Active" /> */}
                {/* <AntTabs label="Disabled" disabled />
                <AntTabs label="Active" />
            </AntTabs> */}
                {/* <Tabs
                    style={{ outline: 'none' }}
                    // label={allMessage}
                    value="all"
                    onClick={() => {
                        if (this.props.match.params.sub !== 'all') {
                            this.handle_category_change('all');
                        }
                    }}
                />
                <Tabs
                    style={{ outline: 'none' }}
                    // label={rouletteMessage}
                    value="roulette"
                    onClick={() => {
                        if (this.props.match.params.sub !== 'roulette') {
                            this.handle_category_change('roulette');
                        }
                    }}
                /> */}
            {/* </Paper>
        </div> */}
        {/* <div className={classes.game}> */}

            {/* <Grid container item xs={12} sm={12} key="455">
                {  
                    this.state.games.map((game, index) => {
                        var gameFields = game['fields'];
                        return (
                            <Grid container item xs={12} sm={12} key={index}>
                                <Grid item xs={2} sm={2} key={game.pk}>
                                    <Paper style={{ margin: 15 }}>
                                        <NavLink to = {{ pathname: `/game_detail/${game.pk}`}} style={{ textDecoration: 'none' }}> 
                                            <div>
                                                <img src={gameFields.image_url} height = "200" width="100%" alt = 'Not available'/>
                                                
                                                <br/>

                                                <div className='game-title'> 
                                                    {gameFields.name} 
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Paper>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid> */}
           
            <div > 
                <Typography component="p" paragraph={true}>
                    {this.getLabel('recommended')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {items}
                    </Slider> 
                </div>
           
           
                <Typography component="p" paragraph={true}>
                    {this.getLabel('top-games')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {items}
                    </Slider> 
                </div>
          
                <Typography component="p" paragraph={true}>
                    {this.getLabel('slot-machine')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {items}
                    </Slider> 
                </div>

                <Typography component="p" paragraph={true}>
                    {this.getLabel('cumulative-award')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {/* {items} */}
                    </Slider> 
                </div>

                <Typography component="p" paragraph={true}>
                    {this.getLabel('table-games')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {/* {items} */}
                    </Slider> 
                </div>

                <Typography component="p" paragraph={true}>
                    {this.getLabel('scratch-card')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {/* {items} */}
                    </Slider> 
                </div>

                <Typography component="p" paragraph={true}>
                    {this.getLabel('gaming-room')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {/* {items} */}
                    </Slider> 
                </div>

                <Typography component="p" paragraph={true}>
                    {this.getLabel('video-poker')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {/* {items} */}
                    </Slider> 
                </div>

                <Typography component="p" paragraph={true}>
                    {this.getLabel('fishing-games')}
                </Typography>
                <div className={classes.test}>
                    <Slider {...settings}>
                        {/* {items} */}
                    </Slider> 
                </div>
            </div>
           
           
        
           

        {/* </div> */}
        <Footer />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        lang: state.language.lang,
        isAuthenticated: (token !== null && token !== undefined)
    }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(GameLobby))));