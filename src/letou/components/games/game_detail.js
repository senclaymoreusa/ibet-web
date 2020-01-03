import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { config } from '../../../util_config';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe';
import { GAME_URLS } from '../../../game_constant';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL
var LUNCH_GAME_URL = '';

if (process.env.REACT_APP_NODE_ENV === 'development') {
    LUNCH_GAME_URL = GAME_URLS['dev'];
} else {
    LUNCH_GAME_URL = GAME_URLS['prod'];
}
class GameDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameURL: '',
            token: '',
            gameId: '',
        };

        this.generateFGURL  = this.generateFGURL.bind(this);
        this.generateQTURL  = this.generateQTURL.bind(this);

    }


    componentDidMount() {
        const { id } = this.props.match.params;
        // console.log(id);
        const token = localStorage.getItem('token');

        axios.get(API_URL + `games/api/games-detail/?id=${id}`, config)
        .then(async res => {
            var data = res.data[0];
            var providerName = data.provider.provider_name;
            var gameId = data.smallgame_id;
            data.categoryName = data.category_id.name;
            if (token) {                
                config.headers['Authorization'] = `Token ${token}`;
                await axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ user: res.data });                    
                });
                if (data.provider.provider_name == 'FG') {
                    this.generateFGURL(gameId, providerName);
                } else if (data.provider.provider_name == 'QTech') {
                    this.generateQTURL(gameId, true);
                } else {
                    var gameUrl = LUNCH_GAME_URL[providerName]["real"]
                    let token = localStorage.getItem('token');
                    gameUrl = gameUrl.replace("{token}", token)
                    gameUrl = gameUrl.replace("{lang}", "en")
                    gameUrl = gameUrl.replace("{gameId}", gameId)
                    this.setState({ gameURL: gameUrl});

                }
            } else {
                if (data.provider.provider_name == 'QTech') {
                    this.generateQTURL(gameId, false);
                } else {
                    var gameUrl = LUNCH_GAME_URL[providerName]["free"]
                    gameUrl = gameUrl.replace("{lang}", "en")
                    gameUrl = gameUrl.replace("{gameId}", gameId)
                    this.setState({ gameURL: gameUrl });
                }
            }
        })
    }

    generateFGURL(gameId, providerName) {
        axios.get(API_URL + 'games/api/fg/getSessionKey?pk=' + this.state.user.pk)
        .then(res => {
            var gameUrl = LUNCH_GAME_URL[providerName]["real"];
            gameUrl = gameUrl.replace("{lang}", "en");
            gameUrl = gameUrl.replace("{gameId}", gameId);
            if (res.data.sessionKey != null && res.data.alive == "true") {  
                gameUrl = gameUrl + "&sessionKey=" + res.data.sessionKey;
                this.setState({ gameURL: gameUrl});
                    
            } else {
                axios.get(API_URL + 'games/api/fg/login?pk=' + this.state.user.pk)
                .then(res => {
                    gameUrl = gameUrl + "&sessionKey=" + res.data.sessionKey;
                    this.setState({ gameURL: gameUrl });
                    
                })
            }
        })
    }

    generateQTURL(gameId, free) {

        if (free) {
            axios.post(API_URL + 'games/api/qt/game_launch?mode=demo&gameId=' + gameId, config).then(
            res => {
              if (res.data.url) {
                    this.setState({gameURL: res.data.url})
                }  
            });
        } else {
            axios.post(API_URL + 'games/api/qt/game_launch?mode=real&gameId=' + gameId + '&playerId=' + this.state.user.username, config).then(
            res => {
                if (res.data.url) {
                    this.setState({gameURL: res.data.url})
                }
            });
        }
        
        
    }

  render() {
    return(
      <div>
          <Iframe url={this.state.gameURL}
            height={window.innerHeight}
            width="100%"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        game_detail: state.general.game_detail,
        lang: state.language.lang,
        isAuthenticated: (token !== null && token !== undefined)
        
    }
}

export default connect(mapStateToProps)(GameDetail);