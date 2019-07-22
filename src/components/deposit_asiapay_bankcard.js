import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { config } from '../util_config';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";
import '../css/deposit.css';
// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import {authCheckState} from '../actions';
import ImagePicker from 'react-image-picker'
import img7 from '../images/boc.jpg'//中国银行
import img6 from '../images/cgb.png'//广发银行
import img4 from '../images/cmb.jpg'//招商银行
import img3 from '../images/aboc.jpg'//农业银行
import img2 from '../images/ccb.png' //建设银行
import img1 from '../images/icbc.jpeg'//工商银行
import 'react-image-picker/dist/index.css'

const API_URL = process.env.REACT_APP_DEVELOP_API_URL;

    
const imageList = [{img:img1, value:"1"}, 
                    {img:img2, value:"2"},
                    {img:img3, value:"3"},
                    {img:img4, value:"4"},
                    {img:img6, value:"6"},
                    {img:img7, value:"7"}];

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  
    margin: {
      margin: 'auto',
    },
  
    textField: {
      flexBasis: 200,
      width: 300,
      backgroundColor: '#ffffff;'
    },
  
    cssRoot: {
        color: theme.palette.getContrastText(blue[300]),
        backgroundColor: blue[300],
        '&:hover': {
          backgroundColor: blue[800],
        },
      },
    button:{
        margin: theme.spacing.unit,
    }
  });


class DepositAsiapayBankcard extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          amount: '',
          currency: '',
          error: false,
          data: '',
          type: '',
          qaicash_error: false,
          qaicash_error_msg: "",
          live_check_amount: false,
          button_disable: true,
          value: "",
          size: 128,
          fgColor: '#000000',
          bgColor: '#ffffff',
          level: 'L',
          renderAs: 'svg',
          includeMargin: false,
          show_qrcode: false,
          bankid:'',
          image: null,
        };
        
        this.onInputChange_amount          = this.onInputChange_amount.bind(this);
        this.handleChange                   = this.handleChange.bind(this);
        this.onPick                         = this.onPick.bind(this);
    }
    
    componentDidMount() {
        this.props.authCheckState().then(res => {
            if (res === 1){
                this.props.history.push('/')
            }
        })

        const token = localStorage.getItem('token');
        config.headers["Authorization"] = `Token ${token}`;
        axios.get(API_URL + 'users/api/user/', config)
          .then(res => {
            this.setState({data: res.data});
          })
        const { type } = this.props.match.params;
        

    }
    onInputChange_amount(event){
        if (!event.target.value || event.target.value.match(/^[0-9.]+$/)){
            this.setState({amount: event.target.value}); 

            if (!event.target.value.match(/^[0-9]+(\.[0-9]{0,2})?$/) || event.target.value === '0' || event.target.value.match(/^[0]+(\.[0]{0,2})?$/)){
                this.setState({live_check_amount: true, button_disable: true})
            }else{
                this.setState({live_check_amount: false, button_disable: false})
            }
        }
        this.check_button_disable()
    }
    
    onPick(image) {
        
        this.setState({image})
        this.setState({bankid: image.value})
        this.check_button_disable()
        
    }
    check_button_disable(){
        
        if(this.state.amount && this.state.image != null  && !this.state.live_check_amount ){
            this.setState({button_disable: false})
        }
        console.log(this.state.image)
    }
    handleClick = (depositChannel, apiRoute) => {
            var postData = {
                "amount": this.state.amount,
                "userid": this.state.data.pk,
                "currency": "0",
                "PayWay" : "30", //online bank
                "method": this.state.bankid, //银行卡
            }
            console.log(this.state.amount)
            console.log(this.state.data.pk)
            console.log(this.state.bankid)
            var formBody = [];
            for (var pd in postData) {
                var encodedKey = encodeURIComponent(pd);
                var encodedValue = encodeURIComponent(postData[pd]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            return fetch(API_URL + 'accounting/api/asiapay/deposit', {
              method: 'POST',
              headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
              body: formBody
            }).then(function(res) {
              return res.json();
            }).then(function(data){
                let url = data.url;
                let order_id = data.order_id;
                window.open(url + "?cid=BRANDCQNGHUA3&oid=" + order_id);
            });
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render(){
        const { classes } = this.props; 
        return (
            <div>
                <TopNavbar />
                <form  className='deposit-bankcard-form'>
                    
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.amount" defaultMessage='Please enter the amount you want to add to your account' />
                            </b>
                        </label>
                    </div>
                    
                    <TextField
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={'text'}
                        value={this.state.amount || ''}
                        onChange={this.onInputChange_amount}
                    />
                    

                    <br />
                    {
                        this.state.live_check_amount && this.state.live_check_amount ? 
                        <div style={{color: 'red'}}> 
                            <FormattedMessage id="balance.error"  defaultMessage='The amount you entered is not valid' />
                        </div> :
                        <div>
                            <br />
                        </div>
                    }
                    <div>
                        <label>
                            <b>
                                <FormattedMessage  id="deposit.bank" defaultMessage='Please choose the bank you want to use' />
                            </b>
                        </label>
                    </div>
                    <div>
                        <ImagePicker 
                            images={imageList.map((image, i) => ({src: image.img, value: image.value}))}
                            onPick={this.onPick}
                            
                        />
                        
                    </div>
                    <div className='asiapay-button'  >
                        <Button 
                            disabled = {this.state.button_disable} 
                            variant="contained" 
                            color="primary"  
                            className={classes.button}
                            onClick={this.state.button_disable ? () => {} : this.handleClick}
                        >
                            PAY NOW
                        </Button>
                        
                    </div>
                </form>
            </div>
            
        )
    }

}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
    }
}

export default withStyles(styles)(injectIntl(connect(mapStateToProps,{authCheckState})(DepositAsiapayBankcard)));