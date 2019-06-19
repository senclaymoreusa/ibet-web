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