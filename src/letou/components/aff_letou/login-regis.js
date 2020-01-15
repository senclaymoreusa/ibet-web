import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { config } from '../../../util_config';
import { FormattedMessage } from 'react-intl';
import Iframe from 'react-iframe';
export class Login_Regis extends React.Component {
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
            <body class="hold-transition skin-black-light sidebar-mini fixed layout-top-nav"><div id="__next"><div class=""><span></span><input type="hidden" name="blackBox" id="blackBox" value="0400nyhffR+vPCUNf94lis1ztn8oLF24je6XBaPIuG/WXUmUMqzdvELjdu/GooTXaxOrQlgVcze28UWcEl/+J3zFFRaRnaVXVWfTSMKGPMntrtJ1SymuXlKryeXc4KIy3xRrzWYTHlPicx6oDCgFM0bW27UNV2Q29sXkDPWCyXC02/owt6O60biHEtEBaPC5qgPlKA75SqnFv76xkF+DIhH5fITqGyLXUVSWGTB8Kq+X3ZjlAwUqQY8qEdyACWbkLrnli4PvWoIpyZmpr5zlQx90s1eovP7W+WpQCv10TaNx+XTCCuhAF+nK4h0lKms9GydaNmlTW98y4uZVPDYLihDankoqWDbHA4su0+1vm3fbD4rz1SWTDLhcPSLMbC8rucuxUPVgCw/aRVV5iw8uPNT24TuUesCaD36zhnlpyjD9ydnz3wafI/WYHEsTCs2TKRSUB860/YtAXmzRhLqdI1qchaYiJ/+IO4wJwtQHr2DgT3vFL0ZMZD89ccVwqJz/hVFjCQf7ODMKeW667/JBeyQMMO0x2sBa83oiklX5LPMfjqhiDwK4w63kwk+N0eY/qPMOuQQrorj2eucREEZSE6DZ/Usys+sxW8mW8sTzEDL+2GfZsbSyl9kH53ErNjRzWcwCw5sEdF/IXcm80MYf058SQUBHbtl2L6+OpyBbY5IHHW2IrukwLD3N1DMW2O1dAjoDM6m8KZlmvCMZQpawxv2Dmq/AVGrJ6lBbiy08fE5mIlV0sOz7UkLVEd6rPtO0ffdT+LgXzfJng6QWZBamlGXoG/imnjwHY9HQtQzpGfcm0cR8X2Fd1ngNFGLDGZlWOX0jfqNcqJg1TcYlZ5CF4CSjS7uvNvEfRkJupBy3Z8hSEMHL9kaL85lzU9YPUST3gTYnG+8gClZWFN+gZW1jJ4sctGEQkRLFIksxr5XHrcXp6A2ig+YdKzGIJBDAstLN4US59PE4fRZTRwzCQai4/k8/K9DvxPQAaf/XuwLLNTE9qpxOALliUz0wRQBvurdD/GwJbS3X034W0o6dI7bwYcl/UpBgMPPEuSmenZj9FdkcO+C5OEXS5PafilwOYdtrWqOyFV+atTrlOS0FCE1XRfN+HZ21ET4rhaHYN4YbjEiJxk3o0NRac5lg3twTidneZ5Wedvp3EOKiSx6OC0ceqoTbyG/m3Zqxt3w1Bn6LxoWOnZu64rr07LwRGXZpyc7oQIV63xadNE2jqb6o3IAEdbB+xCyXZETvnwY66ZhPvPB88uvKwxqk07yDIelTiKdjsP8bOE7X9vwqIMVO1Tp84e7/t+oCVvxmSpCHsFD7NF8xYZmgL2N1HF368jHDNa+9HRp53fGqvsaWm95NQVeh3DqgmYc+acKU0y9x6nNCwC7Ny4JLW4kQBrIf7zu3Lm4emQ/Rb25AO3oWPkueMYB31OJ+LJWqSz9uX1sh4vA8ObKJ6/npDC421qdCeQNjNy7AGgy7YxYGlrJsWciYdAKCaGVJFlWBZGH9pmWAadOmsenJ5UfUPWVdDshBGw=="><div class=""><div></div><header id="header-page" class="main-header"><div style="display: none;"><span>¥0</span></div><nav class="navbar navbar-static-top"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="/cn/en/"><img src="/static/styles/desktop/images/logo.png" alt="logo" style="height: 100%;"></a><button class="navbar-toggle"><i class="fa fa-bars"></i></button></div><div class="collapse navbar-collapse pull-left" id="navbar-collapse"><ul class="nav navbar-nav"><li class="dropLi "><div class="navP"><span class="navSpan"><img class="flag" src="/static/styles/desktop/images/header/en-us.jpg" alt=""></span><i class="dropState dropDown  "></i></div></li><li class="register" style="display: none;"><a href="javascript://"><span>login</span></a> | <a href="javascript://"><span>register</span></a></li><li class="live800-section"><a href="javascript://" class="live800"></a></li></ul></div></div></nav></header><div class="content-wrapper" id="content-wrapper" style="min-height: 164px; position: relative; height: auto;"><div><div class="login-box" style="padding-bottom: 30px;"><div class="nav-tabs-custom"><ul class="nav nav-tabs"><li class="active"><a href="javascript://">login</a></li><li class=""><a href="javascript://">register</a></li></ul><div class="tab-content"><div class="tab-pane active"><div class="loginWarning" style="display: none;"><i></i></div><div class="form-group has-feedback"><div class="input-group"><span class="input-group-addon"><i class="fa fa-user"></i></span><input type="text" class="form-control" placeholder="enter account" maxlength="20" value="power88798"></div></div><div class="form-group has-feedback"><div class="input-group"><span class="input-group-addon"><i class="fa fa-key"></i></span><input type="password" class="form-control" placeholder="enter pwd" maxlength="20" value="asdf1234"></div></div><a class="btn btn-primary btn-block btn-flat" style="margin-bottom: 10px;">login now</a><div id="login-forget"><a>Forgot your password?</a></div></div></div></div></div></div></div><div><a class="liveChat "><i class="dot"></i><i class="dot" style="margin-left: 3px;"></i><i class="dot" style="margin-left: 3px;"></i></a></div><footer class="main-footer">© 2004-2018 Letou All rights reserved, gambling can be addictive, please be responsible for betting .</footer></div><div>
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
                </script><script async="" id="__NEXT_PAGE__/5/desktop" src="/_next/e219b49f-d80e-4204-b323-d964427b969f/page/5/desktop.js"></script><script async="" id="__NEXT_PAGE__/_error" src="/_next/e219b49f-d80e-4204-b323-d964427b969f/page/_error.js"></script><script src="/_next/e219b49f-d80e-4204-b323-d964427b969f/main.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="/_next/e219b49f-d80e-4204-b323-d964427b969f/page/5/desktop/login.js"></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script><script src="https://ci-mpsnare.iovation.com/snare.js" async=""></script></body>
            );
    }
}