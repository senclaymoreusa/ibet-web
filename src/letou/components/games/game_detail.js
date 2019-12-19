import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { config } from '../../../util_config';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe';
import { GAME_URLS } from '../../../game_constant';


//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL


class GameDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameURL: '',
            token: '',
            gameId: '',

            user: {},
        };
    }


    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);

        axios.get(API_URL + `games/api/games-detail/?id=${id}`, config)
        .then(res => {
            // console.log(res);
            var data = res.data[0];
            var providerName = data.provider.provider_name;
            var gameId = data.smallgame_id
            data.categoryName = data.category_id.name;
            if (this.props.isAuthenticated) {

                const token = localStorage.getItem('token');
                config.headers['Authorization'] = `Token ${token}`;
                axios.get(API_URL + 'users/api/user/', config).then(res => {
                    this.setState({ user: res.data });
                });

                if (data.provider.provider_name == 'FG') {
                    var gameUrl = this.generateFGRUL(gameId, providerName);
                } else {
                    var gameUrl = GAME_URLS[providerName]["real"]
                    let token = localStorage.getItem('token');
                    gameUrl = gameUrl.replace("{token}", token)
                    gameUrl = gameUrl.replace("{lang}", "en")
                    gameUrl = gameUrl.replace("{gameId}", gameId)
                    this.setState({ gameURL: gameUrl});

                }
                // console.log("print: " + gameUrl);
            } else {
                var gameUrl = GAME_URLS[providerName]["free"]
                gameUrl = gameUrl.replace("{lang}", "en")
                gameUrl = gameUrl.replace("{gameId}", gameId)
                this.setState({ gameURL: gameUrl });
                // console.log("print: " + gameUrl);
            }
        })
    }

    generateFGRUL(gameId, providerName) {
        
        axios.get(API_URL + 'games/api/fg/getSessionKey?pk=' + this.state.user.pk)
        .then(res => {
            // this.setState({sessionKey: res.data.sessionKey });
            var gameUrl = GAME_URLS[providerName]["real"];
            gameUrl = gameUrl.replace("{lang}", "en");
            gameUrl = gameUrl.replace("{gameId}", gameId);
            if (res.data.sessionKey != null && res.data.alive == "true") {  
                console.log(gameUrl + "&sessionKey=" + res.data.sessionKey);   
                // window.open(gameUrl + "&sessionKey=" + res.data.sessionKey);
                    
            } else {
                axios.get(API_URL + 'games/api/fg/login?pk=' + this.state.user.pk)
                .then(res => {
                    console.log(gameUrl + "&sessionKey=" + res.data.sessionKey);   
                    // window.open(FGGAME_URL + gameId + "&playForReal=true&lang=en&sessionKey=" + res.data.sessionKey)
                    
                })
            }
        })
    }


    // fgonClick(gameId, free) {
    //     this.setState({
    //       gameId: gameId,
    //       freegame: free,
          
    //     })
    //     if (free) {
    //         window.open( FGGAME_URL + gameId + "&playForReal=false&lang=en")
    //     } else {
            
    //         axios.get(API_URL + 'games/api/fg/getSessionKey?pk=' + this.state.data.pk)
    //         .then(res => {
    //             this.setState({sessionKey: res.data.sessionKey });
               
                
    //             if (res.data.sessionKey != null && res.data.alive == "true") {     
    //                 window.open(FGGAME_URL + gameId+ "&playForReal=true&lang=en&sessionKey=" + this.state.sessionKey)
                       
    //             } else {
    //                 axios.get(API_URL + 'games/api/fg/login?pk=' + this.state.data.pk)
    //                 .then(res => {
    //                     window.open(FGGAME_URL + gameId + "&playForReal=true&lang=en&sessionKey=" + res.data.sessionKey)
                        
    //                 })
    //             }
    //         })
           
    //     }
    // }
    // generateUrl(url, gameId, token, lang) {
    //     String.prototype.format = function () {
    //         var i = 0, args = arguments;
    //         return this.replace(/{}/g, function (gameId, token, lang) {
    //             console.log(args[i]);
    //             return typeof args[i] != 'undefined' ? args[i++] : '';
    //         });
    //     };

    //     let res = url.format(gameId, token, lang);
    //     return res;

    // }

  render() {
    return(
      <div>
          {/* <Iframe url={this.state.gameURL}
            height={window.innerHeight}
            width="100%"/> */}
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