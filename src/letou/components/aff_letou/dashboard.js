import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { config } from '../../../util_config';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: 'home'
        };

        this.getLabel = this.getLabel.bind(this);
    }
    render() {
        let { classes } = this.props;
        let phone = '';
        let phoneLabel = '';

        const { activeMenu } = this.state;

        return(
            <body class="hold-transition skin-black-light sidebar-mini fixed layout-top-nav"><div id="__next"><div class=""><span></span><input type="hidden" name="blackBox" id="blackBox" value="0400nyhffR+vPCUNf94lis1ztu5Divh068bwBaPIuG/WXUmUMqzdvELjdu/GooTXaxOrAgwcG2PAfg2HDjISVCUz/Ned+trm4ecPjZ9ET08wP5DcUJf2lLqlr0nbtw2dg9JBTIBnmyVMxolQFgHbM6DSPr9yMY9MukZVQ3Xefa+YB7KRCB2VV4OJ3IRSvulWFziBCjlU0y9oNd/sTU9/joi9e1h0TIw5qQXOmssqTe7WzQg67PDmZdnwAhkp8pXYJN6QsBx6w1tx0mMZz7HtmSQrKuHt39bvxE86eVaYJEF00M2dmwpFJMf4gz2h0sGQEDUmG6J9cUwqj8dMy2Iwv4XfYlSAFu7g0I1z9QmIvkwaq9654+V+QiCkdnNc1D4PcBOMpjUg85KSsvWxL+mGFFvttLHZYVR5D1f/AvP/XYklkdSeNKQj4i6zAjzmHvOZVxQkTdpKytzIitWiLZVX2oRcAEJI4/wX97IAaVmZqTD7tyd0W8+tYgTFPgD3AdfuKnvO6jB+ZmMavO7St0oGtrebhoApUqjVhXs+V1ll/+mAaPoIaLlR/opK4ce8mnFiPj0i/sjYbFEqui6YXa/fWWWKKvNj8BFhdUbtosTzKoxVC6fSPFFgCaMpvU/h6EFXXmXEsWVnlpeTGctq57v5YFWUSYWaGJ6j64Gsika5+mDohXq9f2PXvHogeO3Gk9aWzC1qEagfQyPROSmw/Wr/knjfVailTZTGyTQGXPFdWSFivvspMwhgZYIHBiJsCOKU4KoWi+RhvtpYgLFMRV0YmXEHAJzxpxtwqoC5Z/uCi7ME8loQwLLSzeFEuVfe4edP+Yyrtu9WgQJ0XvWT8T28Zu3VWnzLDG5AWomOoOXUWxljyPAVpcqq3kfmP7OgSQ0Fzflca1WxiZ1a0z3VhghPLNHC/1LfgEvDRh81WATiJ+8cr+n3oU6k968Na1C/0PQwVK9AfF9hXdZ4DRRkrbXWcoCj3I1znntcmg8XIiroNPn6uMT9rxZ7qeEFWdMvGxbddusFoBunNw2C3/vpkMmtLBD78KvSgKEsGZxuLnj3Qu/vX5VNb/bdHWWWwlYTcoND6RNF7AvaFBNgfUosPiZXdNCqfKAbzwOrtOItTHA2labaL23XIj00GhUM5m8m8kdEsm0uZpQRyqKemuLh5VgYvHz52A5oR/IjU+bZjD2O3xUgB+ZtAeHicfLGEKOaSzC6VU9YFFAN6Q1x80WrOPxkUl4i0L5FdCxEpn3widQ9ylbHrXRVUVfJEZc512x9Seh0hwNP5N9fL4EsARamTZSZyp8JDnA+k9XRlIy/KJFMamXBcfcEDp4vCzMnmgUxqB2LSOlgGdv1zyr2a0m6IHXMB5LT78ZYUJ8qswry4yvRhXnDkIsDYzcuwBoMu2MWBpaybFnImHQCgmhlSRZVgWRh/aZlgGnTprHpyeVH1oxC4Hn1No/Kygfgkr6Iw+pzQsAuzcuCS1uJEAayH+87ty5uHpkP0W9uQDt6Fj5LnjGAd9TifiyVqks/bl9bIcjMTjVEhO/l"><div class=""><div></div><header id="header-page" class="main-header"><div style="display: none;"><span>¥3,286.44</span></div><nav class="navbar navbar-static-top"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="/cn/en/"><img src="/static/styles/desktop/images/logo.png" alt="logo" style="height: 100%;"></a><button class="navbar-toggle"><i class="fa fa-bars"></i></button></div><div class="collapse navbar-collapse pull-left" id="navbar-collapse"><ul class="nav navbar-nav"><li class="active"><a href="/cn/en/dashboard"><i class="fa fa-dashboard"></i><span>dashboard</span></a></li><li class=""><a href="/cn/en/performance"><i class="fa fa-line-chart"></i><span>performance</span></a></li><li class=""><a href="/cn/en/withdraw"><i class="fa fa-money"></i><span>payment</span></a></li><li class="dropLi "><div class="navP"><span class="navSpan"><img class="flag" src="/static/styles/desktop/images/header/en-us.jpg" alt=""></span><i class="dropState dropDown  "></i></div></li><li><a href="javascript://"><i class="fa fa-sign-out"></i>logout</a></li><li class="live800-section"><a href="javascript://" class="live800"></a></li></ul></div></div></nav></header><div class="content-wrapper" id="content-wrapper" style="min-height: 164px; position: relative; height: auto;"><div class="container"><section class="content-header"><h1>welcome</h1></section><div class="content"><div class="row"><div class="col-xs-12"><div class="box box-solid"><div class="box-body"><div class="row row-agent"><div class="col-sm-6 column-left"><div class="agent-type"><span class="title selected"><i class="fa fa-diamond"></i> seniorAgent</span><a class="details">description</a></div></div><div class="col-sm-6 column-right"><div style="cursor: pointer; display: inline-block;"><a>shareLink</a></div></div></div><div class="row row-1"><div class="item"><div class="item-badge"><i class="fa fa-user"></i></div><div class="item-details"><div class="header">Active This Month</div><div class="body">0 people</div><div class="progress-container"><div class="progress"><div class="progress-bar progress-bar-green" style="width: 0%;"></div></div></div></div></div><div class="item"><div class="item-badge"><i class="fa fa-money"></i></div><div class="item-details"><div class="header">First Deposit This Month</div><div class="body">0 people</div><div class="progress-container"><div class="progress"><div class="progress-bar progress-bar-green" style="width: 0%;"></div></div></div></div></div><div class="item"><div class="item-badge"><i class="fa fa-money"></i></div><div class="item-details"><div class="header">Contribution This Month</div><div class="body">0.00</div><div class="progress-container"><div class="progress"><div class="progress-bar progress-bar-green" style="width: 0%;"></div></div></div></div></div></div><div class="row row-1 top-note">Note: Data is updated every two hours</div></div></div></div><div class="col-xs-12"><div class="box box-solid"><div class="box-header with-border"><h3 class="box-title">money come</h3></div><div class="box-body"><div class="row money-section"><div class="col-xs-12 col-sm-12 balance"><p>Collection commission: <em class="value">¥<span> 0.00</span></em></p></div></div></div></div></div><div class="col-xs-12"><div class="box box-solid"><div class="box-header with-border"><h3 class="box-title">transactionReport</h3><div class="pull-right"><label style="margin-right: 10px;">date</label><select class="form-control" style="display: inline-block; width: 200px; border-radius: 4px;"><option value="2019/12">2019/12</option><option value="2019/11">2019/11</option><option value="2019/10">2019/10</option><option value="2019/09">2019/09</option><option value="2019/08">2019/08</option><option value="2019/07">2019/07</option></select></div></div><div class="box-body"><div class="row"><div class="col-xs-12 col-sm-6 bottom-space-when-mobile"><span>patformWinningOrLosingAnalysis</span><ul class="nav nav-pills nav-stacked"><li><a><span><i class="fa fa-circle fa-fw"></i>Live Casino</span><span class="pull-right text-increase">¥ 0.00</span></a></li><li><a><span><i class="fa fa-circle fa-fw"></i>Sportsbook </span><span class="pull-right text-increase">¥ 0.00</span></a></li><li><a><span><i class="fa fa-circle fa-fw"></i>Game</span><span class="pull-right text-increase">¥ 0.00</span></a></li><li><a><span><i class="fa fa-circle fa-fw"></i>Lottory Game</span><span class="pull-right text-increase">¥ 0.00</span></a></li></ul><div class="more-section">Note: Data is updated on the 5th of each month.<span class="pull-right"><a href="javascript://">More</a></span></div></div><div class="col-xs-12 col-sm-6 affiliates-section"><span>thisMonthCommissionAnalysis</span><ul class="nav nav-pills nav-stacked"><li><a><span><i class="fa fa-dollar fa-fw"></i>customer turnover</span><div class="progress"><div class="progress-bar progress-bar-light-blue" style="width: 0%;"><span class="sr-only">0%complete</span></div></div><span class="pull-right text-increase">¥ 0.00</span></a></li><li><a><span><i class="fa fa-dollar fa-fw"></i>customer winlose</span><div class="progress"><div class="progress-bar progress-bar-light-blue" style="width: 0%;"><span class="sr-only">0%complete</span></div></div><span class="pull-right text-increase">¥ 0.00</span></a></li></ul><div class="more-section"><span class="pull-right"><a href="javascript://">More</a></span></div></div></div></div></div></div><div class="col-xs-12 col-sm-12"><div class="box box-solid share-section"><div class="box-header with-border"><h3 class="box-title">shareIndex</h3></div><div class="box-body"><div><div class="row"><div class="col-sm-4"><div class="qrcode-wrapper" style="text-align: center;"><canvas height="200" width="200" style="height: 100px; width: 100px;"></canvas></div><a style="color: white;"><button class="btn btn-primary btn-block download-qr">downloadTwoDdimensionalCode</button></a></div><div class="col-sm-8"><div class="input-group"><input type="text" class="form-control" disabled="" value="https://www.letou.com/cn/a/344811/460368"><div class="input-group-addon" style="cursor: pointer; display: table-cell;"><span><i class="fa fa-clipboard"></i></span></div></div><div class="info"><span><i class="fa fa-user"></i> registration: 21</span><span><i class="fa fa-mouse-pointer"></i> clicks: 45</span><div class="share-code">Sharing code: 344811</div></div></div></div><div class="more-section"><span class="pull-right"><a href="javascript://">More</a></span></div></div></div></div></div></div></div></div></div><div><a class="liveChat "><i class="dot"></i><i class="dot" style="margin-left: 3px;"></i><i class="dot" style="margin-left: 3px;"></i></a></div><footer class="main-footer">© 2004-2018 Letou All rights reserved, gambling can be addictive, please be responsible for betting .</footer></div><div>
                <noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-T8WNTNV'
                height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>
            </div><span style="display: none;"></span></div></div><div id="__next-error"></div><script>
          __NEXT_DATA__ = {"props":{"serverState":{"apollo":{"data":{}}},"isServer":true,"store":{},"initialState":{"app":{"domain":"affiliates.letou.com","apiData":[],"iovation":"","ip":"73.202.78.65","currencyID":2,"isMobile":false,"lang":"en-us","isFromParner":false,"pathName":"/","isServerStart":true},"lightbox":{"isShow":false},"login":{"isLoading":false,"isLogin":false,"isShowLogin":false,"isShowForgetPassword":false,"errorMessage":"","account":"","balance":{"BalanceAmount":0,"BonusAmount":0,"DepositAmount":0,"EstimatedBalance":0,"MainAccountSN":"","WithdrawalAmount":0,"WithdrawalLimitAmount":0},"baseInfo":{"DownLine_Cnt":0,"MiddleName":"","PromotionChannel":null,"LastLoginTime":"","Register_PromotionType":0,"IsApproved":0,"LastName":"","Gender":"","SecurityQuestionID":null,"CountryName":"","BrandID":5,"IsApply":0,"LanguageCode":"zh-cn","URL_Previous":null,"AffiliateType":1,"AuditTime":"","CreateTime":"","ContactNumber":"","Aff_AuditTime":"","City":"","CurrencyID":2,"IDVerifiedNumber":null,"PromotionExperience":null,"QQAccount":"","ZipCode":null,"MainAccountType":0,"URL":null,"MainAccountID":"","MainAccountSN":"","PromotionCode":"","DepositCount":0,"CountryID":2,"HandicapID":0,"Register_PromotionCode":"","FromChannelID":0,"BalanceAmount":0,"Region":"","address":"","Audittype":0,"SkypeAccount":null,"NewsLetter":1,"LevelTypeID":"","AreaCode":"","FirstName":"","Image":null,"AuditType1":0,"EMail":"","DecryptedContactNumber":"","DefaultChannelID":"","PromotionType":0,"Birthday":"","PromotionID":0,"SecurityAnswer":null}},"register":{"isUnique":false,"isLoading":false,"suggestNames":[],"isCouponCodeValid":false,"isShowRegister":false,"errorMessage":"","couponCode":{"affCode":"","type":0,"channelID":""},"isCreateAccountSuccess":false},"forget":{"isAccountExist":null,"allAuthInfo":{"ContactNumber":"","Email":"","SecurityQuestion":""},"question":{"isError":false,"verify":{"isSendVerifyCode":false},"errorMessage":""},"mobile":{"isError":false,"code":"","verify":{"isSendVerifyCode":false,"remainSecond":""},"errorMessage":""},"email":{"isError":false,"code":"","verify":{"isSendVerifyCode":false,"remainSecond":""},"errorMessage":""},"verifyToken":{"isError":false,"verify":{"isTokenVerified":false,"remainSecond":"","tokenOut":""},"errorMessage":""},"resetPassword":{"isError":false,"verify":{"isResetPassword":false},"errorMessage":""}},"channel":{"channelList":[]},"ad":{"languageList":[],"subjectList":[],"platform":null,"imgDimensionList":[],"ADImageSeqNo":-1},"report":{"channel":{"isLoading":false,"isError":false,"errorMessage":"","channels":[]},"statementReport":{"isLoading":false,"isError":false,"errorMessage":"","monthlyData":{},"history":{},"settlement":[]},"downlineReport":{"isLoading":false,"isError":false,"errorMessage":"","totalCounts":0,"table":[],"sumInfo":{}},"marketReport":{"isLoading":false,"isError":false,"errorMessage":"","totalCounts":0,"table":[],"sumInfo":{},"subSumInfo":{}},"customerReport":{"isLoading":false,"isError":false,"errorMessage":"","totalCounts":0,"table":[],"sumInfo":{},"subSumInfo":{}},"sortColumn":{"type":"asc","column":"rowNumber"},"customerSubReport":{"isLoading":false,"isError":false,"errorMessage":"","totalCounts":0,"table":[]},"channelReport":{"isLoading":false,"isError":false,"errorMessage":"","totalCounts":0,"table":[],"sumInfo":{},"subSumInfo":{}},"promotionReport":{"isLoading":false,"isError":false,"errorMessage":"","totalCounts":0,"table":[],"sumInfo":{}},"tableName":"customerReport","pagination":{"currentPage":0,"totalPage":0,"dataPerPage":10}},"dashboard":{"promotion":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"summary":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"auth":{"accountAuthStatus":"","saftyValue":0},"financial":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"income":{"dataset":{},"errorMessage":""},"commission":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"shareInfo":{"otherChannels":[],"createTime":"","registerCount":0,"channelName":"","copyLink":"","isLoading":false,"linkCount":0,"channelID":"","errorMessage":""},"info":{"MiddleName":"","LastLoginTime":"","LastName":"","Gender":null,"SecurityQuestionID":null,"CountryName":"","LanguageCode":"","CreateTime":"","ContactNumber":"","City":null,"CurrencyID":0,"IDVerifiedNumber":"","ZipCode":null,"MainAccountType":0,"MainAccountID":"","MainAccountSN":"","CountryID":0,"HandicapID":0,"BalanceAmount":0,"Region":null,"Address":"","AuditType":0,"NewsLetter":0,"LevelTypeID":"","isSuccess":false,"AreaCode":"","FirstName":"","EMail":"","Birthday":null,"PromotionID":"","SecurityAnswer":null},"monthDetail":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"platform":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"report":{"isLoadDataSuccess":false,"data":{}},"commissionWinloss":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"commissionTurnover":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"deposit":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"transaction":{"platformReport":{"platforms":[],"errorMessage":""}}},"intercom":{"isShowInbound":false,"isShowIntercom":false},"home":{"gameUrl":"","bannerData":{},"scrollingTextInfo":[],"searchBaseData":[],"hotGame":[],"positionCodeList":{},"leftGbHotGameInfo":{}},"message":{"messageList":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""},"questionList":{"result":[],"isLoading":false,"isError":false,"isSuccess":false,"message":""}},"liveChat":{"questionType":[]},"security":{"method":"index"}},"initialProps":{"ip":"73.202.78.65","currencyID":2,"isMobile":false,"isFromParner":false,"domain":"affiliates.letou.com","lang":"en-us","pathName":"/","isServerStart":true}},"page":"/5/desktop","pathname":"/5/desktop","query":{},"buildId":"e219b49f-d80e-4204-b323-d964427b969f","assetPrefix":"","runtimeConfig":{"ENV_STAGE":"production","EXTERNAL_API_HOST":"https://service.letou1.com/","INTERNAL_API_HOST":"https://service.letou1.com/","EXTERNAL_GQL_HOST":"https://gql.letou1.com/","INTERNAL_GQL_HOST":"https://localgql5.i4platform.com/","INTERNAL_STATIC_HOST":"https://static.qichuangtou.com/","STATIC_HOST":"https://static.qichuangtou.com/","CASH_FLOW_CENTER_HOST":"https://cfc.letou1.com/","BRAND":"5","INTERVAL_TIME":"3000","INTERVAL_TIMES":"6"},"nextExport":false,"err":null,"chunks":[]}
          module={}
          __NEXT_LOADED_PAGES__ = []
          __NEXT_LOADED_CHUNKS__ = []

          __NEXT_REGISTER_PAGE = function (route, fn) {
            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })
          }

          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {
            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })
          }

          false
        </script><script async="" id="__NEXT_PAGE__/5/desktop" src="/_next/e219b49f-d80e-4204-b323-d964427b969f/page/5/desktop.js"></script><script async="" id="__NEXT_PAGE__/_error" src="/_next/e219b49f-d80e-4204-b323-d964427b969f/page/_error.js"></script><script src="/_next/e219b49f-d80e-4204-b323-d964427b969f/main.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="/_next/e219b49f-d80e-4204-b323-d964427b969f/page/5/desktop/login.js"></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="/_next/e219b49f-d80e-4204-b323-d964427b969f/page/5/desktop/dashboard.js"></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script></body>
        );
        }
        }