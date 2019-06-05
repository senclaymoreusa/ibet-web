import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, handle_search, setLanguage, authCheckState } from '../actions';

import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

import { AUTH_RESULT_FAIL } from '../actions';

import axios from 'axios';
import { config } from '../util_config';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL


const styles = theme => ({
    subMenu: {
        width: '99%',
        marginTop: 15
    },
});

export class Searchbar extends React.Component {

    constructor(props) {
        super(props);

        this.search_focus = React.createRef();

        this.state = {
            open: false,
            subMenuType: null,
            showSubMenu: false,

            expandSearchBar: false,
            anchorEl: null,
        };

        this.focus_search = this.focus_search.bind(this);
    }

    focus_search() {
        this.search_focus.current.focus();
    }

    handleSearch = () => {
        this.setState({ expandSearchBar: !this.state.expandSearchBar });
        this.focus_search()
    }

    search() {
        this.props.history.push('/game_search/' + this.state.term);
    }

    componentWillReceiveProps(props) {

    }

    componentDidMount() {
       
    }

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) { return; }

        this.setState({ showSubMenu: false });
        this.setState({ subMenuType: null });
    };

    onSearcTextChanged= event => {
        this.setState({ showSubMenu: true });
        // this.setState({ term: event.target.value })
    }

    render() {

        const { anchorEl } = this.state;
        const { classes } = this.props;
        const { showSubMenu } = this.state;
        const { subMenuType } = this.state;

        let subMenuItem = (<div>hello search:)</div>);


        let searchClass = ["search"];
        if (this.state.expandSearchBar) {
            searchClass.push('open');
        }

        return (
            <div className={searchClass.join(' ')}>
                <div className="search-box">
                    <div className="search-container">
                        <span className="search-icon-before"></span>
                        <input type="search" className="search-input"
                            value={this.state.term}
                            onChange={this.onSearcTextChanged}

                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                            ref={this.search_focus}
                        />
                    </div>
                </div>
                <Popper open={showSubMenu} anchorEl={this.anchorEl} transition disablePortal className={classes.subMenu}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    {subMenuItem}
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <span className="search-button" onClick={this.handleSearch}>
                    <span className="search-icon"></span>
                </span>
            </div>
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

Searchbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState })(Searchbar)));