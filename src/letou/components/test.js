import React from "react";
import Slider from "react-slick";
import TopNavbar from "./top_navbar";
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';
import Footer from "./footer";
import '../css/banner.css';
import { config } from '../../util_config';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import '../css/help.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const API_URL = process.env.REACT_APP_DEVELOP_API_URL

const FGGAME_URL = "https://lsl.omegasys.eu/ps/game/GameContainer.action?platform=NETENT_CAS&brandId=524&gameId="
const MGGAME_URL = "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4023&ul=en"


console.log("Line 15, process env URL = " + API_URL);

document.body.style = 'background: #f1f1f1;';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
    
      },
      test: {
          width:900,
          margin:100

      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      item: {
        padding:10,

      }

})

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  export class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
           current: 0,
           freegame: true,
           data: '',
           sessionKey : null,
           fggame:[],
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
  
  render() {
    const { classes } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const fgitems = this.state.fggame.map((game, key) => [
        <div className={classes.item}>
            <GridListTile key={game.image}>
            <img src={game.image} alt='Not available' />
            <GridListTileBar
            title={game.name}
            classes={{
                root: classes.titleBar,
                title: classes.title,
            }}
        
            />
            </GridListTile>
        </div>
      ]);
   
    return (
    <div className={classes.root}>
        <TopNavbar />
        <div className={classes.test}>
            <Slider {...settings}>
              
                {fgitems}
                {/* <GridList className={classes.gridList} cols={5.5}>
                
                    {this.state.fggame.map(game => (
                    <GridListTile key={game.image}>
                        <img src={game.image} alt='Not available' />
                        <GridListTileBar
                        title={game.name}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                    
                        />
                    </GridListTile>
                    ))}
                </GridList> */}
            </Slider>
        </div>
        <Footer />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
    
    return {
        lang: state.language.lang,
        isAuthenticated: (token !== null && token !== undefined)
    }
}

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(SimpleSlider))));
