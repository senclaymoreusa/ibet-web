import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import { logout, handle_search, setLanguage, authCheckState } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Modal from '@material-ui/core/Modal';


import { ReactComponent as PlayIcon } from '../assets/img/svg/play-inactive.svg';
import { ReactComponent as PlayHoverIcon } from '../assets/img/svg/play-active.svg';
import { ReactComponent as ProviderIcon } from '../assets/img/svg/provider.svg';

import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { config } from '../util_config';


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
        flexGrow: 1,
        color: 'white',
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
        padding: 15,
    },
    chip: {
        margin: theme.spacing.unit,
    },

    inputRoot: {
        flexWrap: 'wrap',
    },
    inputInput: {
        width: 'auto',
        flexGrow: 1,
        color: 'white',
        borderBottom: '1px solid #ffffff',
        "&:hover": {
            borderBottom: '1px solid #ffffff',
        },

    },
    inlineBlock: {
        display: 'inline-block'
    },
    icon: {
        //marginLeft: 40,
    },
    liClass: {
        fontSize: 12,
        color: 'black'
    }
});



class Suggestions extends React.Component {
    render() {

        const options = (<div>
            <div className="resultMenuTitle">
                <FormattedMessage id="search.quick_link" defaultMessage='Quick Links' />
            </div>
            {this.props.results.map(r => (
                <MenuItem className='resultMenuItem' key={r.status_id}>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            {r.name}
                        </Grid>
                        <Grid item xs={1}>
                            <a href="#0" className="expand-link">
                                <PlayIcon className="icon icon-expand" />
                                <PlayHoverIcon className="icon icon-contract" />
                            </a>

                        </Grid>
                        <Grid item xs={7}>
                        </Grid>
                    </Grid>
                </MenuItem>
            ))
            }
        </div>);

        return (<div>{options}</div>);
    }
}

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: [],
        };
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
                {/* <div className={classes.inlineBlock}>
                    <span className="search-icon-before"></span>
                </div> */}
                <div className={[classes.inlineBlock, classes.grow]}>
                    <Downshift id="downshift-options">
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
                                onFocus: openMenu,
                                placeholder: 'Search..',
                            });

                            return (
                                <div className={classes.container}>
                                    {renderInput({
                                        fullWidth: true,
                                        classes,
                                        InputLabelProps: getLabelProps({ shrink: true }),
                                        InputProps: { onBlur, onChange, onFocus },
                                        inputProps,
                                    })}
                                    <div {...getMenuProps()}>
                                        {isOpen ? (
                                            <Paper className={classes.paper} square>
                                                <Suggestions results={this.state.results} />
                                            </Paper>
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