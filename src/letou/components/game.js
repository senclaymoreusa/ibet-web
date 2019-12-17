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

const FGGAME_URL = "https://lsl.omegasys.eu/ps/game/GameContainer.action?platform=NETENT_CAS&brandId=524&gameId="
const MGGAME_URL = "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4023&ul=en"

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

export class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       current: 0,
       freegame: true,
       data: '',
       sessionKey : null,
       fggame:[],
       mggame:[],
	   qtgame:[],
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
              this.setState({ data: res.data });
             
          });
        }
    });

    //fg
    axios.get(API_URL + 'games/api/get_all_game?provider=FG', config).then(res => {
     
      if (res.data.game != null) {
        this.setState({ fggame: res.data.game });
      }
     
    });
    //mg
    axios.get(API_URL + 'games/api/get_all_game?provider=MG', config).then(res => {
      if (res.data.game != null) {
        this.setState({ mggame: res.data.game });
      }
     
    });
  
    // get all qt games
    axios.get(API_URL + 'games/api/get_all_game?provider=QTech', config).then(res => {
      if (res.data.game != null) {
        this.setState({ qtgame: res.data.game });
      }
      
    });
  }
  providerSelect(index) {
    this.setState({
      current: index
    })
  }

  getLabel(labelId) {
    const { formatMessage } = this.props.intl;
    return formatMessage({ id: labelId });
  }

  fgonClick(gameId, free) {
    this.setState({
      gameId: gameId,
      freegame: free,
      
    })
    if (free) {
        window.open( FGGAME_URL + gameId + "&playForReal=false&lang=en")
    } else {
        
        axios.get(API_URL + 'games/api/fg/getSessionKey?pk=' + this.state.data.pk)
        .then(res => {
            this.setState({sessionKey: res.data.sessionKey });
           
            
            if (res.data.sessionKey != null && res.data.alive == "true") {     
                window.open(FGGAME_URL + gameId+ "&playForReal=true&lang=en&sessionKey=" + this.state.sessionKey)
                   
            } else {
                axios.get(API_URL + 'games/api/fg/login?pk=' + this.state.data.pk)
                .then(res => {
                    window.open(FGGAME_URL + gameId + "&playForReal=true&lang=en&sessionKey=" + res.data.sessionKey)
                    
                })
            }
        })
       
    }
  }
  mgonClick(gameId, free) {
    this.setState({
      gameId: gameId,
      freegame: free,
      
    })
    if (free) {
        window.open( MGGAME_URL + "&serverid=2712&sext1=demo&sext2=demo&variant=TNG-demo&gameid=" + gameId)
    } else {
        var token = localStorage.getItem('token');
        axios.get(API_URL + 'games/api/mg/token_save?pk=' + this.state.data.pk + '&token=' + token)
        .then(res => {
            
        })
        window.open( MGGAME_URL + "&serverid=32100&variant=TNGUAT&gameid=" + gameId + "&authtoken=" + token)
        
       
    }
  }

  qtonClick(gameId, free) {
    this.setState({
      gameId: gameId,
      freegame: free,
      
    })

    if (free) {
	    axios.post(API_URL + 'games/api/qt/game_launch?mode=demo&gameId=' + gameId, config).then(
		res => {
	      //console.log(res.data);
	      if (res.data.url != null) {
	        window.open( res.data.url );
	      }
	     
	    });
    } else {
	    axios.post(API_URL + 'games/api/qt/game_launch?mode=real&gameId=' + gameId + '&playerId=' + this.state.data.username, config).then(
		res => {
	      if (res.data.url != null) {
	        window.open( res.data.url );
	      }
	     
	    });
    }
  }



  render() {

    const { classes } = this.props;
    const fgitems = this.state.fggame.map((item, key) => [
      <img src={item.image} onClick={this.fgonClick.bind(this, item.description, this.state.freegame)}></img>,
      <li key={item.id} onClick={this.fgonClick.bind(this, item.description, this.state.freegame)}>{item.name} </li>
    ]);
    const mgitems = this.state.mggame.map((item, key) => [
      <img src={item.image} onClick={this.mgonClick.bind(this, item.description, this.state.freegame)}></img>,
      <li key={item.id} onClick={this.mgonClick.bind(this, item.description, this.state.freegame)}>{item.name} </li>
    ]);
    const qtitems = this.state.qtgame.map((item, key) => [
      <img src={item.image} onClick={this.qtonClick.bind(this, item.description, this.state.freegame)}></img>,
      <li key={item.id} onClick={this.qtonClick.bind(this, item.description, this.state.freegame)}>{item.name} </li>
    ]);

    return (
        <div className={classes.root}>
        <TopNavbar />
        <div className={classes.game}>
          {/* <li style={{ marginLeft: 200, marginTop: 50}}> NETENT</li> */}
          <ul className="SecFilter">
            <li className={this.state.current == 0 ? "Active" : ""} onClick={this.providerSelect.bind(this,0)}><a>ALL</a></li>
            <li className={this.state.current == 1 ? "Active" : ""} onClick={this.providerSelect.bind(this,1)}><a>MG</a></li>
            <li className={this.state.current == 2 ? "Active" : ""} onClick={this.providerSelect.bind(this,2)}><a>GDSW</a></li>
            <li className={this.state.current == 3 ? "Active" : ""} onClick={this.providerSelect.bind(this,3)}><a>AG</a></li>
            <li className={this.state.current == 4 ? "Active" : ""} onClick={this.providerSelect.bind(this,4)}><a>PNG</a></li>
            <li className={this.state.current == 5 ? "Active" : ""} onClick={this.providerSelect.bind(this,5)}><a>BBIN</a></li>
            <li className={this.state.current == 6 ? "Active" : ""} onClick={this.providerSelect.bind(this,6)}><a>PlayTech</a></li>
            <li className={this.state.current == 7 ? "Active" : ""} onClick={this.providerSelect.bind(this,7)}><a>Betsoft</a></li>
            <li className={this.state.current == 8 ? "Active" : ""} onClick={this.providerSelect.bind(this,8)}><a>NETENT</a></li>
            <li className={this.state.current == 9 ? "Active" : ""} onClick={this.providerSelect.bind(this,9)}><a>QT</a></li>
          </ul>
        </div>
        <div className={classes.game}>
            <ul className="columns" hidden={this.state.current != 1}>
                  {mgitems}
            </ul> 
            <ul className="columns" hidden={this.state.current != 8}>
                  {fgitems}
            </ul>    
            <ul className="columns" hidden={this.state.current != 9}>
                  {qtitems}
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

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(Games))));