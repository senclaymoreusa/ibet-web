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


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const GAME_URL = "https://lsl.omegasys.eu/ps/game/GameContainer.action?platform=NETENT_CAS&brandId=524&gameId="
const gameList = ["imperialriches_mobile_html_sw","berryburst_not_mobile_sw","blackjack3_not_mobile_sw", "butterflystaxx2_not_mobile_sw","kingof3kingdoms_not_mobile_sw",
"wishmasteroct_not_mobile_sw","wildturkey_not_mobile_sw","whosthebride_not_mobile_sw","monkeys_not_mobile_sw","grandspinn_no_progressive_not_mobile_sw"]


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
    margin: 50,
    display: 'flex',
    
  }


});

export class FGgame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       current: 0,
       freegame: true,
       data: '',
       sessionKey : null,
    };

    this.getLabel = this.getLabel.bind(this);
  }
  componentDidMount() {
    this.props.authCheckState().then(res => {
        if (res === 1) {
            this.props.history.push('/');
        }
    });

    const token = localStorage.getItem('token');
    config.headers['Authorization'] = `Token ${token}`;
    axios.get(API_URL + 'users/api/user/', config).then(res => {
        this.setState({ data: res.data });
       
    });
  

  }

  getLabel(labelId) {
    const { formatMessage } = this.props.intl;
    return formatMessage({ id: labelId });
  }
  onClick(index, free) {
    this.setState({
      current: index,
      freegame: free,
      
    })
    if (free) {
        window.open( GAME_URL + gameList[this.state.current]+ "&playForReal=false&lang=en")
    } else {
        axios.get(API_URL + 'games/api/fg/getSessionKey?pk=' + this.state.data.pk)
        .then(res => {
            this.setState({sessionKey: res.data.sessionKey });
            console.log("1 " +  this.state.sessionKey)
            
            if (res.data.sessionKey != null) {
                axios.get(API_URL + 'games/api/fg/sessionCheck?sessionKey=' + res.data.sessionKey)
                .then(res => {
                    if (res.data.alive == "true") {
                        console.log(res.data.alive)
                        window.open(GAME_URL + gameList[this.state.current]+ "&playForReal=true&lang=en&sessionKey=" + this.state.sessionKey)
                    } else {
                        axios.get(API_URL + 'games/api/fg/login?pk=' + this.state.data.pk)
                        .then(res => {
                            console.log("2 " + res)
                            window.open(GAME_URL + gameList[this.state.current]+ "&playForReal=true&lang=en&sessionKey=" + res.data.sessionKey)
                        })
                    
                    }
                })
    
            } else {
                axios.get(API_URL + 'games/api/fg/login?pk=' + this.state.data.pk)
                .then(res => {
                    console.log("3" + res)
                    window.open(GAME_URL + gameList[this.state.current]+ "&playForReal=true&lang=en&sessionKey=" + res.data.sessionKey)
                    
                })
            }
        })
       
    }
  }


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopNavbar />
        <li style={{ margin: 50}}> NETENT</li>
        <div className={classes.game}>
           
            <Grid item xs={6} className={classes.gamesfree}>
                <li  onClick={this.onClick.bind(this,0, true)} >Imperial Riches free </li>
                <li  onClick={this.onClick.bind(this,1, true)} >Berryburst free</li>
                <li  onClick={this.onClick.bind(this,2, true)} >BlackJack™ free</li>
                <li  onClick={this.onClick.bind(this,3, true)} >Butterfly Staxx 2 free</li>
                <li  onClick={this.onClick.bind(this,4, true)} >King of 3 Kingdoms free</li>
                <li  onClick={this.onClick.bind(this,5, true)} >The Wish Master free</li>
                <li  onClick={this.onClick.bind(this,6, true)} >Wild Turkey free</li>
                <li  onClick={this.onClick.bind(this,7, true)} >Who's the Bride free</li>
                <li  onClick={this.onClick.bind(this,8, true)} >Go Bananas!™ free</li>
                <li  onClick={this.onClick.bind(this,9, true)} >Grand Spinn free</li>
            </Grid>
            <Grid item xs={6} className={classes.games}>
                <li  onClick={this.onClick.bind(this,0, false)} >Imperial Riches  </li>
                <li  onClick={this.onClick.bind(this,1, false)} >Berryburst</li>
                <li  onClick={this.onClick.bind(this,2, false)} >BlackJack™</li>
                <li  onClick={this.onClick.bind(this,3, false)} >Butterfly Staxx 2</li>
                <li  onClick={this.onClick.bind(this,4, false)} >King of 3 Kingdoms</li>
                <li  onClick={this.onClick.bind(this,5, false)} >The Wish Master</li>
                <li  onClick={this.onClick.bind(this,6, false)} >Wild Turkey</li>
                <li  onClick={this.onClick.bind(this,7, false)} >Who's the Bride</li>
                <li  onClick={this.onClick.bind(this,8, false)} >Go Bananas!™</li>
                <li  onClick={this.onClick.bind(this,9, false)} >Grand Spinn</li>
            </Grid>
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