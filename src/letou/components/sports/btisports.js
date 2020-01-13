import React from 'react';
import Footer from './../footer';
import TopNavbar from './../top_navbar';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import {
    authCheckState,
    handle_referid,
    hide_landing_page
} from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import '../../css/banner.css';
import { withRouter } from 'react-router-dom';
import { config } from '../../../util_config';
import Iframe from 'react-iframe';

document.body.style = 'background: #f1f1f1;';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',

        alignItems: 'center',
        backgroundColor: theme.palette.background.paper
    },
    grow: {
        flexGrow: 1
    },
    font: {
        verticalAlign: 'inherit'
    },
    mainGrid: {
        maxWidth: 1400,
        padding: '35px 0'
    },
    PgSmallBanner: {
        height: 200,
        display: 'flex'
    },
    PgMain: {
        display: 'flex'
    },
    mainRow: {
        paddingBottom: 35,
        display: 'flex',
        margin: '0 auto'
    },
    titleRow: {
        marginBottom: 30,
        display: 'flex'
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
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    hallRow: {
        marginBottom: 30,
        display: 'flex'
    },
    listRow: {
        display: 'flex',
        marginBottom: 10
    },
    ruleTitleRow: {
        padding: '35px 0 10px',
        display: 'flex'
    },
    rule: {
        fontSize: 14,
        color: '#333',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    PgHallBtn: {
        width: '80vw',
        height: 30,
        fontSize: '14vw',
        borderRadius: 3,
        lineHeight: 30,
        backgroundColor: '#ff6050',
        marginBottom: 10,
        float: 'right'
    },
    PgHallBtnLeft: {
        float: 'left'
    }
});

class btisports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ''
        };
    }
    componentDidMount() {
        var token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
            if (
                window.location
                    .toString()
                    .toLowerCase()
                    .indexOf('dev') != -1
            ) {
                this.setState({
                    url:
                        'http://wkibph.staging.btisports.io/en/sports/?stoken=' +
                        token
                });
            } else {
                this.setState({
                    url: 'http://wkibph.btisports.io/en/sports/?stoken=' + token
                });
            }
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TopNavbar />

                <Iframe
                    url={this.state.url}
                    width="100%"
                    height="1500px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    scrolling="auto"
                    loading="auto"
                />

                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.lang
    };
};

export default withStyles(styles)(
    injectIntl(
        withRouter(
            connect(mapStateToProps, {
                authCheckState,
                handle_referid,
                hide_landing_page
            })(btisports)
        )
    )
);
