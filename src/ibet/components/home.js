import React, { Component } from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import ChatTool from "./chat_tool";
import { connect } from 'react-redux';
import { authCheckState, handle_referid, hide_landing_page, sendingLog } from '../../actions';
import { FormattedMessage } from 'react-intl';
import { config } from '../../util_config';

import axios from 'axios';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ExpandMore from '@material-ui/icons/ExpandMore';

import '../css/home.css';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL


console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,

  },
  fab: {
    width: '240px',
    marginTop: '48px',
    backgroundColor: '#ffffff;',
    fontSize: '18px'
  },
  extendedIcon: {
    marginRight: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
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
    const { referid } = this.props.match.params;
    if (referid) {
      this.props.handle_referid(referid);
    }

    this.props.authCheckState();
    var URL = API_URL + 'users/api/games/?term=game';

    await axios.get(URL, config)
      .then(res => {

        this.setState({ sports: res.data.slice(0, 8) });
        this.setState({ all_sports: res.data })
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

  handle_expand() {
    this.setState({ sports: this.state.all_sports })
    this.setState({ expand: true })
  }

  game_url(event, item){
    event.preventDefault();
    console.log(item.name)
    if (['SA', 'Lotto', 'Keno', 'PK10', 'K3', 'SSC', 'GB'].includes(item.name)){
      console.log('12345')
      var token = localStorage.getItem('token')
      if (token){
          config.headers["Authorization"] = `Token ${token}`;
          var URL = API_URL + 'users/api/generategameurl/'
          axios.get(URL, config)
          .then(res => {
             console.log(res)
              var Game_URL = res.data.game_url
              console.log(Game_URL)
              window.open(Game_URL)
          })
      }else{
        alert('You have to login to play this game')
      }

    }else{
      window.open(item.game_url)
    }
  }

  render() {

    const { classes } = this.props;

    // let notices = this.state.notices;

    // let noticeStr = '';
    // notices.forEach(notice => {
    //   let startTime = moment(notice.start_time);
    //   startTime = startTime.format('MM/DD/YYYY h:mm a');
    //   let endTime = moment(notice.end_time);
    //   endTime = endTime.format('MM/DD/YYYY h:mm a');
    //   let i18nMessage = notice.message;
    //   if (this.props.lang === 'zh') {
    //     i18nMessage = notice.message_zh;
    //   } else if (this.props.lang === 'fr') {
    //     i18nMessage = notice.message_fr;
    //   } else {
    //     i18nMessage = notice.message;
    //   }
    //   let message = startTime + " ~ " + endTime + " " + i18nMessage;
    //   noticeStr += message;
    //   for (let i = 0; i < 20; i++) {
    //     noticeStr += "\u00A0";
    //   }
    // });

    var recent_games = JSON.parse(localStorage.getItem("recent-games"));

    return (
      <div className={classes.root}>
        {/* {
          this.props.show_landing_page && <Paper >
            <div style={{ position: 'absolute', zIndex: 1000000000000 }} onClick={() => {
              this.props.hide_landing_page()
            }}>
              <img src='https://ibet-web.s3-us-west-1.amazonaws.com/Games/landing-page.jpg' height="100%" width="100%" alt='Not available' />
            </div>
          </Paper>
        } */}
        <TopNavbar />
        <div className={classes.grow}>

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
                    if (!array) {
                      array = []
                      array.push(item)
                    } else {
                      var check = true;
                      array.forEach(thing => {
                        if (thing.name === item.name) {
                          check = false
                        }
                      })
                      if (check) {
                        array.push(item)
                      }

                    }
                    if (array.length > 4) {
                      array.shift()
                    }
                    localStorage.setItem("recent-games", JSON.stringify(array));

                  }}>
                    <span onClick={(e) => this.game_url(e, item)}> 

                      {
                        <img src={item.image_url} height="220" width="300" alt='Not available' />
                      }


                      <br />
                      <div className='game-title'>
                        {item.name}
                      </div>

                    </span>
                  </div>
                )
              })
            }

            {/* {
            <div 
              className='each-game' 
              style={{cursor: 'pointer'}}
              onClick={() => {
                this.props.history.push('/game_detail/')
              }}>
              <span >

              {
                <img src={placeholdimage} height="220" width="300" alt='Not available' />
              }


              <br />
              <div className='game-title'>
                AG
              </div>

              </span>
            </div>
          } */}
          </div>


          {
            this.state.ready && !this.state.expand && this.state.all_sports.length > 8 &&
            <div className='expand-icon'>
              <Fab
                onClick={this.handle_expand.bind(this)}
                className={classNames(classes.fab, 'text')}
                variant="extended"
              >
                <FormattedMessage id="home.expand" defaultMessage='View All' />
                {' (' + this.state.all_sports.length + ')'}
                <ExpandMore />
              </Fab>
            </div>
          }


          {
            this.state.ready &&
            <div className='top-title margin-title' >
              <FormattedMessage id="home.recent" defaultMessage='Recently Played' />
            </div>
          }

          <div className="cont">
            {
              this.state.ready && recent_games && recent_games.map(item => {
                return (
                  <div key={item.name} className='each-game' >
                    <span onClick={() => { window.open(item.game_url) }}>

                      {
                        <img src={item.image_url} height="220" width="300" alt='Not available' />
                      }

                      <br />

                      <div className='game-title'>
                        {item.name}
                      </div>

                    </span>
                  </div>
                )
              })
            }
          </div>

          {
            this.state.ready &&
            <div className='top-title margin-title' >
              <FormattedMessage id="home.selected" defaultMessage='Selected for you' />
            </div>
          }

          <div className="cont">
            {
              this.state.ready && this.state.sports.slice(0, 4).map(item => {
                return (
                  <div key={item.name} className='each-game' >
                    <span onClick={() => { window.open(item.game_url) }}>

                      {
                        <img src={item.image_url} height="220" width="300" alt='Not available' />
                      }

                      <br />

                      <div className='game-title'>
                        {item.name}
                      </div>

                    </span>
                  </div>
                )
              })
            }
          </div>



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

        <Footer />

        <ChatTool />

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
    show_landing_page: state.general.show_landing_page
  }
}

export default withStyles(styles)(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(Home));