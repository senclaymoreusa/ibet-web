import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../icon_header";
import '../../css/help.css'

import {
    show_letou_announcements
} from '../../../actions';


const styles = theme => ({
   
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

export class GameRuleEightVn extends React.Component {
    
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
                <div className="HelpCenterLeftNav">
                            <ul>
                                <li>
                                    <a href="/vn/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vn/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/vn/for_member">Dành cho Thành viên >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vn/for_member">Luật chơi RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                        <p align="center">
                            <strong>Terms &amp; Conditions for NetEnt games
                                <br /> Updated: 5
                                <sup>th</sup> October 2017 </strong>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <strong>Foreword and Definitions</strong>
                        </p>
                        <p>These Terms &amp; Conditions constitute and govern the contractual relationship between the parties:</p>
                        <p>Fremont Tech Ltd, a company duly registered in Malta on the 10/08/2016 with registration number C76805 holds a Class
                            1 remote gaming license, running on Class 4 Licensee (NetEnt Malta Limited) permitting it to provide online gaming
                            (hereinafter referred to as "Fremont Tech Ltd" or “the Company”); and you "the Player".</p>
                        <p>Fremont Tech Ltd is licensed in Malta and regulated by the Malta Gaming Authority with License No MGA/CL1/1256/2016.</p>
                        <p>Terms and conditions for use of the Company's transaction and casino system (hereafter called the “Gaming System” or
                            the “Software”) to access or use the games supplied by NetEnt Malta Limited (hereafter called the “NetEnt games)
                            under the primary domain www.goldcasino88.com and any other associate sites listed under the license number MGA/CL1/1256/2016
                            (hereafter called the “Site”)</p>
                        <p>Fremont Tech Ltd and the Player agree that both parties shall comply with the following terms and conditions:</p>
                        <p>
                            <strong>1. </strong>
                            <strong>General</strong>
                        </p>
                        <p>1. Use of the NetEnt games on the Site and the information, materials and links in it, is solely upon the terms and conditions
                            set out below, hereinafter referred to as the “T&amp;Cs” which constitute the entire agreement between the Player
                            and Fremont Tech Ltd for the use of the Site.</p>
                        <p>2. These T&amp;Cs shall immediately become effective as from the date when the Player registers his account with Fremont
                            Tech Ltd. These T&amp;Cs shall be the official source of reference for any complication/dispute related to the use
                            of the Site, service or software. All NetEnt games played on Fremont Tech Ltd’s Site are duly subject to the rules
                            as specified in this document.</p>
                        <p>3. Fremont Tech Ltd hereby reserves the right to suspend, add, end, amend and/or supplement these T&amp;Cs from time
                            to time as it may deem appropriate. Any such changes shall be deemed effective as soon as they are accepted by the
                            Malta Gaming Authority and posted on the site.</p>
                        <p>4. Any changes made to the T&amp;Cs will be notified to the Players in advance and the Player must re-confirm acceptance,
                            before changes come into effect. The Player shall be deemed to have consented to the changes by continuing to use
                            the services on the Site after such effective date.</p>
                        <p>5. Fremont Tech Ltd is under no obligation to verify if all the Players use the Site or Gaming System according to the
                            updated rules of these T&amp;Cs. The version posted on the Site is the effective version, and that which Players
                            should use as reference. It is the Player’s responsibility to inform himself regarding the T&amp;Cs, NetEnt game
                            rules, and Fremont Tech Ltd’s privacy policy, as well as being familiarized with the modifications that affect or
                            will affect the Player.</p>
                        <p>6. Fremont Tech Ltd recommends that the Player visits the T&amp;Cs regularly. If, at any time, the Player refuses to
                            be bound by the T&amp;Cs, he shall immediately cease use of the Site and the Gaming System.</p>
                        <p>7. Exceptional Circumstances</p>
                        <p>It is the intention of Fremont Tech Ltd to operate under our Malta license, though we reserve the right at any time,
                            including, without limitation, for disaster recovery purposes:</p>
                        <p>1. to request that Fremont Tech Ltd, on its own account provides Player with gaming facilities. Should Fremont Tech Ltd
                            agree to provide Player with such betting facilities, Player agree that such facilities will be provided to Player
                            subject to the laws of Malta and subject to the exclusive jurisdiction of the courts of Malta</p>
                        <p>2. to assign this Agreement to another company(s) affiliated with Fremont Tech Ltd, in which case such other company(s)
                            will act as agent for, and provide services to Fremont Tech Ltd, to ensure that the services will be available to
                            Player, subject to these T&amp;Cs</p>
                        <p>Third parties do not have the ability to enforce any part of this Agreement save in respect of the rights of counterparties
                            to enforce Player’s duty of good faith directly against Player. This Agreement, may however be varied at any time
                            without the consent of any counterparties to any bets struck through Fremont Tech Ltd.</p>
                        <p>8. The following words and terms, should be interpreted as follows, unless, the context clearly implies otherwise:</p>
                        <p>1. “Player Account” shall mean a personal account opened by an individual and maintained by Fremont Tech Ltd from which
                            the Player accesses or plays the NetEnt games on the Site</p>
                        <p>2. “Software” shall mean the software licensed by Fremont Tech Ltd including all programs and databases and any other
                            derived content, requiring download, whether accessible or otherwise used by the Player through the Site and allowing
                            you to participate in the NetEnt games.</p>
                        <p>3. “Login and Password” shall mean the login and password details that are chosen by a Player upon registering with Fremont
                            Tech Ltd;</p>
                        <p>4. “The Regulatory Authority” is the Malta Gaming Authority (MGA), Building SCM 02-03, Level 4, SmartCity Malta, Ricasoli
                            SCM1001, Malta. http://www.mga.org.mt/lga/home.aspx, which is the main regulator of remote gaming operations.</p>
                        <p>5. References in these T&amp;Cs to a “Game” or “Games” is to any gaming activity pertaining to the NetEnt games, presented
                            by Fremont Tech Ltd on its Site for the benefit of the Players and as approved by the Regulatory Authority.</p>
                        <p>9. Should there be any discrepancy between the T&amp;Cs in the English language version and the version in any other
                            language, the English version will supersede.</p>
                        <p>10. The following territories are restricted for NetEnt games: Afghanistan, Albania, Algeria, Angola, Australia, Cambodia,
                            Ecuador, Guyana, Hong Kong, Indonesia, Iran, Iraq, Israel, Kuwait, Lao, Myanmar, Namibia, Nicaragua, North Korea,
                            Pakistan, Panama, Papua New Guinea, Philippines, Singapore, South Korea, Sudan, Syria, Taiwan, Uganda, Yemen, Zimbabwe,
                            Belgium, Bulgaria, Canada, Denmark, Estonia, France, Italy, Latvia, Lithuania, Mexico, Portugal, Romania, Spain,
                            United States of America and the United Kingdom.</p>
                        <p>
                            <strong>2. </strong>
                            <strong>Rules &amp; Procedures governing the Games</strong>
                        </p>
                        <p>Registration</p>
                        <p>1. Fremont Tech Ltd shall not permit any person to participate a Game on the Site unless that person is registered as
                            a Player and holds an account with Fremont Tech Ltd.</p>
                        <p>2. Players open an account by completing the online registering application, which is an integral part of the Site. To
                            verify customer's identity, Fremont Tech Ltd reserves the right to request at any time satisfactory proof of identity
                            (such as copy of ID, passport or any payment cards used) and proof of address (recent utility bill or bank statement).
                            Failure to supply such documentation may result in suspension of the Player’s account.</p>
                        <p>3. Transactions are subject to be checked to prevent money laundering. With respect to money laundering regulations,
                            Fremont Tech Ltd has the right to demand any further information from the customer, as it may deem appropriate. If
                            Fremont Tech Ltd at any moment in time suspects that there may have been any money laundering or other suspicious
                            transaction it will immediately report the matter to any relevant authorities.</p>
                        <p>4. The Player shall complete the registration application on the Site, which shall include a valid email address and
                            shall if necessary provide Fremont Tech Ltd with the following documents:</p>
                        <p>(i) document to prove age and identity (proof that the Player is of legal age in country of residence is a copy of proof
                            of identity such as ID card, passport or driving license)</p>
                        <p>(ii) document confirming that the payment source used for deposits and withdrawals belongs to the registered Player (e.g.
                            bank statement)</p>
                        <p>(iii) proof of residence address of the Player (such as a utility bill)</p>
                        <p>5. If Fremont Tech Ltd becomes aware that a Player has provided false information in this respect, Fremont Tech Ltd shall
                            not register such Player and where that Player has already been registered, Fremont Tech Ltd shall immediately suspend
                            that Player’s registration as a Player with Fremont Tech Ltd. In this case, the Player's account balance will be
                            frozen.</p>
                        <p>6. The Player also agrees to update this information should there be any changes to the personal data provided.</p>
                        <p>Player’s Identity</p>
                        <p>7. Fremont Tech Ltd shall not make a payment in excess of two thousand three hundred and twenty-nine Euro (€ 2,329) out
                            of a Player’s account until the Player’s identity, age and place of residence have been verified. In the event of
                            further clarifications required Fremont Tech Ltd reserves the right to request for further documentation or authentication.</p>
                        <p>Eligibility</p>
                        <p>8. Only adults - individuals who are at least 18 years old (in the case of Estonia 21) and / or have a minimum age in
                            accordance with national law and when making payments shall use the source of funds held in their name are eligible
                            to open and set up a Player Account. It is illegal to residents of the USA as well as residents of any other country
                            wherein laws prohibit online gambling.</p>
                        <p>9. It is the Players’ responsibility to know whether the processing and opening of a Player Account is allowed within
                            their jurisdiction.</p>
                        <p>10. Any funds deposited or any money won by any Player that is deemed ineligible under this clause of the T&amp;Cs shall
                            be forfeited to the Malta Gaming Authority.</p>
                        <p>Law applicable to Players</p>
                        <p>11. The Players understand and accept that Fremont Tech Ltd is unable to provide them with any legal advice or assurances
                            and that it is their sole responsibility to ensure that at all times they comply with the laws that govern them and
                            that they have the complete legal right to play the Games. Any participation in the Games is at their sole option,
                            discretion and risk. By playing the Games, they acknowledge that they do not find the Games or Site to be offensive,
                            objectionable, unfair, or indecent in any way.</p>
                        <p>Opening of Deposit Account</p>
                        <p>12. To be able to play on the Site, a deposit account must necessarily be opened. Upon opening an account, the Player
                            will have personal username(s) and/or password(s) and/or other data that are required to login and access the Player
                            Account and/or play the Games.</p>
                        <p>13. It is the Player’s responsibility to keep data such as login and password confidential. Fremont Tech Ltd cannot be
                            held responsible of any misuse of Player‘s password.</p>
                        <p>14. Provided that Fremont Tech Ltd has been correctly supplied with the Player’s account information requested at login,
                            the Company is entitled to assume that orders, payments and instructions are made by the Player.</p>
                        <p>15. A Player registration may be refused at the Licensee’s sole discretion but contractual obligations already made must
                            still be honored.</p>
                        <p>Multiple Accounts</p>
                        <p>16. Each Player is allowed to open only one Player Account in one’s own name. Use of more than one account per physical
                            Player is known as “multi-accounts” and as such is strictly forbidden. Fremont Tech Ltd retains the right to close
                            a Player’s account at any time and to cancel all the transactions pertaining to any Player that has registered more
                            than one account in his own name or under different names in the event that Fremont Tech Ltd has reason to suspect
                            that the registration of said multiple accounts has been undertaken with the intent of defrauding or cheating.</p>
                        <p>17. Fremont Tech Ltd reserves the right to block regular or tournament play and/or prize distribution should any evidence
                            of multi-accounting arise. This behavior must be considered as suspicious and the account suspended. By opening an
                            account with Fremont Tech Ltd, the Player implicitly gives his authorisation to the processing of any personal data
                            in compliance with the privacy laws in force in Malta. The processing of personal data is exclusively managed to
                            the end of account maintenance for use of the Games and services as offered by Fremont Tech Ltd.</p>
                        <p>18. Fremont Tech Ltd do not allow that different account holders from the same household and/or family play on the same
                            bet. The meaning of the term “same bet” in this clause includes different combinations of the same bet. Should a
                            registered Player breach the aforementioned prohibition, Fremont Tech Ltd reserves the right to cancel such bet subject
                            to the rules of cancellation stated herein.</p>
                        <p>Misuse of Accounts</p>
                        <p>19. Deposited funds shall be used for administration of bets / betting deposits and Fremont Tech Ltd reserves the right
                            to stop the withdrawal request from the account of the Player who does not meet this requirement, or for the purpose
                            of a security clearance.</p>
                        <p>20. A KYC procedure is carried out on all deposits.</p>
                        <p>21. In the event of misuse and/or the abuse of promotions and/or of any offers from Fremont Tech Ltd, Fremont Tech Ltd
                            reserves the right to close or block the account of the Player in question until the matter between Fremont Tech
                            Ltd and the Player is resolved.</p>
                        <p>Prohibition for Employees</p>
                        <p>22. No employees, managers, directors, consultants, agents, branches or affiliated companies, any of the providers or
                            sellers at Fremont Tech Ltd or anyone else having access to inside information (for example: complete hand histories,
                            playing histories, money transaction histories, and similar) nor their relatives (in this clause, the term « relatives
                            » means spouse, partner, parents, children or siblings of the people mentioned above) can participate in any Games
                            during their term of employment, management, directorship, engagement or contractual relationship with Fremont Tech
                            Ltd. This is to prevent any potential abuse of inside information. Proof of such attempts shall result in steps being
                            taken by Fremont Tech Ltd that shall have repercussions upon the contract existing between the employee etc. and
                            Fremont Tech Ltd.</p>
                        <p>23. Nevertheless, this shall not apply where relatives are expressly allowed to play on the Fremont Tech Ltd site by
                            means of written authorisation by Fremont Tech Ltd.</p>
                        <p>24. If clauses 22 or 23 above are breached, Fremont Tech Ltd reserves the right to close the said account immediately
                            and to cancel payment on any gain. This shall take place without any prejudice to the rights that Fremont Tech Ltd
                            has against the breaching Player in terms of the employment or any other contract between the parties.</p>
                        <p>Deposits and Payments</p>
                        <p>25. Fremont Tech Ltd shall not accept cash from a Player and funds may be received from the Player only by any of the
                            following methods:</p>
                        <p>(i) credit cards;</p>
                        <p>(ii) debit cards;</p>
                        <p>(iii) electronic transfer;</p>
                        <p>(iv) wire transfer;</p>
                        <p>(v) e-wallets.</p>
                        <p>26. Money paid to Fremont Tech Ltd shall be available for use in the Player’s Account within not more than twenty-four
                            hours from receipt of money. The twenty-four hour time frame specifically excludes the time that the bank, or the
                            payment solutions offered by Fremont Tech Ltd may undertake to process the transfer.</p>
                        <p>27. If the Player uses payment through a virtual wallet, the e-mail address must be the same as the address sent to Fremont
                            Tech Ltd during registration.</p>
                        <p>28. Fremont Tech Ltd reserves the right to set a maximum amount of funds that can be deposited with Fremont Tech Ltd
                            per transaction. Such maximum can be varied at Fremont Tech Ltd’s discretion.</p>
                        <p>
                            <br />
                            <strong>Current deposits limits are set as follows:</strong>
                            <br /> Credit/debit cards – 500 Euro
                            <br /> Electronic Transfer – 500 Euro
                            <br /> Wire transfer – 500 Euro
                            <br /> E-wallets – 500 Euro
                            <br />
                            <br />
                            <strong>Deposit fees are as follows:</strong>
                            <br /> Credit/Debit cards - 0
                            <br /> Electronic Transfer - 0
                            <br /> E-Wallets - 0</p>
                        <p>29. It is not possible to transfer money from one Player Account to another.</p>
                        <p>30. Fremont Tech Ltd shall have a right to take any measures and adopt any procedures to obtain the verification or identity
                            of a Player. If such evidence is not obtained, or where Fremont Tech Ltd knows or suspects that the transaction may
                            be related to money laundering or the funding of terrorism, Fremont Tech Ltd shall not proceed with such transaction
                            and shall have the right to close such Player’s Account and shall have the right to disclose details of such transaction
                            to the Financial Intelligence Analysis Unit in Malta. Anti-Money Laundering Policy or any other relevant authority.</p>
                        <p>No interest</p>
                        <p>31. A Fremont Tech Ltd Account does not accrue interest. All payments to and from the Player’s Account must be paid in
                            the currencies available on the Site from time to time and shall not bear interest and all payments into the Player’s
                            Account must be from a payment source on which the Player is the named account holder. The Player may not treat the
                            licensee as a financial institution.</p>
                        <p>Currency</p>
                        <p>32. All payments to/from the Player’s account shall be paid in the same currency as the currency of the registered Player's
                            account and all payments to the Player's account shall be made from the payment source, which is held in the name
                            of the holder of the Player's account.</p>
                        <p>List of Accounts</p>
                        <p>33. Fremont Tech Ltd shall, at all times, keep a secure list of all registered Players and shall ensure the security
                            of all Player Accounts. The Player acknowledges that Fremont Tech Ltd will hold information with respect to his identity,
                            including but not limited to his name, address and any other information supplied at the time or registration or
                            subsequently. The Player also acknowledges that Fremont tech Ltd will hold information with respect to his payment
                            details. The Player agrees that the Company can rely on this information and agrees to hold the Company harmless
                            against any falsehood or inaccuracy contained in the information provided.</p>
                        <p>Player’s Records</p>
                        <p>34. It is the Player's responsibility to ensure that their records with Fremont Tech Ltd are kept up to date, especially
                            address, telephone number, payment/bank details and email contact. In the event of changes to your address or telephone
                            number please contact our customer service department on instructions to change Player Account details.</p>
                        <p>Data protection</p>
                        <p>35. Fremont Tech Ltd may process any personal data of Players in accordance with applicable data protection laws including,
                            but not limited to, processing customer's account and payments, keeping records and verifying identity and fraud
                            investigation.</p>
                        <p>36. Fremont Tech Ltd may share Player's personal data with any of its financial agents institutions processing payments
                            who may only use it for those purposes defined by Fremont Tech Ltd, or as otherwise permitted by the Data Protection
                            Act (Chapter 440 of the Laws of Malta).</p>
                        <p>37. Unless Player has indicated otherwise, Fremont Tech Ltd may contact any Player with product and service related information,
                            such as direct email newspapers and/or any other special marketing and/or advertising offers.</p>
                        <p>38. Player is aware and consents to the recording of all website use, electronic mails and telephone calls between him/her
                            and Fremont Tech Ltd. These recordings will be sole property of Fremont Tech Ltd and may be used as evidence in the
                            event of any dispute or to improve customer services.</p>
                        <p>Marketing and Promotion</p>
                        <p>39. In the event that a Player wins an amount equal to €3,000.00 [three thousand EURO] or more, through use of the Software
                            or the Games, the Player agrees to give Fremont Tech Ltd the exclusive permanent and irrevocable right and authorization
                            to use the Player’s name, photograph, and portrait in all media as part of Fremont Tech Ltd’s marketing and promotional
                            needs, and for its Site, on a worldwide level, and to be fully cooperative with company representatives including
                            support staff.</p>
                        <p>Password Security</p>
                        <p>40. The Player name, password and control question in case of password loss are strictly confidential. The Player shall
                            ensure that the details and any other security data are kept secret and Games played on the Internet under the login
                            of the Player’s Account and/or safety data shall be considered valid regardless of who plays the Game.</p>
                        <p>41. The Player is advised to choose a strong, robust and non-predictable password.</p>
                        <p>42. Fremont Tech Ltd is in no way responsible for the eventual access to a Player’s account by a third party and will
                            not be held responsible for any eventual loss suffered due to the illicit use of a Player’s password by a third party,
                            of unauthorized access, and/or for any transaction in which the name and password of the Player was registered correctly.</p>
                        <p>43. Fremont Tech Ltd is in no way responsible if the Player forgets, misplaces, or loses his/her password, except as
                            a result of an error on the part of Fremont Tech Ltd. Fremont Tech Ltd shall not at any time during its relationship
                            with the Player be responsible to store passwords and logins of the Player.</p>
                        <p>Inactive Accounts</p>
                        <p>44. If the Player does not access the Player Account by logging in for any period of six calendar months, his account
                            shall be deemed to be “Inactive”. Fremont Tech Ltd shall be entitled to charge an administrative fee of € 5.00 charged
                            at the end of each calendar month that the Player Account remains Inactive and may deduct the same from his Account
                            Balance. The administration fee will no longer be charged if the Player’s Account is re-activated prior to any monthly
                            fee being deducted. Fremont Tech Ltd will alert every Player inactive for 5 months about the possible upcoming administration
                            fee by sending alert message on the Player's email.</p>
                        <p>45. After a period of 30 calendar months the inactive account will be closed. The balance on the account shall be remitted
                            to the Player, or if the Player cannot be satisfactorily located, to the Malta Gaming Authority. No claim shall lie
                            against Fremont Tech Ltd after it has remitted the balance in a Fremont Tech Ltd account to the Regulatory Authority.</p>
                        <p>Player Names</p>
                        <p>46. Fremont Tech Ltd reserves the right to deny or retract, for whatever reason deemed necessary by Fremont Tech Ltd,
                            any or all Player screen names and/or Player names, whether before, during and after these names have been issued
                            or validated. In the event that Player’s Account is otherwise in order according to these T&amp;Cs, Fremont Tech
                            Ltd will give Player(s) the opportunity to create a new screen and/or Player name.</p>
                        <p>Closing of Accounts</p>
                        <p>47. Any Player is entitled to close his Account and terminate this Agreement at any time by sending an email to Fremont
                            Tech Ltd using these details: info@fremont.com and Fremont Tech Ltd will respond within a reasonable time. The Player
                            shall be responsible for activity on his Account until such closure has been affected by Fremont Tech Ltd. Fremont
                            Tech Ltd is entitled to terminate this Agreement immediately on notice (or attempted notice) to the Player at the
                            email address that was provided to Fremont Tech Ltd. If Fremont Tech Ltd has canceled the Player's account on the
                            ground of failure to comply with the safety instructions or fraudulent activities, the account balance shall be unaccrued
                            and considered lost.</p>
                        <p>48. In the event of an account being blocked (cancellation of the Player’s Player account), a Player shall be permitted
                            to withdraw any balances exceeding withdrawal fees in accordance with our Withdrawal request terms. This option shall
                            not be provided to the Player in case of violation of the rules and conditions of Fremont Tech Ltd. If the Player
                            is in dispute he is entitled to file a complaint as per our complaint term and the operator will liaise with the
                            regulator on the outcome of the complaint. Any positive balance existing in Player Account pending investigation
                            and/or following the conclusion of any legal proceedings may be used on account of any damages or sums owed by the
                            Player to the Company.</p>
                        <p>49. All payments shall be remitted to the Player within 3 working days following the Player’s request.</p>
                        <p>Complaints</p>
                        <p>50. Customers may address their complaints via email on info@fremont.com and/or via phone published on the site’s section
                            named Contacts. Fremont Tech Ltd shall use its best efforts to resolve the complaint reported as soon as possible,
                            but no later than 14 working days from the receipt of the complaint.</p>
                        <p>51. Should the Player not be satisfied with the resolution of such complaint by Fremont Tech Ltd, a further complaint
                            may be addressed to the Malta Gaming Authority (Malta Gaming Authority, Building SCM 02-03, Level 4, Smart City Malta,
                            Ricasoli SCM1001, Malta) (www.mga.org.mt) or email support.mga@mga.org.mt</p>
                        <p>52. Fremont Tech Ltd is in no way responsible for the investigation or the initiation of a complaint made by a Player
                            against another for any reason, including but not limited to, these T&amp;Cs.</p>
                        <p>53. Fremont Tech Ltd in its sole discretion can decide to act against any Player suspected of illicit actions or of wanting
                            to violate the T&amp;Cs.</p>
                        <p>Chat Rules</p>
                        <p>54. Fremont Tech Ltd may offer the Player the possibility to chat in virtual chat rooms. The purpose of the chat rooms
                            is to provide entertainment and communication among the Players of the Games. All chat must be in English or the
                            language specific for specially designed language tables. The Player may only chat in a way that would be appropriate
                            in a face-to-face meeting</p>
                        <p>55. Fremont Tech Ltd will not tolerate any derogatory, abusive or violent behavior by a Player to any of our employees.
                            Should a Player behave in any such manner (to be determined solely by Fremont Tech Ltd, the Company reserves the
                            right to suspend and/or close the Player Account, and/or take any other measures as deemed appropriate.</p>
                        <p>56. The Player is not entitled to make untrue and/or malicious and/or damaging comments with regard to the Group's operation
                            in any media or forum.</p>
                        <p>57. All the conversations using the chat feature are recorded and stored.</p>
                        <p>58. Any malicious chat will be reported to the relevant authority.</p>
                        <p>59. Fremont Tech Ltd reserves the right to remove chat rooms</p>
                        <p>60. Any games, where a chat feature is provided, it is done so in order to let Players interact on the games with other
                            Players in collective conversations. Rules are applied to ensure that a pleasant atmosphere is maintained on the
                            network, that no fraudulent activity is facilitated and that Players feel part of the community.</p>
                        <p>61. Fremont Tech Ltd shall not be liable towards any Player using the chat functionality for any damage arising from
                            other Players conduct. The Player shall release from liability and hold Fremont Tech Ltd harmless against any damage
                            due to the Player’s illegal, unlawful or inappropriate conduct or arising out of the violation by the Player of the
                            Chat Rules.</p>
                        <p>62. Chat must not contain disrespectful comments about other Players or any comments or expressions that may offend other
                            Players.</p>
                        <p>63. It is not allowed to violate the privacy or other rights of the fellow Players.</p>
                        <p>64. Giving and asking of personal details in chat is prohibited. It is not allowed to use the chat feature to advertise
                            or promote any product, service or offer.</p>
                        <p>65. To report abusive chat please contact Fremont Tech Ltd support service.</p>
                        <p>66. The chat feature is moderated or monitored by Fremont Tech Ltd, either automatically, or by human means.</p>
                        <p>67. Collusion through the use of the chat feature or separate chat is prohibited.</p>
                        <p>68. In case of breach of the Chat Rules, Fremont Tech Ltd will warn the Player. If the Player does not comply, then such
                            Player may be excluded from the chat room. Player may also be excluded with immediate effect and without prior warning
                            for unlimited time in sole decision of Fremont Tech Ltd.</p>
                        <p>
                            <strong>3. </strong>
                            <strong>Financial Issues &amp; Payments</strong>
                        </p>
                        <p>Bonuses</p>
                        <p>1. Bonus credits can be placed into a Players’ account as part of a marketing campaign. These credits cannot be withdrawn
                            or paid out but they must be used for the placing of bets in the manner stated in the respective rules of different
                            marketing bonus campaigns.</p>
                        <p>2. Bonus always has status of a gift. The Player has no legal claim for awarding bonus, Fremont Tech Ltd solely determines
                            who is eligible for bonuses according to the rules and conditions of the bonus scheme which are entirely at the Company’s
                            discretion.</p>
                        <p>Winnings</p>
                        <p>3. Winnings will only be remitted by Fremont Tech Ltd to the name and address of the bearer of the account, as it exists
                            in Fremont Tech Ltd’s records. Fremont Tech Ltd reserves the right to stop the withdrawal request from the account
                            of the Player pending for verification of identity, age, residence and the payment methods used.</p>
                        <p>4. Winnings will be credited to the Player’s Account following confirmation of the final result.</p>
                        <p>Withdrawal Requests</p>
                        <p>5. The Player may at any time request a payout from the existing balance of his/her Player Account in whole or in part
                            provided that all payments have been confirmed and all amounts deposited.</p>
                        <p>6. Any expense related to withdrawal requests shall be charged to the receiver. In the event that a Player has increased
                            his gaming account by sending a copy of the transfer receipt related to a postal money order or bank transfer, the
                            date shown on the receipt must coincide with the payment date into the Fremont Tech Ltd bank account otherwise it
                            shall not be possible to withdraw any wins.</p>
                        <p>7. A five percent administrative charge shall be applied for payout requests referring to amounts deposited with Fremont
                            Tech Ltd and which have not been used at least once for placing bets or playing casino games Fremont Tech Ltd requests
                            the rights to request a full KYC or security clearance from Players who have requested payouts without participation.</p>
                        <p>8. The withdrawal request shall be processed immediately. Fremont Tech Ltd. undertakes, if possible, to process the request
                            within three working days after verification of the identity of the Player and the payment methods used by the Player.
                            Deposit(s) prior to the application shall be properly cleared by the bank and credited to Fremont Tech Ltd accounts.</p>
                        <p>9. Fremont Tech Ltd is not responsible for any delay in the withdrawal procedure that is caused by any third party including,
                            but not limited to any payment processor or intermediary bank.</p>
                        <p>10. Withdrawals from a Players Account can only be addressed strictly to the Player registered on the account and as
                            per the conditions specified on the Fremont Tech Ltd site.</p>
                        <p>11. Payments shall be made; if possible, by the same payment method the deposit has been made. In the case of a deposit
                            by bank transfer, payment shall be made to the bank account from which the deposits were transferred. Exceptions
                            to this shall be restricted as follows. (i) In those cases where the Player deposits money with Fremont Tech Ltd
                            by bank transfer or through other payment solutions offered by Fremont Tech Ltd, the Player may record more than
                            one bank account with Fremont Tech Ltd. Upon receipt of such requests Fremont Tech Ltd shall verify whether the Player
                            is the owner of the registered account. To this regard Fremont Tech Ltd reserves the right to request all documentation
                            necessary, including a bank statement, to confirm that bank accounts belong to a particular Player. Players who have
                            recorded more than one bank account may request that the payout is made by transfer to any bank account recorded
                            with and verified by Fremont Tech Ltd. (ii) In those cases, where the payment solutions provided by Fremont Tech
                            Ltd do not offer redirection of payouts to the same bank account from which the funds originated; the Player shall
                            record a bank account with Fremont Tech Ltd. Payouts in such cases shall be made by bank transfer to the bank account
                            as recorded with and verified by Fremont Tech Ltd. The company reserves the right to conduct a further KYC in this
                            event</p>
                        <p>12. Funds held in dormant, inactive, closed or excluded accounts may be recovered either by re-accessing the Site with
                            withdraw only options available or by contacting customer support. Such withdrawals are subject to normal company
                            withdrawal procedures.</p>
                        <p>Errors</p>
                        <p>13. Should funds be credited to a Player’s Account in error for any reason or in any capacity, it is the Player's responsibility
                            to notify Fremont Tech Ltd of the error without delay. Any winnings subsequent to or associated with this error shall
                            be considered invalid and returned to Fremont Tech Ltd regardless of any delay in error reporting. If the Player
                            withdraws or uses as a deposit for a non-winning bet funds which have been due to an error credited to his account,
                            then Fremont Tech Ltd reserves the right in its sole consideration, to withdraw directly from the Player Account
                            the amount equal to the one he has mistakenly accepted.</p>
                        <p>Changes to Account Balance by Third Parties</p>
                        <p>14. Fremont Tech Ltd cannot be held liable for changes to a Player’s Account balance due to someone else playing using
                            that Player’s personal details or login credentials including but not limited to username and/or password.</p>
                        <p>Credit/Debit Card</p>
                        <p>15. Players may only use their own credit / debit card in their own account. In case of deposits made by credit / debit
                            card of another individual, Players shall certify by adequate documentation proving entitlement to use that credit
                            card.</p>
                        <p>Financial Information / Documents</p>
                        <p>16. Fremont Tech Ltd hereby ensures the security of all financial information on the Player and financial documents whether
                            relating in/directly to the transactions affected between the Player and Fremont Tech Ltd or between Fremont Tech
                            Ltd and the relevant tax authorities.</p>
                        <p>Proof of Payments</p>
                        <p>17. The Player acknowledges that Fremont Tech Ltd reserves the right to request proof of payments to Players accounts
                            for all alternative payments, at any moment. Fremont Tech Ltd reserves the right to request its Players’ bank account
                            numbers at any time.</p>
                        <p>18. Claims concerning payments shall be accompanied by proof of payment. Without providing proper documentation, claims
                            shall be considered devoid of purpose.</p>
                        <p>Responsible Gaming</p>
                        <p>19. The Player may by written notice or electronic notice to Fremont Tech Ltd or through their account settings:</p>
                        <p>(iii) set a limit on the amount the Player may wager within a specified period of time;</p>
                        <p>(iv) set a limit on the losses the Player may incur within a specified period of time;</p>
                        <p>(v) set a limit on the amount of time the Player may play in any one session;</p>
                        <p>(vi) exclude the Player from playing for a definite or indefinite period of time.</p>
                        <p>20. A Player who has set a limit or exclusion may change or revoke the limit or exclusion by written notice or electronic
                            notice given to Fremont Tech Ltd.</p>
                        <p>21. A notice increasing or revoking a limit or decreasing the exclusion has effect only after seven days after Fremont
                            Tech Ltd has received the notice.</p>
                        <p>22. A notice reducing a limit or increasing the exclusion has effect immediately after it is received by Fremont Tech
                            Ltd.</p>
                        <p>23. Fremont Tech Ltd shall not accept a wager from a Player contrary to a limit or exclusion set by the Player under
                            this regulation.</p>
                        <p>
                            <strong>4. </strong>
                            <strong>Game rules</strong>
                        </p>
                        <p>Matters beyond our reasonable control</p>
                        <p>1. Without prejudice to the obligations contained within the various laws and regulations of the jurisdictions where
                            the Company is licensed, the Company is not liable for any loss or damage that Player may suffer because of any:
                            act of God; power cut; trade or labor dispute, act, failure or omission of any government or authority; obstruction
                            or failure of telecommunication services; or any other delay or failure caused by a third party or otherwise outside
                            of our control. In such an event, Fremont Tech Ltd reserves the right to cancel or suspend our services without incurring
                            any liability.\</p>
                        <p>2. Fremont Tech Ltd is not liable for the failure of any equipment or software howsoever caused, wherever located or
                            administered, or whether under our direct control or not, that may prevent the operation of the Games, impede the
                            placing of offers for bets or the matching of bets, or prevent the Player from being able to contact the Company,</p>
                        <p>3. Please be aware that if Player places a bet with the intention of subsequently placing a separate bet to reduce the
                            liability incurred by the initial bet, there can never be a guarantee that the Site or Games will be available at
                            the point the Player wishes to place the subsequent bet (this is the case regardless of whether or not the unavailability
                            of the services is due to a matter beyond the reasonable control of the Company).</p>
                        <p>4. Fremont Tech Ltd will not be liable for any failure to perform by a third party to our agreement or these T&amp;Cs.</p>
                        <p>Software Rules – Artificial Intelligence</p>
                        <p>5. The use of artificial intelligence including, without limitation, "robots" is strictly forbidden in connection with
                            the Site and/or the Games.</p>
                        <p>6. Fremont Tech Ltd is committed to detecting and preventing software programs which are designed to enable artificial
                            intelligence ("AI Software") to play on Fremont Tech Ltd such as, but not limited to opponent-profiling, cheating
                            software or anything else that we deem enables you to have an unfair advantage. All actions taken in relation to
                            the Games by a Player must be executed personally by Players through the player interface accessible by use of the
                            Site. The Player acknowledges that Fremont Tech Ltd will take measures to detect and prevent the use of such programs
                            and AI Software using methods (including but not limited to reading the list of currently running programs on a Player’s
                            computer) and the Player agrees not to use any AI Software and/or any such programs.</p>
                        <p>Competitions and Promotions</p>
                        <p>7. Parts of the Site may from time to time contain competitions, promotions, tournaments or similar and related activities
                            offered by Fremont Tech Ltd or by third parties. Any specific additional terms and conditions for participation in
                            any such competitions, promotions, tournaments or similar and related activities will be specified on the relevant
                            part of the Site from time to time (“Terms of Participation”).</p>
                        <p>8. By entering or participating in the relevant competitions, promotions, tournaments or similar and related activities,
                            Player agrees to be bound by those Terms of Participation in addition to these T&amp;Cs and in the event of any conflict
                            or inconsistency, the Terms of Participation will prevail.</p>
                        <p>9. Fremont Tech Ltd specifically retains the rights, at any time and without notice, to remove, alter or add to competitions,
                            promotions, tournaments or similar and related activities on the Site without liability to Player.</p>
                        <p>Abuse of Promotions</p>
                        <p>10. The Player binds himself not to abuse the ability of opening accounts in order to benefit from bonus credits and
                            other promotional offers that Fremont Tech Ltd may offer (including but not limited to the use of initial or other
                            deposit bonuses, or use of certificates and promotional codes). Fremont Tech Ltd reserves the right, in case of abusive
                            behavior on the Player’s part as related to bonus credits and/or to promotional offers by Fremont Tech Ltd, in its
                            sole discretion, to rescind or block Player accounts created to that end, as well as their transactions.</p>
                        <p>Anti-Collusion Measures</p>
                        <p>11. By player the Games on the Site, or downloading the software, the Player agrees with these T&amp;Cs and any other
                            rules mentioned on the Fremont Tech Ltd site. This includes the terms listed in the license agreement, available
                            during installation of Fremont Tech Ltd’s Player software.</p>
                        <p>12. The Player acknowledges that Fremont Tech Ltd will take measures to detect and prevent any player collusion, cheating
                            software or anything else that Fremont Tech Ltd deems that enables Player to have an unfair advantage over other
                            Players. The Player acknowledges that Fremont Tech Ltd will take measures to detect and prevent the use of such programs
                            and AI Software using methods (including but not limited to reading the list of currently running programs on a Player’s
                            computer) and the Player agrees not to use any AI Software and/or any such programs. Reference here is also made
                            to the rights of Fremont Tech Ltd to take measures in order to prohibit “multiple accounts” practices.</p>
                        <p>Disputes</p>
                        <p>13. Fremont Tech Ltd will not consider any claims or disputes on bets to be valid unless said bets are directly registered
                            in the Fremont Tech Ltd database files or records for which a confirmation has been given by Fremont Tech Ltd. For
                            all bets, the confirmation given by Fremont Tech Ltd concerning the details of the bets is decisive proof of registration
                            of such bet. Fremont Tech Ltd will make available the transaction log database for the resolution of any possible
                            disputes.</p>
                        <p>Fraudulent Activity</p>
                        <p>14. Fremont Tech Ltd has a zero-tolerance policy towards inappropriate play and fraudulent activity. If, in Fremont Tech
                            Ltd's sole determination, the Player is found to have cheated or attempted to defraud Fremont Tech Ltd including
                            use of stolen credit cards, or any other fraudulent activity (including any chargeback or other reversal of a payment)
                            or prohibited transaction (including money laundering), Fremont Tech Ltd reserves the right to suspend and/or close
                            the Player’s Account and to share this information (together with his identity) to other online gaming sites, banks,
                            credit card companies, and appropriate agencies.</p>
                        <p>Results of Games</p>
                        <p>15. Once games have finished, their result cannot be changed nor cancelled. Fremont Tech Ltd retains the right to accept,
                            not to accept or to partially accept games results.</p>
                        <p>Winnings</p>
                        <p>16. The printout of a game that has been played is not considered to be a receipt of the winnings. A game shall be considered
                            as having been won if it is listed on the Player’s games list/on the Fremont Tech Ltd game server(s).</p>
                        <p>Conflict in Results</p>
                        <p>17. In case of conflict between the result posted on the Site, Game or other software and the result exposed in Fremont
                            Tech’s server, the result posted in the server shall take precedence. The Player understands and accepts that the
                            settlement of any conflict between the Player and Fremont Tech Ltd will be determined based on the records kept by
                            Fremont Tech Ltd.</p>
                        <p>Customer Service</p>
                        <p>18. In order to optimize the quality of our services, your calls to our customer service can be recorded.</p>
                        <p>Bet cancellation</p>
                        <p>19. Fremont Tech Ltd further reserve the right to cancel bets even subsequently if any such bet was won by the Player
                            as a result of a technical fault or error, inclusive of but not limited to an error or fault in transmission. In
                            any such case, the stake of the bet or game shall be re-credited to the Player’s account. Nevertheless, the Company
                            reserves the right to hold a Player liable for any damage caused to or suffered by us as a result of such Player
                            knowingly taking advantage of a technical or administrative error when playing the Games and/or making and/or receiving
                            payments.</p>
                        <p>Fremont Tech Ltd reserves the right to refuse to accept any bet without notification, justification or compensation.
                            The Company shall in no way be held liable for typing, transmission or odds errors. The Company reserves the right
                            to subsequently correct, with retroactive effect, obvious errors concerning the entry of odds.</p>
                        <p>Stake Limits / Refusal of Bets</p>
                        <p>20. Fremont Tech Ltd may at its own discretion limit bets or refuse them.</p>
                        <p>21. As a Player you declare that you do not know or are not aware of the outcome of the Game or event when placing a
                            bet. Neither are you in any way influencing the outcome of a Game or event. Under this clause Fremont Tech Ltd, at
                            its sole discretion, reserves the right to refuse to accept any bet without notification, justification or compensation
                            and report any suspicious activity to relevant authorities, jurisdictions or governing bodies.
                            <br /> &nbsp;
                        </p>
                        <p>End-Player License</p>
                        <p>22. By playing on the Fremont Tech Ltd site you are being granted a personal non-exclusive, non-transferable license
                            to use the Site, Games and/or any other software, in order to play according to these T&amp;Cs and including the
                            clauses in this section.</p>
                        <p>23. The Player may install and use the computer programs Fremont Tech Ltd makes available ("Software") on a hard disk
                            or other storage device and make backup copies of the Software, provided that such use and backup copying is only
                            for the Player’s own personal use for participating in the Games in accordance with this agreement, and further,
                            that such installation and use is made through a computer of which the Player is the primary Player. The Software's
                            structure, organisation and code are the valuable trade secrets of NetEnt Malta Limited, Fremont Tech Ltd and/or
                            its group of Companies and/or its licensors. The Player obtains no rights to the Software except to use it in accordance
                            with this Agreement. Save as expressly permitted by law, the Player is strictly prohibited from, and agrees not to
                            modify, adapt, translate, reverse engineer, decompile, disassemble or otherwise attempt to discover the source code
                            of the Software or any part of it or to create, publish or distribute derivative works from the Software. The Player
                            agrees that the Software will not be shipped, transferred or exported into any country or used in any manner prohibited
                            by any applicable laws, restrictions or regulations.</p>
                        <p>24. Fremont Tech Ltd grants only a personal right to the Players to use the Software, Games and/or Site and this right
                            is bestowed personally on the Players in order to play the games of luck on the internet. This right is given to
                            the Players with personal and not a commercial purpose.</p>
                        <p>25. It is prohibited for Players to sell, transfer or acquire accounts from other Players.</p>
                        <p>26. Any complaints relating to activity on your account by a third party will not be accepted by Fremont Tech Ltd since
                            it is prohibited to enable a third party to play with a Player’s account.</p>
                        <p>27. It is the Player’s responsibility to inform Fremont Tech Ltd immediately if the Player suspects that his Player Account
                            is being used by a third Player, so that Fremont Tech Ltd may inspect and verify that account</p>
                        <p>28. A Player Account may not be sold/transferred to or acquired from third parties and/or any other Player;</p>
                        <p>29. By playing on this Site the Player is acknowledging that in playing games of luck through the use of the service
                            and/or the Software the Player is under the risk of losing money. It is the Player’s sole responsibility to assume
                            the losses suffered through the Player’s account. The Player acknowledges that the use of the Service and/or the
                            Software is at his sole discretion and risk;</p>
                        <p>30. By playing on the Site the Player is declaring that he shall in no way use the service or the Software with the purpose
                            of transferring funds to or from illegal sources. The Player will not use the Software for any illicit or fraudulent
                            activity, or for any unlawful or fraudulent transaction (including money laundering), in accordance to the laws of
                            all the jurisdictions having authority over the Player. Fremont Tech Ltd reserves the right to discontinue or block
                            the account(s) of the Player, at any time, and until the matter has been resolved, if Fremont Tech Ltd has the slightest
                            doubt as to the legality of the source of funds used by the Player to bet in the on the Internet;</p>
                        <p>31. The Player declares that he will not violate or attempt to violate or misconstrue in any way Fremont Tech Ltd’s security
                            measures. If Fremont Tech Ltd has the slightest doubt in respect of this clause, Fremont Tech Ltd reserves the right
                            to suspend or block the Player’s account immediately. The amount in question will not be credited to the Player’s
                            account. The Player will be denied access to all other Sites, Games and Software offered by the Company and/or any
                            company associated with the provision of the Sites, Games and/or Software.</p>
                        <p>True Random Number Generator</p>
                        <p>32. In the case of the Games the Player accepts and agrees that the true random number generator ("TRNG") determines
                            the outcome of every game. In the event of a discrepancy between the result showing on the software and the gaming
                            server, the result showing on the gaming server shall be the official and governing result of the game.</p>
                        <p>33. The Player understands and agrees that Fremont Tech Ltd and Fremont Tech Ltd records shall be the final authority
                            in determining the terms of his participation in the games, the activity resulting from there and the circumstances
                            in which they occurred.</p>
                        <p>34. In the event of an error in the pay table, Fremont Tech Ltd with liaise with the software provider and regulator
                            before deciding on the game final outcome.</p>
                        <p>Software Interruption</p>
                        <p>35. In the event of any kind of software interruption due to any type of problem, Fremont Tech Ltd reserves the right
                            of requesting a screenshot. Any software error or malfunction which is or which may be evidenced by Fremont Tech
                            Ltd to have occurred on any of its systems or the Games shall void the bet, or the game, regardless of whether it
                            is made on the Company’s casino or games platform. The Player shall be entitled to the full amount of the stake in
                            relation to such bet or game. Fremont Tech Ltd hereby excludes all further liability for any such software malfunction.</p>
                        <p>Aborted and Miscarried Games</p>
                        <p>36. Fremont Tech Ltd shall take all reasonable steps to ensure that the its approved computer system enables a Player
                            whose participation in a Game is, after he has made a wager, interrupted by a failure of the telecommunications system
                            or a failure of the Player’s computer system that prevents the Player from continuing the game, to resume, on the
                            restoration of the system, his participation in the game that was interrupted as at the time immediately before the
                            interruption.</p>
                        <p>37. If a Player to continue, after the restoration of the system, with a Game interrupted by a failure of the telecommunications
                            system or the Player’s computer system, the Company shall (a) ensure that the game is terminated (b) refund the amount
                            of the wager to the Player by placing it in the Player’s account.</p>
                        <p>38. If a game is started but miscarries because of a failure of the Fremont Tech Ltd’s computer operating system, the
                            Company shall (a) (i) refund the amount wagered in the game to the Player by crediting it to the Player’s account
                            or, if the account no longer exists, by paying it to the Player in an approved manner and (ii) if the Player has
                            an accrued credit at the time the game miscarries, credit to the Player’s account the monetary value of the credit
                            or, if the account no longer exists, pay it to the Player in an approved manner (b) inform immediately the Regulator
                            Authority of the circumstances of the incident (c) refrain from conducting a further Game if the Game is likely to
                            be affected by the same failure.</p>
                        <p>39. The Regulatory Authority may, by written notice to Fremont Tech Ltd, give the Company other directions which the
                            Regulatory Authority considers appropriate in the circumstances. Such directions prevail over any other actions,
                            completed or planned.</p>
                        <p>Complaints</p>
                        <p>40. The Player is hereby acknowledging and accepting that any complaint or contest made by the Player more than seven
                            (7) days after the date of the finalisation of the transaction which is the subject of the complaint in question
                            will not be considered, and will have no value.</p>
                        <p>
                            <strong>5. </strong>
                            <strong>Disclaimer &amp; Limitation of Liability</strong>
                        </p>
                        <p>Use of Site</p>
                        <p>1. Fremont Tech Ltd shall in no event, nor under any circumstances, be liable for any damages or losses that are deemed
                            or alleged to have resulted from or caused by its website or its content, including, without limitation, delays or
                            interruptions in operation or transmission, communications lines failure, any Player's use or misuse of the Site
                            or its content, or any errors or omissions in content.</p>
                        <p>2. Fremont Tech Ltd cannot be held liable for changes to a Player’s Account balance due to someone else playing using
                            that Player’s nickname, username or password.</p>
                        <p>3. Fremont Tech Ltd makes every effort to maintain the accuracy of the information on this Site but cannot accept responsibility
                            for any prejudice, loss or damage which may occur from use of the information.</p>
                        <p>4. No responsibility is being acknowledged or accepted hereunder for, inter alia, the following matters:</p>
                        <p>a. Mistake(s), misprint(s), misinterpretation(s), mishearing(s), misreading(s), mistranslation(s), spelling mistake(s),
                            fault(s) in reading, transaction error(s), technical hazard(s), registration error(s), manifest error(s), Force(s)
                            Majeure and/or any other similar mistake(s)/error(s);</p>
                        <p>b. Violation of the Fremont Tech Ltd Rules;</p>
                        <p>c. Criminal Actions;</p>
                        <p>d. Advice, in whichever form, provided by Fremont Tech Ltd;</p>
                        <p>e. Financial risk and loss, including, but not limited to variances in exchange rates; and/or</p>
                        <p>f. Legal actions and/or other remedies.</p>
                        <p>5. Therefore, it is hereby being specified that Fremont Tech Ltd makes no representation, pledge or warranty (either
                            explicit or implicit, including but not limited to warranties for accuracy, fitness of purposes or non-infringement)
                            that the content of the Site is accurate and/or suitable for any particular purpose other than in so far as those
                            warranties which cannot be expressly excluded under the governing law of these T&amp;Cs.</p>
                        <p>Services</p>
                        <p>6. Fremont Tech Ltd offers service and software « as is » with no warranties, assurances, engagements, or any declaration,
                            explicit or implied, legal or other. Fremont Tech Ltd hereby excludes all terms, conditions, and warranties explicit
                            or implied, including but not limited to implied warranties, commercial conditions, and or matters of satisfactory
                            quality, ability and adaptability to a specific end, completion or precision of service and of the software in respect
                            to the failure to respect governing rules and laws.</p>
                        <p>7. Fremont Tech Ltd does not guarantee that the service or the software are authorized, and that the operation will fully
                            satisfy the Player, that it is entirely secure and exempt from error, that it is updated regularly, that any software
                            defect is regularly corrected, that it is uninterrupted, that the service or the software are virus or bug free,
                            or that they are continually operational, that they are adequate, that the material is reliable, or that all other
                            information obtained by way of the service or that all results are adequate and reliable.</p>
                        <p>8. In case of discrepancies in the systems or in the means of communication, due to viruses or bugs as it relates to
                            the account regulations or all other parameters that make up the software, Fremont Tech Ltd shall not be held responsible
                            to the Player or a third party for any damage, costs, expenses, losses, or claims brought about by said discrepancies,
                            and the Company reserves the right, in the event of such types of errors, to cease all Software, Site and Games concerned
                            and to take all other measure necessary to correct such errors, provided that it is not responsible to provide an
                            emergency network, system, or similar emergency services.</p>
                        <p>9. Fremont Tech Ltd cannot be held responsible for any act or omission by an internet provider or of any other third
                            party with whom the Player may have contracted in order to have access to Fremont Tech Ltd’s service Site, Games
                            and/or Software. In case of litigation between any third party or internet provider and yourself, Fremont Tech Ltd
                            cannot be a party to the suit, and such suit shall in no way affect the Player’s obligations under this contract.</p>
                        <p>Player’s Risk</p>
                        <p>10. The Player acknowledges to have chosen and used the Service and the Software willingly and at his own risk and discretion.</p>
                        <p>Loss or Damage</p>
                        <p>11. Fremont Tech Ltd is in no way responsible for any loss or damage, direct or indirect, that the Player or a third
                            party might have suffered as a result of his use or the third party’s use of the Site, Games and/or of the Software,
                            including but not limited to damages caused by a commercial loss, a loss of benefits, a loss on anticipated profit,
                            interruption of business, loss of commercial information, or any other pecuniary and or consecutive loss.</p>
                        <p>12. Fremont Tech Ltd is in no way responsible for any loss or damage that the Player or a third party might have suffered
                            as a result of the Player’s use of any link suggested by or accessed from Fremont Tech Ltd or the Site</p>
                        <p>13. Fremont Tech Ltd is in no way responsible for any loss or damage that the Player or a third party might have suffered
                            as a result of any modification, suspension or interruption of Site, Game or Software.</p>
                        <p>14. Fremont Tech Ltd is in no way responsible for any loss or damage, including but not limited to a loss of profit,
                            as a result of improper functioning of the Game and/or of the Software, any delay, interruption, transmission, loss
                            or corruption of data, improper functioning of the means of communication, criminal use of the Site or of its content
                            by any Player, of a defect, or omission or of any other factor beyond the Company’s control. In the event that the
                            malfunction results in profit, whether it be collected or credited to the Player Account, Fremont Tech Ltd reserves
                            the right to claim all gains that the Player may have benefited from as a result of one of those malfunctions, and
                            the Player is obliged to immediately reimburse Fremont Tech Ltd the amount collected and to inform Fremont Tech Ltd
                            of the malfunction. Fremont Tech Ltd reserves the right, at its sole discretion, of directly deducting from any Player
                            Account an amount equal to that which the Player may have received in error.</p>
                        <p>Cancellation, Termination, Suspension and Breach</p>
                        <p>15. Fremont Tech Ltd may restrict Player’s access to the Site and/or the Games, suspend or terminate Player’s account,
                            withdraw Player’s offers for bets, void any bets outstanding to Player’s account or cancel and void any outstanding
                            or bets in its absolute discretion without cause at any time including if:</p>
                        <p>1. there is a technological failure;</p>
                        <p>2. the Company suspects that Player is engaging in illegal or fraudulent activity;</p>
                        <p>3. the Player has more than one active account for the gaming system;</p>
                        <p>4. the name on Player's account does not match the name on debit/credit card or any other payment process or service
                            used to make deposits on the account;</p>
                        <p>5. the Player participates in a promotion and withdraws before fulfilling the requirements of that particular promotion;</p>
                        <p>6. the Player provides incorrect or misleading registration information;</p>
                        <p>7. the Player is not of legal age;</p>
                        <p>8. the Player resides in a jurisdiction where participation in the Game is prohibited by law or otherwise by these T&amp;Cs;</p>
                        <p>9. the Player has allowed or permitted (intentionally or unintentionally) someone else to play on the Player's account;</p>
                        <p>10. the Company suspects Player is acting in a manner that is detrimental to the conduct of our business or which may
                            result in legal liability for Player, the Company itself or third parties;</p>
                        <p>11. the Company suspects that Player’s account activity could represent ‘business usage’ as solely determined by the
                            Company</p>
                        <p>12. the Company suspects that Player may be having financial difficulties or difficulties in obtaining credit; or</p>
                        <p>13. the Company has the right to do so as set out in our T&amp;Cs, Terms of Participation or any other governing content
                            on the Site or in the Games.</p>
                        <p>14. the Player has 'charged back' any of the purchases or deposits made on the Player’s account;</p>
                        <p>15. the Player was found cheating or if it is determined by Fremont Tech Ltd that the Player has employed or made use
                            of a system (including machines, computers, software or other automated systems) designed specifically to defeat
                            the gaming system; or</p>
                        <p>16. Fremont Tech Ltd should become aware that the Player has played at any other online casino under any of the circumstances
                            defined above.</p>
                        <p>Breach of Contract</p>
                        <p>16. In accepting the terms of this Contract, the Player is bound to integrally indemnify the Company, to defend and to
                            exonerate the Company, on demand of any complaint, responsibility, damage, loss, cost or expense, including but not
                            limited to all legal fees or others that the Company shall bear as a result of breach of the agreement between the
                            parties as outlined in these T&amp;Cs or any other contract, a violation of Fremont Tech Ltd’s laws, rules and/or
                            rights or of those of a third party, to any use of the Site, Games and/or Software with the Player’s login, whether
                            it be with the Player’s knowledge or without it, as well as any acceptance of profit on the part of the Player.</p>
                        <p>17. If the Player fails to adhere to any of the conditions of these T&amp;Cs or if the Company reasonably suspects that
                            the Player is failing to comply with any of the conditions therein, Fremont Tech Ltd reserves the right, and all
                            remedies at its disposition, and at its sole discretion, to block all your Player accounts and of withdrawing the
                            necessary amount from your account in order to compensate the damage suffered by Fremont Tech Ltd, or in exchange
                            of any amount due to Fremont Tech Ltd, and until ruled upon it by a Court of Law.</p>
                        <p>18. If the Player fails to abide by the T&amp;Cs, Fremont Tech Ltd reserves the right to block the Player’s account,
                            as well as indefinitely banning him access to the Site, Games and Software belonging to or under the responsibility
                            of Fremont Tech Ltd, and the Company has the right of bring a suit against the Player.</p>
                        <p>Legal Compliance</p>
                        <p>19. Players are advised to comply with applicable legislation in the jurisdiction in which they are domiciled and/or
                            resident. Fremont Tech Ltd accepts no responsibility for any action taken by any Authority against any account holder.</p>
                        <p>Limitation of Liability before a Court of Law</p>
                        <p>20. In the event that Fremont Tech Ltd is found liable in any way, by a court of law and/or a similar authority, with
                            legal competence and/or jurisdiction over Fremont Tech Ltd, then Fremont Tech Ltd's liability is limited to the amount
                            recorded in the Player’s Account or the amount transferred into or out of the Fremont Tech Ltd bank account by the
                            Player, whichever is the lesser.</p>
                        <p>Term and Cancellation</p>
                        <p>21. This Contract is effective immediately after clicking on « I agree » and remains valid until it is cancelled in accordance
                            to the conditions stated herein.</p>
                        <p>22. The Player can cancel this contract at any time in writing or by email under the condition that the Player has no
                            outstanding amounts with Fremont Tech Ltd, for any reason. The cancellation of this contract becomes effective only
                            after the Player has received a notification in writing from Fremont Tech Ltd confirming the cancellation. From the
                            moment when this contract becomes invalid, the Player will no longer be authorized to use the Games or the Software,
                            and he is under the obligation to erase the Software from his computer and to destroy all documentation, related
                            to the Games or to the Software, under his possession, in your power or under his control.</p>
                        <p>23. Immediately following the cancellation of this Contract, by either party, Fremont Tech Ltd is bound to reimburse
                            the integral amount indicated in the Player Account, only after the deduction of any amount owed to Fremont Tech
                            Ltd, if any.</p>
                        <p>24. The cancellation of this contract shall not be cause of prejudice to any other right or engagement of either party
                            in regard to any violation stated herein or any other violation.</p>
                        <p>25. All existing obligations between the parties will be null and void after the cancellation, and for whatever reason,
                            except if provided otherwise, under the reserved rights and obligations accepted prior to the cancellation.</p>
                        <p>
                            <strong>6. </strong>
                            <strong>Miscellaneous Provisions</strong>
                        </p>
                        <p>Intellectual Property</p>
                        <p>1. The Fremont Tech Ltd site is intended solely for use by Players. In any event, no one is authorised to copy, modify,
                            tamper with, distribute, transmit, display, reproduce, transfer, upload, download or otherwise alter the content
                            of the Site or the Games.</p>
                        <p>2. Any unauthorised downloading or copying of any material contained in the Site or the Games as well as the design of
                            the Site itself may be considered as a violation of applicable intellectual property rights within the European Union.</p>
                        <p>3. The Site may only be used for lawful purposes. Use of the Site for transmission, distribution, publication or storage
                            of any material on or via the Site which is in violation of any applicable law or regulation or any third party's
                            rights is strictly prohibited. This includes (without limitation) the use of the Site or the transmission, distribution,
                            publication or storage of any material on or via the Site in a matter or for a purpose which infringes copyright,
                            trademark, trade secret or other intellectual property rights, is obscene or harmful to minors or constitutes an
                            illegal act or harassment, is libelous or defamatory, violates any privacy or data protection laws, is fraudulent
                            or breaches any exchange control or gambling law. It is solely for the Player to establish whether registration with
                            and use of the Site and/or your entry into a betting contract (or your offering so to do) is lawful. It is also solely
                            the Player’s responsibility to ensure that use by him of a credit or debit card or any other payment for such purposes
                            is lawful.</p>
                        <p>General</p>
                        <p>4. These T&amp;Cs are not intended to create any partnership, agency or joint venture between Fremont Tech Ltd and the
                            Player</p>
                        <p>Minors</p>
                        <p>5. The Fremont Tech Ltd site shall not be used by minors (under 18 years of age) and any such use shall be reported to
                            the police.</p>
                        <p>Problem Gambling</p>
                        <p>6. Fremont Tech Ltd is committed to endorsing responsible wagering among its customers as well as promoting the awareness
                            of problem gambling and improving prevention, intervention and treatment.</p>
                        <p>7. Fremont Tech Ltd’s Responsible Gambling Policy sets out its commitment to minimizing the negative effects of problem
                            gambling and to promoting responsible gambling practices.</p>
                        <p>Applicable Law</p>
                        <p>8. For all intents and purposes, these T&amp;Cs shall be governed by the laws of Malta without regard to any conflict
                            of laws.</p>
                        <p>Law &amp; Forum</p>
                        <p>9. This agreement shall be governed by and construed in accordance with the laws of the country of Malta without giving
                            effect to conflicts of law principles. The parties submit to the exclusive jurisdiction of the country of Malta for
                            the settlement of any disputes arising out of concerning this agreement.</p>
                        <p>Dispute Resolution</p>
                        <p>10. Any dispute or difference arising out of or in connection with these T&amp;Cs shall be determined in Malta in accordance
                            with the laws of Malta by the appointment of a single arbitrator to be agreed between the parties, or failing agreement
                            within fourteen days, after either party has given to the other a written request to concur in the appointment of
                            an arbitrator, by an arbitrator to be appointed by the Chairman or Deputy Chairman of the Malta Arbitration Centre.</p>
                        <p>Severability</p>
                        <p>11. If any provision contained in these T&amp;Cs shall be held by any court or other competent authority to be void or
                            unenforceable in whole or in part, these T&amp;Cs shall continue to be valid as to the other provisions thereof and
                            the remainder of the affected provision.</p>
                        <p>Headings</p>
                        <p>12. Headings are intended for clarity and to facilitate reading of these terms and conditions. They are not intended
                            as a means of interpretation for the content of the paragraph that follows each heading. Headings are not intended
                            to bind Fremont Tech Ltd in any manner whatsoever.</p>
                        <p>Waiver</p>
                        <p>13. Any waiver by Fremont Tech Ltd of any breach by any Player of any provision of these T&amp;Cs shall not be considered
                            as a waiver of any subsequent breach of the same or any other provision of these terms and conditions.</p>
                        <p>Contact Information</p>
                        <p>14. Fremont Tech Ltd can be contacted by sending an email to info@fremont.com.</p>
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


GameRuleEightVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleEightVn))));