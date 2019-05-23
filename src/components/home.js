import React, { Component } from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import { connect } from 'react-redux';
import { authCheckState } from '../actions';
import { FormattedMessage } from 'react-intl';
import Marquee from "react-smooth-marquee";
import axios from 'axios';
import { config } from '../util_config';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

import '../css/home.css';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';


//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL

console.log("Line 15, process env URL = " + API_URL);


const styles = theme => ({
  fab: {
    width: '150px'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

export class Home extends Component {

  state = {
    notices: [],
    sports: [],
    casino: [],
    poker: [],
    ready: false,
    expand: false,

    all_sports: []
  }

  async componentDidMount() {

    this.props.authCheckState()
    axios.get(API_URL + 'operation/api/notice-message', config)
      .then(res => {
        //   console.log(res);
        this.setState({ notices: res.data });
      })

    var URL = API_URL + 'users/api/games/?term=Sports';

    await axios.get(URL, config)
      .then(res => {

        this.setState({ sports: res.data.slice(0, 8) });
        this.setState({ all_sports: res.data})
      })

    URL = API_URL + 'users/api/games/?term=Casino';

    await axios.get(URL, config)
      .then(res => {
        this.setState({ casino: res.data.slice(0, 3) });
      })

    URL = API_URL + 'users/api/games/?term=Poker';

    await axios.get(URL, config)
      .then(res => {
        this.setState({ poker: res.data.slice(0, 3) });
      })

    this.setState({ ready: true })

  }

  handle_expand(){
    this.setState({sports: this.state.all_sports})
    this.setState({expand: true})
  }

  render() {

    const { classes } = this.props;

    let notices = this.state.notices;

    let noticeStr = '';
    notices.forEach(notice => {
      let startTime = moment(notice.start_time);
      startTime = startTime.format('MM/DD/YYYY h:mm a');
      let endTime = moment(notice.end_time);
      endTime = endTime.format('MM/DD/YYYY h:mm a');
      let i18nMessage = notice.message;
      if (this.props.lang === 'zh') {
        i18nMessage = notice.message_zh;
      } else if (this.props.lang === 'fr') {
        i18nMessage = notice.message_fr;
      } else {
        i18nMessage = notice.message;
      }
      let message = startTime + " ~ " + endTime + " " + i18nMessage;
      noticeStr += message;
      for (let i = 0; i < 20; i++) {
        noticeStr += "\u00A0";
      }
    });

    var recent_games = JSON.parse(localStorage.getItem("recent-games"));

    return (
      <div >
        <TopNavbar style={{zIndex: '100'}} />
       {noticeStr && <div style={{ overflowX: 'hidden', zIndex: 0 }}><Marquee >{noticeStr}</Marquee></div>}

        {
          this.state.ready &&
          <div className='top-title'>
            <FormattedMessage id="home.new" defaultMessage='New Games' />
          </div>
        }

        <div className="cont">
          {
            this.state.ready && this.state.sports.map(item => {
                return (
                  <div key={item.pk} className='each-game' onClick={() => {
                     var array = JSON.parse(localStorage.getItem("recent-games"));
                     if (!array){
                       array = []
                       array.push(item)
                     }else{
                       var check = true;
                       array.map(thing => {
                         if(thing.name === item.name){
                           check = false
                         }
                       })
                      if (check){
                        array.push(item)
                      }
                       
                     }
                     if (array.length > 4){
                       array.shift()
                     }
                     localStorage.setItem("recent-games", JSON.stringify(array));

                  }}>
                    <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}> 
                      <img src={item.image} height = "100" width="100" alt = 'Not available'/>
                      <br/>
                      {item.name} 
                    </NavLink>
                  </div>
                )
            })
          }
        </div>

        {
          this.state.ready && !this.state.expand && 
          <div className='expand-icon'>
            <Fab  
                onClick={this.handle_expand.bind(this)}
                className={classes.fab}
                variant="extended"
            > 
              <FormattedMessage id="home.expand" defaultMessage='View All' />
              {' (' + this.state.all_sports.length + ')'}
              <i className="material-icons"> expand_more </i>
            </Fab>
          </div>
        }

        {
          this.state.ready &&
          <div className='top-title' >
            <FormattedMessage id="home.recent" defaultMessage='Recently Played' />
          </div>
        }

        <div className="cont">
          {
            this.state.ready && recent_games && recent_games.map(item => {
                return (
                  <div key={item.name} className='each-game' >
                    <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}> 
                      <img src={item.image} height = "100" width="100" alt = 'Not available'/>
                      <br/>
                      {item.name} 
                    </NavLink>
                  </div>
                )
            })
          }
        </div>
        


        {/* {
          this.state.ready &&
          <div className='poker' style={{ marginTop: height * 0.1 }}>
            <FormattedMessage id="home.poker" defaultMessage='Most Popluar Poker' />
          </div>
        }

        <div className="row" >
          {
            this.state.ready && this.state.poker.map(item => {
              return (
                  <div key={item.name} className='each-game'>
                    <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}> 
                    {item.name} 
                    <br/>
                    <img src={item.image} height = "100" width="100" alt = 'Not available'/>
                    </NavLink>
                  </div>
                )
            })
          }
        </div>

        {
          this.state.ready &&
          <div className='casino' style={{ marginTop: height * 0.1 }}>
            <FormattedMessage id="home.casino" defaultMessage='Most Popluar Casino' />
          </div>
        }

        <div className="row" >
          {
            this.state.ready && this.state.casino.map(item => {
              return (
                  <div key={item.name} className='each-game'>
                    <NavLink to = {`/game_detail/${item.pk}`} style={{ textDecoration: 'none' }}>
                    {item.name} 
                    <br/>
                    <img src={item.image} height = "100" width="100" alt = 'Not available'/>
                    </NavLink>
                  </div>
                )
            })
          }
        </div> */}
          <Footer/>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang
  }
}

export default withStyles(styles)(connect(mapStateToProps, { authCheckState })(Home));