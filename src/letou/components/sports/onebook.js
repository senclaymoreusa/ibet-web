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
import { isMobile, isTablet} from 'react-device-detect';
const API_URL = process.env.REACT_APP_DEVELOP_API_URL


//console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  rootDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'column'
    }
  },
  rootMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
        display: 'none'
    }
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
  },
  


});

export class onebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url : ""

    };

    
  }
  componentDidMount() {
    this.props.authCheckState()
        .then(() => {
            this.setState({ showSoggedinStatus: true });
        })
    this.handleOnebookClick();
   
}
componentDidUpdate(prevProps){
  if (this.props.lang !== prevProps.lang && this.props.lang) {
    this.handleOnebookClick();
  }
}
handleOnebookClick() {
    let language = '';
    switch(this.props.lang) {
      case 'en':
          language = 'en';
          break;
      case 'zh':
          language = 'cs';
          break;
      case 'th':
          language = 'th';
          break;
      case 'vi':
          language = 'vn';
          break;
      default:
          language = 'cs';
          break;
      }
    var Game_URL = "";
    let currentComponent = this;
    let token = localStorage.getItem('token');
    if(!token){
        if(isMobile || isTablet){
          Game_URL = 'https://ismart.claymoreasia.com/DepositLogin/bfindex?lang=' + language + '&homeUrl=https://ibet-web-apdev.claymoreasia.com&signupUrl=https://ibet-web-apdev.claymoreasia.com/register&LoginUrl=https://ibet-web-apdev.claymoreasia.com';
          window.open(Game_URL,"_self")
        }else{
          Game_URL = 'https://mkt.claymoreasia.com/NewIndex?lang=' + language;
          currentComponent.setState({url : Game_URL});
        }
        
        
        
        // window.open(url, "onebook_url");
    }else{
        
        config.headers['Authorization'] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config).then(res => {
            let user_data = res.data
            
            var postData = {
                "username": user_data.username
            }
            var formBody = [];
            for (var pd in postData) {
                var encodedKey = encodeURIComponent(pd);
                var encodedValue = encodeURIComponent(postData[pd]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            return fetch(API_URL + 'games/api/onebook/login', {
                method: "POST",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: formBody
            }).then(function (res){
                
                return res.json();
            }).then(function(data){
                //console.log(data);
                if(isMobile || isTablet){
                  
                  Game_URL = data.mobile_login;
                  window.open(Game_URL,"_self")
                }else{
                  Game_URL = data.login_url;
                  currentComponent.setState({url : Game_URL});
                }
                
                // console.log(Game_URL)
                // window.open(url, "onebook_url")
                
            });
        });
    }   
}

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
        <div className={classes.grow} >
          <div className={classes.rootDesktop}>
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
          {/* <div className={classes.rootMobile}>
              {window.open(this.state.url,"_self")}

          </div> */}
        </div>
       
        

       
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(onebook))));