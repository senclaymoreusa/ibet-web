import React from 'react';
import Footer from "./../footer";
import TopNavbar from "./../top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page, sendingLog } from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../../css/banner.css';
import { withRouter } from 'react-router-dom';
import { config} from '../../../util_config';
import axios from 'axios';
import Iframe from 'react-iframe'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL

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

export class gbesports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        url : ""
    };

    
  }
  componentDidMount() {
    const { user } = this.props;

    var token = localStorage.getItem('token');
    if (token){
        config.headers["Authorization"] = `Token ${token}`;
        var URL = API_URL + 'games/api/inplay/login/';

        let userName = user.username;
        axios.post(URL, {"username": userName}, config)
        .then(res => {
            if(res.status == 200) {
                if(res.data.StatusCode === 0 && res.data.StatusDesc === "Success") {
                    let launchUrl = "https://imes.claymoreasia.com/?token=" + String(token);
                    // let launchUrl = "https://imes.claymoreasia.com/?token=" + "a7d7eadf40d6364c17a7416b766497ff57fb84e2";
                    this.setState({url: launchUrl});
                }
                else {
                    let launchUrl = "https://imes.claymoreasia.com";
                    this.setState({url: launchUrl});
                    sendingLog(res.data);
                }
            }
            else{
                let launchUrl = "https://imes.claymoreasia.com";
                this.setState({url: launchUrl});
                sendingLog(res.data);
            }
        })
        .catch(err => {
            let launchUrl = "https://imes.claymoreasia.com";
            this.setState({url: launchUrl});
            sendingLog(err);
        })
    } else {
        let launchUrl = "https://imes.claymoreasia.com";
        this.setState({url: launchUrl});
    }
    // this.props.authCheckState()
    //     .then(() => {
    //         this.setState({ showSoggedinStatus: true });
    //     })
    // this.game_url("GB ESports");
   
}
  
  render() {

    const { classes, user } = this.props;

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
  const {user} = state.auth;
  return {
    lang: state.language.lang,
    user : user,
  }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(gbesports))));