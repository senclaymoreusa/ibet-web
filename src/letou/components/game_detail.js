import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNavbar from "../../ibet/components/top_navbar";
import axios from 'axios';
import { config } from '../../util_config';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe';
import { GAME_URLS } from '../../game_constant';


//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL


class GameDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameURL: '',
            token: '',
            gameId: ''
        };
    }


    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(API_URL + `games/api/games-detail/?id=${id}`, config)
        .then(res => {
            var data = res.data[0];
            var providerName = data.provider.provider_name;
            var gameId = data.smallgame_id
            data.categoryName = data.category_id.name;
            if (this.props.isAuthenticated) {
                var gameUrl = GAME_URLS[providerName]["real"]
                let token = localStorage.getItem('token');
                gameUrl = gameUrl.replace("{token}", token)
                gameUrl = gameUrl.replace("{lang}", "en")
                gameUrl = gameUrl.replace("{gameId}", gameId)
                this.setState({ gameURL: gameUrl});
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