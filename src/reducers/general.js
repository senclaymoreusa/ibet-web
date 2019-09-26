const INITIAL_STATE = {
    slot_type: '',
    sports_type: '',
    live_casino_type: '',
    lottery_type: '',
    game_detail: {},
    term: '',
    show_login: false,
    show_signup: false,
    show_signup_email: false,
    show_signup_detail: false,
    show_signup_contact: false,
    show_signup_phone: false,
    show_complete_registration: false,
    show_phone_verification: false,
    show_oneclick_finish: false,
    show_signup_finish: false,
    show_change_password: false,
    show_user_profile: false,
    show_update_profile: false,
    show_deposit: false,
    show_deposit_amount: false,
    show_deposit_paypal: false,
    show_withdraw: false,
    show_forget_password: false,
    show_forget_password_validation: false,
    show_refer_user: false,
    show_account_menu: false,
    show_open_bets: false,
    show_settled_bets: false,
    show_promotions: false,
    show_settings: false,
    show_help: false,
    show_responsible_gambling: false,
    show_deposit_success: false,
    show_deposit_confirm: false,
    show_withdraw_confirm: false,
    show_withdraw_success: false,
    show_profile_menu: false,
    show_mobile_main_menu: false,
    show_deposit_main_menu: false,
    show_withdraw_main_menu: false,

    onc_click_username: '',
    one_click_password: '',

    signup_email: '',
    sigup_password: '',
    signup_username: '',
    signup_first_name: '',
    signup_last_name: '',
    signup_dob: '',
    signup_address: '',
    signup_city: '',
    signup_zipcode: '',
    signup_country: '',
    signup_phone: '',
    signup_over18: '',
    signup_language: '',
    refer_id: '',

    forget_email: '',

    inbox: 0,
    show_landing_page: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SLOT_TYPE':
            return { ...state, slot_type: action.payload };
        case 'SPORTS_TYPE':
            return { ...state, sports_type: action.payload };
        case 'LOTTERY_TYPE':
            return { ...state, lottery_type: action.payload };
        case 'LIVECASINO_TYPE':
            return { ...state, live_casino_type: action.payload };
        case 'GAME_DETAIL':
            return { ...state, game_detail: action.payload };
        case 'TERM_CHANGED':
            return { ...state, term: action.payload };
        case 'SHOW_LOGIN':
            return { ...state, show_login: true };
        case 'HIDE_LOGIN':
            return { ...state, show_login: false };
        case 'SHOW_SIGNUP':
            return { ...state, show_signup: true };
        case 'HIDE_SIGNUP':
            return { ...state, show_signup: false };
        case 'SHOW_SIGNUP_EMAIL':
            return { ...state, show_signup_email: true };
        case 'HIDE_SIGNUP_EMAIL':
            return { ...state, show_signup_email: false };
        case 'SHOW_SIGNUP_DETAIL':
            return { ...state, show_signup_detail: true };
        case 'HIDE_SIGNUP_DETAIL':
            return { ...state, show_signup_detail: false };
        case 'SHOW_SIGNUP_CONTACT':
            return { ...state, show_signup_contact: true };
        case 'HIDE_SIGNUP_CONTACT':
            return { ...state, show_signup_contact: false };
        case 'SHOW_SIGNUP_PHONE':
            return { ...state, show_signup_phone: true };
        case 'HIDE_SIGNUP_PHONE':
            return { ...state, show_signup_phone: false };
        case 'SHOW_COMPLETE_REGISTRATION':
            return { ...state, show_complete_registration: true };
        case 'HIDE_COMPLETE_REGISTRATION':
            return { ...state, show_complete_registration: false };
        case 'SHOW_PHONE_VERIFICATION':
            return { ...state, show_phone_verification: true };
        case 'HIDE_PHONE_VERIFICATION':
            return { ...state, show_phone_verification: false };
        case 'ONE_CLICK_USERNAME':
            return { ...state, onc_click_username: action.payload };
        case 'ONE_CLICK_PASSWORD':
            return { ...state, onc_click_password: action.payload };
        case 'SHOW_ONECLICK_FINISH':
            return { ...state, show_oneclick_finish: true };
        case 'HIDE_ONECLICK_FINISH':
            return { ...state, show_oneclick_finish: false };

        case 'EMAIL_CHANGE':
            return { ...state, signup_email: action.payload };
        case 'PASSOWRD_CHANGE':
            return { ...state, signup_password: action.payload };
        case 'USERNAME_CHANGE':
            return { ...state, signup_username: action.payload };
        case 'FIRST_NAME_CHANGE':
            return { ...state, signup_first_name: action.payload };
        case 'LAST_NAME_CHANGE':
            return { ...state, signup_last_name: action.payload };
        case 'DOB_CHANGE':
            return { ...state, signup_dob: action.payload };
        case 'ADDRESS_CHANGE':
            return { ...state, signup_address: action.payload };
        case 'CITY_CHANGE':
            return { ...state, signup_city: action.payload };
        case 'ZIPCODE_CHANGE':
            return { ...state, signup_zipcode: action.payload };
        case 'COUNTRY_CHANGE':
            return { ...state, signup_country: action.payload };
        case 'PHONE_CHANGE':
            return { ...state, signup_phone: action.payload };
        case 'OVER_18':
            return { ...state, signup_over18: action.payload };
        case 'LANGUAGE_CHANGE':
            return { ...state, signup_language: action.payload };
        case 'SHOW_SIGNUP_FINISH':
            return { ...state, show_signup_finish: true };
        case 'HIDE_SIGNUP_FINISH':
            return { ...state, show_signup_finish: false };
        case 'SHOW_CHANGE_PASSWORD':
            return { ...state, show_change_password: true };
        case 'HIDE_CHANGE_PASSWORD':
            return { ...state, show_change_password: false };
        case 'SHOW_USER_PROFILE':
            return { ...state, show_user_profile: true };
        case 'HIDE_USER_PROFILE':
            return { ...state, show_user_profile: false };
        case 'SHOW_UPDATE_PROFILE':
            return { ...state, show_update_profile: true };
        case 'HIDE_UPDATE_PROFILE':
            return { ...state, show_update_profile: false };
        case 'SHOW_DEPOSIT':
            return { ...state, show_deposit: true };
        case 'HIDE_DEPOSIT':
            return { ...state, show_deposit: false };
        case 'SHOW_DEPOSIT_AMOUNT':
            return { ...state, show_deposit_amount: true };
        case 'HIDE_DEPOSIT_AMOUNT':
            return { ...state, show_deposit_amount: false };
        case 'SHOW_DEPOSIT_PAYPAL':
            return { ...state, show_deposit_paypal: true };
        case 'HIDE_DEPOSIT_PAYPAL':
            return { ...state, show_deposit_paypal: false };
        case 'SHOW_WITHDRAW':
            return { ...state, show_withdraw: true };
        case 'HIDE_WITHDRAW':
            return { ...state, show_withdraw: false };
        case 'SHOW_WITHDRAW_CONFIRM':
            return { ...state, show_withdraw_confirm: true };
        case 'HIDE_WITHDRAW_CONFIRM':
            return { ...state, show_withdraw_confirm: false };
        case 'SHOW_FORGET_PASSWORD':
            return { ...state, show_forget_password: true };
        case 'HIDE_FORGET_PASSWORD':
            return { ...state, show_forget_password: false };
        case 'SHOW_FORGET_PASSWORD_VALIDATION':
            return { ...state, show_forget_password_validation: true };
        case 'HIDE_FORGET_PASSWORD_VALIDATION':
            return { ...state, show_forget_password_validation: false };
        case 'FORGET_EMAIL':
            return { ...state, forget_email: action.payload };
        case 'SHOW_REFER_USER':
            return { ...state, show_refer_user: true };
        case 'HIDE_REFER_USER':
            return { ...state, show_refer_user: false };
        case 'SHOW_ACCOUNT_MENU':
            return { ...state, show_account_menu: true };
        case 'HIDE_ACCOUNT_MENU':
            return { ...state, show_account_menu: false };
        case 'SHOW_OPEN_BETS':
            return { ...state, show_open_bets: true };
        case 'HIDE_OPEN_BETS':
            return { ...state, show_open_bets: false };
        case 'SHOW_SETTLED_BETS':
            return { ...state, show_settled_bets: true };
        case 'HIDE_SETTLED_BETS':
            return { ...state, show_settled_bets: false };
        case 'SHOW_PROMOTIONS':
            return { ...state, show_promotions: true };
        case 'HIDE_PROMOTIONS':
            return { ...state, show_promotions: false };
        case 'SHOW_SETTINGS':
            return { ...state, show_settings: true };
        case 'HIDE_SETTINGS':
            return { ...state, show_settings: false };
        case 'SHOW_HELP':
            return { ...state, show_help: true };
        case 'HIDE_HELP':
            return { ...state, show_help: false };
        case 'SHOW_DEPOSIT_CONFIRM':
            return { ...state, show_deposit_confirm: true };
        case 'HIDE_DEPOSIT_CONFIRM':
            return { ...state, show_deposit_confirm: false };
        case 'SHOW_WITHDRAW_SUCCESS':
            return { ...state, show_withdraw_success: true };
        case 'HIDE_WITHDRAW_SUCCESS':
            return { ...state, show_withdraw_success: false };
        case 'SHOW_DEPOSIT_SUCCESS':
            return { ...state, show_deposit_success: true };
        case 'HIDE_DEPOSIT_SUCCESS':
            return { ...state, show_deposit_success: false };
        case 'SHOW_RESPONSIBLE_GAMBLING':
            return { ...state, show_responsible_gambling: true };
        case 'HIDE_RESPONSIBLE_GAMBLING':
            return { ...state, show_responsible_gambling: false };
        case 'SHOW_PROFILE_MENU':
            return { ...state, show_profile_menu: true };
        case 'HIDE_PROFILE_MENU':
            return { ...state, show_profile_menu: false };
        case 'SHOW_MOBILE_MAIN_MENU':
            return { ...state, show_mobile_main_menu: true };
        case 'HIDE_MOBILE_MAIN_MENU':
            return { ...state, show_mobile_main_menu: false };
        case 'HIDE_LANDING_PAGE':
            return { ...state, show_landing_page: false };
        case 'SHOW_DEPOSIT_MAIN_MENU':
            return { ...state, show_deposit_main_menu: true };
        case 'HIDE_DEPOSIT_MAIN_MENU':
            return { ...state, show_deposit_main_menu: false };
        case 'SHOW_WITHDRAW_MAIN_MENU':
            return { ...state, show_withdraw_main_menu: true };
        case 'HIDE_WITHDRAW_MAIN_MENU':
            return { ...state, show_withdraw_main_menu: false };

        case 'GET_REFER_ID':
            return { ...state, refer_id: action.payload };
        case 'INBOX_CHANGE':
            return { ...state, inbox: action.payload };

        default:
            return state;
    }
};
