import React from 'react';
import Footer from "./../footer";
import TopNavbar from "./../top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../../css/banner.css';
import { withRouter } from 'react-router-dom';
import { config} from '../../../util_config';
import axios from 'axios';
import Iframe from 'react-iframe'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL


//console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,

  },
  grow: {
    flexGrow: 1,
  },
  font: {
    verticalAlign: 'inherit',
  },
  mainGrid: {
    maxWidth: 1400,
    padding: '35px 0',
  },
  PgSmallBanner: {
    height: 200,
    display: 'flex',
  },
  PgMain: {
    display: 'flex',
  },
  mainRow: {
    paddingBottom: 35,
    display: 'flex',
    margin: '0 auto',
  },
  titleRow: {
    marginBottom: 30,
    display: 'flex',
  },
  PgHall: {
    width: '20%',
    height: 340,
    border: '1px solid #f1f1f1',
    backgroundColor: '#fffdf8',
    marginBottom: 10,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 26,
    color: '#333',
    marginLeft: "auto",
    marginRight: "auto"
  },
  hallRow: {
    marginBottom: 30,
    display: 'flex',
  },
  listRow: {
    display: 'flex',
    marginBottom: 10,
  },
  ruleTitleRow:{
    padding: '35px 0 10px',
    display: 'flex',
  },
  rule: {
    fontSize: 14,
    color: '#333',
    marginLeft: "auto",
    marginRight: "auto"
  },
  PgHallBtn:{
    width: '80vw',
    height: 30,
    fontSize: '14vw',
    borderRadius: 3,
    lineHeight: 30,
    backgroundColor: '#ff6050',
    marginBottom: 10,
    float: "right",
  },
  PgHallBtnLeft:{
    float: "left",
  }


});

export class gbk3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    //   url : ""

    };

    
  }
  componentDidMount() {
    
    this.game_url("K3");
   
}
componentDidUpdate(prevProps){
  if (this.props.lang !== prevProps.lang && this.props.lang) {
    this.game_url("K3");
  }
}
  game_url(gamename){
    
    var token = localStorage.getItem('token')  
    if (token){
        config.headers["Authorization"] = `Token ${token}`;
        var URL = API_URL + 'games/api/gb/generategameurl/?game=' + gamename
        axios.get(URL, config)
        .then(res => {
            var Game_URL = res.data.game_url
            //console.log(Game_URL);
            // this.state.url =Game_URL
            this.setState({url : Game_URL});
        })
    }else{
      let language = '';
      switch(this.props.lang) {
        case 'en':
            language = 'en-us';
            break;
        case 'zh':
            language = 'zh-cn';
            break;
        case 'th':
            language = 'th-th';
            break;
        case 'vi':
            language = 'vi-vn';
            break;
        default:
            language = 'zh-cn';
            break;
        }
        var URL = API_URL + 'games/api/gb/generatefakeusergameurl/?game=' + gamename + '&language=' + language
        axios.get(URL, config)
        .then(res => {
            var Game_URL = res.data.game_url
            // console.log("fake");
            // console.log(Game_URL);
            // return Game_URL;
            this.setState({url : Game_URL});
        })
    }
}
  

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopNavbar />
        
        <Iframe url={this.state.url}
            width='100%'
            height="1500px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            scrolling="auto"
            loading='auto' />

        
        
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

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(gbk3))));