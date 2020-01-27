import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import IconHeader from "../../icon_header";
import '../../../css/help.css'

import { show_letou_announcements} from '../../../../actions';


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

export class GameRuleSevenVn extends React.Component {
    
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
                                    <a href="/vi/for_member">{this.getLabel('for-member')}</a>
                                </li>
                                <li>
                                    <a href="/vi/for_partner">{this.getLabel('for-partner')}</a>
                                </li>
                            </ul>
                </div>
                </Grid>
            
                <Grid item xs={7} className={classes.detail}>
                    <div class="HelpCenterList">
                        <ul>
                            <li>
                                <a href="/vi/for_member">Dành cho Thành viên >
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="/vi/for_member">Luật chơi RNG >
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="HelperCenterDetail">
                    <h2>Arcade Games</h2>
                        &nbsp;
                        <p>1. Special Number
                            <br /> Player wins if the current winning special number is the same with the bet number.
                            <br /> 2. Normal Number
                            <br /> Player wins if it is consistent with any of Ball 1 to Ball 6.
                            <br /> 3. Combo Betting:
                            <br /> 4 All Hit：Player wins if all 4 numbers match the 6 drawn numbers (not including the Special Ball).
                            <br /> 3 All Hit：Player wins if all 3 numbers match the 6 drawn numbers (not including the Special Ball)
                            <br /> 3 Hits 2：
                            <br /> • Hit 2：Player wins if 2 numbers match the 3 drawn numbers (not including the Special Ball)
                            <br /> • Hit 3：Player wins if 3 numbers match the 3 drawn numbers (not including the Special Ball)
                            <br /> 2 All Hit：Player wins if 2 numbers match the 3 drawn numbers (not including the Special Ball)
                            <br /> 2 hit special numbers：
                            <br /> • Hit 2：All bet numbers hit 2 drawn normal numbers.
                            <br /> • Hit special number：All bet numbers hit 1 drawn special number and 1 normal number.
                            <br /> Special Parlay: Player wins if the current 6 drawn numbers and 1 special number are consistent with the bet range for
                            1 normal number and 1 special number.
                            <br /> 4. Zodiac
                            <br /> Zodiac is a playing method using the zodiac of the current year to be consistent with ball 1 to ball 49.
                            <br /> Normal Zodiac：Player wins if 1 bet number matches the drawn zodiac (not including the Special Ball). If there is more
                            than 1 bet number in the zodiac range, the bonus will automatically increase.
                            <br /> Special Zodiac：Player wins if the resulting number for that particular chosen ball position matches any of the numbers
                            represented by the selected zodiac sign.
                            <br /> One Zodiac：Member wins if the represented numbers under this zodiac sign emerge as the result from any ball position
                            from ball 1 to ball 6 not including the special ball.
                            <br /> 5. Chinese Zodiac Combo
                            <br /> Chinese Zodiac Combo：Choose more than one animal for a group bet. Player wins when zodiacs from seven resulting numbers
                            correspond with the chosen Zodiac Combo. No matter how many number appear from the same zodiac, the award will be considered
                            once only.
                            <br /> Two Zodiac Combo：Player wins when two chosen Zodiacs match with two zodiacs from seven resulting numbers.
                            <br /> Three Zodiac Combo：Player wins when three chosen Zodiacs match with three zodiacs from seven resulting numbers.
                            <br /> Four Zodiac Combo：Player wins when four chosen Zodiacs match with four zodiacs from seven resulting numbers.
                            <br /> Five Zodiac Combo：Player wins when five chosen Zodiacs match with five zodiacs from seven resulting numbers.
                            <br /> 6. Two Sides
                            <br /> Two Sides are general terms for big/small/odd/even.
                            <br /> Big/Small：If the drawn number is equal to or greater than 25, it is ""big;"" equal to or less than 24 is ""small.""
                            If the drawn number is 49, it will be a ""tie.""
                            <br /> Odd/Even：Results are determined by whether the number is an odd or even number. If the drawn number is 49, it will be
                            a ""tie.""
                            <br /> Single Digit Big/small： If the single digit is equal to or greater than 5, it will be ""Single digit big""; if the single
                            digit is equal to or less than 4, it will be ""Single digit small,"" if the drawn number is 49, it will be a ""tie.""
                            <br
                            /> Big/Small Zodiac： It will be big zodiac if the drawn number is a horse, goat, monkey, rooster, or a pig. It will be
                            small zodiac if the drawn number is a rat, ox, rabbit, dragon, or a snake. If the drawn number is 49, it will be a ""tie.""
                            <br
                            /> Aggregate Big/Small ： Player bets based on the sum of the drawn numbers' tens digit and single digit. If the sum is
                            equal to or greater than 7, it will be ""Aggregate Big;"" if the sum is equal to or less than 6, it will be Aggregate
                            Small; if the drawn number is 49, it will be a ""tie.""
                            <br /> Aggregate Odd/Even ： Player bets based on the sum of the drawn numbers' tens digit and single digit. If the sum is an
                            even number, it will be aggregate even; if the sum is an odd number, it will be aggregate odd. If the drawn number is
                            49, it will be a ""tie.""
                            <br /> Sum of result big/small ： Result is based on the sum of the current 7 drawn numbers including 6 normal numbers and 1
                            special number to determine whether it is sum of result big/small. If the sum is equal to or greater than 175, it will
                            be sum of result big; if the sum is equal to or less than 174, it will be sum of result small.
                            <br /> Sum of result odd/even： Result is based on the sum of the current 7 drawn numbers including 6 normal numbers and 1 special
                            number to determine whether it is sum of result odd/even. If the sum is an even number, it will be sum of result even;
                            if the sum is an odd number, it will be sum of result odd.
                            <br /> 7. Tens/Single Digit
                            <br /> Tens Digit：Player bets on the tens digit of any particular numbered balls. The tens digit can either be 0, 1, 2, 3 or
                            4.
                            <br /> Single Digit：The single digit can be from number 0 to number 9.
                            <br /> Tens digit of a special number：Player wins if his/her bet on the tens digit of a special number is consistent with the
                            drawn number's tens digit.
                            <br /> Single digit of a special number：Player wins if his/her bet on the single digit of a special number is consistent with
                            the drawn number's single digit.
                            <br /> Single digit of a normal /special number：Player wins if his/her bet on the single digit of any number including a normal
                            number and a special number is consistent with the drawn number's single digit.
                            <br /> 8. Score:
                            <br /> Player predicts the sum of a particular ball and normal ball in any position and if the resulting number falls in which
                            range. The sum will be divided into 6 ranges from score 28 to score 322.</p>
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


GameRuleSevenVn.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func,
};

export default withStyles(styles)(injectIntl(withRouter(connect(mapStateToProps, {
    show_letou_announcements
})(GameRuleSevenVn))));