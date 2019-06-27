export const slot_type = (text) => {
    return {
      type: 'SLOT_TYPE',
      payload: text
    };
};

export const sports_type = (text) => {
  return {
    type: 'SPORTS_TYPE',
    payload: text
  };
};

export const lottery_type = (text) => {
  return {
    type: 'LOTTERY_TYPE',
    payload: text
  };
};

export const live_casino_type = (text) => {
  return {
    type: 'LIVECASINO_TYPE',
    payload: text
  };
};

export const game_detail = (game) => {
  return {
    type: 'GAME_DETAIL',
    payload: game
  };
};

export const handle_search =(term) => {
  return {
    type: 'TERM_CHANGED',
    payload: term
  }
}

export const show_login = () => {
  return {
    type: 'SHOW_LOGIN'
  }
}

export const hide_login = () => {
  return {
    type: 'HIDE_LOGIN'
  }
}

export const show_signup = () => {
  return {
    type: 'SHOW_SIGNUP'
  }
}

export const hide_signup = () => {
  return {
    type: 'HIDE_SIGNUP'
  }
}

export const show_signup_email = () => {
  return {
    type: 'SHOW_SIGNUP_EMAIL'
  }
}

export const hide_signup_email = () => {
  return {
    type: 'HIDE_SIGNUP_EMAIL'
  }
}

export const show_signup_detail = () => {
  return {
    type: 'SHOW_SIGNUP_DETAIL'
  }
}

export const hide_signup_detail = () => {
  return {
    type: 'HIDE_SIGNUP_DETAIL'
  }
}

export const show_signup_contact = () => {
  return {
    type: 'SHOW_SIGNUP_CONTACT'
  }
}

export const hide_signup_contact = () => {
  return {
    type: 'HIDE_SIGNUP_CONTACT'
  }
}

export const show_signup_phone = () => {
  return {
    type: 'SHOW_SIGNUP_PHONE'
  }
}

export const hide_signup_phone = () => {
  return {
    type: 'HIDE_SIGNUP_PHONE'
  }
}

export const show_complete_registration = () => {
  return {
    type: 'SHOW_COMPLETE_REGISTRATION'
  }
}

export const hide_complete_registration = () => {
  return {
    type: 'HIDE_COMPLETE_REGISTRATION'
  }
}

export const show_phone_verification = () => {
  return {
    type: 'SHOW_PHONE_VERIFICATION'
  }
}

export const hide_phone_verification = () => {
  return {
    type: 'HIDE_PHONE_VERIFICATION'
  }
}

export const handle_oneclick_username = (username) => {
  return {
    type: 'ONE_CLICK_USERNAME',
    payload: username
  }
}

export const handle_oneclick_password = (password) => {
  return {
    type: 'ONE_CLICK_PASSWORD',
    payload: password
  }
}

export const show_oneclick_finish = () => {
  return {
    type: 'SHOW_ONECLICK_FINISH'
  }
}

export const hide_oneclick_finish = () => {
  return {
    type: 'HIDE_ONECLICK_FINISH'
  }
}

export const handle_signup_email = (email) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: email
  }
}

export const handle_signup_password = (password) => {
  return {
    type: 'PASSOWRD_CHANGE',
    payload: password
  }
}

export const handle_signup_username = (usernmame) => {
  return {
    type: 'USERNAME_CHANGE',
    payload: usernmame
  }
}

export const handle_signup_first_name = (first_name) => {
  return {
    type: 'FIRST_NAME_CHANGE',
    payload: first_name
  }
}

export const handle_signup_last_name = (last_name) => {
  return {
    type: 'LAST_NAME_CHANGE',
    payload: last_name
  }
}

export const handle_signup_dob = (dob) => {
  return {
    type: 'DOB_CHANGE',
    payload: dob
  }
}

export const handle_signup_address = (address) => {
  return {
    type: 'ADDRESS_CHANGE',
    payload: address
  }
}

export const handle_signup_city = (city) => {
  return {
    type: 'CITY_CHANGE',
    payload: city
  }
}

export const handle_signup_zipcode = (zipcode) => {
  return {
    type: 'ZIPCODE_CHANGE',
    payload: zipcode
  }
}

export const handle_signup_country = (country) => {
  return {
    type: 'COUNTRY_CHANGE',
    payload: country
  }
}

export const handle_signup_phone = (phone) => {
  return {
    type: 'PHONE_CHANGE',
    payload: phone
  }
}

export const handle_signup_over18 = (OVER_18) => {
  return {
    type: 'OVER_18',
    payload: OVER_18
  }
}

export const handle_signup_language = (language) => {
  return {
    type: 'LANGUAGE_CHANGE',
    payload: language
  }
}

export const show_signup_finish = () => {
  return {
    type: 'SHOW_SIGNUP_FINISH'
  }
}

export const hide_signup_finish = () => {
  return {
    type: 'HIDE_SIGNUP_FINISH'
  }
}

export const show_change_password = () => {
  return {
    type: 'SHOW_CHANGE_PASSWORD'
  }
}

export const hide_change_password = () => {
  return {
    type: 'HIDE_CHANGE_PASSWORD'
  }
}

export const show_user_profile = () => {
  return {
    type: 'SHOW_USER_PROFILE'
  }
}

export const hide_user_profile = () => {
  return {
    type: 'HIDE_USER_PROFILE'
  }
}

export const show_update_profile = () => {
  return {
    type: 'SHOW_UPDATE_PROFILE'
  }
}

export const hide_update_profile = () => {
  return {
    type: 'HIDE_UPDATE_PROFILE'
  }
}