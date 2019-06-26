const INITIAL_STATE ={
    slot_type: '',
    sports_type: '',
    live_casino_type:'',
    lottery_type:'',
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
    show_signup_finish:  false,
    show_change_password: false,
    
    onc_click_username: '',
    one_click_password: '',

    signup_email:'',
    sigup_password: '',
    signup_username: '',
    signup_first_name: '',
    signup_last_name: '',
    signup_dob:'',
    signup_address: '',
    signup_city: '',
    signup_zipcode: '',
    signup_country: '',
    signup_phone: '',
    signup_over18: '',
    signup_language: ''
}

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
        return {...state, term: action.payload}
      case 'SHOW_LOGIN':
        return {...state, show_login: true}
      case 'HIDE_LOGIN':
        return {...state, show_login: false}
      case 'SHOW_SIGNUP':
        return {...state, show_signup: true}
      case 'HIDE_SIGNUP':
        return {...state, show_signup: false}
      case 'SHOW_SIGNUP_EMAIL':
        return {...state, show_signup_email: true}
      case 'HIDE_SIGNUP_EMAIL':
        return {...state, show_signup_email: false}
      case 'SHOW_SIGNUP_DETAIL':
        return {...state, show_signup_detail: true}
      case 'HIDE_SIGNUP_DETAIL':
        return {...state, show_signup_detail: false}
      case 'SHOW_SIGNUP_CONTACT':
        return {...state, show_signup_contact: true}
      case 'HIDE_SIGNUP_CONTACT':
        return {...state, show_signup_contact: false}
      case 'SHOW_SIGNUP_PHONE':
        return {...state, show_signup_phone: true}
      case 'HIDE_SIGNUP_PHONE':
        return {...state, show_signup_phone: false}
      case 'SHOW_COMPLETE_REGISTRATION':
        return {...state, show_complete_registration: true}
      case 'HIDE_COMPLETE_REGISTRATION':
        return {...state, show_complete_registration: false}
      case 'SHOW_PHONE_VERIFICATION':
        return {...state, show_phone_verification: true}
      case 'HIDE_PHONE_VERIFICATION':
        return {...state, show_phone_verification: false}
      case 'ONE_CLICK_USERNAME':
        return {...state, onc_click_username: action.payload}
      case 'ONE_CLICK_PASSWORD':
        return {...state, onc_click_password: action.payload}
      case 'SHOW_ONECLICK_FINISH':
        return {...state, show_oneclick_finish: true}
      case 'HIDE_ONECLICK_FINISH':
        return {...state, show_oneclick_finish: false}

      case 'EMAIL_CHANGE':
        return {...state, signup_email: action.payload}
      case 'PASSOWRD_CHANGE':
        return {...state, signup_password: action.payload}
      case 'USERNAME_CHANGE':
        return {...state, signup_username: action.payload}
      case 'FIRST_NAME_CHANGE':
        return {...state, signup_first_name: action.payload}
      case 'LAST_NAME_CHANGE':
        return {...state, signup_last_name: action.payload}
      case 'DOB_CHANGE':
        return {...state, signup_dob: action.payload}
      case 'ADDRESS_CHANGE':
        return {...state, signup_address: action.payload}
      case 'CITY_CHANGE':
        return {...state, signup_city: action.payload}
      case 'ZIPCODE_CHANGE':
        return {...state, signup_zipcode: action.payload}
      case 'COUNTRY_CHANGE':
        return {...state, signup_country: action.payload}
      case 'PHONE_CHANGE':
        return {...state, signup_phone: action.payload}
      case 'OVER_18':
        return {...state, signup_over18: action.payload}
      case 'LANGUAGE_CHANGE':
        return {...state, signup_language: action.payload}
      case 'SHOW_SIGNUP_FINISH':
        return {...state, show_signup_finish: true}
      case 'HIDE_SIGNUP_FINISH':
        return {...state, show_signup_finish: false}
      case 'SHOW_CHANGE_PASSWORD':
        return {...state, show_change_password: true}
      case 'HIDE_CHANGE_PASSWORD':
        return {...state, show_change_password: false}
      default:
        return state;
    }
  };
