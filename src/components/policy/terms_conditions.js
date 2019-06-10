import React from 'react';
import Footer from "../footer";
import TopNavbar from "../top_navbar";
import { connect } from 'react-redux';
import { authCheckState } from '../../actions';
import { FormattedMessage } from 'react-intl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import { ReactComponent as IbetLogo } from '../../assets/img/svg/ibet_logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/img/svg/close.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,

  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f1f1f1',
    paddingBottom: 30,
  },
  contentPaper: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  titleContainer: {
    display: 'inline-block',
    display: 'flex',
  },
  page_icon: {
    display: 'inline',
    marginTop: 8,

  },
  page_title: {
    display: 'inline',
    marginLeft: 20,
    marginTop: 12,
    opacity: 0.7,
    fontSize: 28,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal',
    color: '#212121',
  },
  closeButton: {
    display: 'inline',
    float: 'right',
  },
  grow: {
    flexGrow: 1,
  },
  paragraph: {
    marginTop: 8,
  },
  bold_text:{
    fontWeight: 'bold'
  }
});

export class TermsConditions extends React.Component {


  async componentDidMount() {

  }


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopNavbar />
        <Grid container spacing={0}
          justify="center"
          className={classes.container}>
          <Grid item xs={12} sm={6} md={6} lg={5}>
            <Paper className={classes.contentPaper}>
              <div className={classes.titleContainer}>
                <IbetLogo className={classes.page_icon} />
                <div className={classes.page_title}>
                  <FormattedMessage id="privacy_policy.title" defaultMessage='Terms & Conditions' />
                </div>
                <div className={classes.grow}></div>
                <div className={classes.closeButton}>
                  <IconButton href='/'>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <Typography component="p" variant="h6">
                General Terms and Conditions ibet
                </Typography>
              <Typography component="p" variant="h6" paragraph={true}>  Version 13
              </Typography>
              <Typography component="p" paragraph={true}>
                Updated 7th of May 2019
              </Typography>
              <Typography component="p" paragraph={true}>
                INDEX
              </Typography>
              <Typography component="p" paragraph={true} className={classes.bold_text }>
                PART A – GENERAL
              </Typography>
              <Typography component="p" paragraph={true} className={classes.bold_text }>
                PART B – GAME SPECIFIC RULES
              </Typography>
              <Typography component="p" paragraph={true} className={classes.bold_text }>
                PART C – BONUS TERMS AND CONDITIONS
              </Typography>
              <Typography component="p" paragraph={true} className={classes.bold_text }>
                PART D – LOYALTY PROGRAM
              </Typography>
              <Typography component="p" paragraph={true} className={classes.bold_text }>
                PART A – GENERAL
              </Typography>
              <Typography component="p" paragraph={true}>
                Please read these terms and conditions of use (“GTCs”) carefully before using this Site and/or any services provided by the Gaming Operator. These GTCs explain what you need to know when you use the products and services we make available, including who we are, how you or we may alter or end the contract, who to contact if there is a problem and other important information.
                By using the Site and/or any services, you agree to be bound by these GTCs. If you do not wish to be bound by these GTCs you may not access or use the Site or any of the services provided by us.
              </Typography>
              <Typography component="p" className={classes.bold_text }>
                1. General
                </Typography>
              <Typography component="p" className={classes.bold_text }>2. Opening a Player Account
              </Typography>
              <Typography component="p" className={classes.bold_text }>3. Deposits and Wagers
              </Typography>
              <Typography component="p" className={classes.bold_text }>4. Verification Checks
              </Typography>
              <Typography component="p" className={classes.bold_text }>5. Errors and Cancellations
              </Typography>
              <Typography component="p" className={classes.bold_text }>6. Withdrawals
              </Typography>
              <Typography component="p" className={classes.bold_text }>7. Improper use of your account
              </Typography>
              <Typography component="p" className={classes.bold_text }>8. Responsible Gaming, Social Responsibility and Self Protection
              </Typography>
              <Typography component="p" className={classes.bold_text }>9. Winning and Prizes
              </Typography>
              <Typography component="p" className={classes.bold_text }>10. Customer Service and Complaints
              </Typography>
              <Typography component="p" className={classes.bold_text }>11. Termination, Blocking and Closing of Player Accounts
              </Typography>
              <Typography component="p" className={classes.bold_text }>12. Closure of the Account
              </Typography>
              <Typography component="p" className={classes.bold_text }>13. Personal Data and Publicity
              </Typography>
              <Typography component="p" className={classes.bold_text }>14. Local Laws and Prohibitions
              </Typography>
              <Typography component="p" className={classes.bold_text }>15. Links
              </Typography>
              <Typography component="p" className={classes.bold_text }>16. Intellectual Property Rights
              </Typography>
              <Typography component="p" className={classes.bold_text }>17. Limitation of Liability and Disclaimer
              </Typography>
              <Typography component="p" className={classes.bold_text }>18. Amendments and Changes
              </Typography>
              <Typography component="p" className={classes.bold_text }>19. Force Majeure
              </Typography>
              <Typography component="p" className={classes.bold_text }>20. Application of GTCs
              </Typography>
              <Typography component="p" paragraph={true} className={classes.bold_text }>21. Governing Laws and Disputes
              </Typography>

              <Typography component="p" paragraph={true} className={classes.bold_text }>
                1. GENERAL
              </Typography>
              <Typography component="p" paragraph={true}>
                1.1 In these GTCs, reference to "Mr Green" “Gaming Operator”, “us”, “we”, “our” means Mr Green Limited, a limited liability company incorporated in Malta, and subject to Maltese law, having its registered address at Tagliaferro Business Centre, Level 7, High Street, Sliema SLM 1549, Malta;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.2 Mr Green provides online gambling services on the web-sites www.mrgreen.com, casino.mrgreen.com, sport.mrgreen.com, http://wetten-bei-mrgreen.at, http://wetten-bei-mrgreen.de (the “Site”).
              </Typography>
              <Typography component="p" paragraph={true}>
                1.3 Capitalized terms shall have the meaning as defined in the body of these GTCs.
            </Typography>
              <Typography component="p" paragraph={true}>
                1.4 Mr Green is licensed and regulated by:
              </Typography>
              <Typography component="p" paragraph={true}>
                1.4.1 In respect of services offered to residents of the United Kingdom, the Gambling Commission of Great Britain, under Remote Operating License Number 000-039264-R-319432-011;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.4.2 In respect of sportsbook services offered to residents of the Republic of Ireland, the Revenue Commissioners, under remote bookmakers' License number 1011600;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.4.3 In respect of services offered to residents of Denmark, the Danish Gambling Authority under license number 18-0457046;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.4.4 In respect of services offered to residents of Italy, by the Agenzia delle Dogane e dei Monopoli under License number Concessione GAD AAMS 15024;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.4.5 In respect of services offered to residents of Sweden, the Swedish Gambling Inspectorate under license number 18Li7512;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.4.6 In respect of services offered to all other customers, by the Malta Gaming Authority (“MGA”) under License numbers MGA/CRP/121/2006 issued on the 1st of November 2018 and valid until the 19th of March 2028; the Game Type approved are types 1, 2 and 3 (collectively the "Gaming License").
              </Typography>
              <Typography component="p" paragraph={true}>
                1.5 Mr Green LTD is part of the MRG Group of companies. Other companies in the MRG Group may be licensed separately as independent legal entities, and the relevant terms and conditions and relevant License numbers can be found on the relevant sites for those entities. Mr Green accepts no responsibility whatsoever for the acts or omission or any other legal entity within the MRG Group.
              </Typography>
              <Typography component="p" paragraph={true}>
                1.6 These GTCs govern your access to, and use of, the Site, and constitute a legally binding contract between Mr Green and you as a player (herein “you” or the “Player”) and (save for Danish residents) is governed by the laws of Malta For Danish customers only, the use of the Site and the games, and other services are governed by the laws of Denmark.
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7 These GTCs include and incorporate a number of additional terms, as follows:
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.1 The Betting Terms and Conditions;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.2 The rules for casino games are found in each individual game; (Part B of these GTCs);
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.3 The Privacy Policy ;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.4 The Bonus Terms (Part C of these GTCs) and Loyalty Program Terms (Part D of these GTCs)
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.5 Intentionally Omitted
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.6 The Keno, Jackpot Bets, Bingo, Casino game and Sports Betting Rules are found under the Part B – Game Specific Rules of these GTCs;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.7 Any promotional terms which apply in respect of promotions, bonuses and other offers we may make available from time to time;
              </Typography>
              <Typography component="p" paragraph={true}>
                1.7.8 Any additional end user terms and conditions of use which we will ask you to confirm your agreement to as part of your use of the Site from time to time;
  </Typography>
              <Typography component="p" paragraph={true}>
                1.8 The GTCs are provided in different language versions. The different language versions of the GTCs reflect the same principles. However, in case of any discrepancies between the different language versions, the English version shall prevail.
              </Typography>
              <Typography component="p" paragraph={true}>
                1.9 If required, it is your responsibility to declare and pay for all taxes, duties or levies applicable to your deposits, winnings, bonuses, earnings, and in general any amount included at any point in time in your Player Account and you will not hold Mr Green responsible for any tax whatsoever.
              </Typography>
              <Typography component="p" paragraph={true} className={classes.bold_text }>
                2. OPENING A PLAYER ACCOUNT
              </Typography>
              <Typography component="p" paragraph={true}>
                2.1 In order to use the services provided by the Gaming Operator the Player must open an account (a “Player Account”). Players must register personally. The Gaming Operator reserves the right to refuse any application for a Player Account. Subject to sections 2, 4, 6, 7 and 15, a player’s registration may be refused, or an account closed at the licensee’s discretion, but contractual obligations already made will be honoured by the licensee.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.2 Playing at the Site is restricted to individuals of legal age as determined in the jurisdiction in which the Player resides, who has registered as a Player, and who holds a Player Account with the Gaming Operator. It is an offence to gamble whilst underage. In any event, you must not use the Site to gamble if you are under 18 years of age. Any funds deposited by such person will be returned to the individual after the Player Account has been closed by the Gaming Operator and any winnings will be forfeited.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.3 You may not use the Site if you are resident or located in any of the prohibited jurisdictions set out in Section 15.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.4 You understand and acknowledge that the games and the online community services provided on the Site are for entertainment purposes only. Any use of the Site for any other purposes or intention is strictly prohibited.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5 By opening a Player Account you warrant and represent that:
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.1 you are at least 18 years of age (or the legal age to gamble in the jurisdiction in which you reside, if higher);
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.2 you are legally able to enter into contracts;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.3 you have not been excluded from gambling (e.g. Self-Excluded, blocked from the Site/services, Excluded in a National Self Exclusion Register);
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.4 you have not already had a Player Account closed by us due to carrying out a Prohibited Practice;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.5 you will provide accurate registration information when opening your account, which will include, at a minimum, your correct name, date of birth, your country of residence, your current home address, email address and personal telephone number;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.6 you are opening your Player Account solely for your personal use, and that you are acting on your own behalf and not as an agent on behalf of a third party;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.7 you will not try to sell or in any way transfer the benefit of your account to any third party and nor will you acquire or attempt to acquire an account which has been opened in the name of a third party;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.8 you are entirely responsible for complying (and that you comply) with your own local, national, federal, state or other laws concerning betting and gaming prior to opening an account, placing any bets, stakes or wagers or using our services. If you are located in a country where use of a particular service is prohibited, you must not (i) register with us for the applicable service; (ii) attempt to use that service; or (iii) use your payment card or other payment method to undertake betting or gaming with us for the unlawful service;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.5.9 you are not prohibited for any reason from betting with us or from using the services;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.6 The Player (including in this case any person applying to become a Player) must always provide and maintain valid, complete and correct information to The Gaming Operator. You must ensure that the information you provide is true, complete and correct, and is kept up-to-date.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.7 Upon registration, the Player must select a password or register using a country specific valid electronic-ID. The password must consist of a minimum of six characters and it is recommended that the password includes a mix of letters, numbers and special characters. It is not recommended to use personal information or common words as passwords. Players must always log on to the Site using either of; a valid electronic-ID or; their email address together with their password. Players may not allow any person other than themselves to use their Player Account to access and/or use any materials or information from the gaming system, to accept any prize, and/or to participate in any of the games. It is strictly prohibited to sell, transfer and/or acquire Player Accounts to or from other Players.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.8 The password should never be written-down or communicated to any other person, and should be changed on a regular basis. You are obliged to keep your Player Account information, email and password secret and confidential and you are solely responsible for all activity and/or use of the services through your Player Account. In case you become aware of any known or suspected unauthorised use of your Player Account or any breach of security you are required to immediately notify the Gaming Operator hereof in order to suspend your Player Account. Any unauthorised use of your electronic-ID, email or password shall be deemed as your use and you are responsible for all activity on and/or charges to your Player Account until such notification is made to the Gaming Operator. Should a Player give away, share, or lose his/her electronic-ID, email and/or password, the Gaming Operator shall not be liable for any loss or damage as a result thereof.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.9 We must suspend your Player Account if one of the following applies:
              </Typography>
              <Typography component="p" paragraph={true}>
                2.9.1 you are a UK customer and we are unable to verify your identity at registration, before you are able to deposit on your account
              </Typography>
              <Typography component="p" paragraph={true}>
                2.9.2 we are unable to carry out Checks to our satisfaction in accordance with Section 4;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.9.3 you are not included under the articles 2.9.1 and 2.9.2, and we cannot confirm your identity within 30 days from reaching the deposit threshold of 2000 EUR on the basis of a rolling period of 180 days;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.10 We must close your Player Account if one of the following applies:
              </Typography>
              <Typography component="p" paragraph={true}>
                2.10.1 you are a Danish resident and we cannot confirm your identity within 30 days from when you registered the account. To confirm your identity, you should log on to your account using Nem-ID.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.10.2 you are a Swedish resident and we cannot confirm your identity within 30 days registering the account. To confirm your identity, you should log on to your account using Bank-ID/Entercash/Trustly.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.11 You are not allowed to open or attempt to open a Player Account if you hold a Player Account which has been Self-Excluded with any of the following MRG brands: Mr Green, redbet, WinningRoom, Bertil, MamaMia Bingo.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.12 You may only open one Player Account. If we have reason to believe you have:
              </Typography>
              <Typography component="p" paragraph={true}>
                2.12.1 registered and/or used more than one Player Account with us; or
              </Typography>
              <Typography component="p" paragraph={true}>
                2.12.2 colluded with one or more other individuals using a number of different accounts, we shall be entitled to deem such accounts as "Multiple Accounts" and treat them in accordance with clause 2.13.
              </Typography>
              <Typography component="p" paragraph={true}>
                2.13 We shall be entitled to suspend or close any Multiple Account(s). If we close a Multiple Account:
              </Typography>
              <Typography component="p" paragraph={true}>
                2.13.1 all bonuses, bonus bets and winnings accrued from such bonuses and bonus bets obtained using that Multiple Account will be void and forfeited by you;
              </Typography>
              <Typography component="p" paragraph={true}>
                2.13.2 we may, at our entire discretion, void all winnings and refund all deposits (less amounts in respect of void winnings) made in respect of that Multiple Account and, to the extent not recovered by us from the relevant Multiple Account, any amounts to be refunded to us by you in respect of a Multiple Account may be recovered by us directly from any other of your Player Accounts (including any other Multiple Account);
               </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang
  }
}

export default withStyles(styles)(connect(mapStateToProps, { authCheckState })(TermsConditions));