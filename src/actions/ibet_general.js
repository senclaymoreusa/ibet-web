export const slot_type = text => {
    return {
        type: 'SLOT_TYPE',
        payload: text
    };
};

export const sports_type = text => {
    return {
        type: 'SPORTS_TYPE',
        payload: text
    };
};

export const lottery_type = text => {
    return {
        type: 'LOTTERY_TYPE',
        payload: text
    };
};

export const live_casino_type = text => {
    return {
        type: 'LIVECASINO_TYPE',
        payload: text
    };
};

export const game_detail = game => {
    return {
        type: 'GAME_DETAIL',
        payload: game
    };
};

export const handle_search = term => {
    return {
        type: 'TERM_CHANGED',
        payload: term
    };
};

export const show_login = () => {
    return {
        type: 'SHOW_LOGIN'
    };
};

export const hide_login = () => {
    return {
        type: 'HIDE_LOGIN'
    };
};

export const show_signup = () => {
    return {
        type: 'SHOW_SIGNUP'
    };
};

export const hide_signup = () => {
    return {
        type: 'HIDE_SIGNUP'
    };
};

export const show_signup_email = () => {
    return {
        type: 'SHOW_SIGNUP_EMAIL'
    };
};

export const hide_signup_email = () => {
    return {
        type: 'HIDE_SIGNUP_EMAIL'
    };
};

export const show_signup_detail = () => {
    return {
        type: 'SHOW_SIGNUP_DETAIL'
    };
};

export const hide_signup_detail = () => {
    return {
        type: 'HIDE_SIGNUP_DETAIL'
    };
};

export const show_signup_contact = () => {
    return {
        type: 'SHOW_SIGNUP_CONTACT'
    };
};

export const hide_signup_contact = () => {
    return {
        type: 'HIDE_SIGNUP_CONTACT'
    };
};

export const show_signup_phone = () => {
    return {
        type: 'SHOW_SIGNUP_PHONE'
    };
};

export const hide_signup_phone = () => {
    return {
        type: 'HIDE_SIGNUP_PHONE'
    };
};

export const show_complete_registration = () => {
    return {
        type: 'SHOW_COMPLETE_REGISTRATION'
    };
};

export const hide_complete_registration = () => {
    return {
        type: 'HIDE_COMPLETE_REGISTRATION'
    };
};

export const show_phone_verification = () => {
    return {
        type: 'SHOW_PHONE_VERIFICATION'
    };
};

export const hide_phone_verification = () => {
    return {
        type: 'HIDE_PHONE_VERIFICATION'
    };
};

export const handle_oneclick_username = username => {
    return {
        type: 'ONE_CLICK_USERNAME',
        payload: username
    };
};

export const handle_oneclick_password = password => {
    return {
        type: 'ONE_CLICK_PASSWORD',
        payload: password
    };
};

export const show_oneclick_finish = () => {
    return {
        type: 'SHOW_ONECLICK_FINISH'
    };
};

export const hide_oneclick_finish = () => {
    return {
        type: 'HIDE_ONECLICK_FINISH'
    };
};

export const handle_signup_email = email => {
    return {
        type: 'EMAIL_CHANGE',
        payload: email
    };
};

export const handle_signup_password = password => {
    return {
        type: 'PASSOWRD_CHANGE',
        payload: password
    };
};

export const handle_signup_username = usernmame => {
    return {
        type: 'USERNAME_CHANGE',
        payload: usernmame
    };
};

export const handle_signup_first_name = first_name => {
    return {
        type: 'FIRST_NAME_CHANGE',
        payload: first_name
    };
};

export const handle_signup_last_name = last_name => {
    return {
        type: 'LAST_NAME_CHANGE',
        payload: last_name
    };
};

export const handle_signup_dob = dob => {
    return {
        type: 'DOB_CHANGE',
        payload: dob
    };
};

export const handle_signup_address = address => {
    return {
        type: 'ADDRESS_CHANGE',
        payload: address
    };
};

export const handle_signup_city = city => {
    return {
        type: 'CITY_CHANGE',
        payload: city
    };
};

export const handle_signup_zipcode = zipcode => {
    return {
        type: 'ZIPCODE_CHANGE',
        payload: zipcode
    };
};

export const handle_signup_country = country => {
    return {
        type: 'COUNTRY_CHANGE',
        payload: country
    };
};

export const handle_signup_phone = phone => {
    return {
        type: 'PHONE_CHANGE',
        payload: phone
    };
};

export const handle_signup_over18 = OVER_18 => {
    return {
        type: 'OVER_18',
        payload: OVER_18
    };
};

export const handle_signup_language = language => {
    return {
        type: 'LANGUAGE_CHANGE',
        payload: language
    };
};

export const show_signup_finish = () => {
    return {
        type: 'SHOW_SIGNUP_FINISH'
    };
};

export const hide_signup_finish = () => {
    return {
        type: 'HIDE_SIGNUP_FINISH'
    };
};

export const show_change_password = () => {
    return {
        type: 'SHOW_CHANGE_PASSWORD'
    };
};

export const hide_change_password = () => {
    return {
        type: 'HIDE_CHANGE_PASSWORD'
    };
};

export const show_user_profile = () => {
    return {
        type: 'SHOW_USER_PROFILE'
    };
};

export const hide_user_profile = () => {
    return {
        type: 'HIDE_USER_PROFILE'
    };
};

export const show_update_profile = () => {
    return {
        type: 'SHOW_UPDATE_PROFILE'
    };
};

export const hide_update_profile = () => {
    return {
        type: 'HIDE_UPDATE_PROFILE'
    };
};

export const show_deposit = () => {
    return {
        type: 'SHOW_DEPOSIT'
    };
};

export const hide_deposit = () => {
    return {
        type: 'HIDE_DEPOSIT'
    };
};

export const show_deposit_amount = () => {
    return {
        type: 'SHOW_DEPOSIT_AMOUNT'
    };
};

export const hide_deposit_amount = () => {
    return {
        type: 'HIDE_DEPOSIT_AMOUNT'
    };
};

export const show_deposit_paypal = () => {
    return {
        type: 'SHOW_DEPOSIT_PAYPAL'
    };
};

export const hide_deposit_paypal = () => {
    return {
        type: 'HIDE_DEPOSIT_PAYPAL'
    };
};

export const show_withdraw = () => {
    return {
        type: 'SHOW_WITHDRAW'
    };
};

export const hide_withdraw = () => {
    return {
        type: 'HIDE_WITHDRAW'
    };
};

export const show_forget_password = () => {
    return {
        type: 'SHOW_FORGET_PASSWORD'
    };
};

export const hide_forget_password = () => {
    return {
        type: 'HIDE_FORGET_PASSWORD'
    };
};

export const show_forget_password_validation = () => {
    return {
        type: 'SHOW_FORGET_PASSWORD_VALIDATION'
    };
};

export const hide_forget_password_validation = () => {
    return {
        type: 'HIDE_FORGET_PASSWORD_VALIDATION'
    };
};

export const forget_email = email => {
    return {
        type: 'FORGET_EMAIL',
        payload: email
    };
};

export const show_refer_user = () => {
    return {
        type: 'SHOW_REFER_USER'
    };
};

export const hide_refer_user = () => {
    return {
        type: 'HIDE_REFER_USER'
    };
};

export const handle_referid = id => {
    return {
        type: 'GET_REFER_ID',
        payload: id
    };
};

export const show_account_menu = () => {
    return {
        type: 'SHOW_ACCOUNT_MENU'
    };
};

export const hide_account_menu = () => {
    return {
        type: 'HIDE_ACCOUNT_MENU'
    };
};

export const show_open_bets = () => {
    return {
        type: 'SHOW_OPEN_BETS'
    };
};

export const hide_open_bets = () => {
    return {
        type: 'HIDE_OPEN_BETS'
    };
};

export const show_settled_bets = () => {
    return {
        type: 'SHOW_SETTLED_BETS'
    };
};

export const hide_settled_bets = () => {
    return {
        type: 'HIDE_SETTLED_BETS'
    };
};

export const show_promotions = () => {
    return {
        type: 'SHOW_PROMOTIONS'
    };
};

export const hide_promotions = () => {
    return {
        type: 'HIDE_PROMOTIONS'
    };
};

export const show_settings = () => {
    return {
        type: 'SHOW_SETTINGS'
    };
};

export const hide_settings = () => {
    return {
        type: 'HIDE_SETTINGS'
    };
};

export const show_help = () => {
    return {
        type: 'SHOW_HELP'
    };
};

export const hide_help = () => {
    return {
        type: 'HIDE_HELP'
    };
};

export const show_responsible_gambling = () => {
    return {
        type: 'SHOW_RESPONSIBLE_GAMBLING'
    };
};

export const hide_responsible_gambling = () => {
    return {
        type: 'HIDE_RESPONSIBLE_GAMBLING'
    };
};

export const show_deposit_success = () => {
    return {
        type: 'SHOW_DEPOSIT_SUCCESS'
    };
};

export const hide_deposit_success = () => {
    return {
        type: 'HIDE_DEPOSIT_SUCCESS'
    };
};

export const show_deposit_confirm = () => {
    return {
        type: 'SHOW_DEPOSIT_CONFIRM'
    };
};

export const hide_deposit_confirm = () => {
    return {
        type: 'HIDE_DEPOSIT_CONFIRM'
    };
};

export const show_withdraw_confirm = () => {
    return {
        type: 'SHOW_WITHDRAW_CONFIRM'
    };
};

export const hide_withdraw_confirm = () => {
    return {
        type: 'HIDE_WITHDRAW_CONFIRM'
    };
};

export const show_withdraw_success = () => {
    return {
        type: 'SHOW_WITHDRAW_SUCCESS'
    };
};

export const hide_withdraw_success = () => {
    return {
        type: 'HIDE_WITHDRAW_SUCCESS'
    };
};

export const show_profile_menu = () => {
    return {
        type: 'SHOW_PROFILE_MENU'
    };
};

export const hide_profile_menu = () => {
    return {
        type: 'HIDE_PROFILE_MENU'
    };
};

export const show_mobile_main_menu = () => {
    return {
        type: 'SHOW_MOBILE_MAIN_MENU'
    };
};

export const hide_mobile_main_menu = () => {
    return {
        type: 'HIDE_MOBILE_MAIN_MENU'
    };
};

export const handle_inbox_value = value => {
    return {
        type: 'INBOX_CHANGE',
        payload: value
    };
};

export const hide_landing_page = () => {
    return {
        type: 'HIDE_LANDING_PAGE'
    };
};

export const show_deposit_main_menu = () => {
    return {
        type: 'SHOW_DEPOSIT_MAIN_MENU'
    };
};

export const hide_deposit_main_menu = () => {
    return {
        type: 'HIDE_DEPOSIT_MAIN_MENU'
    };
};

export const show_withdraw_main_menu = () => {
    return {
        type: 'SHOW_WITHDRAW_MAIN_MENU'
    };
};

export const hide_withdraw_main_menu = () => {
    return {
        type: 'HIDE_WITHDRAW_MAIN_MENU'
    };
};