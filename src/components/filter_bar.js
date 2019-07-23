import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import { config } from '../util_config';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import { withRouter } from 'react-router-dom';




const names = [
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
];

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;
class SelectFieldExampleMultiSelect extends Component {

    // state = {
    //     values: [],
    // };

    constructor(props) {
        super(props);
        this.state = {
            values: [],
            categoryFilter: [],
            jackpotFilter: [],
            providerFilter: [],
            featuresFilter: [],
            themeFilter: [],
            sortFilter: '',
            filterOptions: [],
            url: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.defineValue = this.defineValue.bind(this);
        this.redirectUrl = this.redirectUrl.bind(this);
    }

    // handleChange(event, index, values)  { 
    //     this.setState({ 
    //     values: [...this.state.values , values]
    //     });
    // }

    handleChange(event, name)  { 

        // console.log(event.target.value);
        if (name === 'Games Category') {
            this.setState({ 
                categoryFilter: event.target.value
            }, () => {
                this.redirectUrl(event.target.value);
            });
        }
        if (name === 'Jackpot') {
            this.setState({ 
                jackpotFilter: event.target.value
            }, () => {
                this.redirectUrl(event.target.value);
            });
        }
        if (name === 'Provider') {
            this.setState({ 
                providerFilter: event.target.value
            }, () => {
                this.redirectUrl(event.target.value);
            });
        }
        if (name === 'Feature') {
            this.setState({ 
                featuresFilter: event.target.value
            }, () => {
                this.redirectUrl(event.target.value);
            });
        }
        if (name === 'Theme') {
            this.setState({ 
                themeFilter: event.target.value
            }, () => {
                this.redirectUrl(event.target.value);
            });
        }
        if (name === 'Sort by') {
            this.setState({ 
                sortFilter: event.target.value
            }, () => {
                this.redirectUrl(event.target.value);
            });
        }
    }

    redirectUrl(data) {
        var url = this.props.match.url;

        var parts = url.split('/');
        var baseUrl = parts.slice(0, 4).join('/');
        // console.log('base url: ' + baseUrl);

        var filterParts = []
        if (this.state.categoryFilter.length > 0) {
            const categories = this.state.categoryFilter.join('+');
            filterParts.push('filtercategory=' + categories);
        }
        if (this.state.jackpotFilter.length > 0) {
            const jackpots = this.state.jackpotFilter.join('+');
            filterParts.push('jackpot=' + jackpots);
        }
        if (this.state.providerFilter.length > 0) {
            const providers = this.state.providerFilter.join('+');
            filterParts.push('provider=' + providers);
        }
        if (this.state.featuresFilter.length > 0) {
            const features = this.state.featuresFilter.join('+');
            filterParts.push('feature=' + features);
        }
        if (this.state.themeFilter.length > 0) {
            const themes = this.state.themeFilter.join('+');
            filterParts.push('theme=' + themes);
        }
        if (this.state.sortFilter.length > 0) {
            const sorts = this.state.sortFilter.toLowerCase();
            filterParts.push('sort=' + sorts);
        }
        const filterUrl = filterParts.join('&');
        const finalUrl = baseUrl + '/' + filterUrl;
        // console.log('final url: ' + finalUrl);

        this.props.history.push(finalUrl);
    }

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
            case 'Games Category':
              return ([
                <Select key={'123'}
                    multiple
                    value={this.state.categoryFilter}
                    onChange={ (e) => this.handleChange(e, name)}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                >
                    {this.menuItems(this.state.categoryFilter, data)}
                </Select>

              ]);
            case 'Jackpot':
                return ([
                    <Select key={'456'}
                        multiple
                        value={this.state.jackpotFilter}
                        onChange={ (e) => this.handleChange(e, name)}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {this.menuItems(this.state.jackpotFilter, data)}
                    </Select>

                ]);
            case 'Provider':
                return ([
                    <Select key={'345'}
                        multiple
                        value={this.state.providerFilter}
                        onChange={ (e) => this.handleChange(e, name)}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {this.menuItems(this.state.providerFilter, data)}
                    </Select>

                ]);
            case 'Feature':
                return ([
                    <Select key={'234'}
                        multiple
                        value={this.state.featuresFilter}
                        onChange={ (e) => this.handleChange(e, name)}
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
                        onChange={ (e) => this.handleChange(e, name)}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {this.menuItems(this.state.themeFilter, data)}
                    </Select>

                ]);
            case 'Sort by':
                return ([
                    <Select key={'567'}
                        value={this.state.sortFilter}
                        onChange={(e) => this.handleChange(e, name)}
                        inputProps={{
                        name: 'sort',
                        id: 'sort',
                        }}
                    >
                    {
                        data.map((sort, index) => {
                            var sortValue = sort.replace(/\s+/g, '-').toLowerCase();
                            return (
                                <MenuItem key={index} value={sortValue}>{sort}</MenuItem>
                            )
                        })
                    }
{/*                     
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                ]);
          }
    }

    async componentWillReceiveProps(props) {
        // console.log('componentWillReceiveProps');
        // console.log(props);
        
        var { filter } = props.match.params;
        if (!filter) {
            // console.log("!!!! filter is empty");
            this.setState({ categoryFilter:[] });
            this.setState({ jackpotFilter:[] });
            this.setState({ providerFilter:[] });
            this.setState({ featuresFilter:[] });
            this.setState({ themeFilter:[] });
            this.setState({ sortFilter:[] });
        } else {
            // console.log("filter: " + filter);  
            var filterList = filter.split('&');
            // console.log('list: ' + filterList);
            var list = [];
            for (var i = 0; i < filterList.length; i++) {
                var index = filterList[i].indexOf('=');
                var length = filterList[i].length;
                var filterName = filterList[i].slice(0, index);
                var filterValue = filterList[i].slice(index+1, index+length+1);
                var filterValueList = filterValue.split('+');
                if (filterName == 'category') {
                    this.setState({ categoryFilter: filterValueList});
                }
                if (filterName == 'jackpot') {
                    this.setState({ jackpotFilter: filterValueList});
                }
                if (filterName == 'provider') {
                    this.setState({ providerFilter: filterValueList});
                }
                if (filterName == 'feature') {
                    this.setState({ featuresFilter: filterValueList});
                }
                if (filterName == 'theme') {
                    this.setState({ featuresFilter: filterValueList});
                }
                if (filterName == 'Sort by') {
                    this.setState({ featuresFilter: filterValueList});
                }
            }
        }

    }



    async componentDidMount() {
        // console.log('componentDidMount');
        // console.log(this.props);
        var { filter } = this.props.match.params;
        if (!filter) {
            // console.log("!!!! filter is empty");
            this.setState({ categoryFilter:[] });
            this.setState({ jackpotFilter:[] });
            this.setState({ providerFilter:[] });
            this.setState({ featuresFilter:[] });
            this.setState({ themeFilter:[] });
        } else {
            // console.log("filter: " + filter);  
            var filterList = filter.split('&');
            // console.log('list: ' + filterList);
            var list = [];
            for (var i = 0; i < filterList.length; i++) {
                var index = filterList[i].indexOf('=');
                var length = filterList[i].length;
                var filterName = filterList[i].slice(0, index);
                var filterValue = filterList[i].slice(index+1, index+length+1);
                var filterValueList = filterValue.split('+');
                if (filterName == 'category') {
                    this.setState({ categoryFilter: filterValueList});
                }
                if (filterName == 'jackpot') {
                    this.setState({ jackpotFilter: filterValueList});
                }
                if (filterName == 'provider') {
                    this.setState({ providerFilter: filterValueList});
                }
                if (filterName == 'feature') {
                    this.setState({ featuresFilter: filterValueList});
                }
                if (filterName == 'theme') {
                    this.setState({ featuresFilter: filterValueList});
                }
            }
        }

        this.setState({ url: this.props.history.location.pathname });
        var URL = API_URL + 'games/api/filter/';
        await axios.get(URL, config)
        .then(res => {
            this.setState({ filterOptions: res.data});
        })
        // console.log(this.state.filterOptions);
        // console.log(this.state.url);
    }

    render() {
        return (
            <Grid container item md={12} xs={12} sm={12} key="455">
            {
                this.state.filterOptions.map((filterType, index) => {
                    return (
                        <Grid item md={2} sm={2} xs={2} key={index} style={{ margin: 10 }}>
                            <FormControl style={{ width: "100%" }}>
                                <InputLabel htmlFor="select-multiple">{filterType.name}</InputLabel>
                                {
                                    this.defineValue(filterType.name, filterType.data)
                                }
                                {/* <Select
                                    multiple
                                    value={values}
                                    onChange={this.handleChange}
                                    input={<Input id="select-multiple-checkbox" />}
                                    renderValue={selected => selected.join(', ')}
                                >
                                    {this.menuItems(values, filterType.data)}
                                </Select> */}
                            </FormControl>
                        </Grid>
                    )
                })
            }
            </Grid>
        );
    }
}

export default withRouter(SelectFieldExampleMultiSelect);

