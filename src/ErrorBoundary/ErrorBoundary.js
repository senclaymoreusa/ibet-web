import React, { Component } from 'react'
import { sendingLog } from '../actions';

import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 400,
        width: '80%',
        // background: 'pink',
        alignItems:'center',        
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    paper: {
        height: 140,
        width: 100,
      },
      media: {
        height: 140,
      },
});


class ErrorBoundary extends Component {

    constructor(props) {
      super(props);
       this.state = { 
           hasError: false,
           error: null,
           errorInfo: null
     };
    }

    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      this.setState({
          hasError: true,
          error,
          info,
      })
      sendingLog(error);
    }
    render() {
        const { classes } = this.props;
        if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className={classes.root}>
            <Grid container pacing={2}>
            <Typography variant="h1" component="h2" align="center" style={{ width: '100%' }}>
                Oops, something went wrong
            </Typography>
            <Typography variant="h6" component="h6" align="center" style={{ width: '100%' }}>
            如有任何疑问请发邮件到 cs@letou.me
            </Typography>
            {/* <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> */}
                <Grid container item justify="center" md={12} xs={12} sm={12} key="455"  style={{'marginTop': '40px'}}>
                    <Grid item md={2} sm={2} xs={2} key="123" style={{ margin: 10 }}>
                        {/* <Paper elevation={3}>
                            <img href="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/pic1.jpg" />
                        </Paper> */}
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/pic1.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sport
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Football
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={2} sm={2} xs={2} key="234" style={{ margin: 10 }}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/pic2.jpg"
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    live casino
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    live casino
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={2} sm={2} xs={2} key="455" style={{ margin: 10 }}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/pic3.jpg"
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Games
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Games
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={2} sm={2} xs={2} key="666" style={{ margin: 10 }}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/pic4.jpg"
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lottery
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lottery
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={2} sm={2} xs={2} key="334" style={{ margin: 10 }}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://ibet-web.s3-us-west-1.amazonaws.com/public_images/pic5.jpg"
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Promotions
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Promotions
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            {/* </div> */}
                </Grid>
            </div>
        )
      }
      return this.props.children; 
    }
  }

export default withStyles(styles)(ErrorBoundary);