import React from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../css/banner.css';
import { withRouter } from 'react-router-dom';
import { config } from '../../util_config';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import '../css/help.css'


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const GAME_URL = "https://lsl.omegasys.eu/ps/game/GameContainer.action?platform=NETENT_CAS&brandId=524&gameId="

// const gameList = ["imperialriches_mobile_html_sw","berryburst_not_mobile_sw","blackjack3_not_mobile_sw", "butterflystaxx2_not_mobile_sw","kingof3kingdoms_not_mobile_sw",
// "wishmasteroct_not_mobile_sw","wildturkey_not_mobile_sw","whosthebride_not_mobile_sw","monkeys_not_mobile_sw","grandspinn_no_progressive_not_mobile_sw"]


console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    //alignItems: 'center',
    backgroundColor: theme.palette.background.paper,

  },

  game: {
    marginTop: 20,
    marginLeft: 200,
    marginRight: 200,
    display: 'flex',
    
  },
  


});

export class FGgame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       current: 0,
       freegame: true,
       data: '',
       sessionKey : null,
       game:[]
    };

    this.getLabel = this.getLabel.bind(this);
  }
  componentDidMount() {
    this.props.authCheckState().then(res => {
        if (res === 1) {
          this.state.freegame = true
        } else {
          this.state.freegame = false
          const token = localStorage.getItem('token');
          config.headers['Authorization'] = `Token ${token}`;
          axios.get(API_URL + 'users/api/user/', config).then(res => {
              this.setState({ data: res.data});
             
          });
        }
    });

   
    axios.get(API_URL + 'games/api/get_all_game?provider=1', config).then(res => {
      this.setState({ game: res.data.game });
     
     
  });
  

  }

  getLabel(labelId) {
    const { formatMessage } = this.props.intl;
    return formatMessage({ id: labelId });
  }
  onClick(gameId, free) {
    this.setState({
      gameId: gameId,
      freegame: free,
      
    })
    if (free) {
        window.open( GAME_URL + gameId + "&playForReal=false&lang=en")
    } else {
        // console.log("hhh " +  this.state.game[0].description)
        axios.get(API_URL + 'games/api/fg/getSessionKey?pk=' + this.state.data.pk)
        .then(res => {
            this.setState({sessionKey: res.data.sessionKey });
            console.log("1 " +  this.state.sessionKey)
            
            if (res.data.sessionKey != null && res.data.alive == "true") {
               
                console.log(res.data.alive)
                window.open(GAME_URL + gameId+ "&playForReal=true&lang=en&sessionKey=" + this.state.sessionKey)
                   
            } else {
                axios.get(API_URL + 'games/api/fg/login?pk=' + this.state.data.pk)
                .then(res => {
                    
                    window.open(GAME_URL + gameId + "&playForReal=true&lang=en&sessionKey=" + res.data.sessionKey)
                    
                })
            }
        })
       
    }
  }


  render() {

    const { classes } = this.props;
    const items = this.state.game.map((item, key) => [
      <img src={item.image} onClick={this.onClick.bind(this, item.description, this.state.freegame)}></img>,
      <li key={item.id} onClick={this.onClick.bind(this, item.description, this.state.freegame)}>{item.name} </li>
    ]
    
    );

    return (
        <div className={classes.root}>
        <TopNavbar />
        <li style={{ marginLeft: 200, marginTop: 50}}> NETENT</li>
        <div className={classes.game}>
            <ul class="columns">
                  {items}

            </ul>   
            
        </div>
        <Footer />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(FGgame))));