import React from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../../css/banner.css';
import { withRouter } from 'react-router-dom';
import { config } from '../../../util_config';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import '../../css/help.css'
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import FilterSearchBar from './search_filter';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from '@material-ui/core/Link';
import login from '../../../ibet/components/login';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

document.body.style = 'background: #f1f1f1;';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        //alignItems: 'center',
        backgroundColor: theme.palette.background.paper,

    },
});

window.iapiSetCallout('Login', calloutLogin);

function logintest(realMode) {
    console.log("test")
    window.iapiLogin("IBETPU_JENNIE", "1033$j/in3zuZcm3Puf3wPi1mIbh0TjSbK6pjn5j9hBjvcIFR59ivqlBt8bKBGWN/5u+8$LtADV/TMTSwjMethN7yAhqxLx/rrDOXoaVSPHyzECZ0=", realMode, "en");
}
  
function calloutLogin(response) {
      if (response.errorCode) {
          alert("Login failed, " + response.errorText);
          console.log("fail...")
      }
      else {
          alert("Login OK, you will be redirected to the play console");
          console.log("sss..")
          window.open ("http://cache.download.banner.fourblessings88.com/casinoclient.html?language=en&game=hb");
      }
  }


export class PTlaunchtest extends React.Component {
    constructor(props) {
        super(props);
    }
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }
    componentDidMount() {
        // const script = document.createElement("script");
    
        // script.src = "http://cache.download.banner.winforfun88.com/integrationjs.php";
        // // script.async = true;
    
        // document.body.appendChild(script);

        const script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.src = "https://login.fourblessings88.com/jswrapper/integration.js.php?casino=fourblessings88"
        document.body.appendChild(script1);
      }

    render() {

        const { classes } = this.props;
      
        return ( 
            <div className={classes.root}>
                <h2>test ...</h2>
                <button onClick={()=>{
                    // console.log("test")
                    // window.iapiLogin("IBETPU_JENNIE", "1033$j/in3zuZcm3Puf3wPi1mIbh0TjSbK6pjn5j9hBjvcIFR59ivqlBt8bKBGWN/5u+8$LtADV/TMTSwjMethN7yAhqxLx/rrDOXoaVSPHyzECZ0=", 1, "en");
                    // console.log("hhh") 
                    // window.iapiSetCallout('Login', window.calloutLogin); 
                    // console.log("zzz")  
                    logintest(1)
                }
                }> login</button>
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: (token !== null && token !== undefined),
        error: state.auth.error,
        lang: state.language.lang,
    }
}


export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(PTlaunchtest))));
       