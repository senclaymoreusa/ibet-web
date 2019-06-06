import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

import { logout, handle_search, setLanguage, authCheckState } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { AUTH_RESULT_FAIL } from '../actions';

import axios from 'axios';
import { config } from '../util_config';

import '../css/top_navbar.scss';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
];

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
                    hovered: classes.inputInput,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

function renderSuggestion(suggestionProps) {
    const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion.label}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion.label}
        </MenuItem>
    );
}
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(value, { showEmpty = false } = {}) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0 && !showEmpty
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

            if (keep) {
                count += 1;
            }

            return keep;
        });
}


const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
        color: 'white',
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 3000,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
        height: 200,
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
        borderBottom: '1px solid #ffffff',
        "&:hover": {
            borderBottom: '1px solid #ffffff',
        },
        
    },
    inlineBlock: {
        display: 'inline-block'
    }
});


export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
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
                                    if (event.target.value === '') {
                                        clearSelection();
                                    }
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
                                                {getSuggestions(inputValue, { showEmpty: true }).map((suggestion, index) =>
                                                    renderSuggestion({
                                                        suggestion,
                                                        index,
                                                        itemProps: getItemProps({ item: suggestion.label }),
                                                        highlightedIndex,
                                                        selectedItem,
                                                    }),
                                                )}
                                            </Paper>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        }}
                    </Downshift>
                </div>
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

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, { logout, handle_search, setLanguage, authCheckState })(SearchBar)));