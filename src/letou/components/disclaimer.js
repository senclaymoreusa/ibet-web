import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconHeader from "./icon_header";


import {
    show_letou_announcements
} from '../../actions';
import { InfoSelect } from './infoSelect';


const styles = theme => ({
    logoHeader: {
        height: '20px',
        padding: '10px'
    },
    header : {
        fontSize: '24px',
        color: '#333333',
        position: 'relative',
        width: '100%',
        height: '75px',
        backgroundColor: '#f5f5f5',
        marginBottom: '50px',
        paddingLeft: 300,
        paddingTop: 20
      
    },
    content : {
        display: 'flex',
        paddingRight: 400,
    },
    infoSelect : {
        paddingLeft: 300,
        display: 'flex',
        flexDirection: 'column',
    },
    aboutUsDetail : {
       fontSize: '14px',
    },
    helpCenterArticleColumn: {
        fontSize: '14px',
        listStyleType: 'none',
    }
})

export class Disclaimer extends React.Component {
    
    getLabel(labelId) {
        const { formatMessage } = this.props.intl;
        return formatMessage({ id: labelId });
    }

    render() {
  
      const { classes } = this.props;
  
      return (
       
        <div className={classes.root}> 
            <IconHeader/>
            <Grid container className={classes.content}>
                <Grid item xs={5} className={classes.infoSelect}>
                    <InfoSelect/>
                </Grid>
                
                <Grid item xs={7} className={classes.detail}>
                <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/for_member">供会员使用  >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/for_member">维护账户安全  >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                <div id="HelperCenterDetail">
                        <h2>免责声明</h2>

                        <p>尊敬的用户，LETOU 对任何由本站链接到的外部网站，所含内容准确性或时效性不作任何管制，且不负任何责任。</p>

                        <p>&nbsp;</p>

                        <h2>账户的终止、关闭或没收</h2>

                        <p>&nbsp;</p>

                        <h2>违反协议合约及索赔</h2>

                        <ul className={classes.helpCenterArticleColumn}>
                                
                                <li>如果根据本条款，阁下的账户被冻结无法享用我们的服务，只有在您完成必要的纠正程序并经由我们审核通过后，阁下的账户才可重新启动。</li>
                                    <li> LETOU在会员账户的发放，更新和关闭上享有绝对权力。LETOU管理层关于会员账户，网站服务提供方面享有最终决定权不得异议。我们有权随时关闭客户账户，不论其原因。</li>
                                

                                <ul className={classes.helpCenterArticleColumn}>
                                    <li>在以下情况LETOU有权（唯一决定人）取消任何彩金，没收任何投注帐户余额，终止协议或因违反条款而冻结账户：</li>
                                    <li>1.我们核实阁下拥有不止一个LETOU账户。</li>
                                    <li>2.阁下违反本协议的任何条款规则。</li>
                                    <li>3.我们获悉阁下在其它娱乐网站有欺诈，合谋（包括诈回注金等等），非法或不当行为的不良纪录。</li>
                                    <li>4.阁下是LETOU员工或LETOU员工亲属。</li>
                                    <li>5.阁下是LETOU前雇员或LETOU前雇员亲属等，离职时间少于6个月。</li>
                                    <li>6.阁下注册信息不真实或蓄意误导。</li>
                                    <li>7.阁下不提供须提交的身份数据。</li>
                                    <li>8.阁下未达到合法年龄。</li>
                                    <li>9.阁下"退款"或导致"退款"反对我们或否认任何经由其账户产生的注单或存款。</li>
                                    <li>10.您获准其他人（有意或无意）使用您的账号。</li>
                                    <li>11.阁下的存款源自犯罪，或其它非法行为。</li>
                                    <li>12.您并未告知您居住于以下地区：澳大利亚，比利时，丹麦包括格陵兰和法罗群岛，德国，希腊，香港，以色列，荷兰，菲律宾，南非，西班牙，瑞士，台湾，土耳其，美国，意大利和法国，包含瓜德罗普岛，留尼汪岛，马提尼克岛，法属圭亚那，法属波利尼西亚，马约特岛，新喀里多尼亚，圣巴泰勒米，圣马丁岛，圣皮埃尔，密克隆群岛瓦利斯和富图纳群岛。</li>
                                </ul>

                                <p>如果阁下违反本协议或其中部分条款，LETOU有权采取适当的对应做法，包括终止协议，立即拦截阻止您访问我们网站和使用我们的服务，关闭您的账户，没收账户资金和／或采取必要的法律诉讼手段。</p>
                                    <li> 阁下承诺如出现以下情形，将对LETOU及其股东，员工，职员，执照持有人，执照颁发者，合作伙伴及附属机构做出全责赔偿损失，成本，开销，律师费用和其他收费等等，以及维护其合法权益，使免受责任牵连及负面影响。</li>
                                

                                <ul className={classes.helpCenterArticleColumn}>
                                    <li>1.您违反协议或协议部分内容。</li>
                                    <li>2.您违反法律条例或影响第三方合法权益。</li>
                                    <li>3.以及以上负面结果是由您本人使用我们网站服务造成，或其他人使用您的帐户信息登录造成，不论您是否有授权。</li>
                                    <li>4.如果协议中一个条款在某法律范畴被裁定为非法，无效或不可实施，它将不会影响该条款在其它法律范畴的适用，也不影响到协议其他条款在该法律范畴的适用，或其它条款在其它法律范畴的适用。</li>
                                    <li>5.协议的标题仅供参考，它不影响到任何条款的构成或解释。</li>
                                    <li>6.如果因以下超出控制范围的原因（包括天灾，政府管制，战争，暴动，传送中断，系统崩溃，电信或宽带服务中断，电力中断等等）LETOU不能按照协议规定履行义务，将不会构成违反合约。</li>
                                    <li>7.在本协议中，LETOU未能或延迟行使或履行任何权利，补救措施，特权，并不代表LETOU放弃此特权。</li>
                                    <li>8.LETOU有权随时未经通知转让该协议合约或其部分内容。然而，客户无权转让关于该协定您的权利或义务。</li>
                                    <li>9.该协议不能产生或授予任何权利或其它利益给与此协议无关的第三方。</li>
                                    <li>10.该协议不能产生或不能被视为产生LETOU与您之间的合作，代理，信托或合资关系。</li>
                                    <li>11.该协议为阁下与LETOU之间关于网站服务使用协议的最新的完整版本，它将取代之前的版本。</li>
                                </ul>
                            
                        </ul>
                    </div>
                
                </Grid>
            </Grid>
            
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
        showAnnouncements: state.general.show_letou_announcements,
    }
}


Disclaimer.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(Disclaimer))));