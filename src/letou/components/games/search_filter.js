import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheckState, handle_referid, hide_landing_page } from '../../../actions';
import { fade, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { config } from '../../../util_config';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import SyncIcon from '@material-ui/icons/Sync';
import SearchBar from './search_autocomplete';
import Menu from '@material-ui/core/Menu';


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
});

const StyledButtonGroup = withStyles({
    root: {
      borderRadius: 3,
      borderColor: '#53abe0',
    //   color: 'red',
      height: 48,
      padding: '0 30px',
    }
  })(ButtonGroup);

export class FilterSearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showFilter: false,
            showSort: false,
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
            filterOptions: {},
            buttonColor: '',
            chips: [],
            anchorEl: null,
            sortFilter: [],
            sortArr: [],
            isSort: false,

        };

        this.openMainMenu  = this.openMainMenu.bind(this);
        this.closeMainMenu  = this.closeMainMenu.bind(this);
        this.selectMenu = this.selectMenu.bind(this);

    }

    async componentDidMount() {
        var { category, search } = this.props.match.params;

        if (!search) {
            this.setState({ jackpotFilter: [] });
            this.setState({ providerFilter: [] });
            this.setState({ featuresFilter: [] });
            this.setState({ themeFilter: [] });
        } else {
            var filterList = search.split('&');
            for (var i = 0; i < filterList.length; i++) {
                var index = filterList[i].indexOf('=');
                var length = filterList[i].length;
                var filterName = filterList[i].slice(0, index);
                var filterValue = filterList[i].slice(index + 1, index + length + 1);
                var filterValueList = filterValue.split('%2B');
                if (filterName === 'jackpot') {
                    this.setState({ jackpotFilter: filterValueList });
                }
                if (filterName === 'provider') {
                    this.setState({ providerFilter: filterValueList });
                }
                if (filterName === 'feature') {
                    this.setState({ featuresFilter: filterValueList });
                }
                if (filterName === 'theme') {
                    this.setState({ themeFilter: filterValueList });
                }
                if (filterName === 'sort') {
                    console.log(filterValueList);
                    this.setState({ sortFilter: filterValueList });
                }
            }
            this.setState({showFilter: true});
        }
        this.setState({ url: this.props.history.location.pathname });
        axios.get(API_URL + 'games/api/filter/', config).then(res => {
            this.setState({ providers: res.data['Providers'] });
            this.setState({ filterOptions: res.data });

            Object.entries(this.state.filterOptions).map((value) => {
                if (value[0] === 'Sort') {
                    this.setState({ sortArr: value[1] }); 
                }
            })
        })
    }


    componentDidUpdate(prevProps) {
        if ((this.props.match.params.category !== prevProps.match.params.category) || (this.props.match.params.search !== prevProps.match.params.search)) {
            var { category, search } = this.props.match.params;
            if (!search) {
                this.setState({ 
                    providerFilter: [],
                    featuresFilter: [],
                    themeFilter: [],
                    featuresFilter: [],
                }) 
            } else {
                var filterList = search.split('&');
                for (var i = 0; i < filterList.length; i++) {
                    var index = filterList[i].indexOf('=');
                    var length = filterList[i].length;
                    var filterName = filterList[i].slice(0, index);
                    var filterValue = filterList[i].slice(index + 1, index + length + 1);
                    var filterValueList = filterValue.split('%2B');
                    if (filterName === 'jackpot') {
                        this.setState({ jackpotFilter: filterValueList });
                    }
                    if (filterName === 'provider') {
                        this.setState({ providerFilter: filterValueList });
                    }
                    if (filterName === 'feature') {
                        this.setState({ featuresFilter: filterValueList });
                    }
                    if (filterName === 'theme') {
                        this.setState({ themeFilter: filterValueList });
                    }
                    if (filterName === 'sort') {
                        this.setState({ sortFilter: filterValueList });
                    }
                }
            }
           
        }
        
    }

    redirectUrl(data) {
        var url = this.props.match.url;
        var parts = url.split('/');
        var baseUrl = parts.slice(0, 2).join('/');
        baseUrl += '/all';
        var filterParts = []
        if (this.state.jackpotFilter.length > 0) {
            const jackpots = this.state.jackpotFilter.join('%2B');
            filterParts.push('jackpot=' + jackpots);
        }
        if (this.state.providerFilter.length > 0) {
            const providers = this.state.providerFilter.join('%2B');
            filterParts.push('provider=' + providers);
        }
        if (this.state.featuresFilter.length > 0) {
            const features = this.state.featuresFilter.join('%2B');
            filterParts.push('feature=' + features);
        }
        if (this.state.themeFilter.length > 0) {
            const themes = this.state.themeFilter.join('%2B');
            filterParts.push('theme=' + themes);
        }
        // console.log(this.state.sortFilter.length);
        if (this.state.sortFilter.length > 0) {
            const sorts = this.state.sortFilter[0].toLowerCase();
            filterParts.push('sort=' + sorts);
        }
        
        const filterUrl = filterParts.join('&');
        const finalUrl = baseUrl + '/' + filterUrl;
        console.log(finalUrl);
        this.props.history.push(finalUrl);
    }

    handleChange(event, name) {
        switch(name) {
            case 'Providers':
                this.setState({ 
                    providerFilter: event.target.value,
                }, () => {
                    this.redirectUrl(event.target.value);
                });
                break;
            case 'Theme':
                this.setState({ 
                    themeFilter: event.target.value
                }, () => {
                    this.redirectUrl(event.target.value);
                });
                break;
            case 'Jackpot':
                this.setState({ 
                    jackpotFilter: event.target.value
                }, () => {
                    this.redirectUrl(event.target.value);
                });
                break;
            case 'Features':
                this.setState({ 
                    featuresFilter: event.target.value
                }, () => {
                    this.redirectUrl(event.target.value);
                });
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

    openMainMenu(event) {
        this.setState({ anchorEl: event.currentTarget,
            // showSort: !this.state.showSort,
            showFilter: false
        });
    }

    closeMainMenu(event) {
        this.setState({ anchorEl: null,
            showSort: !this.state.showSort,
            showFilter: false 
        });
    }

    selectMenu(event, selected) {
        this.setState({ anchorEl: null,
            showSort: false,
            isSort: true,
            sortFilter: [selected]
            // showFilter: false 
        }, () => {
            this.redirectUrl()
        });
    }


    handleDelete = (e, name) => {
        // console.log(name);
        // console.log(this.state.sortFilter);
        if (this.state.providerFilter.includes(name)) {
            let idx = this.state.providerFilter.indexOf(name);
            this.state.providerFilter.splice(idx, 1);
            this.setState({ providerFilter: this.state.providerFilter}, () => {
                this.redirectUrl();
            });
        } else if (this.state.featuresFilter.includes(name)) {
            let idx = this.state.featuresFilter.indexOf(name);
            this.state.featuresFilter.splice(idx, 1);
            this.setState({ featuresFilter: this.state.featuresFilter}, () => {
                this.redirectUrl();
            });
        } else if (this.state.themeFilter.includes(name)) {
            let idx = this.state.themeFilter.indexOf(name);
            this.state.themeFilter.splice(idx, 1);
            this.setState({ themeFilter: this.state.themeFilter}, () => {
                this.redirectUrl();
            });
        } else if (this.state.jackpotFilter.includes(name)) {
            let idx = this.state.jackpotFilter.indexOf(name);
            this.state.jackpotFilter.splice(idx, 1);
            this.setState({ jackpotFilter: this.state.jackpotFilter}, () => {
                this.redirectUrl();
            });
        } else {
            this.setState({sortFilter: []}, () => {
                this.redirectUrl();
            });
        }

        
    };

    handleClick = (e) => {
        this.setState({ providerFilter: [],
                    featuresFilter: [],
                    themeFilter: [],
                    jackpotFilter: [],
                    sortFilter: []   
        }, () => {
            this.redirectUrl();
        });

    }

    render() {
        const { classes } = this.props;
        var arr = this.state.providerFilter.concat(this.state.featuresFilter);
        arr = arr.concat(this.state.themeFilter);
        arr = arr.concat(this.state.jackpotFilter);
        arr = arr.concat(this.state.sortFilter);
        return (
            <div>
                <div style={{flexDirection:'row',justifyContent : 'space-between', paddingTop: 30}}>
                    <ButtonGroup
                    variant="outlined"
                    size="large"
                    // aria-label="large outlined secondary button group"
                    >
                    <Button onClick={() => {
                        this.setState({ showFilter: !this.state.showFilter,
                            showSort: false,
                         });
                                    
                    }} 
                    style={this.state.showFilter ? {backgroundColor: '#53abe0', borderColor:'#53abe0', color: 'white'} : {backgroundColor: 'white', borderColor:'#53abe0', color: '#53abe0'}}>Filter</Button>
                    <Button
                        aria-controls="simple-menu"
                        onClick={this.openMainMenu}
                        style={this.state.showSort ? {backgroundColor: '#53abe0', borderColor:'#53abe0', color: 'white'} : {backgroundColor: 'white', borderColor:'#53abe0', color: '#53abe0'}}
                    >
                    Sort
                    </Button>
                    </ButtonGroup>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        // keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.closeMainMenu}
                    >
                    {   
                        // console.log(this.state.sortArr)
                        this.state.sortArr.map((item, index) => {
                            // console.log(item);
                            return (<MenuItem key={index} onClick={(e) => this.selectMenu(e, item)}>{item}</MenuItem>)
                        })
                    }
                    </Menu>
                    {/* <Button onClick={() => {
                        this.setState({ showSort: !this.state.showSort,
                            showFilter: false,
                         });
                    }} style={this.state.showSort ? {backgroundColor: '#53abe0', borderColor:'#53abe0', color: 'white'} : {backgroundColor: 'white', borderColor:'#53abe0', color: '#53abe0'}}>Sort</Button>  */}

                    <div style={{float: 'right', padding: 0}} >
                        {/* <InputBase
                            className={classes.input}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search...'}}
                        /> */}
                        <SearchBar onRef={actualChild => this.actualChild = actualChild}></SearchBar>
                        {/* <Autocomplete style={{border: '2px solid black', borderRadius: 9.3}}/> */}
                    </div>
                </div>
                <div style={{display: this.state.showFilter ? 'block' : 'none', paddingTop: 40}}>
                    <Grid container item md={12} sm={12} xs={12} key={'566'}>
                    <Grid item md={1} sm={1} xs={1} key={'123'} style={{lineHeight: '68px', color: '#767676'}}>Filter by</Grid>
                    {   
                        Object.entries(this.state.filterOptions).map((value, index) => {
                            if (value[0] !== 'Sort') {
                                return (
                                    <Grid item md={2} sm={2} xs={2} key={index} style={{marginRight: 30}}>
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
                {
                    arr.length > 0 ? 
                    (<div>
                        <Divider style={{ marginTop: 20}}/>
                        <div style={{ marginTop: 20}}>
                        {
                            this.props.match.params.search ? (
                            <Grid container item md={12} sm={12} xs={12} key={'566'}>
                                <Grid item md={2} sm={2} xs={2} key={'123'} style={{color: "#6a6a6a", fontSize: 28, fontFamily: 'Gilroy', maxWidth: "12.6%"}}>
                                    Filter results
                                </Grid>
                                <Grid item md={1} sm={1} xs={1} key={'333'} style={{ maxWidth: "12.6%"}}>
                                    <Chip  icon={<SyncIcon />} style={{margin: 5, marginRight: 10}} key={'224'} label="Clear result" color="primary" onClick={(e) => this.handleClick(e)}/>
                                </Grid>
                                <Grid item md={1} sm={1} xs={1} key={'344'} style={{ maxWidth: "3.5%" }}>
                                    <Divider orientation="vertical" />
                                </Grid>
                                <Grid item md={8} sm={8} xs={8} key={'234'} style={{maxWidth: 1000}}>
                                    {
                                        arr.map((item, index) => {
                                            return (
                                                <Chip style={{margin: 5}} key={index} label={item} onDelete={(e) => this.handleDelete(e, item)} color="primary" />
                                            )
                                        })

                                    }
                                </Grid>
                            </Grid>
                            )
                            : null
                        }
                        </div> 
                    </div>)
                    : 
                    null
                }  
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(FilterSearchBar))));