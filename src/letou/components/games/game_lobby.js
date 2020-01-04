import React from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../../css/banner.css';
import { withRouter } from 'react-router-dom';
import { config } from '../../../util_config';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import '../../css/help.css'
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import FilterSearchBar from './search_filter';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from '@material-ui/core/Link';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        //alignItems: 'center',
        backgroundColor: theme.palette.background.paper,

    },

    banner: {
        display: 'block',
        margin: 'auto',
        paddingTop: 5,
    },

    game: {
        paddingTop: 20,
        margin: 'auto',
    },

    rootDesktop: {
        height: 92,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
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

    imgFullWidth: {
        transform: 'none',

    }, 
    item: {
        padding:10,
    
    },
    text:{
        fontFamily: 'Gilroy',
        fontSize: '28px',
        color: '#202020',
    },
    viewall: {
        fontFamily: 'Gilroy',
        fontSize: '17px',
        color: '#f28f22',
        padding:10
    }
    

});

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={"prev"}>
            <ArrowForwardIosIcon style={{color: '#f28f22'}} fontSize="large">  </ArrowForwardIosIcon>
        </button>
    );
  }
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={"prev"}>
            <ArrowBackIosIcon style={{color: '#f28f22'}} fontSize="large">  </ArrowBackIosIcon>
        </button>
  
    );
  }

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > div': {
            width: '100%',
            backgroundColor: '#53abe0',
            
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "uppercase",
        opacity: 1,
        margin: 'auto',
        fontWeight: theme.typography.fontWeightBold,
        // fontSize: 20,
        color: '#6a6a6a',
        outline: 'none',
        height: '100%',
        borderBottom: '2px solid #d8d8d8',
        whiteSpace: 'nowrap',
        "&:focus": {
            height: '100%',
            color: "#53abe0",
        },
        "&:hover": {
            height: '100%',
            color: "#53abe0",
        },
        "&:selected": {
            height: '100%',
            color: "#53abe0",
        }
    }
}))(props => <Tab disableRipple {...props} />);

export class GameLobby extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            freegame: true,
            data: '',
            sessionKey: null,

            searchKey: '',
            all_slots: [],
            providers: [],
            filterOptions: {},
            value: this.props.match.params.category,
            urlPath: '',
            categories: [],
            providerFilterStr: '',
            themeFilterStr: '',
            isFilter: false,
            games:[],
        };

        this.getLabel = this.getLabel.bind(this);
        this.generateGameList = this.generateGameList.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleToUpdate  = this.handleToUpdate.bind(this);
    }

    componentDidUpdate(prevProps) {
        var { category, search } = this.props.match.params;
        if (this.props.match.params.category !== prevProps.match.params.category || (this.props.match.params.search !==  prevProps.match.params.search )) {
            var category = this.props.match.params.category;

            if (category) {
                this.setState({ value: category.toLowerCase() });
            } else {
                this.setState({ value: "all" });
            }
            if (category && category != "all") {
                axios.get(API_URL + 'games/api/games/?category=' + category, config).then(res => {
                    this.generateGameList(res.data);
                    this.setState({ isFilter: true });
                });
            } else {
                if (this.props.match.params.search) {
                    
                    axios.get(API_URL + 'games/api/games/?' + this.props.match.params.search, config).then(res => {
                        this.setState({isFilter: true})
                        this.generateGameList(res.data);
                    });
                } else {
                    // console.log("herehree");
                    axios.get(API_URL + 'games/api/games/').then(res => {
                        // this.generateGameList(res.data);
                        this.generateGameBycategoryList(res.data);
                        this.setState({ isFilter: false });
                    });
                }
                
            }
        }
    }

    componentDidMount() {

        var { category, search } = this.props.match.params;

        if (category) {
            this.setState({ value: category.toLowerCase() });
        } else {
            this.setState({ value: "all" });
        }
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

        axios.get(API_URL + 'games/api/games-category/').then(res => {
            // console.log(res.data);
            this.setState({ categories: res.data });
        })

        this.setState({ urlPath: this.props.history.location.pathname });

        if (category && category != "all") {
            axios.get(API_URL + 'games/api/games/?category=' + category, config).then(res => {
                this.generateGameList(res.data);
                this.setState({isFilter: true})
            });
        } else {
            if (this.props.match.params.search) {
                
                axios.get(API_URL + 'games/api/games/?' + this.props.match.params.search, config).then(res => {
                    this.setState({isFilter: true})
                    this.generateGameList(res.data);
                });
            } else {
                // console.log("herehree");
                axios.get(API_URL + 'games/api/games/').then(res => {
                    this.generateGameBycategoryList(res.data, this.state.categories);
                    this.setState({isFilter: false});
                    // this.generateGameList(res.data);
                });
            }
            
        }

       
    }

    handleToUpdate(filterKey, filterValue) {
        if (filterKey === 'providers') {
            var key = filterValue.join('+');
            this.setState({
                value: 'all',
                isFilter: true,
                providerFilterStr: key}, () => {
                this.triggerGameData();
            })

        }
        if (filterKey === 'theme') {
            var key = filterValue.join('+');
            this.setState({themeFilterStr: key,
            value: 'all',
            isFilter: true}, () => {
                this.triggerGameData();
            })
        }
    }

    triggerGameData() {
        axios.get(API_URL + 'games/api/games/?provider=' + this.state.providerFilterStr + '&theme=' + this.state.themeFilterStr, config).then(res => {
           this.generateGameList(res.data);
       });
   }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    handle_category_change(category, sub) {
        if (category !== 'all') {
            category = category.cateStr.toLowerCase();
        }
        this.setState({ value: category });
        var url = this.state.urlPath;
        var parts = url.split('/');
        if (parts.length >= 2) {
            url = '/';
            var path = parts.slice(1, 2).join('/');
            url = url + path;
        }
        url = url + '/' + category;
        this.props.history.push(url);
    }

    async generateGameList(games) {

        var gameArray = []
        var chunk = 6;
        for (var i = 0, j = games.length; i < j; i += chunk) {
            var tempArr = games.slice(i, i + chunk);
            gameArray.push(tempArr);
        }
        this.setState({ all_slots: gameArray });

    }

    generateGameBycategoryList(games) {
        var categoriesList = this.state.categories;
        
        var gameMap = {}
        for (var i = 0; i < categoriesList.length; i++) {
            gameMap[categoriesList[i]] = [];
        }
        for (var i = 0; i < games.length; i++) {
            var key = games[i]['fields']['category_name'];
            if (key && key !== 'undefined') {
                gameMap[key].push(games[i])
            }
        }
        this.setState({ games: gameMap });
    }

    handleTabChange(event, newValue) {
        this.setState({ value: newValue })
    }

    linkToCategory(category) {
        var url = `/game/${category}`;
        window.location.href = url;
    }

    renderGameElement(){

        const { classes } = this.props;

        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5.5,
            slidesToScroll: 5,
            swipeToSlide: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        var gridTileStyle= {
            position: 'relative',
            float: 'left',
            width: '100%',
            maxheight: '220px',
            maxwidth: '220px',
            overflow: 'hidden',
            // height: '100% !important'
        }

        if(!this.state.isFilter) {
            return (
                <div className={classes.banner}>
                    {
                        Object.entries(this.state.games).map((value, index) => {
                            if (value[0]) {
                                var valueArr = value[0].split(' ');
                                var valueStr = valueArr.join('-');
                                valueStr = valueStr.toLowerCase();
                                return(
                                    <div key={index}>
                                        <Typography component="p" paragraph={true} className={classes.text}>
                                            {value[0]}
                                            <Link component="button" onClick={() => {
                                                this.linkToCategory(valueStr);
                                            }} className={classes.viewall}> {this.getLabel('view-all')} </Link>
                                        </Typography>
                                        <div className={classes.test}>
                                            <Slider {...settings}>
                                            {
                                                value[1].map( (game, index) => {
                                                    return (
                                                        <div className={classes.item} key={index}>
                                                            <GridListTile key={game.pk} {...gridTileStyle} classes={{imgFullWidth: classes.imgFullWidth}}>
                                                                <img src={game.fields.image_url} alt='Not available' width='213px' height='213px' />
                                                            <GridListTileBar
                                                                title={game.fields.name}
                                                                classes={{
                                                                    root: classes.titleBar,
                                                                }}
                                                            />
                                                            </GridListTile>
                                                        </div>
                                                    )
                                                }) 
                                            }
                                            </Slider>
                                            
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            )
            
        } else {
            return (
            <Grid container item xs={12} sm={12} key="455">
                {
                    this.state.all_slots.map((games, index) => {
                        return (
                            <Grid container item xs={12} sm={12} key={index}>
                                {
                                    games.map(game => {
                                        var gameFields = game['fields'];
                                        return (
                                            <Grid item xs={2} sm={2} key={game.pk}>
                                                <NavLink to={`/game_detail/${game.pk}`} style={{ textDecoration: 'none' }}>
                                                    <div className={classes.item} key={index}>
                                                        <GridListTile key={game.pk} {...gridTileStyle} classes={{imgFullWidth: classes.imgFullWidth}}>
                                                            <img src={gameFields.image_url} alt='Not available' style={{ 'width': '100%', 'height': '213px' }}/>
                                                        <GridListTileBar
                                                            title={gameFields.name}
                                                            // subtitle={PROVIDER[value['fields'].provider]}
                                                            // titlePosition="top"
                                                            classes={{
                                                                root: classes.titleBar,
                                                            }}
                                                        />
                                                        </GridListTile>
                                                    </div>
                                                </NavLink>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        )
                    })
                }
            </Grid>
            )
        }
     }
     


    render() {

        const { classes } = this.props;
        var handleToUpdate  =  this.handleToUpdate;
        let tabs = (
            <StyledTabs centered
                value={this.state.value}
                onChange={this.handleTabChange}>
                > <StyledTab label="ALL"
                    value='all'
                    onClick={() => {
                        if (this.props.match.params.category !== 'all') {
                            this.handle_category_change('all');                            
                        }
                    }} />
                {
                    this.state.categories.map((cate, index) => {
                        var cateArr = cate.split(' ');
                        var cateStr = cateArr.join('-');
                        return (
                            <StyledTab key={index} label={cate}
                                value={cateStr.toLowerCase()}
                                onClick={() => {
                                    var categoryStr = this.props.match.params.category;
                                    var categoryStr = categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1);
                                    if (categoryStr !== cateStr) {
                                        this.handle_category_change({ cateStr });
                                    }
                                }} />
                        )
                    })
                }
            </StyledTabs >
        );

        return (
            <div className={classes.rootDesktop}>
                <TopNavbar />
                <div className={classes.banner}>
                    <img src="https://d18z3w7mepzcqu.cloudfront.net/banner/jptbanner01.jpg"></img>
                </div>
                <div className={classes.banner}>
                    <Paper style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <AppBar position="static" color="default" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            {(this.state.categories.length > 0) && tabs}
                        </AppBar>
                        <FilterSearchBar />
                    </Paper>
                </div>

                <div className={classes.game}>
                    {
                        this.renderGameElement()
                    }
                </div>


                <Footer />
            </div >


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