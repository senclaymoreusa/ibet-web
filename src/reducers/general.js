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
    show_signup_detail: false
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
      default:
        return state;
    }
  };
