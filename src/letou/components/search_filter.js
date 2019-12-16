import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import { fade, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
// import FilterDropdown from '../components/filter_dropdown';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../util_config';






const API_URL = process.env.REACT_APP_DEVELOP_API_URL



const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },

  searchDiv: {
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    flexDirection:'row',
    justifyContent : 'space-between'
  },

  containerProducts: {
    paddingTop: 40,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

  formControl: {
    margin: theme.spacing(1),
    width: '80%',
    border: '1px solid',
    width: 200,
    height: 48,
    opacity: 0.5,
    borderRadius: '3px',
    backgroundColor: '#cdcbc',
    // minWidth: 120,
    // maxWidth: 300,
  },

//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//     backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//     },
// },
// searchIcon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// },
});

export class FilterSearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showBar: false,
            names: [
                'Oliver Hansen',
                'Van Henry',
                'April Tucker',
                'Ralph Hubbard',
                'Omar Alexander',
                'Carlos Abbott',
                'Miriam Wagner',
                'Bradley Wilkerson',
                'Virginia Andrews',
                'Kelly Snyder',
                ],
            providers: [],
            jackpotFilter: [],
            providerFilter: [],
            featuresFilter: [],
            themeFilter: [],

        };

        // this.getLabel = this.getLabel.bind(this);
        // this.generateGameList = this.generateGameList.bind(this);
        // this.handleTabChange = this.handleTabChange.bind(this);
    }

    async componentDidMount() {
    
    }


    componentDidUpdate(prevProps) {
        // if (this.props.category === 'all') {
        //     this.state
        // }
        // console.log(this.props.category);
        // console.log(prevProps.category);
        // console.log("!!!!" + this.props.isFilter);
        // console.log(prevProps.isFilter);
        if ((this.props.category !== 'all' && this.props.category !== prevProps.category)) {
            this.setState({ 
                providerFilter: [],
                featuresFilter: [],
                themeFilter: [],
                featuresFilter: [],
            }) 
        }
        
    }

    handleChange(event, name) {
        var handleToUpdate  =  this.props.handleToUpdate;
        switch(name) {
            case 'Providers':
                this.setState({ 
                    providerFilter: event.target.value
                }, () => {
                    handleToUpdate('providers', this.state.providerFilter);
                });
                break;
            case 'Theme':
                this.setState({ 
                    themeFilter: event.target.value
                }, () => {
                    handleToUpdate('theme', this.state.themeFilter);
                });
                break;
            case 'Jackpot':
                this.setState({ jackpotFilter: event.target.value});
                break;
            case 'Features':
                this.setState({ featuresFilter: event.target.value});
                break;
            default:
                return null;
          }
    };

    menuItems(values, filters) {
        return filters.map((filter) => (
            <MenuItem
                key={filter}
                value={filter}
            >
                <Checkbox checked={values.indexOf(filter) > -1} />
                <ListItemText primary={filter} />
            </MenuItem>
        ));
    }

    defineValue(name, data) {
        switch (name) {
            case 'Providers':
                return ([
                    <Select key={'345'}
                        multiple
                        value={this.state.providerFilter}
                        onChange={(e) => this.handleChange(e, name)}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {this.menuItems(this.state.providerFilter, data)}
                    </Select>

            ]);
            case 'Jackpot':
                return ([
                    <Select key={'456'}
                        multiple
                        value={this.state.jackpotFilter}
                        onChange={(e) => this.handleChange(e, name)}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {this.menuItems(this.state.jackpotFilter, data)}
                    </Select>

                ]);
            
            case 'Features':
                return ([
                    <Select key={'234'}
                        multiple
                        value={this.state.featuresFilter}
                        onChange={(e) => this.handleChange(e, name)}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {this.menuItems(this.state.featuresFilter, data)}
                    </Select>

                ]);
            case 'Theme':
                return ([
                    <Select key={'456'}
                        multiple
                        value={this.state.themeFilter}
                        onChange={(e) => this.handleChange(e, name)}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {this.menuItems(this.state.themeFilter, data)}
                    </Select>

                ]);
            default:
                return null;
        }
    }



    render() {
        const { classes } = this.props;
        return (
            <div>
                <div style={{flexDirection:'row',justifyContent : 'space-between', paddingTop: 30}}>
                    <ButtonGroup
                    color="secondary"
                    size="large"
                    aria-label="large outlined secondary button group"
                    >
                    <Button onClick={() => {
                        // if (this.state.category !== 'all') {
                        //     this.props.history.push('/game/all');
                        // } else {
                        //     this.setState({ showBar: !this.state.showBar });
                        // }
                        this.setState({ showBar: !this.state.showBar });
                                    
                                }}>Filter</Button>
                    <Button>Sort</Button> 
                    </ButtonGroup>
                        
                    <div style={{float: 'right', border: '2px solid black', borderRadius: 9.3,}} >
                        <InputBase
                            className={classes.input}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search...'}}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    {/* </Grid> */}
                </div>
                {/* <div style={{float: 'right'}} >
                    <Paper component="form" className={classes.searchDiv}>
                        
                    </Paper>
                </div> */}
                <div style={{display: this.state.showBar ? 'block' : 'none', paddingTop: 40, paddingLeft: 50}}>
                    <Grid container item md={12} sm={12} xs={12} key={'566'}>
                    {   
                        Object.entries(this.props.filterOptions).map((value, index) => {
                            if (value[0] !== 'Sort') {
                                return (
                                    <Grid item md={3} sm={3} xs={3} key={index}>
                                        <FormControl className={classes.formControl} key={index}>
                                        <InputLabel htmlFor="select-multiple">{value[0]}</InputLabel>
                                            {
                                                this.defineValue(value[0], value[1])
                                            }
                                        </FormControl>
                                    </Grid>
                                )
                            }
                        })
                    }
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(FilterSearchBar));