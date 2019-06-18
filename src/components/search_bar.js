import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { logout, handle_search, setLanguage, authCheckState } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../assets/img/svg/search.svg';

import axios from 'axios';
import { config } from '../util_config';

import Typography from '@material-ui/core/Typography';

import Fade from '@material-ui/core/Fade';

import '../css/search_bar.scss';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (

        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    focused: classes.inputInput,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        color: 'white',
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
        margin: theme.spacing.unit,
    },

    inputRoot: {
        flexGrow: 1,
        borderBottom: '1px solid #ffffff',
    },
    inputInput: {

        flexGrow: 1,
        color: 'white',
        textTransform: 'capitalize',
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

    render() {
        return (
            <div>
                {
                    this.props.results.length > 0 ?
                        <div>
                            <div className={this.props.classes.resultMenuTitle}>
                                <FormattedMessage id="search.slots" defaultMessage='Slots' />
                            </div>
                            {
                                this.props.results.slice(0, 3).map(r => (
                                    <MenuItem component={Link} to={`/game_detail/${r.pk}`} className={this.props.classes.resultMenuItem} key={getRandomNumber()} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                                        {r.name}
                                        <SVG className="playIcon" width={24} />
                                        <Typography className="play-text">Play game</Typography>
                                    </MenuItem>
                                ))
                            }
                            <div className={this.props.classes.resultMenuTitle}>
                                <FormattedMessage id="search.entire_site" defaultMessage='Entire Site' />
                            </div>
                            {
                                this.props.results.slice(0, 3).map(r => (
                                    <MenuItem component={Link} to={`/game_detail/${r.pk}`} className={this.props.classes.resultMenuItem} key={getRandomNumber()} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                                        {r.name}
                                        <SVG className="playIcon" width={24} />
                                        <Typography className="play-text">Play game</Typography>
                                    </MenuItem>
                                ))
                            }
                            <div className={this.props.classes.resultMenuTitle}>
                                <FormattedMessage id="search.providers" defaultMessage='Providers' />
                            </div>
                            <MenuItem className={this.props.classes.resultMenuItem} key={1} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                                Game Provider 1
                                <Typography className="play-text">See other games</Typography>
                            </MenuItem>
                            <MenuItem className={this.props.classes.resultMenuItem} key={2} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                                Game Provider 2
                                <Typography className="play-text">See other games</Typography>
                            </MenuItem>
                            <MenuItem className={this.props.classes.resultMenuItem} key={3} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                                Game Provider 3
                                <Typography className="play-text">See other games</Typography>
                            </MenuItem>
                        </div>
                        : null
                }
                <div className={this.props.classes.resultMenuTitle}>
                    <FormattedMessage id="search.quick_link" defaultMessage='Quick Links' />
                </div>
                <MenuItem className={this.props.classes.resultMenuItem} key={1} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                    777 Deluxe
                    <SVG className="playIcon" width={24} />
                    <Typography className="play-text">Play game</Typography>
                </MenuItem>
                <MenuItem className={this.props.classes.resultMenuItem} key={2} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                    21 Wilds
                    <SVG className="playIcon" width={24} />
                    <Typography className="play-text">Play game</Typography>
                </MenuItem>
                <MenuItem className={this.props.classes.resultMenuItem} key={3} onMouseEnter={this.handleOnEnter} onMouseLeave={this.handleOnLeave}>
                    Reign of Gnomes
                    <SVG className="playIcon" width={24} />
                    <Typography className="play-text">Play game</Typography>
                </MenuItem>
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
        };

        this.textInput = React.createRef();

        this.blurInput = this.blurInput.bind(this)
        this.focusInput = this.focusInput.bind(this)

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
        this.state.results = [];  
    }

    getInfo = () => {
        let url = this.getApiUrlWithParam(this.state.query);

        axios.get(url, config)
            .then(({ data }) => {
                this.setState({
                    results: data
                })
            })
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
        let URL = '';

        switch (this.props.activeMenu) {
            case 'slots':
                URL = API_URL + 'users/api/games/?term=' + term;
                break;
            case 'sports':
                URL = API_URL + 'users/api/sports/?term=' + term;
                break;
            case 'live_casino':
                URL = API_URL + 'users/api/live_casino/?term=' + term;
                break;
            case 'lottery':
                URL = API_URL + 'users/api/lottery/?term=' + term;
                break;
            default:
                URL = API_URL + 'users/api/games/?term=' + term;
                break;
        }

        return URL;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <SearchIcon className={classes.searchIcon} />
                <div className={classes.searchInput}>
                    <Downshift id="downshift-options" >
                        {({
                            clearSelection,
                            getInputProps,
                            getItemProps,
                            getLabelProps,
                            getMenuProps,
                            highlightedIndex,
                            inputValue,
                            isOpen,
                            openMenu,
                            selectedItem,
                        }) => {
                            const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
                                onChange: event => {
                                    this.handleInputChange(event)
                                },
                                onBlur: event => {
                                    this.state.results = []
                                },
                                onFocus: openMenu,
                                placeholder: 'Search..',
                            });

                            return (
                                <div className={classes.container}>
                                    <TextField
                                        className={classes.fieldContainer}
                                        inputRef={this.textInput}
                                        InputProps={{
                                            onBlur, onChange, onFocus,
                                            classes: {
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                                focused: classes.inputInput,
                                            },
                                        }}
                                    />
                                    <div {...getMenuProps()}>
                                        {isOpen ? (
                                            <Fade in={this.props.loaded} timeout={1700}>
                                                <Paper className={classes.paper} square>
                                                    <SearchResults {...this.props} results={this.state.results} />
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

export default withStyles(styles)(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState })(SearchBar)));