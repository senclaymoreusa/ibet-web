import React from 'react';
import Footer from "./footer";
import TopNavbar from "./top_navbar";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../css/banner.css';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import sha256 from 'sha256';
import { config} from '../../util_config';
import axios from 'axios';

const API_URL = process.env.REACT_APP_DEVELOP_API_URL,
  gdcasino_code = process.env.REACT_APP_GDCASINO_STAGING_CODE,
  gdcasino_accessKey = process.env.REACT_APP_GDCASINO_STAGING_ACCESSKEY;

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
});

export class live_casino extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        data: '',
        currencyValue: '',

        };

        this.getLabel = this.getLabel.bind(this);
        this.handleEAClick = this.handleEAClick.bind(this);
    }

    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuthenticated !== prevProps.isAuthenticated && this.props.isAuthenticated) {
            const token = localStorage.getItem('token');
            config.headers["Authorization"] = `Token ${token}`;
            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ data: res.data });
                    this.setState({ currencyValue: res.data.currency });
                    
            });
        }
    }
  
    componentDidMount() {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers["Authorization"] = `Token ${token}`;
            axios.get(API_URL + 'users/api/user/', config)
                .then(res => {
                    this.setState({ data: res.data });
                    this.setState({ currencyValue: res.data.currency });
                });
        } 
    }

    handleN2Click = (username) => {
        var token = localStorage.getItem('token');
        if (token) {
        window.open(
            `https://666.claymoreasia.com/SingleLogin?merchantcode=IBT&lang=en&userId=${username}&uuId=${token}`
        );
        }
        else {
        this.props.history.push('/register');
        }
    };

    handleGDClick(view){
        let direct_view = {
        'Baccarat': 'N',
        'Roulette': 'RN',
        'SicBo': 'SB',
        'BidmeBaccarat': 'BMB',
        
        }
        const token = localStorage.getItem('token');
        // var code = gdcasino_code;
        // var accessKey = gdcasino_accessKey;
        //console.log(this.state.data)
        var currency = this.state.data.currency;
        // currency = currencyConversion[currency];
        // console.log(currency)
        var username = this.state.data.username;
        var key = sha256(gdcasino_code + token + gdcasino_accessKey + username + currency )
        
        var url = "";
        if(!token) {
            this.props.history.push('/register');
        } else {
            url = "https://gdcasino.claymoreasia.com/main.php?OperatorCode=" + gdcasino_code + "&Currency=" + currency + "&playerid=" + username + "&lang=zh-cn&LoginTokenID=" + token + "&theme=default&Key="+ key + "&view=" + direct_view[view] + "&mode=real&PlayerGroup=default";
            window.open(url, "gdcasino")
        }
    }

    handleAGClick(){
        
        var token = localStorage.getItem('token')
        if(token){
            var postData = {
                "username": this.state.data.username,
                "actype" : '1',
                "gameType": '0',
            }
            var formBody = [];
            for (var pd in postData) {
                var encodedKey = encodeURIComponent(pd);
                var encodedValue = encodeURIComponent(postData[pd]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            return fetch(API_URL + 'games/api/ag/forward_game', {
                method: "POST",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: formBody
            }).then(function (res){
                return res.json();
            }).then(function(data) {
                window.open(data.url, "aggames");
            });
        } else {
            this.props.history.push('/register');
        }
    }


    handleEAClick() {
        
        // console.log("lang: " + this.props.lang);
        // console.log(this.state.data);
        var language = 3;
        if (this.props.lang === "zh") {
            language = 1;
        }
        var username = this.state.data.username;
        var token = localStorage.getItem('token');
        var url = "";
        if (!token) {
            this.props.history.push('/register');
        } else {
        
            url = "https://178.claymoreasia.com/wkpibet/newlayout/index.php?userid=" + username + "&uuid=" + token + "&lang=" + language;
            window.open(url, "ea-live")
        }
    }
    
    render() {
        const { classes } = this.props;
        const { username } = this.state.data;

        return (
            <div className={classes.root}>
                <TopNavbar />
                <div className={classes.grow} >
                    <div className={classes.rootDesktop}>
                    <Grid container className={classes.mainGrid}>
                    <Grid item xs={12} className={classes.mainRow}>
                    <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/banner.jpg" alt="live-casino banner" style={{ opacity: 1 }} className="BannerImg" />
                    </Grid>
                    {/* main */}
                    <Grid item xs={12} className={classes.titleRow}>
                    {/* <div className="PgMain" >  */}
                    <span className={classes.title}>{this.getLabel('Live-casino')}</span>
                    </Grid>
                    {/* pghall */}
                    {/* <Grid item xs={12}  className={classes.hallRow}> */}
                    <div className="content">
                    <div className='PgHall'>

                        <div className="PgHallTitle">{this.getLabel('ag-title')}</div>
                        <div className="PgHallPic">
                        <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ag.jpg" alt="ag" style={{ opacity: 1 }} className="PgHallPicImg" />
                        </div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('ag-words')}</p>

                        <ul>

                            <li><a onClick={(e) => {this.handleAGClick()}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                            <li><a onClick={(e) => {this.handleAGClick()}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Jingmi')}</font></a></li>
                            <li><a onClick={(e) => {this.handleAGClick()}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Package')}</font></a></li>
                            <li><a onClick={(e) => {this.handleAGClick()}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-led')}</font></a></li>
                            <li><a onClick={(e) => {this.handleAGClick()}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                            <li><a onClick={(e) => {this.handleAGClick()}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                            
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            <a onClick={(e) => {this.handleAGClick()}}><span>{(this.state.data) ? this.getLabel('Real-money') : this.getLabel('Register-Now')}</span></a>
                        </div>
                        </Grid>
                        </div>
                    </div>

                    <div className="PgHall MarginLeft">
                        <div className="PgHallTitle">{this.getLabel('ab-title')}</div>
                        <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ab.jpg" alt="ab" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('ab-words')}</p>
                        <ul>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Julong')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Super')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Vip')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ab-Jingmi')}</font></a></li>
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            <a><span>{(this.state.data) ? (this.state.data) ? this.getLabel('Real-money') : this.getLabel('Register-Now') : this.getLabel('Register-Now')}</span></a>
                        </div>
                        </Grid>
                        </div>
                    </div>

                    <div className="PgHall MarginLeft">
                        <div className="PgHallTitle">{this.getLabel('EA-title')}</div>
                        <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/ea.jpg" alt="ea" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('EA-words')}</p>
                        <ul>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-commission')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Super')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Dragon')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Longbao')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Pair')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-Multi')}</font></a></li>
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtnLeft}>
                        <div className="PgHallBtn Active FloatLeft" style={{ cursor: 'pointer' }}>
                            <a href="http://testdownload.ea2-mission.com/wkpibet.exe"><span><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('pc-version')}</font></span></a>
                        </div>
                        </Grid>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            {<a onClick={() => {this.handleEAClick()}} ><span>{this.getLabel('Real-money')}</span></a>}
                            {/* <a onClick={() => (this.state.data) ? window.open("https://178.claymoreasia.com/wkpibet/newlayout/index.php", "ealive"): this.props.history.push('/register')}><span><font style={{ verticalAlign: 'inherit' }}>{(this.state.data) ? this.getLabel('Real-money') : this.getLabel('Register-Now')}</font></span></a> */}
                        </div>
                        </Grid>
                        </div>
                    </div>


                    <div className="PgHall MarginLeft">
                        <div className="PgHallTitle">{this.getLabel('n2live-title')}</div>
                        <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/n2live.jpg" alt="n2" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('n2live-words')}</p>
                        <ul>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-commission')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            {/* <a onClick={() => window.open("https://666.claymoreasia.com/", "n2live")}><span>{this.getLabel('Real-money')}</span></a> */}
                            <a onClick={() => {this.handleN2Click(username)}}><span>{this.getLabel('Real-money')}</span></a>
                        </div>
                        </Grid>
                        </div>
                    </div>

                    <div className="PgHall MarginLeft">
                        <div className="PgHallTitle">{this.getLabel('OPUS-title')}</div>
                        <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/opus.jpg" alt="opus" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('OPUS-words')}</p>
                        <ul>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-Qixi')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-Texas')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-21')}</font></a></li>
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            <a><span>{(this.state.data) ? this.getLabel('Real-money') : this.getLabel('Register-Now')}</span></a>
                        </div>
                        </Grid>
                        </div>
                    </div>
                    {/* </Grid> 
                <Grid item xs={12}  className={classes.hallRow}> */}
                    <div className="PgHall">
                        <div className="PgHallTitle Color3">{this.getLabel('gd-title')}</div>
                        <div className="PgHallPic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/gd.jpg" alt="gd" style={{ opacity: 1 }} className="PgHallPicImg" /></div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('gd-words')}</p>
                        <ul>
                            <li><a onClick={(e) => {this.handleGDClick("Baccarat")}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-baccarat')}</font></a></li>
                            <li><a onClick={(e) => {this.handleGDClick("BidmeBaccarat")}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gd-Mi')}</font></a></li>
                            <li><a onClick={(e) => {this.handleGDClick("Roulette")}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                            <li><a onClick={(e) => {this.handleGDClick("SicBo")}}><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Suibao')}</font></a></li>
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            <a onClick={(e) => {this.handleGDClick("Baccarat")}}><span>{(this.state.data) ? this.getLabel('Real-money') : this.getLabel('Register-Now')}</span></a>
                        </div>
                        </Grid>
                        </div>
                    </div>


                    <div className="PgHall MarginLeft">
                        <div className="PgHallTitle Color3">{this.getLabel('bbin-title')}</div>
                        <div className="PgHallPic">
                        <img src="https://static.qichuangtou.com/static/styles/desktop/images/casino/bbin.jpg" style={{ opacity: 1 }}  alt="bbin" className="PgHallPicImg" />
                        </div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('bbin-words')}</p>
                        <ul>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-words')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Two')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Sangong')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Wenzhou')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Texas')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('bbin-Color')}</font></a></li>
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            <a><span>{(this.state.data) ? this.getLabel('Real-money') : this.getLabel('Register-Now')}</span></a>
                        </div>
                        </Grid>
                        </div>
                    </div>
                
                    <div className="PgHall MarginLeft">
                        <div className="PgHallTitle Color3">{this.getLabel('gpi-title')}</div>
                        <div className="PgHallPic">
                        <img src="https://www.178letou.com/static/styles/desktop/images/casino/gpi.jpg" style={{ opacity: 1 }}  alt="gpi" className="PgHallPicImg" />
                        </div>
                        <div className="PgHallArticle">
                        <p>{this.getLabel('gpi-words')}</p>
                        <ul>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gpi-Baccarat')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gpi-Qixi')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gpi-Dai')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gpi-Sangong')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gpi-Black')}</font></a></li>
                            <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('gpi-Super')}</font></a></li>
                            
                        </ul>
                        <Grid item xs={3} className={classes.PgHallBtn}>
                        <div className="PgHallBtn FloatRight" style={{ cursor: 'pointer' }}>
                            <a><span>{(this.state.data) ? this.getLabel('Real-money') : this.getLabel('Register-Now')}</span></a>
                        </div>
                        </Grid>
                        </div>
                    </div>
                    <div className="emptyHall">
                        
                    </div>
                    <div className="emptyHall">
                        
                    </div>
                    
                    </div>


                    {/* </div> */}
                    {/* </Grid> */}
                    {/* pghall end */}

                    <div className="ClearBoth"></div>
                    <Grid item xs={12}  className={classes.ruleTitleRow}>
                    <span className={classes.rule}>{this.getLabel('game-rule')}</span>
                    </Grid>
                    
                    <div className="PgHallListBox">
                        <ul className="List">
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Traditional')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-No')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Super')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Package')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Jingmi')}</font></a></li>
                        </ul>
                        <ul className="List">
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Serial')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Longbao')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Pair')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Playboy')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Dragon')}</font></a></li>
                        </ul><ul className="List">
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Two')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Sangong')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Wenzhou')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Color')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Texas')}</font></a></li>
                        </ul>
                        <ul className="List">
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Blackjack')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('rule-Cattle')}</font></a></li>
                        <li><a><i></i><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('ag-Roulette')}</font></a></li>
                        </ul>
                        <ul className="PgHallBrand">
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo4.png" alt="HG platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('HG-platform')}</font></p>
                        </a>
                        </li>
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo3.png" alt="OPUS platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('OPUS-platform')}</font></p>
                        </a>
                        </li>
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo2.png" alt="EA platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EA-platform')}</font></p>
                        </a>
                        </li>
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo1.png" alt="AG platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('AG-platform')}</font></p>
                        </a>
                        </li>
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo8.png" alt="GD platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('GD-platform')}</font></p>
                        </a>
                        </li>
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo7.png" alt="EV platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('EV-platform')}</font></p>
                        </a>
                        </li>
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo6.png" alt="PT platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('PT-platform')}</font></p>
                        </a>
                        </li>
                        <li><a>
                            <div className="Pic"><img src="https://static.qichuangtou.com/static/styles/desktop/images/clogo5.png" alt="W88 platform" /></div>
                            <p><font style={{ verticalAlign: 'inherit' }}>{this.getLabel('W88-platform')}</font></p>
                        </a>
                        </li>
                        </ul>
                    
                    </div>
                </Grid>
                </div>
                    <div className={classes.rootMobile}>

                    </div>
                {/* main end */}
                </div>
                
                <Footer />
            </div>
        
        );
    }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    return {
        isAuthenticated: (token !== null && token !== undefined),
        lang: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(live_casino))));