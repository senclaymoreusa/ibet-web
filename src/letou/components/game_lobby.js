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
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';


import placeholdimage from '../images/handsomecat.jpg';


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

export class GameLobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       current: 0,
       freegame: true,
       data: '',
       sessionKey : null,
       games:[]
    };

    this.getLabel = this.getLabel.bind(this);
  }
  componentDidMount() {

    if (!this.props.isAuthenticated) {
        this.state.freegame = true;
    } else {
        this.state.freegame = false;
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            this.setState({ data: res.data });
            
        });
    }

    axios.get(API_URL + 'games/api/games/', config).then(res => {
        console.log(res.data);
        this.setState({ games: res.data });
    });
  }

  getLabel(labelId) {
    const { formatMessage } = this.props.intl;
    return formatMessage({ id: labelId });
  }


  render() {

    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <TopNavbar />
        <li style={{ marginLeft: 200, marginTop: 50}}> NETENT</li>
        <div className={classes.game}>

            <Grid container item xs={12} sm={12} key="455">
                {  
                    this.state.games.map((game, index) => {
                        var gameFields = game['fields'];
                        return (
                            <Grid container item xs={12} sm={12} key={index}>
                                <Grid item xs={2} sm={2} key={game.pk}>
                                    <Paper style={{ margin: 15 }}>
                                        <NavLink to = {{ pathname: `/game_detail/${game.pk}`}} style={{ textDecoration: 'none' }}> 
                                            <div>
                                                <img src={game.image_url} height = "200" width="100%" alt = 'Not available'/>
                                                
                                                <br/>

                                                <div className='game-title'> 
                                                    {gameFields.name} 
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Paper>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
        <Footer />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        lang: state.language.lang,
        isAuthenticated: (token !== null && token !== undefined)
    }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(GameLobby))));