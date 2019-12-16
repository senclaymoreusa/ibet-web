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
import AppBar from "@material-ui/core/AppBar";
import FilterSearchBar from '../components/search_filter';


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
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
    },

    rootDesktop: {
        height: 92,
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },

});

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > div': {
            width: '70%',
            backgroundColor: 'red'
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "uppercase",
        color: "#474747",
        opacity: 1,
        margin: 'auto',
        fontWeight: theme.typography.fontWeightRegular,
        // fontSize: 20,
        outline: 'none',
        height: '100%',
        borderBottom: '2px solid #d8d8d8',
        whiteSpace: 'nowrap',
        "&:focus": {
            height: '100%',
            backgroundColor: '#c5c5c5',
            // borderBottom: '2px solid #ff0000',
        },
        "&:hover": {
            height: '100%',
            backgroundColor: '#c5c5c5',
            // borderBottom: '2px solid #ff0000',
        },
        "&:selected": {
            height: '100%',
            backgroundColor: '#c5c5c5',
            // borderBottom: '2px solid #ff0000',
        },
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
        };

        this.getLabel = this.getLabel.bind(this);
        this.generateGameList = this.generateGameList.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleToUpdate  = this.handleToUpdate.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            var category = this.props.match.params.category;
            // this.setState({isFilter: false});
            console.log(this.state.isFilter);
            if (category && category != "all") {
                axios.get(API_URL + 'games/api/games/?category=' + category, config).then(res => {
                    // var gameArray = []
                    // var chunk = 6;
                    // for (var i = 0, j = res.data.length; i < j; i += chunk) {
                    //     var tempArr = res.data.slice(i, i + chunk);
                    //     gameArray.push(tempArr);
                    // }
                    // this.setState({ all_slots: gameArray });
                    this.generateGameList(res.data);
                });
            } else {
                axios.get(API_URL + 'games/api/games/', config).then(res => {
                    //     var gameArray = []
                    // var chunk = 6;
                    // for (var i = 0, j = res.data.length; i < j; i += chunk) {
                    //     var tempArr = res.data.slice(i, i + chunk);
                    //     gameArray.push(tempArr);
                    // }
                    // this.setState({ all_slots: gameArray });
                    this.generateGameList(res.data);
                });
            }
        }
    }

    componentDidMount() {

        var { category, search } = this.props.match.params;
        console.log(category, search)
        console.log("component did mount again")

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

        this.setState({ urlPath: this.props.history.location.pathname });

        if (category && category != "all") {
            axios.get(API_URL + 'games/api/games/?category=' + category, config).then(res => {
                // console.log(res.data);
                // var gameArray = []
                // var chunk = 6;
                // for (var i = 0, j = res.data.length; i < j; i += chunk) {
                //     var tempArr = res.data.slice(i, i + chunk);
                //     gameArray.push(tempArr);
                // }
                // this.setState({ all_slots: gameArray });
                this.generateGameList(res.data);
                // this.setState({ games: res.data });
            });
        } else {
            axios.get(API_URL + 'games/api/games/', config).then(res => {
                // console.log(res.data);
                // var gameArray = []
                // var chunk = 6;
                // for (var i = 0, j = res.data.length; i < j; i += chunk) {
                //     var tempArr = res.data.slice(i, i + chunk);
                //     gameArray.push(tempArr);
                // }
                // this.setState({ all_slots: gameArray });
                this.generateGameList(res.data);
            });
        }

        axios.get(API_URL + 'games/api/filter/', config).then(res => {
            this.setState({ providers: res.data['Providers'] });
            this.setState({ filterOptions: res.data });
        })


        axios.get(API_URL + 'games/api/games-category/').then(res => {
            this.setState({ categories: res.data });
        })
    }

    handleToUpdate(filterKey, filterValue) {
        // this.handle_category_change('all');
        // this.setState({
        //     isFilter: true,
        // })
        // console.log(this.state.providerFilterStr)
        if (filterKey === 'providers') {
            var key = filterValue.join('+');
            // console.log('providers: ' + key);
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
        //    console.log(res.data);
           this.generateGameList(res.data);
       });
   }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    async handle_category_change(category, sub) {
        // if (category === 'all') {
        //     this.setState({ isFilter: false});
        // }
        console.log(category);
        if (category !== 'all') {
            category = category.cateStr.toLowerCase();
        }
        this.setState({ value: category,
            isFilter: false
         });
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

    handleTabChange(event, newValue) {
        this.setState({ value: newValue })
    }

    renderGameElement(){
        if(this.state.value === 'all' || !this.state.isFilter) {
            return (<div>YAYA</div>)
            
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
                                                <Paper style={{ margin: 15 }}>
                                                    <NavLink to={`/game_detail/${game.pk}`} style={{ textDecoration: 'none' }}>
                                                        <div>
                                                            <img src={gameFields.image_url} height="200" width="100%" alt='Not available' />

                                                            <br />

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
            )
        }
     }
     


    render() {

        const { classes } = this.props;
        // console.log(this.state.isFilter);
        var handleToUpdate  =  this.handleToUpdate;
        let tabs = (
            <StyledTabs centered
                value={this.state.value}
                onChange={this.handleTabChange}>
                > <StyledTab label="ALL"
                    value='all'
                    onClick={() => {
                        this.handle_category_change('all');
                    }} />
                {
                    this.state.categories.map((cate, index) => {
                        var cateArr = cate.split(' ');
                        var cateStr = cateArr.join('-');
                        return (
                            <StyledTab key={index} label={cate}
                                value={cateStr.toLowerCase()}
                                onClick={() => {
                                    this.handle_category_change({ cateStr });
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
                    <img src="https://www.178letou.com/static/styles/desktop/images/game/jptbanner01.jpg"></img>
                </div>
                <div className={classes.banner}>
                    <Paper style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <AppBar position="static" color="default" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            {(this.state.categories.length > 0) && tabs}
                            {/* {tabs} */}
                        </AppBar>
                        <FilterSearchBar providers={this.state.providers} filterOptions={this.state.filterOptions} handleToUpdate = {handleToUpdate.bind(this)} category={this.state.value} isFilter={this.state.isFilter}/>
                    </Paper>


                </div>

                <div className={classes.game}>
                    {
                        // if (this.state.value === 'all' && this.state.isFilter) {
                        //     return 
                        // }
                        this.state.value === 'all' && this.state.isFilter? (

                            // <Grid container item xs={12} sm={12} key="455">
                            //     {  
                            //         this.state.games.map((game, index) => {
                            //             var gameFields = game['fields'];
                            //             return (
                            //                 // <Grid container item xs={12} sm={12} key={index}>
                            //                     <Grid item xs={2} sm={2} key={game.pk}>
                            //                         <Paper style={{ margin: 15 }}>
                            //                             <NavLink to = {{ pathname: `/game_detail/${game.pk}`}} style={{ textDecoration: 'none' }}> 
                            //                                 <div>
                            //                                     <img src={gameFields.image_url} height = "200" width="100%" alt = 'Not available'/>

                            //                                     <br/>

                            //                                     <div className='game-title'> 
                            //                                         {gameFields.name} 
                            //                                     </div>
                            //                                 </div>
                            //                             </NavLink>
                            //                         </Paper>
                            //                     {/* </Grid> */}
                            //                 </Grid>
                            //             )
                            //         })
                            //     }
                            // </Grid>
                            // <div></div>
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
                                                                <Paper style={{ margin: 15 }}>
                                                                    <NavLink to={`/game_detail/${game.pk}`} style={{ textDecoration: 'none' }}>
                                                                        <div>
                                                                            <img src={gameFields.image_url} height="200" width="100%" alt='Not available' />

                                                                            <br />

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
                        )
                            :
                            (<div>YAYA</div>)
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