import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNavbar from "../../ibet/components/top_navbar";
import axios from 'axios';
import { config } from '../../util_config';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe';


//const API_URL = process.env.REACT_APP_REST_API;
//const API_URL = 'http://52.9.147.67:8080/';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL


class GameDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameURL: '',
            token: ''
        };

        this.generateUrl = this.generateUrl.bind(this);
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(API_URL + `games/api/games-detail/?id=${id}`, config)
        .then(res => {
            var data = res.data[0];
            data.categoryName = data.category_id.name;
            if (this.props.isAuthenticated) {
                this.setState({gameURL: data.game_url});
                let res = this.generateUrl(localStorage.getItem('token'));
                this.setState({gameURL: res});
            } else {
                this.setState({gameURL: data.game_guest_url});
            }
        })
    }


    generateUrl(token) {
        String.prototype.format = function () {
            var i = 0, args = arguments;
            return this.replace(/{}/g, function () {
                return typeof args[i] != 'undefined' ? args[i++] : '';
            });
        };

        let res = this.state.gameURL.format(token);
        return res;

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