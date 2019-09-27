import React, { Component } from 'react';
import { lottery_type } from '../actions';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import '../css/slot_type.css';
import { authCheckState } from '../actions';
import Footer from "./footer";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  fab: {
    width: '240px',
    marginTop: '48px',
    backgroundColor: '#ffffff;',
    fontSize: '18px'
  },
  extendedIcon: {
    marginRight: theme.spacing(),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,

  },
  grow: {
    flexGrow: 1,
  },
});

class Lottery_Type extends Component {

  constructor(props) {
    super(props);

    this.state = {
      top_rated: false,
      new: false,
      slots: false,
      jackpots: false,
      table_game: false,
      vitrual_sport: false,
      other_game: false,

      expand: false,

      lottery: [],
      all_lottery: [],

      value: '1'
    }

  }

  async handle_category_change(category) {
    this.setState({ value: category })
  }

  async componentDidMount() {

    this.props.authCheckState();

    this.setState({ ready: true })
  }

  type_change(text) {
    this.props.slot_type(text);
  }

  handle_expand() {
    this.setState({ lottery: this.state.all_lottery, expand: true })
  }

  handlechange(event, newValue) {
    this.setState({ value: newValue })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <TopNavbar activeMenu={'lottery'} />
        <div className={classes.grow}></div>

        <Footer activeMenu={'lottery'} />
      </div>
    );
  }
}

export default withStyles(styles)(connect(null, { lottery_type, authCheckState })(Lottery_Type));