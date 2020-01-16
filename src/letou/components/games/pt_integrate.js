import React from 'react';

import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { authCheckState, handle_referid, hide_landing_page } from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../../css/banner.css';
import { withRouter } from 'react-router-dom';

import '../../css/help.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




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

const htmlFile = '<p>hhhh</p>'
export class PTIntegrate extends React.Component {
    constructor(props) {
        super(props);
    }
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }
    componentDidMount() {
        // const script = document.createElement("script");
    
        // script.src = "pt_test/integration/integrationRedirect.html";
        // // script.async = true;
    
        // document.body.appendChild(script);

        // const script1 = document.createElement("script");
        // script1.type = "text/javascript";
        // script1.src = "https://login.fourblessings88.com/jswrapper/integration.js.php?casino=fourblessings88"
        // document.body.appendChild(script1);
      }

    render() {

        const { classes } = this.props;
      
        return ( 
            <div dangerouslySetInnerHTML={{__html:  "<p>hhh</p>"}}>
                
            </div>
            // <div>
            //     {/* <a href="/Users/jenniehu/Documents/work/Game/PT/integrationRedirect.html"></a> */}
            //     <a href=""></a>
            // </div>
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


export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, { authCheckState, handle_referid, hide_landing_page })(PTIntegrate))));
       