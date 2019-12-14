import React from "react";
import Slider from "react-slick";
import TopNavbar from "./top_navbar";
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheckState, handle_referid, hide_landing_page } from '../../actions';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
    
      },
      test: {
          width:800
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
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const { classes } = this.props;
    return (
    <div className={classes.root}>
        <TopNavbar />
        <div className={classes.test}>
            <Slider {...settings}>
                <div>
                <h3>test1</h3>
                </div>
                <div>
                <h3>test1test1test1test1test1test1test1</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
            </Slider>
        </div>
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
