import React from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../../actions';
import { fade, withStyles } from '@material-ui/core/styles';
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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from '@material-ui/core/Link';
import withWidth from '@material-ui/core/withWidth';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import ClearIcon from '@material-ui/icons/Clear';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../../css/game_lobby.css';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    progress: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: 20,
        marginLeft: -20,
        zIndex: 2
    },
    banner: {
        display: 'block',
        margin: 'auto',
        paddingTop: 5,
        [theme.breakpoints.down('md')]: {
            margin: 0,
        }
    },
    game: {
        paddingTop: 20,
        paddingBottom: 20,
        minHeight: 400,
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1),
            paddingLeft: '2%',
            paddingRight: '2%',
            paddingTop: 5,
        }
    },
    rootDesktop: {
        maxWidth: 1400,
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    rootMobile: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '60px',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    content: {
        width: '100%',
        marginBottom: 20,
        [theme.breakpoints.down('md')]: {
            color: '#444444'
        }
    },
    imageBlock: {
        width: 213,
        height: 213,
        [theme.breakpoints.down('sm')]: {
            width: 120,
            height: 120,
        }
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
        maxWidth: 235,
        maxHeight: 235,
        position: 'relative',
        float: 'left',
        overflow: 'hidden'
    },
    item: {
        padding: 10,
        [theme.breakpoints.down('md')]: {
            padding: 2,
        }
    },
    text: {
        fontFamily: 'Gilroy',
        fontSize: '28px',
        color: '#202020',
        // [theme.breakpoints.down('md')]: {
        //     display: 'block',
        // }
    },
    viewall: {
        fontSize: 17,
        color: '#f28f22',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.29,
        letterSpacing: -0.24,
        marginLeft: 10,
        [theme.breakpoints.down('md')]: {
            float: 'right',
        }
    },
    image: {
        width: 235,
        height: 235,
        [theme.breakpoints.down('md')]: {
            height: 120,
        }
    },
    main: {
        width: '100%',
        maxWidth: 1400
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    inputRoot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    categoryTitle: {
        opacity: 0.7,
        fontSize: 28,
        color: '#202020',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.29
    },
    column: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={"prev"}>
            <ArrowForwardIosIcon style={{ color: '#f28f22' }} fontSize="large">  </ArrowForwardIosIcon>
        </button>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={"prev"}>
            <ArrowBackIosIcon style={{ color: '#f28f22' }} fontSize="large">  </ArrowBackIosIcon>
        </button>

    );
}

const StyledTabs = withStyles({
    root: {
        borderBottom: '1px solid #efefef'
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > div': {
            width: '100%',
            backgroundColor: '#53abe0'
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'capitalize',
        color: '#474747',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        '&:focus': {
            opacity: 1,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.38,
            letterSpacing: -0.06,
            textAlign: 'center'
        },
        '&:selected': {
            height: '100%'
        }
    },
    selected: {
        [theme.breakpoints.down('md')]: {
            backgroundColor: 'rgba(228, 228, 228, 0.4)'
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
            games: [],
            expandSearchBar: false,
            loading: false,
        };

        this.getLabel = this.getLabel.bind(this);
        this.generateGameList = this.generateGameList.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleToUpdate = this.handleToUpdate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.searchHandleChange = this.searchHandleChange.bind(this);
        this.searchResult = this.searchResult.bind(this);
    }

    componentDidUpdate(prevProps) {
        var { category } = this.props.match.params;
        if (this.props.match.params.category !== prevProps.match.params.category || (this.props.match.params.search !== prevProps.match.params.search) || (this.props.width !== prevProps.width)) {

            if (category) {
                this.setState({ value: category.toLowerCase() });
            } else {
                this.setState({ value: "all" });
            }
            if (category && category !== "all") {
                axios.get(API_URL + 'games/api/games/?category=' + category, config).then(res => {
                    this.generateGameList(res.data);
                    this.setState({ isFilter: true });
                });
            } else {
                if (this.props.match.params.search) {

                    axios.get(API_URL + 'games/api/games/?' + this.props.match.params.search, config).then(res => {
                        this.setState({ isFilter: true })
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

        var { category } = this.props.match.params;

        if (category) {
            this.setState({ value: category.toLowerCase() });
        } else {
            this.setState({ value: "all" });
        }
        if (!this.props.isAuthenticated) {
            this.setState({ freegame: true });

        } else {
            this.setState({ freegame: false });
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
        this.setState({ loading: true });
        if (category && category !== "all") {
            axios.get(API_URL + 'games/api/games/?category=' + category, config).then(res => {
                this.generateGameList(res.data);
                this.setState({ isFilter: true, loading: false });
            });
        } else {
            if (this.props.match.params.search) {

                axios.get(API_URL + 'games/api/games/?' + this.props.match.params.search, config).then(res => {
                    this.generateGameList(res.data);
                    this.setState({ isFilter: true, loading: false });

                });
            } else {
                // console.log("herehree");
                axios.get(API_URL + 'games/api/games/').then(res => {
                    this.generateGameBycategoryList(res.data, this.state.categories);
                    this.setState({ isFilter: false, loading: false });

                });
            }

        }


    }

    handleToUpdate(filterKey, filterValue) {
        var key = "";
        if (filterKey === 'providers') {
            key = filterValue.join('+');
            this.setState({
                value: 'all',
                isFilter: true,
                providerFilterStr: key
            }, () => {
                this.triggerGameData();
            })

        }
        if (filterKey === 'theme') {
            key = filterValue.join('+');
            this.setState({
                themeFilterStr: key,
                value: 'all',
                isFilter: true
            }, () => {
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

        var gameArray = [];
        var chunk = 3;
        if (this.props.width !== 'xs') {
            chunk = 6;
        }

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
        for (var j = 0; j < games.length; j++) {
            var key = games[j]['fields']['category_name'];
            if (key && key !== 'undefined') {
                gameMap[key].push(games[j])
            }
        }
        this.setState({ games: gameMap });
    }

    handleTabChange(event, newValue) {
        this.setState({ value: newValue, expandSearchBar: false })
    }

    searchHandleChange(event) {
        if (event.target.value.length > 0) {
            this.setState({ searchKey: event.target.value });
        }
    }

    searchResult(event) {
        var search = this.state.searchKey;
        let entireSiteUrl = API_URL + 'games/api/games/?q=' + search;
        axios.get(entireSiteUrl, config).then(res => {
            this.generateGameList(res.data);
        });
    }

    searchCancel = (e) => {
        this.setState({
            searchKey: '',
            expandSearchBar: false,
            all_slots: [],
        });
    }

    linkToCategory(category) {
        var url = `/game/${category}`;
        window.location.href = url;
    }

    renderGameElement() {

        const { classes } = this.props;
        var gridSize = 4;

        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            centerMode:false,
            slidesToShow: 5.5,
            slidesToScroll: 5,
            swipeToSlide: true,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />

            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                }
            }]
        };

        if (this.props.width !== 'xs') {
            settings['nextArrow'] = <NextArrow />;
            settings['prevArrow'] = <PrevArrow />;
            gridSize = 2;
        }


        if (this.state.expandSearchBar) {
            return (
                <div>
                    <Paper component="form" className={classes.inputRoot}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search providers and games..."
                            inputProps={{ 'aria-label': 'Search providers and games...' }}
                            onChange={this.searchHandleChange}
                        />
                        <IconButton className={classes.iconButton} aria-label="search" onClick={this.searchResult}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    {
                        this.state.all_slots.length > 0 ? (
                            <div>
                                <div style={{ display: 'inline-flex', paddingTop: '15px' }}>
                                    <div style={{ paddingBottom: '5px', fontSize: 25.8, fontFamily: 'Gilroy', float: 'left' }}>{`Result for  ${this.state.searchKey}`}</div>
                                    <div style={{ float: 'right' }}><Chip icon={<ClearIcon />} style={{ marginLeft: '100%' }} key={'224'} color="primary" label="Clear" onClick={(e) => this.searchCancel(e)} /></div>
                                </div>
                                <Divider style={{ marginBottom: 20, backgroundColor: 'black' }} />
                                {
                                    this.state.all_slots.map((games, index) => {
                                        return (
                                            <Grid container xs={12} key={index}>
                                                {
                                                    games.map(game => {
                                                        var gameFields = game['fields'];
                                                        return (
                                                            <Grid item xs={gridSize} sm={gridSize} key={game.pk}>
                                                                <NavLink to={`/game_detail/${game.pk}`} target="_blank" style={{ textDecoration: 'none' }}>
                                                                    <div className={classes.item} key={index}>
                                                                        <GridListTile key={game.pk} classes={{ imgFullWidth: classes.imgFullWidth }}>
                                                                            <img src={gameFields.image_url} alt='Not available' className={classes.image} />
                                                                            <GridListTileBar
                                                                                title={gameFields.name}
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
                            </div>)
                            :
                            null
                    }
                </div>
            )
        } else if (!this.state.isFilter) {
            return (
                <div className={classes.banner}>
                    {
                        Object.entries(this.state.games).map((value, index) => {
                            if (value[0]) {
                                var valueArr = value[0].split(' ');
                                var valueStr = valueArr.join('-');
                                valueStr = valueStr.toLowerCase();
                                return (
                                    <div key={index} className={classes.column}>
                                        <div className={classes.row}>
                                            <span className={classes.categoryTitle}> {value[0]}</span>
                                            <Link component="button"
                                                onClick={() => {
                                                    this.linkToCategory(valueStr);
                                                }}
                                                className={classes.viewall}>
                                                {this.getLabel('view-all')}
                                            </Link>
                                        </div>
                                        <div className={classes.content}>
                                            <Slider {...settings} style={{ marginLeft: 0 }}>
                                                {
                                                    value[1].map((game, index) => {
                                                        return (
                                                            <div className={classes.item} key={index}>
                                                                <NavLink to={`/game_detail/${game.pk}`} target="_blank" style={{ textDecoration: 'none' }}>
                                                                    <GridListTile key={game.pk} classes={{ imgFullWidth: classes.imgFullWidth }}>
                                                                        <img src={game.fields.image_url} alt='Not available' className={classes.imageBlock} />
                                                                        <GridListTileBar
                                                                            title={game.fields.name}
                                                                            classes={{
                                                                                root: classes.titleBar,
                                                                            }}
                                                                        />
                                                                    </GridListTile>
                                                                </NavLink>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </Slider>
                                        </div>
                                    </div >
                                )
                            }
                            return null;
                        })
                    }
                </div >
            )

        } else {
            return (
                <div>
                    {
                        this.state.all_slots.map((games, index) => {
                            return (
                                <Grid container xs={12} key={index}>
                                    {
                                        games.map(game => {
                                            var gameFields = game['fields'];
                                            return (
                                                <Grid item xs={gridSize} sm={gridSize} key={game.pk}>
                                                    <NavLink to={`/game_detail/${game.pk}`} target="_blank" style={{ textDecoration: 'none' }}>
                                                        <div className={classes.item} key={index}>
                                                            <GridListTile key={game.pk} classes={{ imgFullWidth: classes.imgFullWidth }}>
                                                                <img src={gameFields.image_url} alt='Not available' className={classes.image} />
                                                                <GridListTileBar
                                                                    title={gameFields.name}
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
                </div>
            )
        }
    }

    handleSearch = () => {
        this.setState({ expandSearchBar: true });
    }



    render() {

        const { classes } = this.props;
        const { loading } = this.state;
        let tabs = (
            <StyledTabs
                value={this.state.value}
                variant="scrollable"
                onChange={this.handleTabChange}>
                >
            {
                    this.props.width === 'xs' ?
                        (<StyledTab icon={<SearchIcon />} onClick={this.handleSearch} aria-label="phone" />) : null
                }
                <StyledTab label={this.getLabel('all-label')}
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
                                    categoryStr = categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1);
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
            <div className={classes.root}>
                {loading && <CircularProgress className={classes.progress} />}
                <TopNavbar />
                <div className={classes.rootDesktop}>
                    <div className={classes.banner}>
                        <img src="https://d18z3w7mepzcqu.cloudfront.net/banner/jptbanner01.jpg" alt="banner"></img>
                    </div>
                    <div className={classes.main}>
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
                </div>
                <div className={classes.rootMobile}>
                    <div>
                        <AppBar position="static" color="default" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            {(this.state.categories.length > 0 && tabs)}
                        </AppBar>
                        {
                            this.state.expandSearchBar ? null : <FilterSearchBar windowSize={this.props.width} />
                        }
                    </div>

                    <div className={classes.game}>
                        {
                            this.renderGameElement()
                        }
                    </div>
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

export default withWidth()(withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(GameLobby)))));