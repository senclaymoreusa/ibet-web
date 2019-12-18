import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { logout, handle_search, setLanguage, authCheckState } from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { config, images } from '../../../util_config';
import Fade from '@material-ui/core/Fade';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuList from '@material-ui/core/MenuList';


// import '../../css/search_bar.scss';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        color: 'black',
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    fieldContainer: {
        width: '100%'
    },
    paper: {
        position: 'absolute',
        marginTop: 6,
        left: 0,
        right: 0,
        padding: 15,
    },
    chip: {
        margin: theme.spacing(),
    },

    inputRoot: {
        flexGrow: 1,
        borderBottom: '1px solid #ffffff',
        marginTop: 5,
        marginLeft: 3
    },
    inputInput: {

        flexGrow: 1,
        color: 'black',
        // textTransform: 'capitalize',
        borderBottom: '1px solid #ffffff',
        "&:hover": {
            borderBottom: '1px solid #ffffff',
        },

    },
    resultMenuTitle: {
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 12,
        color: "black",
    },
    resultMenuItem: {
        paddingTop: 1,
        paddingBottom: 1,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.75,
        letterSpacing: 'normal',
        color: 'black'
        // background: 'black'
        // borderColor: 'black'
    },
    searchIcon: {
        margin: 7,
        display: 'inline-block'
    },
    searchInput: {
        display: 'inline-block',
        marginLeft: 5,
        marginRight: 5,
        flexGrow: 1,
        width: 300,
        border: '1px solid #e4e4e4',
        borderRadius: 4
    },
    navLink: {
        display: 'inline',
    },
    playIcon: {
        '&:hover': {
            fillRule: '#fe0000',
        }
    },
    liClass: {
        fontSize: 12,
        color: 'black'
    }
});

const SVG = ({
    style = {},
    fill = "transparent",
    width = "100%",
    className = "",
    viewBox = "0 0 32 32"
}) => (
        <svg
            width={width}
            style={style}
            height={width}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon ${className || ""}`}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Search" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
                <g id="Search-slots-icons-32px" transform="translate(-662.000000, -232.000000)" fill={fill} stroke="#FF0000">
                    <g id="::-Search" transform="translate(0.000000, 144.000000)">
                        <path d="M659.725972,92.249792 L667.714674,100.238494 L670.068368,89.896098 L659.725972,92.249792 Z" id="play" transform="translate(664.732233, 95.232233) rotate(45.000000) translate(-664.732233, -95.232233) "></path>
                    </g>
                </g>
            </g>
        </svg>
    );

function getRandomNumber() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    return rand;
}

class SearchResults extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleProvider = this.handleProvider.bind(this);
        this.handleGame = this.handleGame.bind(this);
    }

    handleOnEnter = (event) => {
        if (!event.currentTarget.children[0].classList.contains('active')) {
            event.currentTarget.children[0].classList.add('active');
        }

        event.currentTarget.children[1].style.visibility = "visible";
    };

    handleOnLeave = (event) => {
        if (event.currentTarget.children[0].classList.contains('active')) {
            event.currentTarget.children[0].classList.remove('active');
        }

        event.currentTarget.children[1].style.visibility = "hidden";
    };


    handleProvider = (e, provider) => {
        var url = '/game/all/provider=' + provider;
        window.location.href = url;
    }

    handleGame = (e, game) => {
        var url = `/game_detail/${game}`;
        window.location.href = url;
    }

    render() {
        return (
            <div>
                <MenuList>
                {
                    this.props.results.length > 0 ?
                        <div>
                            <div className={this.props.classes.resultMenuTitle} style={{color: 'black'}}>
                                <FormattedMessage id="search.games" defaultMessage='Games' />
                                {/* {this.props.activeMenu ? this.props.activeMenu : 'Games'} */}
                            </div>
                            {
                                this.props.results.slice(0,5).map(r => (
                                    <MenuItem onMouseUp={(e) => this.handleGame(e, r.pk)} className={this.props.classes.resultMenuItem} key={getRandomNumber()}>
                                        {r.fields.name}
                                        <SVG className="playIcon" width={24} />
                                    </MenuItem>
                                    )
                                )
                            }
                        </div>
                        : null
                }
                </MenuList>
            </div >
        );
    }
}

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: [],
            providerResults: [],
            entireSiteResults: [],
            hasResult: false,
        };

        this.textInput = React.createRef();

        this.blurInput = this.blurInput.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    focusInput = () => {
        this.textInput.current.focus();
    }

    blurInput = () => {
        this.textInput.current.blur();
        this.textInput.current.value = '';
        this.setState({ results: [] });
    }

    getInfo = () => {
        let url = this.getApiUrlWithParam(this.state.query);
        let providerUrl = API_URL + 'games/api/providers/?q=' + this.state.query;
        let entireSiteUrl = API_URL + 'games/api/games/?q=' + this.state.query;
        var that = this;
        axios.all([
            axios.get(url, config),
            axios.get(providerUrl, config),
            axios.get(entireSiteUrl, config)
        ])
            .then(axios.spread(function (games, providers, entire) {
                var gameResults = games.data || [];
                var providerResults = providers.data || [];
                var entireSiteResults = entire.data || [];
                that.setState({ results: gameResults, providerResults: providerResults });
                that.setState({ entireSiteResults: entireSiteResults });
            }))
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getInfo();
            }
        })
    }

    getApiUrlWithParam(term) {
        let URL = API_URL + 'games/api/games/';
        if (term) {
            URL = URL + '?q=' + term;
        }
        if (this.props.activeMenu) {
            URL = URL + '&type=' + this.props.activeMenu;
        }

        return URL;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <img src={images.src + 'search.svg'} className={classes.searchIcon} alt='' />
                <div className={classes.searchInput}>
                    <Downshift id="downshift-options">
                        {({
                            getInputProps,
                            getMenuProps,
                            isOpen,
                            openMenu,
                        }) => {
                            const { onBlur, onChange, onFocus } = getInputProps({
                                onChange: event => {
                                    this.handleInputChange(event)
                                },
                                onBlur: () => {
                                    // this.setState({ results: [] });
                                },
                                onFocus: openMenu,
                                placeholder: 'Search..',
                            });

                            return (
                                <div className={classes.container}>
                                    <TextField
                                        className={classes.fieldContainer}
                                        inputRef={this.textInput}
                                        placeholder='Search by game or provider...'
                                        InputProps={{
                                            onBlur, onChange, onFocus,
                                            disableUnderline: true,
                                            classes: {
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                                focused: classes.inputInput,
                                            },
                                            endAdornment: (
                                                <InputAdornment>
                                                    <IconButton>
                                                        <SearchIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <div {...getMenuProps()}>
                                        {isOpen && (this.state.results.length > 0 || this.state.providerResults.length > 0) ? (
                                            <Fade in={this.props.loaded} timeout={1700}>
                                               <Paper className={classes.paper} square style={{ visibility: 'visible', opacity: 3, zIndex: 300}}>
                                                    <SearchResults {...this.props} results={this.state.results} providers={this.state.providerResults}/>
                                                </Paper> 
                                            </Fade>

                                        ) : null}
                                    </div>
                                </div>
                            );
                        }}
                    </Downshift>
                </div>

            </div >
        );
    }
}


const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: (token !== null && token !== undefined),
        error: state.auth.error,
        lang: state.language.lang,
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState })(SearchBar, SearchResults)));